import { BookOpen, Map, Users } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    number: "01",
    title: "Narrative Equivalence Engine",
    description: "Our AI reads like a human — understanding context, emotion, and narrative arc before translating a single word.",
  },
  {
    icon: Map,
    number: "02",
    title: "Cultural Mapping",
    description: "Idioms, humor, and references are adapted — not just converted. Each translation feels native to its target culture.",
  },
  {
    icon: Users,
    number: "03",
    title: "Human Review",
    description: "Native-speaking editors refine every passage. The result is a translation that honors both author and reader.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding" id="how-it-works" aria-labelledby="how-heading">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="how-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Translation that <span className="italic">understands.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three layers of intelligence ensure every translation carries the author's voice intact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[16.5%] right-[16.5%] h-0.5 bg-border" aria-hidden="true" />

          {steps.map((step, i) => (
            <div key={step.title} className="text-center relative animate-float-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg">
                <step.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block font-sans-body">
                Step {step.number}
              </span>
              <h3 className="font-serif text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
