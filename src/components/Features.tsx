import { Mic, UserCircle, WifiOff, Palette, Sparkles, Clock } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Tone Preservation",
    description: "Maintains the author's unique voice — whether lyrical, sparse, humorous, or haunting.",
  },
  {
    icon: UserCircle,
    title: "Reader Personas",
    description: "Adjust reading level and style. A children's edition reads differently from a scholarly one.",
  },
  {
    icon: WifiOff,
    title: "Offline Mode",
    description: "Download quantized models for low-bandwidth reading. Perfect for rural classrooms and travel.",
  },
  {
    icon: Mic,
    title: "Audiobook & TTS",
    description: "Generate natural-sounding audiobooks from translated text. Listen in your language.",
  },
  {
    icon: Clock,
    title: "Ephemeral Translations",
    description: "Translate copyrighted works in private, temporary sessions. Read once — it disappears.",
  },
  {
    icon: Sparkles,
    title: "Multi-language UI",
    description: "Interface available in English, Hindi, Bengali, Tamil, Telugu, and Spanish — with more coming.",
  },
];

const Features = () => {
  return (
    <section className="section-padding" id="features" aria-labelledby="features-heading">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Built for readers. Trusted by publishers.
          </h2>
          <p className="text-lg text-muted-foreground">
            Every feature is designed with one goal: make great books accessible to everyone, everywhere.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="group rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-md transition-all animate-float-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
