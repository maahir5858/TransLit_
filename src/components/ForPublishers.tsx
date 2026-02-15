import { Building2, BookOpen, Shield } from "lucide-react";

const ForPublishers = () => {
  return (
    <section className="section-padding" id="publishers" aria-labelledby="publishers-heading">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 font-sans-body">
              For Publishers & Authors
            </p>
            <h2 id="publishers-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Unlock every market. Protect every right.
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              TransLit offers publishers a scalable, rights-respecting path to multilingual editions. 
              Translate your catalog at a fraction of traditional cost — with human-quality output and full copyright control.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                { icon: Building2, text: "Enterprise licensing with usage-based pricing" },
                { icon: BookOpen, text: "Bulk catalog translation with priority review" },
                { icon: Shield, text: "Full DRM & copyright compliance" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
            <a
              href="mailto:publishers@translit.ai"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
            >
              Partner with us
            </a>
          </div>

          <div className="rounded-2xl bg-card border border-border p-8 space-y-6">
            <h3 className="font-serif text-xl font-semibold">How licensing works</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <span className="font-bold text-primary text-lg">1</span>
                <p>Share your catalog or individual titles via our secure portal.</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-primary text-lg">2</span>
                <p>Choose target languages & reader persona settings.</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-primary text-lg">3</span>
                <p>Review AI-drafted translations with our human editors.</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-primary text-lg">4</span>
                <p>Publish multilingual editions under your existing rights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForPublishers;
