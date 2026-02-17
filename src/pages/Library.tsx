import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Book, Globe, Volume2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  libraryWorks,
  languageLabels,
  type Language,
  type Genre,
  type BookWork,
} from "@/data/libraryData";
import ReaderModeToggle, { type ReaderMode } from "@/components/ReaderModeToggle";
import { useToast } from "@/hooks/use-toast";

const genres: Genre[] = ["Poetry", "Fiction", "Philosophy", "Folklore", "Classic", "Heritage"];

const Library = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [globalLang, setGlobalLang] = useState<Language>("en");
  const [genreFilter, setGenreFilter] = useState<string>("all");
  const [selectedWork, setSelectedWork] = useState<BookWork | null>(null);
  const [paragraphLangs, setParagraphLangs] = useState<Record<string, Language>>({});
  const [readerMode, setReaderMode] = useState<ReaderMode>("reader");
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [translatingId, setTranslatingId] = useState<string | null>(null);
  const [aiTranslations, setAiTranslations] = useState<Record<string, string>>({});
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filtered = libraryWorks.filter(
    (w) => genreFilter === "all" || w.genre === genreFilter
  );

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
              targetLanguage: languageLabels[targetLang],
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

  // Book detail view
  if (selectedWork) {
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="container mx-auto flex items-center justify-between h-16 px-4">
            <Button variant="ghost" onClick={() => setSelectedWork(null)} className="gap-2">
              <ArrowLeft size={18} /> Back to Library
            </Button>
            <div className="flex items-center gap-3">
              <ReaderModeToggle mode={readerMode} onChange={setReaderMode} />
              <Select value={globalLang} onValueChange={(v) => setGlobalLang(v as Language)}>
                <SelectTrigger className="w-32">
                  <Globe size={14} className="mr-1" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(Object.keys(languageLabels) as Language[]).map((l) => (
                    <SelectItem key={l} value={l}>{languageLabels[l]}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </header>

        <main className="container mx-auto max-w-3xl px-4 py-10">
          <div className="text-center mb-10">
            <span className="text-5xl mb-4 block">{selectedWork.coverEmoji}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {selectedWork.title[globalLang]}
            </h1>
            <p className="text-muted-foreground">{selectedWork.author}</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
              {selectedWork.description[globalLang]}
            </p>
          </div>

          <div className="space-y-8">
            {selectedWork.paragraphs.map((p) => {
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

                  {/* Per-paragraph controls */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {(Object.keys(languageLabels) as Language[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => switchParagraphLang(p.id, l)}
                        className={`text-xs px-3 py-1 rounded-full transition-colors ${
                          pLang === l
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {languageLabels[l]}
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
      </div>
    );
  }

  // Library grid view
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft size={18} /> Home
          </Button>
          <h1 className="font-serif text-xl font-bold text-primary">
            Trans<span className="text-coral">Lit</span> Library
          </h1>
          <Select value={globalLang} onValueChange={(v) => setGlobalLang(v as Language)}>
            <SelectTrigger className="w-32">
              <Globe size={14} className="mr-1" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(Object.keys(languageLabels) as Language[]).map((l) => (
                <SelectItem key={l} value={l}>{languageLabels[l]}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            A World of Stories, in Every Language
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore literature across cultures. Switch languages instantly — paragraph by paragraph.
          </p>
        </div>

        {/* Genre filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setGenreFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              genreFilter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            All
          </button>
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setGenreFilter(g)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                genreFilter === g
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Books grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((work) => (
            <button
              key={work.id}
              onClick={() => navigate(`/book/${work.id}`)}
              className="text-left bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <span className="text-4xl block mb-3">{work.coverEmoji}</span>
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                {work.title[globalLang]}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{work.author}</p>
              <p className="text-sm text-foreground/70 line-clamp-2 mb-3">
                {work.description[globalLang]}
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary" className="text-xs">{work.genre}</Badge>
                <Badge variant="outline" className="text-xs">{work.region}</Badge>
                {work.tags?.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
                {work.isFirstTranslation && (
                  <Badge className="bg-accent text-accent-foreground text-xs">🆕 First Translation</Badge>
                )}
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Library;
