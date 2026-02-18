import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { paragraphText, genre, visualStyle } = await req.json();

    if (!paragraphText) {
      return new Response(JSON.stringify({ error: "paragraphText is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Step 1: Extract context from the passage
    const contextResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [
          {
            role: "system",
            content: `You are a literary scene analyst. Extract visual context from text passages. Respond with ONLY valid JSON, no markdown.`,
          },
          {
            role: "user",
            content: `Analyze this passage and extract visual context. Return JSON with: setting (location/time), tone (one of: calm, intense, devotional, playful, tragic, romantic, mysterious, heroic), characters (array of key figures/objects), culturalBackground (brief), suggestedScene (a concise visual description for illustration).

Passage: "${paragraphText.slice(0, 1500)}"`,
          },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "extract_visual_context",
              description: "Extract visual context from a literary passage",
              parameters: {
                type: "object",
                properties: {
                  setting: { type: "string", description: "Location and time period" },
                  tone: { type: "string", enum: ["calm", "intense", "devotional", "playful", "tragic", "romantic", "mysterious", "heroic"] },
                  characters: { type: "array", items: { type: "string" }, description: "Key characters or objects" },
                  culturalBackground: { type: "string" },
                  suggestedScene: { type: "string", description: "Concise visual scene description for illustration" },
                },
                required: ["setting", "tone", "characters", "culturalBackground", "suggestedScene"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "extract_visual_context" } },
      }),
    });

    if (!contextResponse.ok) {
      if (contextResponse.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (contextResponse.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits depleted." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errText = await contextResponse.text();
      console.error("Context extraction failed:", contextResponse.status, errText);
      throw new Error("Context extraction failed");
    }

    const contextData = await contextResponse.json();
    const toolCall = contextData.choices?.[0]?.message?.tool_calls?.[0];
    let context;
    try {
      context = JSON.parse(toolCall.function.arguments);
    } catch {
      console.error("Failed to parse context:", toolCall);
      throw new Error("Context parsing failed");
    }

    // Step 2: Build art-style-aware image prompt
    const styleMap: Record<string, string> = {
      auto: getAutoStyle(genre),
      watercolor: "soft watercolor painting style, gentle brush strokes, muted warm palette",
      classical: "classical oil painting style, rich colors, dramatic lighting, museum quality",
      minimal: "minimal line illustration, clean composition, subtle earth tones",
      cinematic: "cinematic photography style, dramatic depth of field, warm color grading",
    };

    const chosenStyle = styleMap[visualStyle || "auto"] || styleMap.auto;

    const imagePrompt = `${context.suggestedScene}. ${chosenStyle}. Warm color palette, culturally respectful, literary illustration, 4:3 aspect ratio. No text or watermarks.`;

    // Step 3: Generate image
    const imageResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        messages: [{ role: "user", content: imagePrompt }],
        modalities: ["image", "text"],
      }),
    });

    if (!imageResponse.ok) {
      if (imageResponse.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errText = await imageResponse.text();
      console.error("Image generation failed:", imageResponse.status, errText);
      throw new Error("Image generation failed");
    }

    const imageData = await imageResponse.json();
    const imageUrl = imageData.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!imageUrl) {
      throw new Error("No image returned from AI");
    }

    return new Response(
      JSON.stringify({
        context,
        imageUrl,
        prompt: imagePrompt,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    console.error("VisualVerse error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

function getAutoStyle(genre?: string): string {
  const map: Record<string, string> = {
    Folklore: "Indian folk art illustration, Madhubani-inspired patterns, vibrant earthy colors",
    Philosophy: "classical painting with divine golden light, epic spiritual atmosphere, temple art inspired",
    Poetry: "soft watercolor spiritual landscape, gentle luminous tones, impressionistic",
    Fiction: "19th-century oil painting aesthetic, rich detail, romantic period style",
    Classic: "classical European illustration, warm tones, detailed realism",
    Heritage: "traditional cultural art style, warm earthy palette, heritage aesthetic",
    Children: "gentle storybook illustration, soft colors, whimsical style",
  };
  return map[genre || ""] || "warm literary illustration, culturally sensitive, elegant composition";
}
