import type { BookWork } from "@/data/libraryData";

// Simple voice analysis based on text characteristics
function analyzeVoice(work: BookWork) {
  const allText = work.paragraphs.map((p) => p.text.en).join(" ");
  const sentences = allText.split(/[.!?]+/).filter(Boolean);
  const words = allText.split(/\s+/);
  const dialogueMatches = allText.match(/[""][^""]*[""]/g) || [];
  const metaphorWords = ["like", "as if", "resembled", "mirror", "shadow", "flame", "storm", "river", "ocean", "sky", "wind", "fire", "garden", "dream"];
  const metaphorCount = metaphorWords.reduce((sum, w) => sum + (allText.toLowerCase().includes(w) ? 1 : 0), 0);

  const avgSentenceLength = words.length / Math.max(sentences.length, 1);
  const formality = avgSentenceLength > 20 ? 85 : avgSentenceLength > 15 ? 70 : avgSentenceLength > 10 ? 55 : 40;
  const complexity = Math.min(95, Math.round(avgSentenceLength * 3.5));
  const dialogueRatio = Math.round((dialogueMatches.length / Math.max(sentences.length, 1)) * 100);
  const metaphorDensity = Math.min(95, metaphorCount * 12);

  return { formality, complexity, dialogueRatio, metaphorDensity };
}

const VoiceSignature = ({ work }: { work: BookWork }) => {
  const voice = analyzeVoice(work);

  const metrics = [
    { label: "Formality", value: voice.formality, color: "bg-primary" },
    { label: "Sentence Complexity", value: voice.complexity, color: "bg-teal" },
    { label: "Dialogue Ratio", value: voice.dialogueRatio, color: "bg-accent" },
    { label: "Metaphor Density", value: voice.metaphorDensity, color: "bg-primary" },
  ];

  const integrityScore = Math.round(
    (voice.formality + voice.complexity + (100 - Math.abs(voice.dialogueRatio - 30)) + voice.metaphorDensity) / 4
  );

  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="text-sm font-semibold text-foreground mb-1">🎭 Voice Integrity Score</h3>
      <p className="text-xs text-muted-foreground mb-3">Author voice preservation analysis</p>

      <div className="text-center mb-4">
        <span className="text-3xl font-bold text-primary">{integrityScore}%</span>
        <p className="text-xs text-muted-foreground">Overall Integrity</p>
      </div>

      <div className="space-y-3">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="flex justify-between mb-1">
              <span className="text-xs text-foreground/70">{m.label}</span>
              <span className="text-xs font-medium text-foreground">{m.value}%</span>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${m.color} transition-all`}
                style={{ width: `${m.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoiceSignature;
