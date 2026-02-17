import type { Paragraph } from "@/data/libraryData";

// Simple emotional arc visualization based on paragraph content
const emotionKeywords: Record<string, string[]> = {
  "Calm": ["peace", "gentle", "quiet", "rest", "soft", "serene", "listen", "silence"],
  "Tension": ["fear", "narrow", "lost", "desert", "dead", "struggle", "brainless", "burn"],
  "Aspiration": ["freedom", "heaven", "perfection", "truth", "high", "awake", "strength", "free", "hope"],
  "Conflict": ["separations", "parted", "lament", "moan", "complaint", "killed", "broken"],
  "Resolution": ["love", "heart", "mingled", "together", "beauty", "light", "united", "awake"],
};

function analyzeEmotion(text: string): { emotion: string; score: number }[] {
  const lower = text.toLowerCase();
  return Object.entries(emotionKeywords).map(([emotion, keywords]) => ({
    emotion,
    score: keywords.reduce((sum, kw) => sum + (lower.includes(kw) ? 1 : 0), 0),
  })).filter((e) => e.score > 0).sort((a, b) => b.score - a.score);
}

const emotionColors: Record<string, string> = {
  "Calm": "bg-teal",
  "Tension": "bg-accent",
  "Aspiration": "bg-primary",
  "Conflict": "bg-destructive",
  "Resolution": "bg-primary",
};

const EmotionalTracker = ({ paragraphs }: { paragraphs: Paragraph[] }) => {
  const analysis = paragraphs.map((p, i) => ({
    index: i + 1,
    emotions: analyzeEmotion(p.text.en),
    id: p.id,
  }));

  const maxScore = Math.max(
    ...analysis.flatMap((a) => a.emotions.map((e) => e.score)),
    1
  );

  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="text-sm font-semibold text-foreground mb-1">🌡 Emotional Preservation Index</h3>
      <p className="text-xs text-muted-foreground mb-4">Emotional flow of this work</p>

      <div className="space-y-3">
        {analysis.map((a) => (
          <div key={a.id} className="space-y-1">
            <p className="text-xs text-muted-foreground">Paragraph {a.index}</p>
            <div className="flex gap-1 flex-wrap">
              {a.emotions.length > 0 ? (
                a.emotions.slice(0, 3).map((e) => (
                  <div key={e.emotion} className="flex items-center gap-1">
                    <div
                      className={`h-2 rounded-full ${emotionColors[e.emotion] || "bg-muted"}`}
                      style={{ width: `${(e.score / maxScore) * 60 + 20}px` }}
                    />
                    <span className="text-[10px] text-muted-foreground">{e.emotion}</span>
                  </div>
                ))
              ) : (
                <span className="text-[10px] text-muted-foreground italic">Neutral</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Simple line graph */}
      <div className="mt-4 pt-3 border-t border-border">
        <div className="flex items-end gap-1 h-16">
          {analysis.map((a) => {
            const dominant = a.emotions[0];
            const height = dominant ? (dominant.score / maxScore) * 100 : 20;
            return (
              <div
                key={a.id}
                className="flex-1 rounded-t bg-primary/60 transition-all hover:bg-primary"
                style={{ height: `${height}%` }}
                title={dominant ? `${dominant.emotion} (${dominant.score})` : "Neutral"}
              />
            );
          })}
        </div>
        <div className="flex gap-1 mt-1">
          {analysis.map((a) => (
            <span key={a.id} className="flex-1 text-center text-[9px] text-muted-foreground">
              {a.index}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmotionalTracker;
