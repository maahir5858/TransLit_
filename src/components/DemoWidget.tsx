import { useState } from "react";

const sampleText = "The morning light crept through the curtains like a shy visitor, unsure of its welcome. She sat at the kitchen table, stirring her tea absently, the spoon making lazy circles that mirrored the thoughts drifting through her mind.";

const demoTranslations: Record<string, Record<string, string>> = {
  Hindi: {
    casual: "सुबह की रोशनी परदों से ऐसे झाँक रही थी जैसे कोई शर्मीला मेहमान, अपने स्वागत को लेकर असमंजस में। वो किचन की मेज़ पर बैठी चाय को बेमन से हिला रही थी — चम्मच के आलसी घेरे, ठीक वैसे ही जैसे उसके मन में विचार तैरते जा रहे थे।",
    literary: "प्रभात का प्रकाश पर्दों से ऐसे छन कर आया जैसे कोई संकोची अतिथि, अपने स्वागत के प्रति आशंकित। वह रसोई की मेज़ पर बैठी थी, अनमनी-सी चाय को मथ रही थी — चम्मच की मंथर परिक्रमा उन्हीं विचारों की प्रतिध्वनि थी जो उसके मन में विचरण कर रहे थे।",
  },
  Spanish: {
    casual: "La luz de la mañana se coló por las cortinas como un visitante tímido, sin saber si era bienvenida. Ella estaba sentada a la mesa de la cocina, removiendo el té sin pensar, la cuchara trazando círculos perezosos que reflejaban los pensamientos que vagaban por su mente.",
    literary: "La claridad matutina se deslizó entre los visillos como un huésped retraído, vacilante ante su propia acogida. Sentada a la mesa de la cocina, agitaba el té con gesto ausente — la cuchara dibujando órbitas indolentes que espejaban el devenir de sus pensamientos.",
  },
};

const DemoWidget = () => {
  const [input, setInput] = useState(sampleText);
  const [lang, setLang] = useState("Hindi");
  const [tone, setTone] = useState<"casual" | "literary">("casual");
  const [showResult, setShowResult] = useState(false);

  const handleTranslate = () => {
    setShowResult(true);
  };

  const result = demoTranslations[lang]?.[tone] || "Translation not available for this combination.";

  return (
    <section className="section-padding bg-card" id="demo" aria-labelledby="demo-heading">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 id="demo-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Try it yourself.
          </h2>
          <p className="text-lg text-muted-foreground">
            Paste a passage or use our sample. See how TransLit preserves meaning and emotion.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 md:p-8 shadow-sm">
          {/* Input */}
          <label htmlFor="demo-input" className="text-sm font-semibold text-muted-foreground mb-2 block font-sans-body">
            Source text (English)
          </label>
          <textarea
            id="demo-input"
            value={input}
            onChange={(e) => { setInput(e.target.value); setShowResult(false); }}
            rows={4}
            className="w-full rounded-lg border border-input bg-background p-4 text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-ring mb-4"
          />

          {/* Controls */}
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <div>
              <label htmlFor="lang-select" className="text-xs font-semibold text-muted-foreground block mb-1 font-sans-body">Language</label>
              <select
                id="lang-select"
                value={lang}
                onChange={(e) => { setLang(e.target.value); setShowResult(false); }}
                className="rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option>Hindi</option>
                <option>Spanish</option>
              </select>
            </div>
            <div>
              <label htmlFor="tone-select" className="text-xs font-semibold text-muted-foreground block mb-1 font-sans-body">Tone / Persona</label>
              <select
                id="tone-select"
                value={tone}
                onChange={(e) => { setTone(e.target.value as "casual" | "literary"); setShowResult(false); }}
                className="rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="casual">Casual reader</option>
                <option value="literary">Literary edition</option>
              </select>
            </div>
            <button
              onClick={handleTranslate}
              className="mt-auto rounded-lg bg-accent text-accent-foreground px-6 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Translate
            </button>
          </div>

          {/* Result */}
          {showResult && (
            <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-5 animate-float-up">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 font-sans-body">
                TransLit — {lang} ({tone})
              </p>
              <p className="text-base leading-relaxed" lang={lang === "Hindi" ? "hi" : "es"}>
                {result}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoWidget;
