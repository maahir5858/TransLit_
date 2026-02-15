import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Voice mapping by language/tone
const voiceMap: Record<string, string> = {
  default: "JBFqnCBsd6RMkjVDRZzb", // George - warm, narrative
  dramatic: "onwK4e9ZLuTAKqWW03F9", // Daniel
  calm: "FGY2WhTYpPnrIDTdsKH5", // Laura
  dreamy: "pFZP5JQG7iQjIQuC4Bku", // Lily
  reflective: "XrExE9yKIg1WjnnlVkGX", // Matilda
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { text, tone } = await req.json();
    const ELEVENLABS_API_KEY = Deno.env.get("ELEVENLABS_API_KEY");
    if (!ELEVENLABS_API_KEY) throw new Error("ELEVENLABS_API_KEY is not configured");

    const voiceId = voiceMap[tone || "default"] || voiceMap.default;

    // Adjust voice settings based on tone
    const stabilityMap: Record<string, number> = {
      dramatic: 0.3,
      calm: 0.7,
      dreamy: 0.4,
      reflective: 0.5,
      default: 0.5,
    };

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
      {
        method: "POST",
        headers: {
          "xi-api-key": ELEVENLABS_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: stabilityMap[tone || "default"] || 0.5,
            similarity_boost: 0.75,
            style: tone === "dramatic" ? 0.7 : 0.4,
            use_speaker_boost: true,
            speed: tone === "calm" ? 0.9 : 1.0,
          },
        }),
      }
    );

    if (!response.ok) {
      const t = await response.text();
      console.error("ElevenLabs error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "Narration generation failed" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const audioBuffer = await response.arrayBuffer();

    return new Response(audioBuffer, {
      headers: {
        ...corsHeaders,
        "Content-Type": "audio/mpeg",
      },
    });
  } catch (e) {
    console.error("narrate error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
