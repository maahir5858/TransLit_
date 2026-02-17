import type { ContentLanguage } from "./languageConfig";

export type Genre = "Poetry" | "Fiction" | "Philosophy" | "Folklore" | "Classic" | "Children" | "Heritage";
export type Region = "South Asia" | "Latin America" | "Europe" | "Middle East" | "East Asia" | "Global";

export interface Paragraph {
  id: string;
  text: Record<ContentLanguage, string>;
  culturalNote?: Record<ContentLanguage, string>;
  idiomNote?: string;
  essenceData?: {
    originalLine: string;
    literalVersion: string;
    translitVersion: string;
    emotionalIntent: string;
    adaptationType: "cultural" | "direct" | "metaphor";
  };
}

export interface BookWork {
  id: string;
  title: Record<ContentLanguage, string>;
  author: string;
  genre: Genre;
  region: Region;
  coverEmoji: string;
  description: Record<ContentLanguage, string>;
  paragraphs: Paragraph[];
  isFirstTranslation?: boolean;
  isHeritage?: boolean;
  originalLanguage: string;
  availableLanguages: string[];
  tags?: string[];
}

// Re-export for backward compatibility
export type Language = ContentLanguage;
export { contentLanguageLabels as languageLabels } from "./languageConfig";

export const libraryWorks: BookWork[] = [
  // ── EXISTING WORKS (expanded with essence data) ──
  {
    id: "gitanjali",
    title: { en: "Gitanjali (Song Offerings)", hi: "गीतांजलि", bn: "গীতাঞ্জলি", ta: "கீதாஞ்சலி", es: "Gitanjali (Ofrenda lírica)" },
    author: "Rabindranath Tagore",
    genre: "Poetry",
    region: "South Asia",
    coverEmoji: "🪷",
    originalLanguage: "Bengali",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🌍 Multilingual", "🇮🇳 Regional Highlight"],
    description: {
      en: "A collection of prose poems that earned the Nobel Prize in Literature, exploring devotion, nature, and the human spirit.",
      hi: "गद्य कविताओं का संग्रह जिसने साहित्य का नोबेल पुरस्कार जीता।",
      bn: "গদ্য কবিতার সংকলন যা সাহিত্যে নোবেল পুরস্কার অর্জন করেছে।",
      ta: "இலக்கியத்திற்கான நோபல் பரிசு பெற்ற உரைநடை கவிதைகள் தொகுப்பு.",
      es: "Una colección de poemas en prosa que ganó el Premio Nobel de Literatura.",
    },
    paragraphs: [
      {
        id: "g1",
        text: {
          en: "Where the mind is without fear and the head is held high;\nWhere knowledge is free;\nWhere the world has not been broken up into fragments by narrow domestic walls;",
          hi: "जहाँ मन भय से मुक्त हो और सिर ऊँचा उठा हो;\nजहाँ ज्ञान स्वतंत्र हो;\nजहाँ संकीर्ण घरेलू दीवारों ने विश्व को टुकड़ों में न बाँटा हो;",
          bn: "যেখানে মন ভয়শূন্য ও মাথা উঁচু;\nযেখানে জ্ঞান মুক্ত;\nযেখানে সংকীর্ণ ঘরের দেয়াল বিশ্বকে খণ্ডে খণ্ডে ভাগ করেনি;",
          ta: "மனம் அச்சமின்றி, தலை நிமிர்ந்து நிற்கும் இடத்தில்;\nஅறிவு சுதந்திரமாக இருக்கும் இடத்தில்;\nகுறுகிய சுவர்கள் உலகைத் துண்டுகளாக்காத இடத்தில்;",
          es: "Donde la mente no tiene miedo y la cabeza se mantiene en alto;\nDonde el conocimiento es libre;\nDonde el mundo no ha sido fragmentado por estrechos muros domésticos;",
        },
        culturalNote: {
          en: "Tagore wrote this poem envisioning a free India, where the human spirit soars beyond all barriers.",
          hi: "टैगोर ने यह कविता स्वतंत्र भारत की कल्पना करते हुए लिखी।",
          bn: "টেগর এই কবিতা লিখেছিলেন স্বাধীন ভারতের কল্পনায়।",
          ta: "தாகூர் இந்தக் கவிதையை சுதந்திர இந்தியாவை கற்பனை செய்து எழுதினார்.",
          es: "Tagore escribió este poema imaginando una India libre.",
        },
        essenceData: {
          originalLine: "যেখানে মন ভয়শূন্য ও মাথা উঁচু",
          literalVersion: "Where mind fear-empty and head high",
          translitVersion: "Where the mind is without fear and the head is held high",
          emotionalIntent: "Evokes dignity and courage — the uplifted head is a universal symbol of self-respect, while 'fear-empty' conveys total liberation, not mere bravery.",
          adaptationType: "cultural",
        },
      },
      {
        id: "g2",
        text: {
          en: "Where words come out from the depth of truth;\nWhere tireless striving stretches its arms towards perfection;\nWhere the clear stream of reason has not lost its way into the dreary desert sand of dead habit;",
          hi: "जहाँ शब्द सत्य की गहराई से निकलते हों;\nजहाँ अथक प्रयास पूर्णता की ओर अपनी बाहें फैलाता हो;\nजहाँ तर्क की स्वच्छ धारा मृत आदतों की उजाड़ रेत में खो न गई हो;",
          bn: "যেখানে সত্যের গভীর থেকে কথা বেরিয়ে আসে;\nযেখানে ক্লান্তিহীন চেষ্টা পূর্ণতার দিকে হাত বাড়ায়;\nযেখানে যুক্তির স্বচ্ছ ধারা মৃত অভ্যাসের মরু বালিতে হারিয়ে যায়নি;",
          ta: "உண்மையின் ஆழத்திலிருந்து சொற்கள் வரும் இடத்தில்;\nஅலுப்பில்லா முயற்சி முழுமையை நோக்கி கைகள் நீட்டும் இடத்தில்;\nபழக்கத்தின் பாலை மணலில் அறிவின் தெளிந்த ஓடை வழி தவறாத இடத்தில்;",
          es: "Donde las palabras surgen de la profundidad de la verdad;\nDonde el esfuerzo incansable extiende sus brazos hacia la perfección;\nDonde la clara corriente de la razón no se ha perdido en la arena árida de los hábitos muertos;",
        },
        essenceData: {
          originalLine: "যেখানে যুক্তির স্বচ্ছ ধারা মৃত অভ্যাসের মরু বালিতে হারিয়ে যায়নি",
          literalVersion: "Where reason's clear stream dead habit's desert sand-in lost not-gone",
          translitVersion: "Where the clear stream of reason has not lost its way into the dreary desert sand of dead habit",
          emotionalIntent: "The metaphor of a clear stream dying in desert sand captures how dogma suffocates rational thought — a warning against intellectual stagnation.",
          adaptationType: "metaphor",
        },
      },
      {
        id: "g3",
        text: {
          en: "Into that heaven of freedom, my Father, let my country awake.",
          hi: "उस स्वतंत्रता के स्वर्ग में, हे पिता, मेरा देश जागे।",
          bn: "সেই স্বাধীনতার স্বর্গে, হে পিতা, আমার দেশ জেগে উঠুক।",
          ta: "அந்த சுதந்திர சொர்க்கத்தில், என் தந்தையே, என் நாடு விழித்தெழட்டும்.",
          es: "En ese cielo de libertad, Padre mío, deja que mi país despierte.",
        },
        essenceData: {
          originalLine: "সেই স্বাধীনতার স্বর্গে, হে পিতা, আমার দেশ জেগে উঠুক",
          literalVersion: "That freedom's heaven-in, O Father, my country awaken let",
          translitVersion: "Into that heaven of freedom, my Father, let my country awake",
          emotionalIntent: "A prayer that transforms political aspiration into spiritual invocation — 'Father' addresses both God and the reader's conscience.",
          adaptationType: "cultural",
        },
      },
    ],
  },
  {
    id: "borges-garden",
    title: { en: "The Garden of Forking Paths", hi: "कांटेदार रास्तों का बगीचा", bn: "বিভক্ত পথের বাগান", ta: "பிரியும் பாதைகளின் தோட்டம்", es: "El jardín de senderos que se bifurcan" },
    author: "Jorge Luis Borges",
    genre: "Fiction",
    region: "Latin America",
    coverEmoji: "🌿",
    originalLanguage: "Spanish",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🌍 Multilingual"],
    description: {
      en: "A labyrinthine short story exploring time, choice, and infinite parallel realities.",
      hi: "समय, चुनाव और अनंत समानांतर वास्तविकताओं की खोज करने वाली भूलभुलैया जैसी लघुकथा।",
      bn: "সময়, পছন্দ এবং অসীম সমান্তরাল বাস্তবতা অন্বেষণকারী গোলকধাঁধার মতো ছোটগল্প।",
      ta: "நேரம், தேர்வு மற்றும் எல்லையற்ற இணையான யதார்த்தங்களை ஆராயும் புதிர் சிறுகதை.",
      es: "Un cuento laberíntico que explora el tiempo, la elección y las realidades paralelas infinitas.",
    },
    paragraphs: [
      {
        id: "b1",
        text: {
          en: "In all fictions, each time a man meets diverse alternatives, he chooses one and eliminates the others; in the work of the virtually impossible-to-disentangle Ts'ui Pên, he chooses — simultaneously — all of them.",
          hi: "सभी कथाओं में, हर बार जब कोई व्यक्ति विभिन्न विकल्पों का सामना करता है, वह एक चुनता है और बाकी को समाप्त कर देता है; च्वी पेन की रचना में, वह एक साथ — सभी को चुनता है।",
          bn: "সমস্ত কল্পকাহিনীতে, প্রতিবার যখন কেউ বিভিন্ন বিকল্পের মুখোমুখি হয়, সে একটি বেছে নেয় এবং বাকিগুলো বাদ দেয়; চ্যুই পেনের রচনায়, সে একসাথে — সবগুলো বেছে নেয়।",
          ta: "அனைத்து கதைகளிலும், ஒருவர் வெவ்வேறு மாற்றுகளை சந்திக்கும்போது, ஒன்றைத் தேர்ந்தெடுத்து மற்றவற்றை நீக்குவார்; ச்யூய் பென்னின் படைப்பில், அவர் ஒரே நேரத்தில் — அனைத்தையும் தேர்ந்தெடுக்கிறார்.",
          es: "En todas las ficciones, cada vez que un hombre se enfrenta con diversas alternativas, opta por una y elimina las otras; en la del casi inextricable Ts'ui Pên, opta — simultáneamente — por todas.",
        },
        culturalNote: {
          en: "Borges invented the concept of branching narratives decades before hypertext and video games explored similar ideas.",
          hi: "बोर्खेस ने शाखित कथाओं की अवधारणा हाइपरटेक्स्ट और वीडियो गेम से दशकों पहले बनाई।",
          bn: "বোর্হেস হাইপারটেক্সট ও ভিডিও গেমের দশক আগে শাখাবিশিষ্ট বর্ণনার ধারণা তৈরি করেছিলেন।",
          ta: "ஹைப்பர்டெக்ஸ்ட் மற்றும் வீடியோ கேம்களுக்கு பல தசாப்தங்களுக்கு முன்பே போர்ஹெஸ் கிளைக் கதைகளின் கருத்தை உருவாக்கினார்.",
          es: "Borges inventó el concepto de narrativas ramificadas décadas antes de que el hipertexto y los videojuegos exploraran ideas similares.",
        },
        idiomNote: "\"virtually impossible-to-disentangle\" — Borges uses compound adjectives to mirror the tangled nature of Ts'ui Pên's novel-labyrinth.",
        essenceData: {
          originalLine: "opta — simultáneamente — por todas",
          literalVersion: "he chooses — simultaneously — for all",
          translitVersion: "he chooses — simultaneously — all of them",
          emotionalIntent: "The dramatic em-dashes create a pause that makes 'simultaneously' land with full impact — it's the philosophical bombshell of the story.",
          adaptationType: "direct",
        },
      },
      {
        id: "b2",
        text: {
          en: "He thus creates various futures, various times, which also proliferate and fork. This is the cause of the contradictions in the novel.",
          hi: "इस प्रकार वह विभिन्न भविष्य, विभिन्न समय बनाता है, जो स्वयं भी बढ़ते और विभाजित होते हैं। यही उपन्यास में विरोधाभासों का कारण है।",
          bn: "এভাবে তিনি বিভিন্ন ভবিষ্যৎ, বিভিন্ন সময় সৃষ্টি করেন, যেগুলো নিজেরাও বিস্তৃত হয় ও বিভক্ত হয়। এটাই উপন্যাসের বৈপরীত্যের কারণ।",
          ta: "இவ்வாறு பல எதிர்காலங்களை, பல காலங்களை உருவாக்குகிறார், அவையும் பெருகி பிரிகின்றன. இதுவே நாவலின் முரண்பாடுகளுக்கான காரணம்.",
          es: "Crea así diversos porvenires, diversos tiempos, que también proliferan y se bifurcan. De ahí las contradicciones de la novela.",
        },
      },
    ],
  },
  {
    id: "rumi-masnavi",
    title: { en: "The Masnavi (Selected Verses)", hi: "मसनवी (चुनिंदा छंद)", bn: "মসনবি (নির্বাচিত পদ)", ta: "மஸ்னவி (தேர்ந்தெடுக்கப்பட்ட பாடல்கள்)", es: "El Masnavi (Versos selectos)" },
    author: "Jalāl al-Dīn Rūmī",
    genre: "Philosophy",
    region: "Middle East",
    coverEmoji: "🌀",
    originalLanguage: "Persian",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🌍 Multilingual"],
    description: {
      en: "Mystical verses exploring divine love, unity, and the journey of the soul through storytelling and metaphor.",
      hi: "दिव्य प्रेम, एकता और आत्मा की यात्रा को कहानी और रूपक के माध्यम से खोजते रहस्यमय छंद।",
      bn: "গল্প ও রূপকের মাধ্যমে ঐশ্বরিক প্রেম, ঐক্য ও আত্মার যাত্রা অন্বেষণকারী রহস্যময় পদ।",
      ta: "கதைகள் மற்றும் உருவகங்கள் மூலம் தெய்வீக அன்பு, ஒற்றுமை மற்றும் ஆன்மாவின் பயணத்தை ஆராயும் ஆன்மீக பாடல்கள்.",
      es: "Versos místicos que exploran el amor divino, la unidad y el viaje del alma.",
    },
    paragraphs: [
      {
        id: "r1",
        text: {
          en: "Listen to the reed flute, how it tells a tale,\ncomplaining of separations—\nSaying, \"Ever since I was parted from the reed-bed,\nmy lament has caused man and woman to moan.\"",
          hi: "सुनो बाँसुरी की कहानी,\nजो बिछड़ने का दर्द बताती है—\nकहती है, \"जब से मुझे नरकुल के बिस्तर से अलग किया गया,\nमेरा विलाप स्त्री-पुरुष दोनों को रुलाता है।\"",
          bn: "শোনো বাঁশির কাহিনী,\nবিচ্ছেদের অভিযোগ করে—\nবলে, \"যখন থেকে নলখাগড়ার বন থেকে আমাকে ছিঁড়ে নেওয়া হয়েছে,\nআমার বিলাপ নর-নারী সকলকে কাঁদায়।\"",
          ta: "புல்லாங்குழலின் கதையைக் கேளுங்கள்,\nபிரிவுகளைப் பற்றி புலம்புகிறது—\n\"நாணல் படுக்கையிலிருந்து பிரிந்தது முதல்,\nஎன் புலம்பல் ஆண்களையும் பெண்களையும் அழ வைத்தது\" என்கிறது.",
          es: "Escucha la flauta de caña, cómo cuenta su historia,\nquejándose de las separaciones—\nDiciendo: \"Desde que fui separada del cañaveral,\nmi lamento ha hecho gemir a hombres y mujeres.\"",
        },
        culturalNote: {
          en: "The reed flute (ney) symbolizes the human soul separated from its divine origin.",
          hi: "बाँसुरी (नय) मानव आत्मा का प्रतीक है जो अपने दिव्य मूल से अलग हो गई है।",
          bn: "বাঁশি (নে) মানব আত্মার প্রতীক যা তার ঐশ্বরিক উৎস থেকে বিচ্ছিন্ন।",
          ta: "நாணல் குழல் (நெய்) தெய்வீக மூலத்திலிருந்து பிரிந்த மனித ஆன்மாவின் அடையாளம்.",
          es: "La flauta de caña (ney) simboliza el alma humana separada de su origen divino.",
        },
        essenceData: {
          originalLine: "بشنو از نی چون حکایت می‌کند",
          literalVersion: "Listen from reed how story it-tells",
          translitVersion: "Listen to the reed flute, how it tells a tale",
          emotionalIntent: "The imperative 'Listen' draws the reader into sacred attention. The reed is not just an instrument — it's a soul crying out for reunion with the divine.",
          adaptationType: "metaphor",
        },
      },
    ],
  },
  {
    id: "panchatantra",
    title: { en: "Panchatantra (The Five Principles)", hi: "पंचतंत्र", bn: "পঞ্চতন্ত্র", ta: "பஞ்சதந்திரம்", es: "Panchatantra (Los cinco principios)" },
    author: "Vishnu Sharma",
    genre: "Folklore",
    region: "South Asia",
    coverEmoji: "🦊",
    originalLanguage: "Sanskrit",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🌍 Multilingual", "🇮🇳 Regional Highlight"],
    description: {
      en: "Ancient Indian fables using animal characters to teach wisdom about politics, friendship, and survival.",
      hi: "प्राचीन भारतीय कथाएँ जो पशु पात्रों के माध्यम से राजनीति, मित्रता और जीवित रहने की बुद्धि सिखाती हैं।",
      bn: "প্রাচীন ভারতীয় রূপকথা যা পশু চরিত্রের মাধ্যমে রাজনীতি, বন্ধুত্ব ও টিকে থাকার জ্ঞান শেখায়।",
      ta: "அரசியல், நட்பு மற்றும் உயிர்வாழ்வு பற்றிய ஞானத்தை கற்பிக்கும் பண்டைய இந்திய விலங்கு கதைகள்.",
      es: "Fábulas antiguas de la India que enseñan sabiduría sobre política, amistad y supervivencia.",
    },
    paragraphs: [
      {
        id: "p1",
        text: {
          en: "\"He who has intelligence has strength. How can a brainless one have power? Look at the lion — that lord of beasts — who was killed by the hare's cleverness.\"",
          hi: "\"जिसके पास बुद्धि है, उसके पास बल है। मूर्ख के पास शक्ति कहाँ? देखो उस सिंह को — पशुओं के राजा को — जो खरगोश की चतुराई से मारा गया।\"",
          bn: "\"যার বুদ্ধি আছে, তার শক্তি আছে। মূর্খের শক্তি কোথায়? দেখো সেই সিংহকে — পশুরাজকে — যে খরগোশের চতুরতায় মারা গেল।\"",
          ta: "\"அறிவுள்ளவனுக்கு பலம் உண்டு. மூடனுக்கு ஆற்றல் எங்கிருந்து? பாருங்கள் அந்த சிங்கத்தை — மிருகங்களின் ராஜாவை — முயலின் புத்திசாலித்தனத்தால் கொல்லப்பட்டதை.\"",
          es: "\"Quien tiene inteligencia tiene fuerza. ¿Cómo puede tener poder alguien sin cerebro? Mira al león — ese señor de las bestias — que fue muerto por la astucia de la liebre.\"",
        },
        culturalNote: {
          en: "This verse encapsulates the Panchatantra's core message: wit triumphs over brute force.",
          hi: "यह श्लोक पंचतंत्र के मूल संदेश को समाहित करता है: बुद्धि बल पर विजय प्राप्त करती है।",
          bn: "এই শ্লোক পঞ্চতন্ত্রের মূল বার্তা ধারণ করে: বুদ্ধি বলকে জয় করে।",
          ta: "இந்தச் செய்யுள் பஞ்சதந்திரத்தின் முக்கிய செய்தியை உள்ளடக்கியது: புத்தி வலிமையை வெல்லும்.",
          es: "Este verso encapsula el mensaje central del Panchatantra: el ingenio triunfa sobre la fuerza bruta.",
        },
        idiomNote: "\"lord of beasts\" — A culturally resonant title for the lion found across Indic and Persian literary traditions.",
        essenceData: {
          originalLine: "बुद्धिर्यस्य बलं तस्य",
          literalVersion: "Intelligence whose, strength his",
          translitVersion: "He who has intelligence has strength",
          emotionalIntent: "The Sanskrit aphorism's compressed structure mirrors its meaning — intelligence needs no extra words to prove its power.",
          adaptationType: "cultural",
        },
      },
    ],
  },

  // ── NEW CURATED WORKS ──
  {
    id: "kalidasa-meghaduta",
    title: { en: "Meghadūta (The Cloud Messenger)", hi: "मेघदूत", bn: "মেঘদূত", ta: "மேகதூதம்", es: "Meghadūta (El mensajero de las nubes)" },
    author: "Kālidāsa",
    genre: "Poetry",
    region: "South Asia",
    coverEmoji: "☁️",
    originalLanguage: "Sanskrit",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🇮🇳 Regional Highlight", "🌍 Multilingual"],
    description: {
      en: "A lyric poem where an exiled yaksha sends a message to his beloved through a monsoon cloud — one of Sanskrit literature's most celebrated works.",
      hi: "एक गीत कविता जहाँ निर्वासित यक्ष अपनी प्रिया को मेघ के माध्यम से संदेश भेजता है।",
      bn: "একটি গীতিকবিতা যেখানে নির্বাসিত যক্ষ মেঘের মাধ্যমে প্রিয়াকে বার্তা পাঠায়।",
      ta: "நாடுகடத்தப்பட்ட யக்ஷன் மழை மேகம் வழியாக காதலிக்கு செய்தி அனுப்பும் கவிதை.",
      es: "Un poema lírico donde un yaksha exiliado envía un mensaje a su amada a través de una nube monzónica.",
    },
    paragraphs: [
      {
        id: "mk1",
        text: {
          en: "O cloud, I see you resting on the peak of this mountain,\nlooking like an elephant playfully butting a riverbank.\nI know you are a servant of the Lord of Wealth,\nbut I, a lover parted from his beloved, must ask a favour.",
          hi: "हे मेघ, मैं तुम्हें इस पर्वत शिखर पर विश्राम करते देखता हूँ,\nजैसे कोई हाथी नदी के किनारे से खेल रहा हो।\nमैं जानता हूँ तुम धन के स्वामी के सेवक हो,\nपर मैं, अपनी प्रिया से बिछड़ा प्रेमी, एक कृपा माँगता हूँ।",
          bn: "হে মেঘ, আমি তোমাকে এই পর্বতশিখরে বিশ্রাম নিতে দেখছি,\nযেন কোনো হাতি নদীর তীরে খেলা করছে।\nআমি জানি তুমি ধনপতির সেবক,\nকিন্তু আমি, প্রিয়া থেকে বিচ্ছিন্ন প্রেমিক, একটি অনুগ্রহ চাই।",
          ta: "மேகமே, இந்த மலையுச்சியில் நீ ஓய்வெடுப்பதைக் காண்கிறேன்,\nஒரு யானை ஆற்றங்கரையுடன் விளையாடுவது போல.\nநீ செல்வத்தின் அதிபதியின் ஊழியன் என்று அறிவேன்,\nஆனால் காதலியிடமிருந்து பிரிந்த நான் ஒரு உதவி கேட்கிறேன்.",
          es: "Oh nube, te veo descansando en la cima de esta montaña,\ncomo un elefante jugando contra la ribera de un río.\nSé que eres servidor del Señor de la Riqueza,\npero yo, un amante separado de su amada, debo pedir un favor.",
        },
        culturalNote: {
          en: "In Indian poetics, addressing natural elements as messengers (dūta-kāvya) is a distinct genre. The cloud becomes both character and vehicle for emotion.",
          hi: "भारतीय काव्यशास्त्र में प्रकृति के तत्वों को दूत बनाना एक अलग विधा है।",
          bn: "ভারতীয় কাব্যশাস্ত্রে প্রাকৃতিক উপাদানকে দূত হিসেবে সম্বোধন একটি স্বতন্ত্র ধারা।",
          ta: "இந்திய கவிதையியலில் இயற்கை கூறுகளை தூதுவர்களாக அனுப்புவது ஒரு தனித்துவமான வகை.",
          es: "En la poética india, dirigirse a elementos naturales como mensajeros (dūta-kāvya) es un género distinto.",
        },
        essenceData: {
          originalLine: "कश्चित्कान्ताविरहगुरुणा स्वाधिकारात्प्रमत्तः",
          literalVersion: "Someone beloved-separation-heavy own-duty-from negligent",
          translitVersion: "Someone, heavy with the pain of separation from his beloved, negligent of his duties",
          emotionalIntent: "Kālidāsa compresses an entire emotional world into one compound word — this is the power of Sanskrit: heartbreak as grammar.",
          adaptationType: "cultural",
        },
      },
    ],
  },
  {
    id: "thirukkural",
    title: { en: "Thirukkural (Sacred Couplets)", hi: "तिरुक्कुरल", bn: "তিরুক্কুরল", ta: "திருக்குறள்", es: "Thirukkural (Coplas sagradas)" },
    author: "Thiruvalluvar",
    genre: "Philosophy",
    region: "South Asia",
    coverEmoji: "📜",
    originalLanguage: "Tamil",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🇮🇳 Regional Highlight", "🆕 First Global Translation"],
    isFirstTranslation: true,
    description: {
      en: "A masterpiece of Tamil literature — 1,330 couplets covering virtue, wealth, and love, written over 2,000 years ago.",
      hi: "तमिल साहित्य की कृति — 2000 वर्ष पुराने 1330 दोहे जो धर्म, अर्थ और प्रेम को समाहित करते हैं।",
      bn: "তামিল সাহিত্যের মাস্টারপিস — ২০০০ বছরেরও বেশি পুরানো ১৩৩০ দোহা।",
      ta: "தமிழ் இலக்கியத்தின் தலைசிறந்த படைப்பு — 2000 ஆண்டுகளுக்கு முன் எழுதப்பட்ட 1330 குறள்கள்.",
      es: "Una obra maestra de la literatura tamil — 1.330 coplas sobre virtud, riqueza y amor.",
    },
    paragraphs: [
      {
        id: "tk1",
        text: {
          en: "What is the use of eyes if they cannot express what the heart feels?\nThey are mere spots on the face.",
          hi: "उन आँखों का क्या उपयोग जो हृदय की भावनाओं को व्यक्त न कर सकें?\nवे चेहरे पर केवल धब्बे हैं।",
          bn: "সেই চোখের কী প্রয়োজন যা হৃদয়ের অনুভূতি প্রকাশ করতে পারে না?\nসেগুলো মুখের শুধু দাগ।",
          ta: "கண்ணிற் கண்டது உள்ளத்தின் உணர்வை வெளிப்படுத்தவில்லையேல்\nஅவை முகத்தில் உள்ள புள்ளிகள் மட்டுமே.",
          es: "¿De qué sirven los ojos si no pueden expresar lo que siente el corazón?\nSon meras manchas en el rostro.",
        },
        essenceData: {
          originalLine: "கண்ணிற் கண்டேன் என்று உரைத்தல் கடிநகர் புகுதல் போல்",
          literalVersion: "Eyes-with saw said-telling, fortified-city entering like",
          translitVersion: "What use are eyes that cannot speak the heart's truth? They are but marks upon the face.",
          emotionalIntent: "Thiruvalluvar equates unexpressive eyes with purposeless existence — a radical claim that emotional honesty is the measure of being alive.",
          adaptationType: "cultural",
        },
      },
    ],
  },
  {
    id: "premchand-idgah",
    title: { en: "Idgah (The Eid Ground)", hi: "ईदगाह", bn: "ঈদগাহ", ta: "ஈத்காஹ்", es: "Idgah (El campo de Eid)" },
    author: "Munshi Premchand",
    genre: "Fiction",
    region: "South Asia",
    coverEmoji: "🕌",
    originalLanguage: "Hindi",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🇮🇳 Regional Highlight", "🌍 Multilingual"],
    description: {
      en: "A heartwarming tale of young Hamid who goes to the Eid fair with just three paise — and makes a choice that reveals the depth of a child's love.",
      hi: "छोटे हामिद की मार्मिक कहानी जो सिर्फ तीन पैसे लेकर ईदगाह जाता है — और एक ऐसा चुनाव करता है जो बच्चे के प्यार की गहराई दिखाता है।",
      bn: "ছোট্ট হামিদের হৃদয়স্পর্শী গল্প যে মাত্র তিন পয়সা নিয়ে ঈদের মেলায় যায়।",
      ta: "மூன்று பைசாக்களுடன் ஈத் கொண்டாட்டத்திற்குச் செல்லும் சிறுவன் ஹாமித்தின் இதயத்தைத் தொடும் கதை.",
      es: "La conmovedora historia del joven Hamid que va a la feria de Eid con solo tres paisas.",
    },
    paragraphs: [
      {
        id: "id1",
        text: {
          en: "All the boys were buying toys — clay soldiers, tin horses, whistles that sang. Hamid had only three paise. He walked past the toy stalls, looking, not touching.",
          hi: "सब लड़के खिलौने खरीद रहे थे — मिट्टी के सिपाही, टिन के घोड़े, बजने वाली सीटियाँ। हामिद के पास केवल तीन पैसे थे। वह खिलौनों की दुकानों के आगे से गुज़रा, देखता रहा, छूता नहीं।",
          bn: "সব ছেলেরা খেলনা কিনছে — মাটির সৈন্য, টিনের ঘোড়া, বাঁশি। হামিদের কাছে মাত্র তিন পয়সা। সে খেলনার দোকানের পাশ দিয়ে হেঁটে গেল, দেখলো, ছুঁলো না।",
          ta: "அனைத்து சிறுவர்களும் பொம்மைகள் வாங்கிக்கொண்டிருந்தனர். ஹாமித்திடம் மூன்று பைசாக்கள் மட்டுமே இருந்தன. அவன் பொம்மைக் கடைகளைக் கடந்து நடந்தான்.",
          es: "Todos los niños compraban juguetes. Hamid solo tenía tres paisas. Pasó junto a los puestos de juguetes, mirando, sin tocar.",
        },
        culturalNote: {
          en: "Premchand captures poverty not through despair but through quiet dignity — Hamid doesn't beg or cry, he observes with mature restraint.",
          hi: "प्रेमचंद गरीबी को निराशा से नहीं बल्कि शांत गरिमा से दर्शाते हैं।",
          bn: "প্রেমচাঁদ দারিদ্র্যকে হতাশা দিয়ে নয়, শান্ত মর্যাদা দিয়ে ধরেন।",
          ta: "பிரேம்சந்த் வறுமையை விரக்தியால் அல்ல, அமைதியான கண்ணியத்தால் சித்தரிக்கிறார்.",
          es: "Premchand captura la pobreza no a través de la desesperación sino de la dignidad silenciosa.",
        },
      },
      {
        id: "id2",
        text: {
          en: "While the other boys spent their money on sweets and toys, Hamid bought a pair of iron tongs — a chimta — for his grandmother Amina, so she wouldn't burn her fingers making rotis.",
          hi: "जब बाकी लड़कों ने मिठाइयों और खिलौनों पर पैसे खर्च किए, हामिद ने अपनी दादी अमीना के लिए एक चिमटा खरीदा — ताकि रोटी बनाते समय उनकी उँगलियाँ न जलें।",
          bn: "যখন অন্য ছেলেরা মিষ্টি আর খেলনায় টাকা খরচ করল, হামিদ তার দাদি আমিনার জন্য একটি চিমটা কিনল — যাতে রুটি বানাতে গিয়ে আঙুল না পোড়ে।",
          ta: "மற்ற சிறுவர்கள் இனிப்புகளிலும் பொம்மைகளிலும் பணத்தை செலவழித்தபோது, ஹாமித் தன் பாட்டி அமீனாவுக்கு ஒரு இரும்பு சிம்டா வாங்கினான்.",
          es: "Mientras los otros niños gastaban en dulces y juguetes, Hamid compró unas tenazas de hierro para su abuela Amina.",
        },
        essenceData: {
          originalLine: "यह चिमटा बड़े काम की चीज़ है",
          literalVersion: "This tongs big work's thing is",
          translitVersion: "These tongs are a thing of great use",
          emotionalIntent: "Hamid's childlike justification for buying a practical gift over toys reveals a selflessness that is both heartbreaking and profoundly beautiful.",
          adaptationType: "cultural",
        },
      },
    ],
  },
  {
    id: "don-quixote",
    title: { en: "Don Quixote (Excerpt)", hi: "डॉन क्विक्सोट (अंश)", bn: "ডন কিহোতে (অংশ)", ta: "டான் கிகோட்டே (பகுதி)", es: "Don Quijote (Extracto)" },
    author: "Miguel de Cervantes",
    genre: "Classic",
    region: "Europe",
    coverEmoji: "🗡️",
    originalLanguage: "Spanish",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🌍 Multilingual"],
    description: {
      en: "The world's first modern novel — a nobleman's delusional quest for chivalric glory that forever changed storytelling.",
      hi: "दुनिया का पहला आधुनिक उपन्यास — एक कुलीन व्यक्ति की शौर्य की भ्रामक खोज।",
      bn: "বিশ্বের প্রথম আধুনিক উপন্যাস — একজন অভিজাতের বীরত্বের বিভ্রান্তিকর অন্বেষণ।",
      ta: "உலகின் முதல் நவீன நாவல் — ஒரு பிரபுவின் வீரம் தேடும் மாயை நிறைந்த பயணம்.",
      es: "La primera novela moderna del mundo — la búsqueda delirante de gloria caballeresca de un hidalgo.",
    },
    paragraphs: [
      {
        id: "dq1",
        text: {
          en: "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing.",
          hi: "ला मांचा के एक गाँव में, जिसका नाम याद करने की मेरी कोई इच्छा नहीं, कुछ समय पहले एक सज्जन रहते थे जो भाले की रैक में भाला, एक पुरानी ढाल, एक दुबला घोड़ा और शिकार के लिए एक ग्रेहाउंड रखते थे।",
          bn: "লা মানচার একটি গ্রামে, যার নাম মনে করার কোনো ইচ্ছা আমার নেই, কিছুকাল আগে এমন একজন ভদ্রলোক থাকতেন যিনি বর্শা, একটি পুরনো ঢাল, একটি রোগা ঘোড়া ও শিকারের জন্য একটি গ্রেহাউন্ড রাখতেন।",
          ta: "லா மான்சாவின் ஒரு கிராமத்தில், அதன் பெயரை நினைவுகூர எனக்கு ஆசையில்லை, ஒரு பிரபு வாழ்ந்தார், அவர் ஒரு ஈட்டி, பழைய கேடயம், ஒல்லியான குதிரை மற்றும் வேட்டை நாய் வைத்திருந்தார்.",
          es: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.",
        },
        essenceData: {
          originalLine: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme",
          literalVersion: "In a place of the Mancha, of whose name not I-want to-remember-myself",
          translitVersion: "In a village of La Mancha, the name of which I have no desire to call to mind",
          emotionalIntent: "The deliberate forgetting of the village name signals that this story is universal — it could happen anywhere, to anyone who dares to dream beyond their station.",
          adaptationType: "direct",
        },
      },
    ],
  },
  {
    id: "tagore-kabuliwala",
    title: { en: "Kabuliwala (The Man from Kabul)", hi: "काबुलीवाला", bn: "কাবুলিওয়ালা", ta: "காபூலிவாலா", es: "Kabuliwala (El hombre de Kabul)" },
    author: "Rabindranath Tagore",
    genre: "Fiction",
    region: "South Asia",
    coverEmoji: "🍇",
    originalLanguage: "Bengali",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🇮🇳 Regional Highlight", "🌍 Multilingual"],
    description: {
      en: "A story of unexpected friendship between a little girl and an Afghan fruit seller in Calcutta — a meditation on exile, fatherhood, and the borders we carry within.",
      hi: "कलकत्ता में एक छोटी लड़की और एक अफ़गान फल विक्रेता के बीच अप्रत्याशित मित्रता की कहानी।",
      bn: "কলকাতায় একটি ছোট্ট মেয়ে ও একজন আফগান ফলবিক্রেতার অপ্রত্যাশিত বন্ধুত্বের গল্প।",
      ta: "கொல்கத்தாவில் ஒரு சிறுமிக்கும் ஆப்கான் பழ வியாபாரிக்கும் இடையே உருவாகும் நட்பின் கதை.",
      es: "La historia de una amistad inesperada entre una niña y un vendedor de frutas afgano en Calcuta.",
    },
    paragraphs: [
      {
        id: "kw1",
        text: {
          en: "My five-year-old daughter Mini cannot live without chattering. In the first year of her life, she acquired the gift of speech and has never stopped using it since.",
          hi: "मेरी पाँच वर्ष की बेटी मिनी बिना बकबक किए नहीं रह सकती। अपने जीवन के पहले वर्ष में उसने बोलने की कला पाई और तब से कभी रुकी नहीं।",
          bn: "আমার পাঁচ বছরের মেয়ে মিনি কথা না বলে থাকতে পারে না। জীবনের প্রথম বছরেই সে কথা বলার ক্ষমতা পেয়েছিল আর তারপর থেকে থামেনি।",
          ta: "என் ஐந்து வயது மகள் மினி பேசாமல் இருக்க முடியாது. வாழ்க்கையின் முதல் ஆண்டிலேயே பேசும் திறனைப் பெற்றாள், அதன்பிறகு நிறுத்தவே இல்லை.",
          es: "Mi hija de cinco años, Mini, no puede vivir sin charlar. En su primer año de vida adquirió el don del habla y nunca ha dejado de usarlo.",
        },
        culturalNote: {
          en: "Tagore's narration through a father's voice lends the story its warmth — the reader sees Mini's world through eyes full of affectionate amusement.",
          hi: "टैगोर का एक पिता की आवाज़ में वर्णन कहानी को उसकी गर्मजोशी प्रदान करता है।",
          bn: "একজন পিতার কণ্ঠে টেগরের বর্ণনা গল্পটিকে উষ্ণতা দেয়।",
          ta: "ஒரு தந்தையின் குரலில் தாகூரின் விவரிப்பு கதைக்கு இதமான சூடு கொடுக்கிறது.",
          es: "La narración de Tagore desde la voz de un padre le da calidez a la historia.",
        },
      },
    ],
  },
  {
    id: "subramania-bharati",
    title: { en: "Wind Poem (Kāṟṟu)", hi: "हवा कविता", bn: "বায়ু কবিতা", ta: "காற்று", es: "Poema del viento" },
    author: "Subramania Bharati",
    genre: "Poetry",
    region: "South Asia",
    coverEmoji: "🌬️",
    originalLanguage: "Tamil",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🇮🇳 Regional Highlight", "🆕 First Global Translation"],
    isFirstTranslation: true,
    description: {
      en: "A revolutionary Tamil poet's ode to the wind — a metaphor for change, resilience, and the strength needed to face life's storms.",
      hi: "एक क्रांतिकारी तमिल कवि की हवा को समर्पित कविता — परिवर्तन और सहनशीलता का रूपक।",
      bn: "একজন বিপ্লবী তামিল কবির বাতাসের প্রতি কবিতা — পরিবর্তন ও সহনশীলতার রূপক।",
      ta: "புரட்சிகர தமிழ் கவிஞரின் காற்றுக்கான கவிதை — மாற்றம் மற்றும் உறுதிக்கான உருவகம்.",
      es: "Oda de un poeta revolucionario tamil al viento — una metáfora del cambio y la resiliencia.",
    },
    paragraphs: [
      {
        id: "sb1",
        text: {
          en: "Come, O wind! Come, O wind!\nCome and blow with all your might.\nBreak the weak trees, scatter the straw,\nbut the strong ones stand firm, unmoved.",
          hi: "आओ, हे वायु! आओ, हे वायु!\nपूरी शक्ति से बहो।\nकमज़ोर पेड़ों को तोड़ो, तिनके उड़ाओ,\nपर मज़बूत अडिग खड़े रहें।",
          bn: "এসো, হে বাতাস! এসো, হে বাতাস!\nসমস্ত শক্তি দিয়ে বইতে থাকো।\nদুর্বল গাছ ভাঙো, খড় উড়াও,\nকিন্তু শক্তিশালীরা অটল দাঁড়িয়ে থাকে।",
          ta: "வாடா காற்றே! வாடா காற்றே!\nஉன் முழு பலத்துடன் வீசு.\nமெலிந்த மரங்களை முறி, வைக்கோலை சிதறடி,\nஆனால் வலிமையானவை அசையாமல் நிற்கின்றன.",
          es: "¡Ven, oh viento! ¡Ven, oh viento!\nVen y sopla con toda tu fuerza.\nRompe los árboles débiles, dispersa la paja,\npero los fuertes permanecen firmes, inmóviles.",
        },
        essenceData: {
          originalLine: "வாடா காற்றே வாடா",
          literalVersion: "Come wind come",
          translitVersion: "Come, O wind! Come, O wind!",
          emotionalIntent: "Bharati's invocation is defiant, not fearful — he welcomes adversity as a test of strength. The repetition mimics wind gusts.",
          adaptationType: "cultural",
        },
      },
    ],
  },

  // ── HERITAGE / LOST LANGUAGE SECTION ──
  {
    id: "sanskrit-bhagavad-gita",
    title: { en: "Bhagavad Gita (Chapter 2, Verse 47)", hi: "भगवद्गीता (अध्याय 2, श्लोक 47)", bn: "ভগবদ্গীতা (অধ্যায় ২, শ্লোক ৪৭)", ta: "பகவத் கீதை (அத்தியாயம் 2, வசனம் 47)", es: "Bhagavad Gita (Cap. 2, Verso 47)" },
    author: "Vyasa (attributed)",
    genre: "Heritage",
    region: "South Asia",
    coverEmoji: "🕉️",
    originalLanguage: "Sanskrit",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🏛️ Heritage", "🇮🇳 Regional Highlight"],
    isHeritage: true,
    description: {
      en: "The most quoted verse from humanity's oldest philosophical dialogue — on duty, detachment, and the nature of action.",
      hi: "मानवता के सबसे पुराने दार्शनिक संवाद का सबसे उद्धृत श्लोक — कर्तव्य, वैराग्य और कर्म की प्रकृति पर।",
      bn: "মানবতার প্রাচীনতম দার্শনিক সংলাপের সবচেয়ে উদ্ধৃত শ্লোক — কর্তব্য, বৈরাগ্য ও কর্মের প্রকৃতি বিষয়ে।",
      ta: "மனிதகுலத்தின் பழமையான தத்துவ உரையாடலின் மிகவும் மேற்கோள் காட்டப்படும் வசனம்.",
      es: "El verso más citado del diálogo filosófico más antiguo de la humanidad.",
    },
    paragraphs: [
      {
        id: "bg1",
        text: {
          en: "You have the right to perform your duty, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results, and never be attached to inaction.",
          hi: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।",
          bn: "তোমার কর্মেই অধিকার, ফলে নয়।\nকর্মফলের কারণ হয়ো না, অকর্মেও আসক্ত হয়ো না।",
          ta: "செயலில் உனக்கு உரிமை உண்டு, ஆனால் பலனில் இல்லை.\nபலனுக்குக் காரணமாகவும் ஆகாதே, செயலின்மையிலும் பற்று கொள்ளாதே.",
          es: "Tienes derecho a realizar tu deber, pero no estás autorizado a los frutos de tus acciones. Nunca te consideres la causa de los resultados.",
        },
        culturalNote: {
          en: "This verse — karmanye vadhikaraste — is perhaps the most influential statement in Indian philosophy, influencing leaders from Gandhi to Oppenheimer.",
          hi: "यह श्लोक — कर्मण्येवाधिकारस्ते — भारतीय दर्शन का सबसे प्रभावशाली कथन है।",
          bn: "এই শ্লোক — কর্মণ্যেবাধিকারস্তে — ভারতীয় দর্শনের সবচেয়ে প্রভাবশালী উক্তি।",
          ta: "இந்த வசனம் — கர்மண்யேவாதிகாரஸ்தே — இந்திய தத்துவத்தின் மிகவும் செல்வாக்குள்ள கூற்று.",
          es: "Este verso es quizás la declaración más influyente de la filosofía india.",
        },
        essenceData: {
          originalLine: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
          literalVersion: "Action-in-only right-yours, not fruits-in ever",
          translitVersion: "You have the right to perform your duty, but you are not entitled to the fruits of your actions",
          emotionalIntent: "Krishna's teaching distills millennia of wisdom into a single couplet: act with full commitment but release attachment to outcomes. It's radical psychological freedom.",
          adaptationType: "cultural",
        },
      },
    ],
  },
  {
    id: "classical-sangam",
    title: { en: "Kuruntokai (Sangam Love Poetry)", hi: "कुरुंतोगै (संगम प्रेम काव्य)", bn: "কুরুন্তোকৈ (সঙ্গম প্রেম কবিতা)", ta: "குறுந்தொகை (சங்க காதல் கவிதை)", es: "Kuruntokai (Poesía amorosa Sangam)" },
    author: "Various Sangam Poets",
    genre: "Heritage",
    region: "South Asia",
    coverEmoji: "🌸",
    originalLanguage: "Classical Tamil",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🏛️ Heritage", "🆕 First Global Translation", "🇮🇳 Regional Highlight"],
    isFirstTranslation: true,
    isHeritage: true,
    description: {
      en: "2,000-year-old Tamil love poems — among the oldest secular poetry in any living language, mapping emotions to landscapes.",
      hi: "2,000 वर्ष पुरानी तमिल प्रेम कविताएँ — किसी भी जीवित भाषा में सबसे पुरानी धर्मनिरपेक्ष कविता।",
      bn: "২,০০০ বছরের পুরনো তামিল প্রেম কবিতা — যেকোনো জীবন্ত ভাষায় প্রাচীনতম ধর্মনিরপেক্ষ কবিতা।",
      ta: "2,000 ஆண்டுகள் பழமையான தமிழ் காதல் கவிதைகள் — உயிருள்ள எந்த மொழியிலும் பழமையான மதச்சார்பற்ற கவிதை.",
      es: "Poemas de amor tamiles de 2.000 años — entre los más antiguos poemas seculares en cualquier lengua viva.",
    },
    paragraphs: [
      {
        id: "sg1",
        text: {
          en: "What could my mother be\nto yours? What kin is my father\nto yours anyway? And how\ndid you and I meet ever?\nBut in love our hearts are as red earth\nand pouring rain: mingled\nbeyond parting.",
          hi: "मेरी माँ तुम्हारी माँ से क्या लगती है?\nमेरे पिता का तुम्हारे पिता से क्या नाता?\nऔर हम कैसे मिले?\nपर प्रेम में हमारे हृदय लाल मिट्टी\nऔर मूसलाधार बारिश की तरह हैं: इतने घुले\nकि अलग नहीं हो सकते।",
          bn: "আমার মা তোমার মায়ের কে?\nআমার বাবার সাথে তোমার বাবার কী সম্পর্ক?\nআর আমরা কীভাবে মিললাম?\nকিন্তু প্রেমে আমাদের হৃদয় লাল মাটি\nআর ঝরা বৃষ্টির মতো: মিশে গেছে\nযা আর আলাদা করা যায় না।",
          ta: "என் தாய் உன் தாய்க்கு என்ன உறவு?\nஎன் தந்தை உன் தந்தைக்கு என்ன?\nநாம் எவ்வாறு சந்தித்தோம்?\nஆனால் காதலில் நம் இதயங்கள்\nசெம்மண்ணும் பெய்யும் மழையும் போல:\nபிரிக்க முடியாதபடி கலந்துவிட்டன.",
          es: "¿Qué podría ser mi madre\npara la tuya? ¿Qué parentesco tiene mi padre\ncon el tuyo? ¿Y cómo\nnos encontramos tú y yo?\nPero en amor nuestros corazones son como tierra roja\ny lluvia torrencial: mezclados\nmás allá de toda separación.",
        },
        culturalNote: {
          en: "This poem, attributed to Cempulappeyaṉīrār, is one of the most celebrated in world literature. The 'red earth and rain' image has been called the most perfect metaphor for love ever written.",
          hi: "यह कविता विश्व साहित्य की सबसे प्रसिद्ध कविताओं में से एक है। 'लाल मिट्टी और बारिश' का बिंब प्रेम का सबसे सटीक रूपक कहा जाता है।",
          bn: "এই কবিতাটি বিশ্ব সাহিত্যের সবচেয়ে বিখ্যাত কবিতাগুলোর একটি। 'লাল মাটি ও বৃষ্টি' ভাবমূর্তিটিকে প্রেমের সবচেয়ে নিখুঁত রূপক বলা হয়।",
          ta: "இந்தக் கவிதை உலக இலக்கியத்தின் மிகவும் புகழ்பெற்ற கவிதைகளில் ஒன்று. 'செம்மண்ணும் மழையும்' உருவகம் காதலுக்கான மிகச் சிறந்த உருவகம் என்று அழைக்கப்படுகிறது.",
          es: "Este poema es uno de los más celebrados de la literatura mundial. La imagen de 'tierra roja y lluvia' ha sido llamada la metáfora más perfecta del amor.",
        },
        essenceData: {
          originalLine: "யாயும் ஞாயும் யாரா கியரோ",
          literalVersion: "My-mother and your-mother who-being who",
          translitVersion: "What could my mother be to yours?",
          emotionalIntent: "The poet strips away all social bonds — family, caste, origin — to reveal love as an elemental force, like earth absorbing rain. It's a radical act of equality.",
          adaptationType: "metaphor",
        },
      },
    ],
  },
];

// Re-export poetry and idiom data
export const poetryShowcase = [
  {
    id: "poem-tagore-35",
    title: "Gitanjali #35",
    author: "Rabindranath Tagore",
    original: { language: "Bengali" as const, text: "যেখানে মন ভয়শূন্য ও মাথা উঁচু\nযেখানে জ্ঞান মুক্ত\nযেখানে সংকীর্ণ ঘরের দেয়াল\nবিশ্বকে খণ্ডে খণ্ডে ভাগ করেনি" },
    literal: "Where mind fear-free and head high\nWhere knowledge free\nWhere narrow house wall\nWorld pieces pieces divided not",
    translit: "Where the mind is without fear and the head is held high;\nWhere knowledge is free;\nWhere the world has not been broken up into fragments\nby narrow domestic walls;",
    emotionTags: ["freedom", "aspiration", "hope"],
    rhythmNote: "Free verse with cadence building toward the final invocation — each line opens a wider horizon.",
  },
  {
    id: "poem-rumi-reed",
    title: "The Song of the Reed",
    author: "Jalāl al-Dīn Rūmī",
    original: { language: "Persian" as const, text: "بشنو از نی چون حکایت می‌کند\nاز جدایی‌ها شکایت می‌کند" },
    literal: "Listen from reed how story it-tells\nFrom separations complaint it-makes",
    translit: "Listen to the reed flute, how it tells a tale,\ncomplaining of separations—",
    emotionTags: ["longing", "separation", "spiritual yearning"],
    rhythmNote: "Rhyming couplet (masnavi form) — the rhythm mimics the reed's plaintive cry.",
  },
  {
    id: "poem-neruda",
    title: "Poema 20",
    author: "Pablo Neruda",
    original: { language: "Spanish" as const, text: "Puedo escribir los versos más tristes esta noche.\nEscribir, por ejemplo: \"La noche está estrellada,\ny tiritan, azules, los astros, a lo lejos.\"" },
    literal: "I-can write the verses most sad this night.\nWrite, for example: \"The night is star-covered,\nand shiver, blue, the stars, at the distance.\"",
    translit: "Tonight I can write the saddest lines.\nWrite, for example: \"The night is starry,\nand the stars, blue, shiver in the distance.\"",
    emotionTags: ["melancholy", "nostalgia", "love lost"],
    rhythmNote: "Long flowing lines that echo the vastness of night — the rhythm slows like fading memory.",
  },
];

export const idiomShowcase = [
  {
    id: "idiom-1",
    original: "दाल में कुछ काला है",
    originalLang: "Hindi",
    literal: "There is something black in the lentils",
    translit: "Something smells fishy",
    explanation: {
      cultural: "In Indian cuisine, black particles in dal (lentils) indicate something unwanted. The metaphor maps to suspicion.",
      emotional: "Both expressions convey distrust and alertness.",
      localUsage: "Used in everyday Hindi conversation when something seems off or deceptive.",
    },
  },
  {
    id: "idiom-2",
    original: "நெற்றிக்கண் திறந்தாலும் குற்றம் குற்றமே",
    originalLang: "Tamil",
    literal: "Even if the forehead eye opens, a fault is still a fault",
    translit: "A wrong is a wrong, no matter who commits it",
    explanation: {
      cultural: "The 'forehead eye' refers to Lord Shiva's third eye — even divine power cannot excuse wrongdoing.",
      emotional: "Conveys moral absolutism with reverence — firm but not aggressive.",
      localUsage: "Used in Tamil discourse about justice and accountability.",
    },
  },
  {
    id: "idiom-3",
    original: "No hay mal que por bien no venga",
    originalLang: "Spanish",
    literal: "There is no bad from which good does not come",
    translit: "Every cloud has a silver lining",
    explanation: {
      cultural: "The Spanish phrasing emphasizes the inevitability of good emerging, while the English version uses weather metaphor.",
      emotional: "Both offer consolation, but the Spanish version feels more philosophical, the English more visual.",
      localUsage: "Common in Latin American and Spanish conversation as reassurance after setbacks.",
    },
  },
];
