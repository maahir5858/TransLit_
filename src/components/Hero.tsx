import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center section-padding pt-24" aria-labelledby="hero-heading">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-float-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 font-sans-body">
              Human-centric AI translation
            </p>
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Every book deserves to{" "}
              <span className="italic text-primary">speak</span> every language.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              TransLit translates books into natural, culturally faithful editions — preserving the author's tone, idioms, and emotional essence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-lg bg-accent text-accent-foreground px-8 py-4 text-base font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Try a live demo
              </a>
              <a
                href="#proof"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary text-primary px-8 py-4 text-base font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Watch 60-sec demo
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Try with sample text — no upload required
            </p>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl animate-float-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={heroImage}
                alt="Diverse readers enjoying books translated across languages in a warm library setting"
                className="w-full h-auto object-cover"
                loading="eager"
                width={960}
                height={540}
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-accent/20 animate-gentle-pulse" />
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/10 animate-gentle-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
