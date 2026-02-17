import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Globe, Loader2, Sparkles, Upload, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { languages, type Language, TOTAL_SUPPORTED_LANGUAGES } from "@/data/languageConfig";
import { useToast } from "@/hooks/use-toast";

type TranslationMode = "literal" | "translit" | "essence";
type Tone = "academic" | "casual" | "poetic" | "child-friendly";

const toneLabels: Record<Tone, string> = {
  academic: "Academic",
  casual: "Casual",
  poetic: "Poetic",
  "child-friendly": "Child-friendly",
};

const modeLabels: Record<TranslationMode, { label: string; description: string }> = {
  literal: { label: "Literal", description: "Word-by-word accuracy" },
  translit: { label: "TransLit", description: "Context-aware cultural translation" },
  essence: { label: "Essence", description: "Deep meaning + emotional intent" },
};

const popularLanguages: Language[] = ["en", "hi", "bn", "ta", "te", "es", "fr", "ar", "zh", "ja", "de", "pa", "gu", "mr", "ur", "sa"];

const TranslitApp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [inputText, setInputText] = useState("");
  const [sourceLang, setSourceLang] = useState<Language>("en");
  const [targetLang, setTargetLang] = useState<Language>("hi");
  const [tone, setTone] = useState<Tone>("casual");
  const [mode, setMode] = useState<TranslationMode>("translit");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = useCallback(async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setResult("");
    try {
      const modeMap: Record<TranslationMode, string> = {
        literal: "reader",
        translit: "learner",
        essence: "literary",
      };
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/translate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            text: inputText,
            targetLanguage: languages[targetLang].label,
            tone,
            mode: modeMap[mode],
          }),
        }
      );
      if (!response.ok) {
        if (response.status === 429) {
          toast({ title: "Rate limit reached", description: "Please try again shortly.", variant: "destructive" });
          return;
        }
        if (response.status === 402) {
          toast({ title: "Usage limit reached", description: "Please add credits.", variant: "destructive" });
          return;
        }
        throw new Error("Translation failed");
      }
      const data = await response.json();
      setResult(data.translation);
    } catch {
      toast({ title: "Translation failed", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }, [inputText, targetLang, tone, mode, toast]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft size={18} /> Home
          </Button>
          <h1 className="font-serif text-xl font-bold text-primary">
            Experience Trans<span className="text-coral">Lit</span>
          </h1>
          <Badge variant="secondary" className="text-xs">
            {TOTAL_SUPPORTED_LANGUAGES}+ Languages
          </Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Experience TransLit
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Paste any text and see it transformed — not just translated — with cultural awareness, tonal preservation, and emotional fidelity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Select value={sourceLang} onValueChange={(v) => setSourceLang(v as Language)}>
                <SelectTrigger className="flex-1">
                  <Globe size={14} className="mr-1" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {popularLanguages.map((l) => (
                    <SelectItem key={l} value={l}>{languages[l].nativeLabel} ({languages[l].label})</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="ghost" size="sm" onClick={() => { const tmp = sourceLang; setSourceLang(targetLang); setTargetLang(tmp); }}>
                <Languages size={18} />
              </Button>
              <Select value={targetLang} onValueChange={(v) => setTargetLang(v as Language)}>
                <SelectTrigger className="flex-1">
                  <Globe size={14} className="mr-1" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {popularLanguages.map((l) => (
                    <SelectItem key={l} value={l}>{languages[l].nativeLabel} ({languages[l].label})</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your text here — poetry, prose, dialogue, or any passage you want to experience in another language..."
              className="min-h-[200px] font-serif-display text-base leading-relaxed"
              maxLength={5000}
            />
            <p className="text-xs text-muted-foreground text-right">{inputText.length}/5000</p>

            {/* Controls */}
            <div className="flex flex-wrap gap-3">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-medium">Tone</p>
                <div className="flex gap-1">
                  {(Object.keys(toneLabels) as Tone[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTone(t)}
                      className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                        tone === t
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {toneLabels[t]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-medium">Mode</p>
              <div className="flex gap-1">
                {(Object.keys(modeLabels) as TranslationMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`text-xs px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
                      mode === m
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {m === "essence" && <Sparkles size={12} />}
                    {modeLabels[m].label}
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleTranslate}
              disabled={loading || !inputText.trim()}
              className="w-full gap-2"
              size="lg"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
              {loading ? "Translating..." : "Translate with TransLit"}
            </Button>
          </div>

          {/* Output */}
          <div className="bg-card border border-border rounded-xl p-6 min-h-[300px]">
            {result ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {languages[targetLang].nativeLabel}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {modeLabels[mode].label} · {toneLabels[tone]}
                  </Badge>
                </div>
                <p className="text-lg leading-relaxed whitespace-pre-line font-serif-display text-foreground">
                  {result}
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <div className="text-center">
                  <Languages size={40} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Your translation will appear here</p>
                  <p className="text-xs mt-1">Choose a mode and tone, then translate</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TranslitApp;
