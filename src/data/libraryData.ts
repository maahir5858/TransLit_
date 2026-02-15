export type Language = "en" | "hi" | "bn" | "ta" | "es";

export const languageLabels: Record<Language, string> = {
  en: "English",
  hi: "हिन्दी",
  bn: "বাংলা",
  ta: "தமிழ்",
  es: "Español",
};

export type Genre = "Poetry" | "Fiction" | "Philosophy" | "Folklore";
export type Region = "South Asia" | "Latin America" | "Europe" | "Middle East" | "Global";

export interface Paragraph {
  id: string;
  text: Record<Language, string>;
  culturalNote?: Record<Language, string>;
  idiomNote?: string;
}

export interface BookWork {
  id: string;
  title: Record<Language, string>;
  author: string;
  genre: Genre;
  region: Region;
  coverEmoji: string;
  description: Record<Language, string>;
  paragraphs: Paragraph[];
}

export const libraryWorks: BookWork[] = [
  {
    id: "gitanjali",
    title: {
      en: "Gitanjali (Song Offerings)",
      hi: "गीतांजलि",
      bn: "গীতাঞ্জলি",
      ta: "கீதாஞ்சலி",
      es: "Gitanjali (Ofrenda lírica)",
    },
    author: "Rabindranath Tagore",
    genre: "Poetry",
    region: "South Asia",
    coverEmoji: "🪷",
    description: {
      en: "A collection of prose poems that earned the Nobel Prize in Literature, exploring devotion, nature, and the human spirit.",
      hi: "गद्य कविताओं का संग्रह जिसने साहित्य का नोबेल पुरस्कार जीता, भक्ति, प्रकृति और मानव आत्मा की खोज।",
      bn: "গদ্য কবিতার সংকলন যা সাহিত্যে নোবেল পুরস্কার অর্জন করেছে, ভক্তি, প্রকৃতি ও মানব আত্মার অন্বেষণ।",
      ta: "இலக்கியத்திற்கான நோபல் பரிசு பெற்ற உரைநடை கவிதைகள் தொகுப்பு, பக்தி, இயற்கை மற்றும் மனித ஆன்மாவை ஆராய்கிறது.",
      es: "Una colección de poemas en prosa que ganó el Premio Nobel de Literatura, explorando la devoción, la naturaleza y el espíritu humano.",
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
          hi: "टैगोर ने यह कविता स्वतंत्र भारत की कल्पना करते हुए लिखी, जहाँ मानव आत्मा सभी बाधाओं से ऊपर उठती है।",
          bn: "টেগর এই কবিতা লিখেছিলেন স্বাধীন ভারতের কল্পনায়, যেখানে মানব আত্মা সকল বাধা অতিক্রম করে।",
          ta: "தாகூர் இந்தக் கவிதையை சுதந்திர இந்தியாவை கற்பனை செய்து எழுதினார்.",
          es: "Tagore escribió este poema imaginando una India libre, donde el espíritu humano se eleva más allá de todas las barreras.",
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
      },
    ],
  },
  {
    id: "borges-garden",
    title: {
      en: "The Garden of Forking Paths",
      hi: "कांटेदार रास्तों का बगीचा",
      bn: "বিভক্ত পথের বাগান",
      ta: "பிரியும் பாதைகளின் தோட்டம்",
      es: "El jardín de senderos que se bifurcan",
    },
    author: "Jorge Luis Borges",
    genre: "Fiction",
    region: "Latin America",
    coverEmoji: "🌿",
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
          hi: "सभी कथाओं में, हर बार जब कोई व्यक्ति विभिन्न विकल्पों का सामना करता है, वह एक चुनता है और बाकी को समाप्त कर देता है; लगभग-असंभव-सुलझाने वाले च्वी पेन की रचना में, वह एक साथ — सभी को चुनता है।",
          bn: "সমস্ত কল্পকাহিনীতে, প্রতিবার যখন কেউ বিভিন্ন বিকল্পের মুখোমুখি হয়, সে একটি বেছে নেয় এবং বাকিগুলো বাদ দেয়; প্রায়-অসম্ভব-জটিল চ্যুই পেনের রচনায়, সে একসাথে — সবগুলো বেছে নেয়।",
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
    title: {
      en: "The Masnavi (Selected Verses)",
      hi: "मसनवी (चुनिंदा छंद)",
      bn: "মসনবি (নির্বাচিত পদ)",
      ta: "மஸ்னவி (தேர்ந்தெடுக்கப்பட்ட பாடல்கள்)",
      es: "El Masnavi (Versos selectos)",
    },
    author: "Jalāl al-Dīn Rūmī",
    genre: "Philosophy",
    region: "Middle East",
    coverEmoji: "🌀",
    description: {
      en: "Mystical verses exploring divine love, unity, and the journey of the soul through storytelling and metaphor.",
      hi: "दिव्य प्रेम, एकता और आत्मा की यात्रा को कहानी और रूपक के माध्यम से खोजते रहस्यमय छंद।",
      bn: "গল্প ও রূপকের মাধ্যমে ঐশ্বরিক প্রেম, ঐক্য ও আত্মার যাত্রা অন্বেষণকারী রহস্যময় পদ।",
      ta: "கதைகள் மற்றும் உருவகங்கள் மூலம் தெய்வீக அன்பு, ஒற்றுமை மற்றும் ஆன்மாவின் பயணத்தை ஆராயும் ஆன்மீக பாடல்கள்.",
      es: "Versos místicos que exploran el amor divino, la unidad y el viaje del alma a través de historias y metáforas.",
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
          en: "The reed flute (ney) symbolizes the human soul separated from its divine origin. Rumi opens the Masnavi with this image to set the tone of spiritual longing.",
          hi: "बाँसुरी (नय) मानव आत्मा का प्रतीक है जो अपने दिव्य मूल से अलग हो गई है।",
          bn: "বাঁশি (নে) মানব আত্মার প্রতীক যা তার ঐশ্বরিক উৎস থেকে বিচ্ছিন্ন।",
          ta: "நாணல் குழல் (நெய்) தெய்வீக மூலத்திலிருந்து பிரிந்த மனித ஆன்மாவின் அடையாளம்.",
          es: "La flauta de caña (ney) simboliza el alma humana separada de su origen divino.",
        },
      },
    ],
  },
  {
    id: "panchatantra",
    title: {
      en: "Panchatantra (The Five Principles)",
      hi: "पंचतंत्र",
      bn: "পঞ্চতন্ত্র",
      ta: "பஞ்சதந்திரம்",
      es: "Panchatantra (Los cinco principios)",
    },
    author: "Vishnu Sharma",
    genre: "Folklore",
    region: "South Asia",
    coverEmoji: "🦊",
    description: {
      en: "Ancient Indian fables using animal characters to teach wisdom about politics, friendship, and survival — stories that traveled the Silk Road.",
      hi: "प्राचीन भारतीय कथाएँ जो पशु पात्रों के माध्यम से राजनीति, मित्रता और जीवित रहने की बुद्धि सिखाती हैं।",
      bn: "প্রাচীন ভারতীয় রূপকথা যা পশু চরিত্রের মাধ্যমে রাজনীতি, বন্ধুত্ব ও টিকে থাকার জ্ঞান শেখায়।",
      ta: "அரசியல், நட்பு மற்றும் உயிர்வாழ்வு பற்றிய ஞானத்தை கற்பிக்கும் பண்டைய இந்திய விலங்கு கதைகள்.",
      es: "Fábulas antiguas de la India que usan personajes animales para enseñar sabiduría sobre política, amistad y supervivencia.",
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
          en: "This verse encapsulates the Panchatantra's core message: wit triumphs over brute force. The lion-and-hare fable traveled to Europe via Arabic translations.",
          hi: "यह श्लोक पंचतंत्र के मूल संदेश को समाहित करता है: बुद्धि बल पर विजय प्राप्त करती है।",
          bn: "এই শ্লোক পঞ্চতন্ত্রের মূল বার্তা ধারণ করে: বুদ্ধি বলকে জয় করে।",
          ta: "இந்தச் செய்யுள் பஞ்சதந்திரத்தின் முக்கிய செய்தியை உள்ளடக்கியது: புத்தி வலிமையை வெல்லும்.",
          es: "Este verso encapsula el mensaje central del Panchatantra: el ingenio triunfa sobre la fuerza bruta.",
        },
        idiomNote: "\"lord of beasts\" — A culturally resonant title for the lion found across Indic and Persian literary traditions.",
      },
    ],
  },
];

export const poetryShowcase = [
  {
    id: "poem-tagore-35",
    title: "Gitanjali #35",
    author: "Rabindranath Tagore",
    original: {
      language: "Bengali" as const,
      text: "যেখানে মন ভয়শূন্য ও মাথা উঁচু\nযেখানে জ্ঞান মুক্ত\nযেখানে সংকীর্ণ ঘরের দেয়াল\nবিশ্বকে খণ্ডে খণ্ডে ভাগ করেনি",
    },
    literal: "Where mind fear-free and head high\nWhere knowledge free\nWhere narrow house wall\nWorld pieces pieces divided not",
    translit:
      "Where the mind is without fear and the head is held high;\nWhere knowledge is free;\nWhere the world has not been broken up into fragments\nby narrow domestic walls;",
    emotionTags: ["freedom", "aspiration", "hope"],
    rhythmNote: "Free verse with cadence building toward the final invocation — each line opens a wider horizon.",
  },
  {
    id: "poem-rumi-reed",
    title: "The Song of the Reed",
    author: "Jalāl al-Dīn Rūmī",
    original: {
      language: "Persian" as const,
      text: "بشنو از نی چون حکایت می‌کند\nاز جدایی‌ها شکایت می‌کند",
    },
    literal:
      "Listen from reed how story it-tells\nFrom separations complaint it-makes",
    translit:
      "Listen to the reed flute, how it tells a tale,\ncomplaining of separations—",
    emotionTags: ["longing", "separation", "spiritual yearning"],
    rhythmNote: "Rhyming couplet (masnavi form) — the rhythm mimics the reed's plaintive cry.",
  },
  {
    id: "poem-neruda",
    title: "Poema 20",
    author: "Pablo Neruda",
    original: {
      language: "Spanish" as const,
      text: "Puedo escribir los versos más tristes esta noche.\nEscribir, por ejemplo: \"La noche está estrellada,\ny tiritan, azules, los astros, a lo lejos.\"",
    },
    literal:
      'I-can write the verses most sad this night.\nWrite, for example: "The night is star-covered,\nand shiver, blue, the stars, at the distance."',
    translit:
      'Tonight I can write the saddest lines.\nWrite, for example: "The night is starry,\nand the stars, blue, shiver in the distance."',
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
      emotional: "Both expressions convey distrust and alertness — the listener should be wary.",
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
      cultural: "The 'forehead eye' refers to Lord Shiva's third eye — the ultimate power. Even divine power cannot excuse wrongdoing.",
      emotional: "Conveys moral absolutism with reverence — firm but not aggressive.",
      localUsage: "Used in Tamil discourse about justice and accountability, often in political or ethical debates.",
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
