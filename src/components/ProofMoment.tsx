import { useState } from "react";

const samples = [
  {
    language: "Hindi",
    original: "The old man sat by the river, his heart heavy with the weight of unspoken words. The water carried his silence downstream, where it joined a thousand other silences.",
    literal: "बूढ़ा आदमी नदी के पास बैठा था, उसका दिल अनकहे शब्दों के भार से भारी था। पानी ने उसकी चुप्पी को नीचे की ओर बहा दिया, जहाँ यह हज़ार अन्य चुप्पियों से मिल गई।",
    translit: "बूढ़ा नदी किनारे बैठा था — दिल पर अनकही बातों का बोझ लिए। बहता पानी उसकी ख़ामोशी को संग ले गया, वहाँ जहाँ और भी हज़ारों ख़ामोशियाँ इंतज़ार कर रही थीं।",
  },
  {
    language: "Spanish",
    original: "The old man sat by the river, his heart heavy with the weight of unspoken words. The water carried his silence downstream, where it joined a thousand other silences.",
    literal: "El viejo se sentó junto al río, su corazón pesado con el peso de las palabras no dichas. El agua llevó su silencio río abajo, donde se unió a mil otros silencios.",
    translit: "El viejo se sentó a la orilla del río, con el alma cargada de palabras que nunca pronunció. La corriente se llevó su silencio aguas abajo, hasta donde confluían mil silencios más.",
  },
  {
    language: "Bengali",
    original: "The old man sat by the river, his heart heavy with the weight of unspoken words. The water carried his silence downstream, where it joined a thousand other silences.",
    literal: "বৃদ্ধ লোকটি নদীর ধারে বসেছিল, তার হৃদয় অব্যক্ত কথার ভারে ভারী ছিল। জল তার নীরবতা ভাটির দিকে বহন করে নিয়ে গেল, যেখানে তা হাজার অন্য নীরবতার সাথে মিশে গেল।",
    translit: "বুড়ো মানুষটা নদীর পাড়ে বসে ছিল — বুকের ভেতর জমে থাকা না-বলা কথার ভারে নুয়ে। স্রোত তার নীরবতা ভাসিয়ে নিয়ে গেল সেই ঘাটে, যেখানে আরও হাজারটা চুপচাপ অপেক্ষায় ছিল।",
  },
];

type Tab = "literal" | "translit";

const ProofMoment = () => {
  const [activeLang, setActiveLang] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>("translit");
  const sample = samples[activeLang];

  return (
    <section className="section-padding bg-card" id="proof" aria-labelledby="proof-heading">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 id="proof-heading" className="text-3xl md:text-4xl font-bold mb-4">
            See the difference. <span className="italic">Feel</span> it.
          </h2>
          <p className="text-lg text-muted-foreground">
            Compare a literal machine translation with TransLit's culturally faithful version.
          </p>
        </div>

        {/* Language selector */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap" role="tablist" aria-label="Select language">
          {samples.map((s, i) => (
            <button
              key={s.language}
              role="tab"
              aria-selected={activeLang === i}
              onClick={() => setActiveLang(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeLang === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {s.language}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Original */}
          <div className="rounded-xl border border-border bg-background p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 font-sans-body">
              Original (English)
            </p>
            <p className="text-base leading-relaxed italic font-serif-display">
              {sample.original}
            </p>
          </div>

          {/* Translation */}
          <div className="rounded-xl border-2 border-primary/30 bg-background p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex rounded-full bg-secondary overflow-hidden" role="tablist" aria-label="Translation type">
                <button
                  role="tab"
                  aria-selected={activeTab === "literal"}
                  onClick={() => setActiveTab("literal")}
                  className={`px-3 py-1 text-xs font-semibold transition-colors ${
                    activeTab === "literal" ? "bg-muted-foreground text-background" : "text-muted-foreground"
                  }`}
                >
                  Literal
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === "translit"}
                  onClick={() => setActiveTab("translit")}
                  className={`px-3 py-1 text-xs font-semibold transition-colors ${
                    activeTab === "translit" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  TransLit ✨
                </button>
              </div>
            </div>
            <p className="text-base leading-relaxed" lang={activeLang === 0 ? "hi" : activeLang === 1 ? "es" : "bn"}>
              {activeTab === "literal" ? sample.literal : sample.translit}
            </p>
            {activeTab === "translit" && (
              <p className="text-xs text-primary mt-3 font-medium">
                ↑ Notice the natural flow, emotional depth, and cultural resonance.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofMoment;
