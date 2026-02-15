import { BookX, Globe, Heart, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: BookX,
    title: "Lost in translation",
    description: "Machine translators strip away voice, rhythm, and soul. Readers get words — but lose the story.",
  },
  {
    icon: Globe,
    title: "Cultural erasure",
    description: "Idioms, humor, and local references vanish. What remains feels foreign, not faithful.",
  },
  {
    icon: Heart,
    title: "Inaccessible literature",
    description: "Billions of readers can't access great books in their language. Knowledge stays locked behind linguistic walls.",
  },
  {
    icon: AlertTriangle,
    title: "Publisher paralysis",
    description: "Translation is expensive, slow, and risky. Most books never get translated at all.",
  },
];

const Problem = () => {
  return (
    <section className="section-padding bg-card" id="problem" aria-labelledby="problem-heading">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-bold mb-4">
            The world reads in fragments.
          </h2>
          <p className="text-lg text-muted-foreground">
            Great stories shouldn't stop at borders. Yet today, most translations feel flat, robotic, or culturally deaf.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <article
              key={p.title}
              className="rounded-xl bg-background p-6 border border-border hover:shadow-lg transition-shadow animate-float-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
