import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EssenceData {
  originalLine: string;
  literalVersion: string;
  translitVersion: string;
  emotionalIntent: string;
  adaptationType: "cultural" | "direct" | "metaphor";
}

const adaptationColors: Record<string, { bg: string; label: string; emoji: string }> = {
  cultural: { bg: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300", label: "Cultural Adaptation", emoji: "🟢" },
  direct: { bg: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300", label: "Direct Translation", emoji: "🔵" },
  metaphor: { bg: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300", label: "Preserved Metaphor", emoji: "🟣" },
};

const EssencePanel = ({ data }: { data: EssenceData }) => {
  const adaptation = adaptationColors[data.adaptationType];

  return (
    <div className="mt-4 border border-border rounded-lg overflow-hidden animate-float-up">
      <div className="bg-secondary/30 px-4 py-2 flex items-center justify-between">
        <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
          ✨ Essence Mode
        </span>
        <Tooltip>
          <TooltipTrigger>
            <Badge className={`text-xs ${adaptation.bg}`}>
              {adaptation.emoji} {adaptation.label}
            </Badge>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p className="text-sm">
              {data.adaptationType === "cultural" && "This passage was adapted to preserve cultural meaning rather than literal words."}
              {data.adaptationType === "direct" && "This passage was translated as directly as possible while maintaining readability."}
              {data.adaptationType === "metaphor" && "The original metaphor was preserved in translation to maintain its poetic power."}
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground font-medium mb-1">Original</p>
          <p className="text-sm font-serif-display text-foreground/90 italic">{data.originalLine}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-medium mb-1">Literal</p>
          <p className="text-sm text-foreground/70">{data.literalVersion}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-medium mb-1">TransLit</p>
          <p className="text-sm text-foreground font-medium">{data.translitVersion}</p>
        </div>
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground font-medium mb-1">💡 Emotional Intent</p>
          <p className="text-sm text-foreground/80 leading-relaxed">{data.emotionalIntent}</p>
        </div>
      </div>
    </div>
  );
};

export default EssencePanel;
