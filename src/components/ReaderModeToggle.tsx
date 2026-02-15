import { BookOpen, GraduationCap, Drama } from "lucide-react";

export type ReaderMode = "reader" | "learner" | "literary";

interface Props {
  mode: ReaderMode;
  onChange: (mode: ReaderMode) => void;
}

const modes: { value: ReaderMode; label: string; icon: React.ReactNode; description: string }[] = [
  { value: "reader", label: "Reader", icon: <BookOpen size={14} />, description: "Clean, immersive reading" },
  { value: "learner", label: "Learner", icon: <GraduationCap size={14} />, description: "With explanations & notes" },
  { value: "literary", label: "Literary", icon: <Drama size={14} />, description: "Tone, rhythm & voice emphasis" },
];

const ReaderModeToggle = ({ mode, onChange }: Props) => (
  <div className="flex items-center bg-secondary rounded-lg p-0.5 gap-0.5">
    {modes.map((m) => (
      <button
        key={m.value}
        onClick={() => onChange(m.value)}
        title={m.description}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
          mode === m.value
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {m.icon}
        <span className="hidden sm:inline">{m.label}</span>
      </button>
    ))}
  </div>
);

export default ReaderModeToggle;
