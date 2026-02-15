import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { poetryShowcase, idiomShowcase } from "@/data/libraryData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Poetry = () => {
  const navigate = useNavigate();
  const [expandedIdiom, setExpandedIdiom] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft size={18} /> Home
          </Button>
          <h1 className="font-serif text-xl font-bold text-primary">
            Poetry & Idioms
          </h1>
          <div />
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Translation as Understanding
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how TransLit preserves emotion, rhythm, and cultural meaning — 
            where machine translation loses the soul of the text.
          </p>
        </div>

        <Tabs defaultValue="poetry" className="w-full">
          <TabsList className="w-full max-w-xs mx-auto mb-8">
            <TabsTrigger value="poetry" className="flex-1">Poetry</TabsTrigger>
            <TabsTrigger value="idioms" className="flex-1">Idioms</TabsTrigger>
          </TabsList>

          {/* Poetry Tab */}
          <TabsContent value="poetry" className="space-y-10">
            {poetryShowcase.map((poem) => (
              <article key={poem.id} className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h3 className="text-xl font-bold text-foreground">{poem.title}</h3>
                  <p className="text-sm text-muted-foreground">{poem.author}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {poem.emotionTags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs capitalize">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Three-panel comparison */}
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                  {/* Original */}
                  <div className="p-5">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      Original ({poem.original.language})
                    </p>
                    <p className="text-sm leading-relaxed whitespace-pre-line font-serif-display text-foreground">
                      {poem.original.text}
                    </p>
                  </div>

                  {/* Literal */}
                  <div className="p-5 bg-muted/30">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-1">
                      Literal Translation
                      <span className="text-[10px] text-destructive font-normal">(meaning lost)</span>
                    </p>
                    <p className="text-sm leading-relaxed whitespace-pre-line text-muted-foreground italic">
                      {poem.literal}
                    </p>
                  </div>

                  {/* TransLit */}
                  <div className="p-5 bg-primary/5 border-l-4 border-primary">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3 flex items-center gap-1">
                      <Sparkles size={12} /> TransLit Translation
                    </p>
                    <p className="text-sm leading-relaxed whitespace-pre-line text-foreground font-medium">
                      {poem.translit}
                    </p>
                  </div>
                </div>

                {/* Rhythm note */}
                <div className="px-6 py-3 bg-secondary/30 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    🎵 <span className="font-medium">Rhythm:</span> {poem.rhythmNote}
                  </p>
                </div>
              </article>
            ))}
          </TabsContent>

          {/* Idioms Tab */}
          <TabsContent value="idioms" className="space-y-6">
            {idiomShowcase.map((idiom) => (
              <article key={idiom.id} className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        Original ({idiom.originalLang})
                      </p>
                      <p className="text-base font-serif-display text-foreground">{idiom.original}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        Literal
                      </p>
                      <p className="text-sm text-muted-foreground italic">{idiom.literal}</p>
                    </div>
                    <div className="bg-primary/5 p-3 rounded-lg border border-primary/20">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                        TransLit
                      </p>
                      <p className="text-sm text-foreground font-medium">{idiom.translit}</p>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-primary"
                    onClick={() =>
                      setExpandedIdiom(expandedIdiom === idiom.id ? null : idiom.id)
                    }
                  >
                    {expandedIdiom === idiom.id ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                    Why this translation?
                  </Button>

                  {expandedIdiom === idiom.id && (
                    <div className="mt-4 space-y-3 animate-float-up">
                      <div className="flex gap-3">
                        <span className="text-lg">🌍</span>
                        <div>
                          <p className="text-xs font-semibold text-foreground">Cultural Substitution</p>
                          <p className="text-sm text-muted-foreground">{idiom.explanation.cultural}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-lg">💭</span>
                        <div>
                          <p className="text-xs font-semibold text-foreground">Emotional Intent</p>
                          <p className="text-sm text-muted-foreground">{idiom.explanation.emotional}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-lg">🗣️</span>
                        <div>
                          <p className="text-xs font-semibold text-foreground">Local Usage</p>
                          <p className="text-sm text-muted-foreground">{idiom.explanation.localUsage}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Poetry;
