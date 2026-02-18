import { useState, useEffect, useCallback, useRef } from "react";
import { ImageIcon, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Skeleton } from "@/components/ui/skeleton";
import type { Genre } from "@/data/libraryData";

type VisualStyle = "auto" | "watercolor" | "classical" | "minimal" | "cinematic";

interface VisualContext {
  setting: string;
  tone: string;
  characters: string[];
  culturalBackground: string;
  suggestedScene: string;
}

interface CachedResult {
  imageUrl: string;
  context: VisualContext;
}

interface VisualVerseProps {
  paragraphId: string;
  paragraphText: string;
  genre: Genre;
  enabled: boolean;
}

const styleLabels: Record<VisualStyle, string> = {
  auto: "Auto (Recommended)",
  watercolor: "Watercolor",
  classical: "Classical Painting",
  minimal: "Minimal Illustration",
  cinematic: "Cinematic Realism",
};

// Module-level cache to survive re-renders
const imageCache = new Map<string, CachedResult>();

const VisualVerse = ({ paragraphId, paragraphText, genre, enabled }: VisualVerseProps) => {
  const [result, setResult] = useState<CachedResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [visualStyle, setVisualStyle] = useState<VisualStyle>("auto");
  const abortRef = useRef<AbortController | null>(null);

  const cacheKey = `${paragraphId}-${visualStyle}`;

  const generate = useCallback(async () => {
    if (imageCache.has(cacheKey)) {
      setResult(imageCache.get(cacheKey)!);
      return;
    }

    setLoading(true);
    setError(false);
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/visualverse`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            paragraphText,
            genre,
            visualStyle,
          }),
          signal: controller.signal,
        }
      );

      if (!response.ok) {
        throw new Error("Generation failed");
      }

      const data = await response.json();
      const cached: CachedResult = {
        imageUrl: data.imageUrl,
        context: data.context,
      };
      imageCache.set(cacheKey, cached);
      setResult(cached);
    } catch (e) {
      if ((e as Error).name !== "AbortError") {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  }, [cacheKey, paragraphText, genre, visualStyle]);

  useEffect(() => {
    if (!enabled) return;

    // Check cache first
    if (imageCache.has(cacheKey)) {
      setResult(imageCache.get(cacheKey)!);
      return;
    }

    // Auto-generate when enabled and visible
    generate();

    return () => {
      abortRef.current?.abort();
    };
  }, [enabled, cacheKey, generate]);

  if (!enabled) return null;

  return (
    <div className="mt-4 rounded-xl border border-border bg-secondary/30 overflow-hidden animate-fade-in">
      {/* Header */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-muted-foreground hover:bg-secondary/50 transition-colors"
      >
        <span className="flex items-center gap-2">
          <ImageIcon size={14} className="text-primary" />
          <span className="font-medium">VisualVerse</span>
          {result?.context?.tone && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary capitalize">
              {result.context.tone}
            </span>
          )}
        </span>
        {collapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
      </button>

      {!collapsed && (
        <div className="px-4 pb-4 space-y-3">
          {/* Style selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Style:</span>
            <Select
              value={visualStyle}
              onValueChange={(v) => setVisualStyle(v as VisualStyle)}
            >
              <SelectTrigger className="h-7 text-xs w-44">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(Object.entries(styleLabels) as [VisualStyle, string][]).map(
                  ([value, label]) => (
                    <SelectItem key={value} value={value} className="text-xs">
                      {label}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>

          {/* Image area */}
          {loading && (
            <div className="space-y-2">
              <Skeleton className="w-full aspect-[4/3] rounded-lg" />
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Loader2 size={12} className="animate-spin" />
                Generating illustration…
              </div>
            </div>
          )}

          {error && !loading && (
            <div className="text-center py-6">
              <p className="text-sm text-muted-foreground mb-2">
                Illustration unavailable
              </p>
              <button
                onClick={generate}
                className="text-xs text-primary hover:underline"
              >
                Try again
              </button>
            </div>
          )}

          {result && !loading && (
            <div className="space-y-2 animate-fade-in">
              <div className="rounded-lg overflow-hidden border border-border">
                <img
                  src={result.imageUrl}
                  alt={`AI-generated illustration: ${result.context.suggestedScene}`}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Context badges */}
              <div className="flex flex-wrap gap-1.5">
                {result.context.characters?.slice(0, 3).map((c) => (
                  <span
                    key={c}
                    className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {c}
                  </span>
                ))}
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  {result.context.setting}
                </span>
              </div>

              {/* Caption & disclaimer */}
              <p className="text-[11px] text-muted-foreground italic text-center">
                AI-generated visual interpretation of this passage.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/** Toggle control for the reading header */
export const VisualVerseToggle = ({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (v: boolean) => void;
}) => (
  <div className="flex items-center gap-2">
    <Switch checked={enabled} onCheckedChange={onChange} />
    <span className="text-sm text-muted-foreground flex items-center gap-1">
      <ImageIcon size={14} />
      <span className="hidden sm:inline">VisualVerse</span>
    </span>
  </div>
);

export default VisualVerse;
