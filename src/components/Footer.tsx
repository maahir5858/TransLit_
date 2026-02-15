import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-padding bg-foreground text-background" role="contentinfo">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-bold mb-3">
              Trans<span className="text-coral">Lit</span>
            </p>
            <p className="text-sm opacity-70 leading-relaxed">
              Every book deserves to speak every language. Human-centric AI translation.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans-body uppercase tracking-widest opacity-50">Product</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#how-it-works" className="hover:opacity-100 transition-opacity">How it works</a></li>
              <li><a href="#features" className="hover:opacity-100 transition-opacity">Features</a></li>
              <li><a href="#pricing" className="hover:opacity-100 transition-opacity">Pricing</a></li>
              <li><a href="#demo" className="hover:opacity-100 transition-opacity">Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans-body uppercase tracking-widest opacity-50">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#publishers" className="hover:opacity-100 transition-opacity">For Publishers</a></li>
              <li><a href="#faq" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans-body uppercase tracking-widest opacity-50">Stay in touch</h4>
            <p className="text-sm opacity-70 mb-3">Get new language drops & stories</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@email.com"
                className="flex-1 rounded-lg bg-background/10 border border-background/20 px-3 py-2 text-sm placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-coral text-background"
              />
              <button
                type="submit"
                className="rounded-lg bg-coral px-3 py-2 hover:opacity-90 transition-opacity"
                aria-label="Subscribe to newsletter"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        {/* Privacy blurb */}
        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs opacity-50 max-w-lg">
            We respect copyright and privacy. Public domain translations are available; copyrighted works can be translated in ephemeral sessions or via publisher licensing. <a href="#" className="underline hover:opacity-80">Full policy →</a>
          </p>
          <p className="text-xs opacity-40">
            © {new Date().getFullYear()} TransLit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
