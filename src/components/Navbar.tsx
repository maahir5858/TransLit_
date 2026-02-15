import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Library", href: "/library" },
  { label: "Poetry", href: "/poetry" },
  { label: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      window.location.hash = href;
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto flex items-center justify-between h-16">
        <a href="#" className="font-serif text-2xl font-bold text-primary tracking-tight">
          Trans<span className="text-coral">Lit</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button onClick={() => handleNavClick(l.href)} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-accent text-accent-foreground px-5 py-2 text-sm font-semibold hover:opacity-90 transition-opacity">
              Try a live demo
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="flex flex-col p-4 gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => handleNavClick(l.href)}
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <a href="#demo" className="block text-center rounded-lg bg-accent text-accent-foreground px-5 py-3 font-semibold" onClick={() => setOpen(false)}>
                Try a live demo
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
