import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Does TransLit respect copyright?",
    a: "Absolutely. Public domain works are freely available. Copyrighted content can only be translated through publisher licensing or via ephemeral (temporary, read-once) sessions.",
  },
  {
    q: "How many languages do you support?",
    a: "We currently support Hindi, Bengali, Tamil, Telugu, Spanish, and English — with more languages launching every quarter.",
  },
  {
    q: "Is my data private?",
    a: "Yes. We never store your uploaded text beyond the active session. Ephemeral translations are deleted automatically. We comply with GDPR and local data protection laws.",
  },
  {
    q: "How does offline mode work?",
    a: "You can download lightweight, quantized translation models to your device. Perfect for areas with limited internet access — read anywhere, anytime.",
  },
  {
    q: "Can I use TransLit for educational purposes?",
    a: "Yes! We offer discounted plans for schools, universities, and NGOs. Contact us for institutional pricing.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding" id="faq" aria-labelledby="faq-heading">
      <div className="container mx-auto max-w-2xl">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-center mb-10">
          Questions & answers
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
