import { useState, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Globe, Volume2, Loader2, Sparkles, MessageSquare, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { libraryWorks, type Language } from "@/data/libraryData";
import { contentLanguageLabels } from "@/data/languageConfig";
import ReaderModeToggle, { type ReaderMode } from "@/components/ReaderModeToggle";
import { useToast } from "@/hooks/use-toast";
import EssencePanel from "@/components/book/EssencePanel";
import EmotionalTracker from "@/components/book/EmotionalTracker";
import VoiceSignature from "@/components/book/VoiceSignature";
import VisualVerse, { VisualVerseToggle } from "@/components/book/VisualVerse";

const BookReader = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const work = libraryWorks.find((w) => w.id === id);

  const [globalLang, setGlobalLang] = useState<Language>("en");
  const [paragraphLangs, setParagraphLangs] = useState<Record<string, Language>>({});
  const [readerMode, setReaderMode] = useState<ReaderMode>("reader");
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [translatingId, setTranslatingId] = useState<string | null>(null);
  const [aiTranslations, setAiTranslations] = useState<Record<string, string>>({});
  const [showCompanion, setShowCompanion] = useState(false);
  const [companionQuery, setCompanionQuery] = useState("");
  const [companionMessages, setCompanionMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [companionLoading, setCompanionLoading] = useState(false);
  const [essenceMode, setEssenceMode] = useState(false);
  const [visualVerseEnabled, setVisualVerseEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const getParagraphLang = (pId: string) => paragraphLangs[pId] || globalLang;

  const switchParagraphLang = (pId: string, lang: Language) => {
    setParagraphLangs((prev) => ({ ...prev, [pId]: lang }));
  };

  const handleNarrate = useCallback(
    async (text: string, pId: string) => {
      if (playingId === pId) {
        audioRef.current?.pause();
        setPlayingId(null);
        return;
      }
      setPlayingId(pId);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/narrate`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
            },
            body: JSON.stringify({ text, tone: "calm" }),
          }
        );
        if (!response.ok) throw new Error("Narration failed");
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        if (audioRef.current) audioRef.current.pause();
        const audio = new Audio(url);
        audioRef.current = audio;
        audio.onended = () => setPlayingId(null);
        await audio.play();
      } catch {
        toast({ title: "Narration unavailable", description: "Please try again later.", variant: "destructive" });
        setPlayingId(null);
      }
    },
    [playingId, toast]
  );

  const handleAiTranslate = useCallback(
    async (text: string, pId: string, targetLang: Language) => {
      const key = `${pId}-${targetLang}-${readerMode}`;
      if (aiTranslations[key]) return;
      setTranslatingId(pId);
      try {
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
              text,
              targetLanguage: contentLanguageLabels[targetLang],
              mode: readerMode,
            }),
          }
        );
        if (!response.ok) throw new Error("Translation failed");
        const data = await response.json();
        setAiTranslations((prev) => ({ ...prev, [key]: data.translation }));
      } catch {
        toast({ title: "Translation unavailable", description: "Please try again later.", variant: "destructive" });
      } finally {
        setTranslatingId(null);
      }
    },
    [readerMode, aiTranslations, toast]
  );

  const handleCompanionAsk = useCallback(async () => {
    if (!companionQuery.trim() || !work) return;
    const userMsg = companionQuery.trim();
    setCompanionQuery("");
    setCompanionMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setCompanionLoading(true);
    try {
      const context = work.paragraphs.map((p) => p.text.en).join("\n\n");
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/reading-companion`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            question: userMsg,
            bookTitle: work.title.en,
            author: work.author,
            context,
          }),
        }
      );
      if (!response.ok) throw new Error("Companion unavailable");
      const data = await response.json();
      setCompanionMessages((prev) => [...prev, { role: "assistant", content: data.answer }]);
    } catch {
      setCompanionMessages((prev) => [...prev, { role: "assistant", content: "I'm having trouble connecting. Please try again." }]);
    } finally {
      setCompanionLoading(false);
    }
  }, [companionQuery, work]);

  if (!work) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-muted-foreground mb-4">Book not found</p>
          <Button onClick={() => navigate("/library")}>Back to Library</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Button variant="ghost" onClick={() => navigate("/library")} className="gap-2">
            <ArrowLeft size={18} /> Library
          </Button>
          <div className="flex items-center gap-3">
            <VisualVerseToggle enabled={visualVerseEnabled} onChange={setVisualVerseEnabled} />
            <ReaderModeToggle mode={readerMode} onChange={setReaderMode} />
            <Button
              variant={essenceMode ? "default" : "outline"}
              size="sm"
              className="gap-1"
              onClick={() => setEssenceMode(!essenceMode)}
            >
              <Sparkles size={14} />
              <span className="hidden sm:inline">Essence</span>
            </Button>
            <Select value={globalLang} onValueChange={(v) => setGlobalLang(v as Language)}>
              <SelectTrigger className="w-32">
                <Globe size={14} className="mr-1" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(Object.keys(contentLanguageLabels) as Language[]).map((l) => (
                  <SelectItem key={l} value={l}>{contentLanguageLabels[l]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-10 flex gap-8">
        {/* Main reading pane */}
        <main className="flex-1 max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-5xl mb-4 block">{work.coverEmoji}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {work.title[globalLang]}
            </h1>
            <p className="text-muted-foreground">{work.author}</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
              {work.description[globalLang]}
            </p>
            <div className="flex justify-center gap-2 mt-3">
              {work.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
              {work.isFirstTranslation && (
                <Badge className="bg-accent text-accent-foreground text-xs">🆕 First Digital Translation via TransLit</Badge>
              )}
            </div>
            {work.isFirstTranslation && (
              <p className="text-xs text-muted-foreground mt-2 italic">
                Community Validation Coming Soon
              </p>
            )}
          </div>

          <div className="space-y-8">
            {work.paragraphs.map((p) => {
              const pLang = getParagraphLang(p.id);
              const aiKey = `${p.id}-${pLang}-${readerMode}`;
              return (
                <article
                  key={p.id}
                  className="bg-card rounded-xl p-6 border border-border shadow-sm transition-all hover:shadow-md"
                >
                  <p className="text-lg leading-relaxed whitespace-pre-line text-foreground font-serif-display">
                    {aiTranslations[aiKey] || p.text[pLang]}
                  </p>

                  {/* Essence Mode */}
                  {essenceMode && p.essenceData && (
                    <EssencePanel data={p.essenceData} />
                  )}

                  {/* Cultural note in learner/literary mode */}
                  {readerMode !== "reader" && p.culturalNote && (
                    <div className="mt-4 p-3 bg-secondary/50 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground italic">
                        📖 {p.culturalNote[pLang]}
                      </p>
                    </div>
                  )}

                  {readerMode === "literary" && p.idiomNote && (
                    <div className="mt-2 p-3 bg-accent/10 rounded-lg">
                      <p className="text-sm text-foreground/70">
                        🪶 <span className="font-medium">Idiom note:</span> {p.idiomNote}
                      </p>
                    </div>
                  )}

                  {/* VisualVerse illustration */}
                  <VisualVerse
                    paragraphId={p.id}
                    paragraphText={p.text.en}
                    genre={work.genre}
                    enabled={visualVerseEnabled}
                  />

                  {/* Per-paragraph controls */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {(Object.keys(contentLanguageLabels) as Language[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => switchParagraphLang(p.id, l)}
                        className={`text-xs px-3 py-1 rounded-full transition-colors ${
                          pLang === l
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {contentLanguageLabels[l]}
                      </button>
                    ))}

                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-auto gap-1"
                      onClick={() => handleNarrate(aiTranslations[aiKey] || p.text[pLang], p.id)}
                    >
                      <Volume2 size={14} className={playingId === p.id ? "text-accent animate-pulse" : ""} />
                      {playingId === p.id ? "Pause" : "Listen"}
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1"
                      disabled={translatingId === p.id}
                      onClick={() => handleAiTranslate(p.text.en, p.id, pLang)}
                    >
                      {translatingId === p.id ? <Loader2 size={14} className="animate-spin" /> : null}
                      AI Translate
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </main>

        {/* Right sidebar — analytics panels */}
        <aside className="hidden lg:block w-80 space-y-6 sticky top-20 self-start">
          <EmotionalTracker paragraphs={work.paragraphs} />
          <VoiceSignature work={work} />
        </aside>
      </div>

      {/* AI Reading Companion */}
      <div className="fixed bottom-6 right-6 z-50">
        {showCompanion ? (
          <div className="bg-card border border-border rounded-xl shadow-lg w-80 max-h-96 flex flex-col">
            <div className="flex items-center justify-between p-3 border-b border-border">
              <span className="text-sm font-semibold text-foreground">📚 Reading Companion</span>
              <Button variant="ghost" size="sm" onClick={() => setShowCompanion(false)}><X size={16} /></Button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[200px]">
              {companionMessages.length === 0 && (
                <p className="text-xs text-muted-foreground text-center mt-8">
                  Ask me about this text — meanings, themes, cultural context, or idiom explanations.
                </p>
              )}
              {companionMessages.map((msg, i) => (
                <div key={i} className={`text-sm ${msg.role === "user" ? "text-right" : "text-left"}`}>
                  <span className={`inline-block px-3 py-2 rounded-lg max-w-[90%] ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}>
                    {msg.content}
                  </span>
                </div>
              ))}
              {companionLoading && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 size={14} className="animate-spin" /> Thinking...
                </div>
              )}
            </div>
            <div className="p-3 border-t border-border flex gap-2">
              <Textarea
                value={companionQuery}
                onChange={(e) => setCompanionQuery(e.target.value)}
                placeholder="Ask about this text..."
                className="min-h-[36px] h-9 text-sm resize-none"
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleCompanionAsk())}
              />
              <Button size="sm" onClick={handleCompanionAsk} disabled={companionLoading}>
                <Send size={14} />
              </Button>
            </div>
          </div>
        ) : (
          <Button
            onClick={() => setShowCompanion(true)}
            className="rounded-full h-12 w-12 shadow-lg"
          >
            <MessageSquare size={20} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookReader;
