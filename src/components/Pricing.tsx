import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Demo",
    price: "Free",
    description: "Explore TransLit with sample texts.",
    features: ["3 sample translations", "2 languages", "Basic tone settings", "No account required"],
    cta: "Try a live demo",
    href: "#demo",
    highlight: false,
  },
  {
    name: "Reader",
    price: "$9/mo",
    description: "For avid multilingual readers.",
    features: ["Unlimited translations", "All languages", "Reader personas", "Offline mode", "Audiobook TTS", "Priority processing"],
    cta: "Start reading",
    href: "#demo",
    highlight: true,
  },
  {
    name: "Publisher",
    price: "Custom",
    description: "For publishers & institutions.",
    features: ["Bulk catalog translation", "Human editorial review", "DRM & copyright tools", "API access", "Dedicated support", "Custom personas"],
    cta: "Partner with us",
    href: "#publishers",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="section-padding bg-card" id="pricing" aria-labelledby="pricing-heading">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Simple, fair pricing.
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free. Scale when you're ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 md:p-8 border-2 transition-shadow ${
                plan.highlight
                  ? "border-primary bg-background shadow-lg scale-[1.02]"
                  : "border-border bg-background"
              }`}
            >
              {plan.highlight && (
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-2 font-sans-body">
                  Most popular
                </span>
              )}
              <h3 className="font-serif text-xl font-bold">{plan.name}</h3>
              <p className="text-3xl font-bold mt-2 mb-1">{plan.price}</p>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={`block text-center rounded-lg px-6 py-3 font-semibold transition-opacity hover:opacity-90 ${
                  plan.highlight
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
