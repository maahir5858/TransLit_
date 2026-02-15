import { useNavigate } from "react-router-dom";
import { BookOpen, Feather, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const teasers = [
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Multilingual Library",
    description:
      "Explore poetry, fiction, and folklore across languages. Switch languages paragraph by paragraph — your scroll position never moves.",
    cta: "Browse the Library",
    href: "/library",
  },
  {
    icon: <Feather className="w-8 h-8 text-primary" />,
    title: "Poetry & Idioms",
    description:
      "See the difference between literal translation and narrative-faithful translation. Feel the rhythm, not just the words.",
    cta: "See the Proof",
    href: "/poetry",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    title: "TransLit Studio",
    description:
      "Select a passage, choose a tone, and experience emotionally aligned narration in native voices — with culturally matched visuals.",
    cta: "Coming Soon",
    href: "#",
    disabled: true,
  },
];

const HomepageTeasers = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-secondary/30" id="explore">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Explore the Living Library
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            TransLit is more than a translator. It's a space where literature breathes in every language.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teasers.map((t) => (
            <div
              key={t.title}
              className="bg-card rounded-xl border border-border p-8 flex flex-col items-start gap-4 hover:shadow-lg transition-shadow"
            >
              {t.icon}
              <h3 className="text-xl font-bold text-foreground">{t.title}</h3>
              <p className="text-sm text-muted-foreground flex-1">{t.description}</p>
              <Button
                variant={t.disabled ? "secondary" : "default"}
                disabled={t.disabled}
                onClick={() => !t.disabled && navigate(t.href)}
                className="mt-auto"
              >
                {t.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageTeasers;
