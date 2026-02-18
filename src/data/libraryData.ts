import type { ContentLanguage } from "./languageConfig";

export type Genre = "Poetry" | "Fiction" | "Philosophy" | "Folklore" | "Classic" | "Children" | "Heritage";
export type Region = "South Asia" | "Latin America" | "Europe" | "Middle East" | "East Asia" | "Global";
export type Era = "Ancient" | "Medieval" | "19th Century" | "Modern";
export type PassageLength = "short" | "medium" | "long";

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
  era: Era;
  passageLength: PassageLength;
  coverEmoji: string;
  description: Record<ContentLanguage, string>;
  introduction?: Record<ContentLanguage, string>;
  paragraphs: Paragraph[];
  isFirstTranslation?: boolean;
  isHeritage?: boolean;
  isNew?: boolean;
  originalLanguage: string;
  availableLanguages: string[];
  tags?: string[];
  storytoneMeter?: string;
  moral?: Record<ContentLanguage, string>;
}

// Re-export for backward compatibility
export type Language = ContentLanguage;
export { contentLanguageLabels as languageLabels } from "./languageConfig";

export const libraryWorks: BookWork[] = [
  // ── GITANJALI — Extended Poems ──
  {
    id: "gitanjali",
    title: { en: "Gitanjali (Song Offerings)", hi: "गीतांजलि", bn: "গীতাঞ্জলি", ta: "கீதாஞ்சலி", es: "Gitanjali (Ofrenda lírica)" },
    author: "Rabindranath Tagore",
    genre: "Poetry",
    region: "South Asia",
    era: "Modern",
    passageLength: "medium",
    coverEmoji: "🪷",
    originalLanguage: "Bengali",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🌍 Multilingual", "🇮🇳 Regional Highlight", "Spiritual", "Devotional"],
    introduction: {
      en: "Gitanjali is a collection of 103 prose poems exploring themes of devotion, longing, surrender, divinity, and nature. Tagore's words flow like prayers — intimate conversations with the infinite. The poems earned him the Nobel Prize in Literature in 1913, making him the first non-European laureate.",
      hi: "गीतांजलि 103 गद्य कविताओं का संग्रह है जो भक्ति, लालसा, समर्पण, दिव्यता और प्रकृति के विषयों की खोज करता है।",
      bn: "গীতাঞ্জলি ১০৩টি গদ্য কবিতার সংকলন যা ভক্তি, আকুতি, আত্মসমর্পণ, দিব্যতা ও প্রকৃতির বিষয় অন্বেষণ করে।",
      ta: "கீதாஞ்சலி 103 உரைநடை கவிதைகளின் தொகுப்பு, பக்தி, ஏக்கம், சரணாகதி, தெய்வீகம் மற்றும் இயற்கை பற்றிய கருப்பொருள்களை ஆராய்கிறது.",
      es: "Gitanjali es una colección de 103 poemas en prosa que exploran la devoción, el anhelo, la rendición, la divinidad y la naturaleza.",
    },
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
          en: "Where the mind is without fear and the head is held high;\nWhere knowledge is free;\nWhere the world has not been broken up into fragments by narrow domestic walls;\nWhere words come out from the depth of truth;\nWhere tireless striving stretches its arms towards perfection;\nWhere the clear stream of reason has not lost its way into the dreary desert sand of dead habit;\nWhere the mind is led forward by thee into ever-widening thought and action —\nInto that heaven of freedom, my Father, let my country awake.",
          hi: "जहाँ मन भय से मुक्त हो और सिर ऊँचा उठा हो;\nजहाँ ज्ञान स्वतंत्र हो;\nजहाँ संकीर्ण घरेलू दीवारों ने विश्व को टुकड़ों में न बाँटा हो;\nजहाँ शब्द सत्य की गहराई से निकलते हों;\nजहाँ अथक प्रयास पूर्णता की ओर अपनी बाहें फैलाता हो;\nजहाँ तर्क की स्वच्छ धारा मृत आदतों की उजाड़ रेत में खो न गई हो;\nजहाँ तू मन को सदा विस्तृत होते विचार और कर्म में आगे ले जाता हो —\nउस स्वतंत्रता के स्वर्ग में, हे पिता, मेरा देश जागे।",
          bn: "যেখানে মন ভয়শূন্য ও মাথা উঁচু;\nযেখানে জ্ঞান মুক্ত;\nযেখানে সংকীর্ণ ঘরের দেয়াল বিশ্বকে খণ্ডে খণ্ডে ভাগ করেনি;\nযেখানে সত্যের গভীর থেকে কথা বেরিয়ে আসে;\nযেখানে ক্লান্তিহীন চেষ্টা পূর্ণতার দিকে হাত বাড়ায়;\nযেখানে যুক্তির স্বচ্ছ ধারা মৃত অভ্যাসের মরু বালিতে হারিয়ে যায়নি;\nযেখানে তুমি মনকে ক্রমবিস্তৃত চিন্তা ও কর্মে এগিয়ে নিয়ে যাও —\nসেই স্বাধীনতার স্বর্গে, হে পিতা, আমার দেশ জেগে উঠুক।",
          ta: "மனம் அச்சமின்றி, தலை நிமிர்ந்து நிற்கும் இடத்தில்;\nஅறிவு சுதந்திரமாக இருக்கும் இடத்தில்;\nகுறுகிய சுவர்கள் உலகைத் துண்டுகளாக்காத இடத்தில்;\nஉண்மையின் ஆழத்திலிருந்து சொற்கள் வரும் இடத்தில்;\nஅலுப்பில்லா முயற்சி முழுமையை நோக்கி கைகள் நீட்டும் இடத்தில்;\nபழக்கத்தின் பாலை மணலில் அறிவின் தெளிந்த ஓடை வழி தவறாத இடத்தில்;\nநீ மனதை விரிவடையும் சிந்தனையிலும் செயலிலும் முன்னேற்றும் இடத்தில் —\nஅந்த சுதந்திர சொர்க்கத்தில், என் தந்தையே, என் நாடு விழித்தெழட்டும்.",
          es: "Donde la mente no tiene miedo y la cabeza se mantiene en alto;\nDonde el conocimiento es libre;\nDonde el mundo no ha sido fragmentado por estrechos muros domésticos;\nDonde las palabras surgen de la profundidad de la verdad;\nDonde el esfuerzo incansable extiende sus brazos hacia la perfección;\nDonde la clara corriente de la razón no se ha perdido en la arena árida de los hábitos muertos;\nDonde la mente es guiada por ti hacia un pensamiento y acción cada vez más amplios —\nEn ese cielo de libertad, Padre mío, deja que mi país despierte.",
        },
        culturalNote: {
          en: "Tagore wrote this poem envisioning a free India, where the human spirit soars beyond all barriers. It remains one of the most recited poems in Indian schools.",
          hi: "टैगोर ने यह कविता स्वतंत्र भारत की कल्पना करते हुए लिखी। यह भारतीय विद्यालयों में सबसे अधिक पढ़ी जाने वाली कविताओं में से एक है।",
          bn: "টেগর এই কবিতা লিখেছিলেন স্বাধীন ভারতের কল্পনায়। এটি ভারতীয় বিদ্যালয়ে সবচেয়ে বেশি পাঠিত কবিতাগুলোর একটি।",
          ta: "தாகூர் இந்தக் கவிதையை சுதந்திர இந்தியாவை கற்பனை செய்து எழுதினார். இது இந்திய பள்ளிகளில் அதிகம் படிக்கப்படும் கவிதைகளில் ஒன்று.",
          es: "Tagore escribió este poema imaginando una India libre. Sigue siendo uno de los poemas más recitados en las escuelas indias.",
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
        id: "g-poem1",
        text: {
          en: "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.\n\nThis little flute of a reed thou hast carried over hills and dales, and hast breathed through it melodies eternally new.\n\nAt the immortal touch of thy hands my little heart loses its limits in joy and gives birth to utterance ineffable.\n\nThy infinite gifts come to me only on these very small hands of mine. Ages pass, and still thou pourest, and still there is room to fill.",
          hi: "तूने मुझे अनंत बनाया है, यही तेरी इच्छा है। इस नाज़ुक पात्र को तू बार-बार खाली करता है, और सदा नये जीवन से भरता है।\n\nइस छोटी सरकंडे की बांसुरी को तू पहाड़ों और घाटियों पर ले गया है, और इसमें सदा नयी धुनें फूँकी हैं।\n\nतेरे अमर स्पर्श से मेरा छोटा हृदय आनंद में अपनी सीमाएं खो देता है और अकथनीय अभिव्यक्ति को जन्म देता है।\n\nतेरे अनंत उपहार मेरे इन्हीं छोटे हाथों पर आते हैं। युग बीतते हैं, फिर भी तू उंडेलता है, और अभी भी भरने की जगह है।",
          bn: "তুমি আমাকে অন্তহীন করেছ, এটাই তোমার আনন্দ। এই ক্ষুদ্র পাত্র তুমি বারবার শূন্য করো, আবার নতুন জীবনে ভরে দাও।\n\nএই ছোট্ট নলখাগড়ার বাঁশি তুমি পাহাড়-উপত্যকায় বহন করেছ, চিরকাল নতুন সুর ফুঁকেছ।\n\nতোমার অমর স্পর্শে আমার ছোট্ট হৃদয় আনন্দে সীমা হারায়, অব্যক্ত ভাষার জন্ম দেয়।\n\nতোমার অনন্ত উপহার আমার এই ক্ষুদ্র হাতেই আসে। যুগ যায়, তবু তুমি ঢালো, তবু ভরার জায়গা থাকে।",
          ta: "நீ என்னை முடிவற்றவனாக்கினாய், அதுவே உன் மகிழ்ச்சி. இந்த மெல்லிய பாத்திரத்தை நீ மீண்டும் மீண்டும் காலி செய்து, புதிய உயிரால் நிரப்புகிறாய்.\n\nஇந்தச் சிறு நாணல் குழலை நீ மலைகளிலும் பள்ளத்தாக்குகளிலும் சுமந்து, என்றும் புதிய இசையை இசைத்தாய்.\n\nஉன் அமர ஸ்பரிசத்தில் என் சிறு இதயம் மகிழ்ச்சியில் எல்லைகளை இழக்கிறது.\n\nஉன் எல்லையற்ற கொடைகள் என் இந்தச் சிறு கைகளிலேயே வருகின்றன. யுகங்கள் கடக்கின்றன, இன்னும் நீ ஊற்றுகிறாய்.",
          es: "Me has hecho infinito, tal es tu placer. Este frágil recipiente lo vacías una y otra vez, y lo llenas siempre con vida nueva.\n\nEsta pequeña flauta de caña la has llevado por colinas y valles, y has soplado a través de ella melodías eternamente nuevas.\n\nAl toque inmortal de tus manos mi pequeño corazón pierde sus límites en alegría y da a luz expresiones inefables.\n\nTus dones infinitos llegan a mí solo en estas manos tan pequeñas. Pasan las edades, y aún derramas, y aún hay espacio por llenar.",
        },
        culturalNote: {
          en: "Poem 1 of Gitanjali sets the spiritual tone for the entire collection — the poet as a vessel, emptied and refilled by the divine. The 'frail vessel' metaphor resonates across Sufi, Bhakti, and Christian mystical traditions.",
          hi: "गीतांजलि की पहली कविता पूरे संग्रह का आध्यात्मिक स्वर स्थापित करती है।",
          bn: "গীতাঞ্জলির প্রথম কবিতা সমগ্র সংকলনের আধ্যাত্মিক সুর স্থাপন করে।",
          ta: "கீதாஞ்சலியின் முதல் கவிதை முழு தொகுப்பின் ஆன்மீக தொனியை அமைக்கிறது.",
          es: "El Poema 1 de Gitanjali establece el tono espiritual de toda la colección.",
        },
        essenceData: {
          originalLine: "তুমি আমাকে অন্তহীন করেছ, এটাই তোমার আনন্দ",
          literalVersion: "You me endless made-have, this-is your pleasure",
          translitVersion: "Thou hast made me endless, such is thy pleasure",
          emotionalIntent: "The opening line establishes the paradox of Tagore's theology: the finite self becomes infinite through divine love. 'Pleasure' implies a playful, generous God.",
          adaptationType: "cultural",
        },
      },
      {
        id: "g-poem11",
        text: {
          en: "Leave this chanting and singing and telling of beads! Whom dost thou worship in this lonely dark corner of a temple with doors all shut? Open thine eyes and see thy God is not before thee!\n\nHe is there where the tiller is tilling the hard ground and where the pathmaker is breaking stones. He is with them in sun and in shower, and his garment is covered with dust. Put off thy holy mantle and even like him come down on the dusty soil!\n\nDeliverance? Where is this deliverance to be found? Our master himself has joyfully taken upon him the bonds of creation; he is bound with us all for ever.\n\nCome out of thy meditations and leave aside thy flowers and incense! What harm is there if thy clothes become tattered and stained? Meet him and stand by him in toil and in sweat of thy brow.",
          hi: "छोड़ यह जप और गान और माला फेरना! तू किसे पूज रहा है इस अँधेरे मंदिर के कोने में बंद दरवाज़ों के पीछे? आँखें खोल और देख कि तेरा ईश्वर तेरे सामने नहीं है!\n\nवह वहाँ है जहाँ किसान कठोर भूमि जोत रहा है और जहाँ मार्ग बनाने वाला पत्थर तोड़ रहा है। वह उनके साथ धूप और बारिश में है, और उसका वस्त्र धूल से ढका है। अपना पवित्र चोला उतार और उसी की तरह धूल भरी मिट्टी पर उतर!\n\nमुक्ति? यह मुक्ति कहाँ मिलेगी? हमारे स्वामी ने स्वयं आनंद से सृष्टि के बंधन स्वीकार किए हैं; वे हम सबके साथ सदा के लिए बंधे हैं।\n\nअपने ध्यान से बाहर आ और फूल और धूप छोड़! क्या हर्ज है अगर तेरे कपड़े फटे और मैले हो जाएं? उससे मिल और उसके साथ परिश्रम और पसीने में खड़ा हो।",
          bn: "ছাড় এই জপ আর গান আর মালা ফেরানো! তুমি কাকে পূজা করছ এই অন্ধকার মন্দিরের কোণে বন্ধ দরজার আড়ালে? চোখ খোলো আর দেখো তোমার ঈশ্বর তোমার সামনে নেই!\n\nতিনি সেখানে যেখানে চাষি কঠিন মাটি চষছে আর পথ নির্মাতা পাথর ভাঙছে। তিনি তাদের সাথে রোদে ও বৃষ্টিতে, তাঁর পোশাক ধুলোয় ঢাকা। তোমার পবিত্র চাদর খোলো আর তাঁরই মতো ধুলোমাটিতে নেমে এসো!\n\nমুক্তি? এই মুক্তি কোথায় পাওয়া যাবে? আমাদের প্রভু নিজেই আনন্দে সৃষ্টির বন্ধন গ্রহণ করেছেন; তিনি আমাদের সকলের সাথে চিরকাল বাঁধা।\n\nতোমার ধ্যান থেকে বেরিয়ে এসো, ফুল আর ধূপ সরিয়ে রাখো! কী ক্ষতি যদি তোমার কাপড় ছেঁড়া ও মলিন হয়? তাঁর সাথে দেখা করো, পরিশ্রমে ও ঘামে তাঁর পাশে দাঁড়াও।",
          ta: "இந்த ஜபத்தையும் பாடலையும் ஜபமாலையையும் விடு! கதவுகள் மூடிய இருண்ட கோயில் மூலையில் யாரை வழிபடுகிறாய்? கண்களைத் திற, உன் கடவுள் உன் முன் இல்லை என்று பார்!\n\nஉழவன் கடினமான நிலத்தை உழும் இடத்தில் அவர் இருக்கிறார், பாதை அமைப்பவன் கற்களை உடைக்கும் இடத்தில் இருக்கிறார். வெயிலிலும் மழையிலும் அவர்களுடன் இருக்கிறார், அவரது ஆடை தூசியால் மூடப்பட்டுள்ளது.\n\nவிடுதலை? இந்த விடுதலை எங்கே கிடைக்கும்? நம் எஜமானர் தாமே மகிழ்ச்சியுடன் படைப்பின் கட்டுகளை ஏற்றுக்கொண்டார்.\n\nஉன் தியானத்திலிருந்து வெளியே வா, பூக்களையும் தூபத்தையும் ஒதுக்கு! உன் ஆடைகள் கிழிந்தாலும் கறை படிந்தாலும் என்ன தீங்கு?",
          es: "¡Deja este canto y este rezar y contar cuentas! ¿A quién adoras en este oscuro rincón del templo con las puertas cerradas? ¡Abre los ojos y mira que tu Dios no está ante ti!\n\nÉl está donde el labrador labra la tierra dura y donde el picapedrero rompe piedras. Está con ellos en el sol y en la lluvia, y su vestidura está cubierta de polvo. ¡Quítate tu manto sagrado y como él desciende al suelo polvoriento!\n\n¿Liberación? ¿Dónde se encuentra esta liberación? Nuestro maestro mismo ha tomado con gozo los lazos de la creación; está atado con todos nosotros para siempre.\n\nSal de tus meditaciones y deja a un lado tus flores e incienso. ¿Qué daño hay si tus ropas se vuelven andrajosas y manchadas? Encuéntrale y permanece a su lado en el trabajo y el sudor de tu frente.",
        },
        culturalNote: {
          en: "Poem 11 is Tagore's most radical spiritual statement — God is not in temples but in the fields with labourers. This poem influenced liberation theology movements worldwide.",
          hi: "कविता 11 टैगोर का सबसे क्रांतिकारी आध्यात्मिक कथन है — ईश्वर मंदिरों में नहीं बल्कि मज़दूरों के साथ खेतों में है।",
          bn: "কবিতা ১১ টেগরের সবচেয়ে বিপ্লবী আধ্যাত্মিক বক্তব্য — ঈশ্বর মন্দিরে নয়, শ্রমিকদের সাথে মাঠে।",
          ta: "கவிதை 11 தாகூரின் மிகவும் தீவிரமான ஆன்மீக அறிக்கை — கடவுள் கோயில்களில் இல்லை, தொழிலாளர்களுடன் வயல்களில் இருக்கிறார்.",
          es: "El Poema 11 es la declaración espiritual más radical de Tagore — Dios no está en los templos sino en los campos con los trabajadores.",
        },
        essenceData: {
          originalLine: "ছাড় এই জপ আর গান আর মালা ফেরানো",
          literalVersion: "Leave this chanting and song and bead-turning",
          translitVersion: "Leave this chanting and singing and telling of beads!",
          emotionalIntent: "Tagore begins with an imperative that shocks the devout — abandon ritual! The urgency mirrors a prophet's voice calling people from comfort to truth.",
          adaptationType: "cultural",
        },
      },
      {
        id: "g-poem12",
        text: {
          en: "The song that I came to sing remains unsung to this day.\nI have spent my days in stringing and in unstringing my instrument.\nThe time has not come true, the words have not been rightly set;\nonly there is the agony of wishing in my heart.\n\nThe blossom has not opened; only the wind is sighing by.\nI have not seen his face, nor have I listened to his voice;\nonly I have heard his gentle footsteps from the road before my house.\n\nThe livelong day has passed in spreading his seat on the floor;\nbut the lamp has not been lit and I cannot ask him into my house.\nI live in the hope of meeting with him; but this meeting is not yet.",
          hi: "जो गीत मैं गाने आया था वह आज तक अनगाया रहा।\nमैंने अपने दिन अपने वाद्य की तारें बाँधने और खोलने में बिताए।\nसमय अनुकूल नहीं हुआ, शब्द ठीक से बैठे नहीं;\nकेवल मेरे हृदय में इच्छा की पीड़ा है।\n\nकली अभी खिली नहीं; केवल हवा उसांसें भर रही है।\nमैंने उसका चेहरा नहीं देखा, न उसकी आवाज़ सुनी;\nकेवल मेरे घर के सामने की सड़क से उसके मृदु पदचाप सुने हैं।\n\nसारा दिन उसके लिए फ़र्श पर आसन बिछाने में बीता;\nपर दीपक नहीं जला और मैं उसे अपने घर नहीं बुला सकता।\nमैं उससे मिलने की आशा में जीता हूँ; पर यह मिलन अभी नहीं हुआ।",
          bn: "যে গান গাইতে এসেছিলাম তা আজও অগাওয়া রয়ে গেছে।\nআমি আমার দিনগুলো আমার বাদ্যযন্ত্রের তার বাঁধা আর খোলায় কাটিয়েছি।\nসময় অনুকূল হয়নি, শব্দগুলো ঠিকমতো বসেনি;\nকেবল আমার হৃদয়ে ইচ্ছার যন্ত্রণা আছে।\n\nকুঁড়ি এখনো ফোটেনি; কেবল বাতাস দীর্ঘশ্বাস ফেলছে।\nআমি তাঁর মুখ দেখিনি, তাঁর কণ্ঠ শুনিনি;\nকেবল আমার ঘরের সামনের পথ থেকে তাঁর মৃদু পদশব্দ শুনেছি।\n\nসারাটা দিন তাঁর জন্য মেঝেতে আসন পাতায় কেটেছে;\nকিন্তু প্রদীপ জ্বালানো হয়নি আর আমি তাঁকে ঘরে ডাকতে পারিনি।\nআমি তাঁর সাথে দেখা হওয়ার আশায় বেঁচে আছি; কিন্তু এই দেখা এখনো হয়নি।",
          ta: "நான் பாட வந்த பாடல் இன்றுவரை பாடப்படாமல் உள்ளது.\nஎன் நாட்களை என் இசைக்கருவியின் நரம்புகளை கட்டியும் அவிழ்த்தும் கழித்தேன்.\nநேரம் சரியாகவில்லை, சொற்கள் சரியாக அமையவில்லை;\nஎன் இதயத்தில் ஏக்கத்தின் வேதனை மட்டுமே உள்ளது.\n\nமொட்டு இன்னும் மலரவில்லை; காற்று மட்டுமே பெருமூச்சு விடுகிறது.\nஅவர் முகத்தைக் காணவில்லை, குரலைக் கேட்கவில்லை;\nஎன் வீட்டின் முன் சாலையிலிருந்து அவரது மெல்லிய காலடி ஓசையை மட்டுமே கேட்டேன்.",
          es: "La canción que vine a cantar permanece sin cantarse hasta hoy.\nHe pasado mis días tensando y destensando mi instrumento.\nEl momento no ha llegado, las palabras no se han colocado bien;\nsolo hay la agonía del deseo en mi corazón.\n\nEl capullo no se ha abierto; solo el viento suspira a su paso.\nNo he visto su rostro, ni he escuchado su voz;\nsolo he oído sus suaves pasos desde el camino frente a mi casa.\n\nEl largo día ha pasado extendiendo su asiento en el suelo;\npero la lámpara no se ha encendido y no puedo invitarlo a mi casa.\nVivo con la esperanza de encontrarme con él; pero este encuentro aún no ha sido.",
        },
        essenceData: {
          originalLine: "যে গান গাইতে এসেছিলাম তা আজও অগাওয়া রয়ে গেছে",
          literalVersion: "Which song sing-to came-had that today-also unsung remained-has",
          translitVersion: "The song that I came to sing remains unsung to this day",
          emotionalIntent: "The poet confesses creative impotence before the divine — a paradox where the greatest art is the longing for art itself.",
          adaptationType: "metaphor",
        },
      },
    ],
  },

  // ── BHAGAVAD GITA — Extended Chapters ──
  {
    id: "bhagavad-gita-ch2",
    title: { en: "Bhagavad Gita — Chapter 2: Sankhya Yoga", hi: "भगवद्गीता — अध्याय 2: सांख्य योग", bn: "ভগবদ্গীতা — অধ্যায় ২: সাংখ্য যোগ", ta: "பகவத் கீதை — அத்தியாயம் 2: சாங்கிய யோகம்", es: "Bhagavad Gita — Capítulo 2: Sankhya Yoga" },
    author: "Vyasa (attributed)",
    genre: "Philosophy",
    region: "South Asia",
    era: "Ancient",
    passageLength: "long",
    coverEmoji: "🕉️",
    originalLanguage: "Sanskrit",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🏛️ Heritage", "🇮🇳 Regional Highlight", "Philosophical"],
    isHeritage: true,
    introduction: {
      en: "Chapter 2 of the Bhagavad Gita, known as Sankhya Yoga (The Yoga of Knowledge), contains Krishna's most foundational teachings. When Arjuna collapses in despair on the battlefield, refusing to fight, Krishna begins with emotional counsel and then reveals the eternal nature of the soul, the philosophy of detached action, and the characteristics of a person of steady wisdom.",
      hi: "भगवद्गीता का अध्याय 2, सांख्य योग के रूप में जाना जाता है, कृष्ण की सबसे मूलभूत शिक्षाओं को समाहित करता है।",
      bn: "ভগবদ্গীতার অধ্যায় ২, সাংখ্য যোগ নামে পরিচিত, কৃষ্ণের সবচেয়ে মৌলিক শিক্ষা ধারণ করে।",
      ta: "பகவத் கீதையின் அத்தியாயம் 2, சாங்கிய யோகம் என்று அறியப்படும், கிருஷ்ணரின் மிக அடிப்படையான போதனைகளைக் கொண்டுள்ளது.",
      es: "El Capítulo 2 del Bhagavad Gita, conocido como Sankhya Yoga, contiene las enseñanzas más fundamentales de Krishna.",
    },
    description: {
      en: "Krishna's foundational teaching on the eternal soul, detached action, and steady wisdom — the philosophical heart of the Gita.",
      hi: "शाश्वत आत्मा, निष्काम कर्म और स्थिर बुद्धि पर कृष्ण की मूलभूत शिक्षा — गीता का दार्शनिक हृदय।",
      bn: "শাশ্বত আত্মা, নিষ্কাম কর্ম ও স্থির বুদ্ধি সম্পর্কে কৃষ্ণের মৌলিক শিক্ষা।",
      ta: "நித்திய ஆன்மா, பற்றற்ற செயல் மற்றும் நிலையான ஞானம் பற்றிய கிருஷ்ணரின் அடிப்படை போதனை.",
      es: "La enseñanza fundamental de Krishna sobre el alma eterna, la acción desapegada y la sabiduría firme.",
    },
    paragraphs: [
      {
        id: "bg-2-47",
        text: {
          en: "karmaṇy evādhikāras te mā phaleṣu kadācana\nmā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi\n\nYou have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.\n\nThis verse is the cornerstone of Karma Yoga. Krishna does not ask Arjuna to renounce action, but to renounce attachment to its outcome. The teaching applies equally to a warrior on a battlefield and a student facing an examination — act with full devotion, but release the anxiety of results. This radical idea influenced Mahatma Gandhi's philosophy of selfless service and continues to guide millions seeking equanimity in daily life.",
          hi: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि\n\nतुम्हारा अधिकार केवल कर्म करने में है, उसके फल में कभी नहीं। न कर्मफल का कारण बनो, न अकर्म में आसक्त होओ।\n\nयह श्लोक कर्म योग की आधारशिला है। कृष्ण अर्जुन से कर्म त्यागने को नहीं, बल्कि फल के प्रति आसक्ति त्यागने को कहते हैं। यह शिक्षा युद्धभूमि के योद्धा और परीक्षा देने वाले छात्र दोनों पर समान रूप से लागू होती है। इस विचार ने महात्मा गांधी के निःस्वार्थ सेवा के दर्शन को प्रभावित किया।",
          bn: "কর্মণ্যেবাধিকারস্তে মা ফলেষু কদাচন\nমা কর্মফলহেতুর্ভূর্মা তে সঙ্গোঽস্ত্বকর্মণি\n\nতোমার অধিকার শুধু কর্মে, ফলে কখনো নয়। কর্মফলের কারণ হয়ো না, অকর্মেও আসক্ত হয়ো না।\n\nএই শ্লোক কর্ম যোগের ভিত্তিপ্রস্তর। কৃষ্ণ অর্জুনকে কর্ম ত্যাগ করতে বলেন না, বরং ফলের প্রতি আসক্তি ত্যাগ করতে বলেন।",
          ta: "கர்மண்யேவாதிகாரஸ்தே மா பலேஷு கதாசன\nமா கர்மபலஹேதுர்பூர்மா தே சங்கோஸ்த்வகர்மணி\n\nசெயலில் மட்டுமே உனக்கு உரிமை உண்டு, பலனில் ஒருபோதும் இல்லை. பலனுக்குக் காரணமாகவும் ஆகாதே, செயலின்மையிலும் பற்று கொள்ளாதே.\n\nஇந்த வசனம் கர்ம யோகத்தின் அடிப்படைக்கல். கிருஷ்ணர் அர்ஜுனனிடம் செயலை துறக்கச் சொல்லவில்லை, பலன் மீதான பற்றை துறக்கச் சொல்கிறார்.",
          es: "karmaṇy evādhikāras te mā phaleṣu kadācana\n\nTienes derecho a realizar tus deberes prescritos, pero no estás autorizado a los frutos de tus acciones. Nunca te consideres la causa de los resultados, y nunca te apegues a no cumplir tu deber.\n\nEste verso es la piedra angular del Karma Yoga. Krishna no pide a Arjuna que renuncie a la acción, sino al apego a su resultado. Esta idea radical influyó en la filosofía de servicio desinteresado de Mahatma Gandhi.",
        },
        culturalNote: {
          en: "This verse — karmanye vadhikaraste — is perhaps the most influential statement in Indian philosophy, quoted by leaders from Gandhi to Oppenheimer.",
          hi: "यह श्लोक भारतीय दर्शन का सबसे प्रभावशाली कथन है।",
          bn: "এই শ্লোক ভারতীয় দর্শনের সবচেয়ে প্রভাবশালী উক্তি।",
          ta: "இந்த வசனம் இந்திய தத்துவத்தின் மிகவும் செல்வாக்குள்ள கூற்று.",
          es: "Este verso es quizás la declaración más influyente de la filosofía india.",
        },
        essenceData: {
          originalLine: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
          literalVersion: "Action-in-only right-yours, not fruits-in ever",
          translitVersion: "You have the right to perform your duty, but you are not entitled to the fruits of your actions",
          emotionalIntent: "Krishna distills millennia of wisdom into a single couplet: act with full commitment but release attachment to outcomes. It's radical psychological freedom.",
          adaptationType: "cultural",
        },
      },
      {
        id: "bg-2-48",
        text: {
          en: "yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya\nsiddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate\n\nPerform your duty established in yoga, O Arjuna, abandoning attachment and remaining equal in success and failure. Such equanimity is called yoga.\n\nKrishna here defines yoga not as physical postures but as a state of mental equilibrium. The warrior must fight with skill and dedication, yet remain unmoved by victory or defeat. This teaching echoes in Stoic philosophy and modern mindfulness — the art of full engagement without emotional enslavement.",
          hi: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनंजय\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते\n\nहे अर्जुन, योग में स्थित होकर कर्म करो, आसक्ति त्यागकर सफलता और असफलता में समान रहो। ऐसी समता को ही योग कहते हैं।",
          bn: "যোগস্থঃ কুরু কর্মাণি সঙ্গং ত্যক্ত্বা ধনঞ্জয়\nসিদ্ধ্যসিদ্ধ্যোঃ সমো ভূত্বা সমত্বং যোগ উচ্যতে\n\nহে অর্জুন, যোগে স্থিত হয়ে কর্ম করো, আসক্তি ত্যাগ করে সাফল্য ও ব্যর্থতায় সমান থাকো। এই সমতাকেই যোগ বলে।",
          ta: "யோகஸ்தஃ குரு கர்மாணி சங்கம் த்யக்த்வா தனஞ்ஜய\nசித்த்யசித்த்யோஃ சமோ பூத்வா சமத்வம் யோக உச்யதே\n\nஅர்ஜுனா, யோகத்தில் நிலைபெற்று செயல்களைச் செய், பற்றை விட்டு வெற்றி தோல்வியில் சமமாக இரு. இந்த சமநிலையே யோகம் என்று அழைக்கப்படுகிறது.",
          es: "yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya\n\nRealiza tu deber establecido en el yoga, oh Arjuna, abandonando el apego y permaneciendo igual en éxito y fracaso. Tal ecuanimidad se llama yoga.",
        },
        essenceData: {
          originalLine: "समत्वं योग उच्यते",
          literalVersion: "Equanimity yoga called-is",
          translitVersion: "Such equanimity is called yoga",
          emotionalIntent: "Krishna redefines yoga from ritual practice to psychological mastery — true yoga is inner balance, not external posture.",
          adaptationType: "cultural",
        },
      },
    ],
  },
  {
    id: "bhagavad-gita-ch12",
    title: { en: "Bhagavad Gita — Chapter 12: Bhakti Yoga", hi: "भगवद्गीता — अध्याय 12: भक्ति योग", bn: "ভগবদ্গীতা — অধ্যায় ১২: ভক্তি যোগ", ta: "பகவத் கீதை — அத்தியாயம் 12: பக்தி யோகம்", es: "Bhagavad Gita — Capítulo 12: Bhakti Yoga" },
    author: "Vyasa (attributed)",
    genre: "Philosophy",
    region: "South Asia",
    era: "Ancient",
    passageLength: "medium",
    coverEmoji: "🙏",
    originalLanguage: "Sanskrit",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🏛️ Heritage", "🇮🇳 Regional Highlight", "Devotional"],
    isHeritage: true,
    description: {
      en: "The path of devotion — Krishna describes the qualities of an ideal devotee and declares that loving surrender is the simplest path to the divine.",
      hi: "भक्ति का मार्ग — कृष्ण एक आदर्श भक्त के गुणों का वर्णन करते हैं।",
      bn: "ভক্তির পথ — কৃষ্ণ একজন আদর্শ ভক্তের গুণাবলী বর্ণনা করেন।",
      ta: "பக்தியின் பாதை — கிருஷ்ணர் ஒரு சிறந்த பக்தரின் குணங்களை விவரிக்கிறார்.",
      es: "El camino de la devoción — Krishna describe las cualidades de un devoto ideal.",
    },
    paragraphs: [
      {
        id: "bg-12-13",
        text: {
          en: "adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca\nnirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī\n\nHe who is free from hatred towards all beings, who is friendly and compassionate, who is free from the sense of 'I' and 'mine', who is even-minded in pain and pleasure, and who is forgiving — such a devotee is dear to Me.\n\nKrishna's description of the ideal devotee reads like a universal charter for human decency. The qualities listed — freedom from hatred, compassion, egolessness, equanimity, forgiveness — transcend religion. They describe not a saint withdrawn from the world, but a person deeply engaged with it, responding to life's challenges with grace rather than reactivity. This passage has been compared to the Beatitudes in its moral vision and to Buddhist mettā meditation in its emphasis on universal loving-kindness.",
          hi: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी\n\nजो सब प्राणियों से द्वेष रहित, मित्रवत और करुणामय है, जो 'मैं' और 'मेरा' की भावना से मुक्त है, दुख-सुख में समान और क्षमाशील है — ऐसा भक्त मुझे प्रिय है।\n\nकृष्ण द्वारा आदर्श भक्त का वर्णन मानवीय शालीनता का एक सार्वभौमिक चार्टर है।",
          bn: "অদ্বেষ্টা সর্বভূতানাং মৈত্রঃ করুণ এব চ\nনির্মমো নিরহংকারঃ সমদুঃখসুখঃ ক্ষমী\n\nযিনি সকল প্রাণীর প্রতি বিদ্বেষমুক্ত, মৈত্রীপূর্ণ ও করুণাময়, 'আমি' ও 'আমার' বোধ থেকে মুক্ত, সুখ-দুঃখে সমান ও ক্ষমাশীল — এমন ভক্ত আমার প্রিয়।",
          ta: "அத்வேஷ்டா சர்வபூதானாம் மைத்ரஃ கருண ஏவ ச\nநிர்மமோ நிரஹங்காரஃ சமதுஃகசுகஃ க்ஷமீ\n\nஅனைத்து உயிர்களிடமும் வெறுப்பற்றவர், நட்பானவர், கருணையுள்ளவர், 'நான்' 'எனது' என்ற உணர்வற்றவர், இன்ப துன்பத்தில் சமநிலையானவர், மன்னிப்பவர் — அத்தகைய பக்தர் எனக்கு அன்பானவர்.",
          es: "Aquel que está libre de odio hacia todos los seres, que es amistoso y compasivo, libre del sentido del 'yo' y lo 'mío', ecuánime en dolor y placer, y que perdona — tal devoto es querido por Mí.",
        },
        essenceData: {
          originalLine: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च",
          literalVersion: "Non-hater all-beings-of, friendly compassionate indeed and",
          translitVersion: "He who is free from hatred towards all beings, who is friendly and compassionate",
          emotionalIntent: "Krishna's list reads like a moral checklist that transcends religion — these qualities describe not a saint but a fully realized human being.",
          adaptationType: "cultural",
        },
      },
    ],
  },

  // ── PANCHATANTRA — Complete Stories ──
  {
    id: "panchatantra-lion-rabbit",
    title: { en: "The Lion and the Clever Rabbit", hi: "शेर और चतुर खरगोश", bn: "সিংহ ও চতুর খরগোশ", ta: "சிங்கமும் புத்திசாலி முயலும்", es: "El león y el conejo astuto" },
    author: "Vishnu Sharma",
    genre: "Folklore",
    region: "South Asia",
    era: "Ancient",
    passageLength: "long",
    coverEmoji: "🦁",
    originalLanguage: "Sanskrit",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🌍 Multilingual", "🇮🇳 Regional Highlight", "Fable"],
    storytoneMeter: "Moralistic",
    moral: {
      en: "Intelligence and wit triumph over brute strength. The wise use their mind as their greatest weapon.",
      hi: "बुद्धि और चतुराई क्रूर बल पर विजय पाती है। बुद्धिमान अपने मन को अपना सबसे बड़ा हथियार बनाते हैं।",
      bn: "বুদ্ধি ও চতুরতা নিষ্ঠুর বলকে জয় করে।",
      ta: "அறிவும் புத்திசாலித்தனமும் வலிமையை வெல்லும்.",
      es: "La inteligencia y el ingenio triunfan sobre la fuerza bruta.",
    },
    description: {
      en: "A tyrannical lion terrorizes the forest until a clever rabbit devises an ingenious plan to end his reign — using the lion's own pride against him.",
      hi: "एक अत्याचारी शेर जंगल को आतंकित करता है जब तक एक चतुर खरगोश उसके राज को समाप्त करने की चालाक योजना नहीं बनाता।",
      bn: "একটি অত্যাচারী সিংহ বনকে আতঙ্কিত করে যতক্ষণ না একটি চতুর খরগোশ তার রাজত্ব শেষ করার চতুর পরিকল্পনা করে।",
      ta: "ஒரு கொடுங்கோல் சிங்கம் காட்டை அச்சுறுத்துகிறது, ஒரு புத்திசாலி முயல் அதன் ஆட்சியை முடிவுக்குக் கொண்டுவர திட்டமிடுகிறது.",
      es: "Un león tiránico aterroriza el bosque hasta que un conejo astuto idea un plan ingenioso para acabar con su reinado.",
    },
    paragraphs: [
      {
        id: "plr-1",
        text: {
          en: "In a dense forest, there lived a mighty lion named Bhasuraka. He was the undisputed king of the jungle, but his rule was marked by cruelty. Every day, he hunted and killed far more animals than he needed for food, simply for the pleasure of the hunt. The forest echoed with the cries of terrified creatures, and many families of deer, rabbits, and birds had already fled to distant lands.\n\nThe remaining animals gathered in a great council beneath the oldest banyan tree. \"We cannot go on like this,\" said the old elephant. \"At this rate, none of us will survive the season.\" The deer chief nodded gravely. \"We must find a solution — or abandon our ancestral home forever.\"",
          hi: "एक घने जंगल में, भासुरक नामक एक शक्तिशाली शेर रहता था। वह जंगल का निर्विवाद राजा था, लेकिन उसका शासन क्रूरता से भरा था। हर दिन, वह खाने की ज़रूरत से कहीं अधिक जानवरों का शिकार करता था, केवल शिकार के आनंद के लिए। जंगल भयभीत प्राणियों की चीखों से गूँजता था।\n\nशेष जानवर सबसे पुराने बरगद के पेड़ के नीचे एक महा सभा में इकट्ठे हुए। \"हम ऐसे नहीं चल सकते,\" बूढ़े हाथी ने कहा। \"इस दर से, हम में से कोई भी मौसम नहीं बचेगा।\"",
          bn: "এক ঘন বনে ভাসুরক নামে এক শক্তিশালী সিংহ বাস করত। সে ছিল বনের অবিসংবাদিত রাজা, কিন্তু তার শাসন ছিল নিষ্ঠুরতায় ভরা। প্রতিদিন সে খাবারের চেয়ে অনেক বেশি পশু শিকার করত, কেবল শিকারের আনন্দে।\n\nবাকি প্রাণীরা প্রাচীনতম বটগাছের নিচে মহাসভায় জড়ো হলো। \"এভাবে চলতে পারে না,\" বলল বৃদ্ধ হাতি।",
          ta: "ஒரு அடர்ந்த காட்டில், பாசுரகன் என்ற வலிமையான சிங்கம் வாழ்ந்தது. அது காட்டின் மறுக்க முடியாத ராஜா, ஆனால் அதன் ஆட்சி கொடுமையால் நிறைந்தது. ஒவ்வொரு நாளும், உணவுக்குத் தேவையான அளவை விட அதிக விலங்குகளை வேட்டையாடியது.\n\nமீதமுள்ள விலங்குகள் மிகப் பழமையான ஆலமரத்தின் கீழ் பேரவையில் கூடின.",
          es: "En un bosque denso vivía un poderoso león llamado Bhasuraka. Era el rey indiscutible de la selva, pero su reinado estaba marcado por la crueldad. Cada día cazaba y mataba muchos más animales de los que necesitaba, simplemente por el placer de la caza.\n\nLos animales restantes se reunieron en un gran consejo bajo el baniano más antiguo. \"No podemos seguir así\", dijo el viejo elefante.",
        },
      },
      {
        id: "plr-2",
        text: {
          en: "After much deliberation, the animals sent a delegation to the lion. \"O mighty king,\" said the fox, bowing low, \"we come with a proposal. If you agree to stop your random hunting, we will send one animal to you every day as your meal. This way, you will never go hungry, and we will survive as your subjects.\"\n\nBhasuraka considered this. A meal delivered to his den without effort? \"Very well,\" he growled. \"But if even one day passes without my meal, I shall destroy every creature in this forest.\"\n\nFor many weeks, the arrangement worked. Each day, one unfortunate animal was chosen by lot and sent to the lion's cave. Grief hung over the forest like a perpetual cloud, but at least the mass killings had stopped.",
          hi: "बहुत विचार-विमर्श के बाद, जानवरों ने शेर के पास एक प्रतिनिधिमंडल भेजा। \"हे शक्तिशाली राजा,\" लोमड़ी ने झुककर कहा, \"हम एक प्रस्ताव लेकर आए हैं। यदि आप अपने अंधाधुंध शिकार को रोकने पर सहमत हों, तो हम हर दिन एक जानवर आपके भोजन के रूप में भेजेंगे।\"\n\nभासुरक ने सोचा। बिना मेहनत के गुफा में भोजन पहुँचे? \"ठीक है,\" उसने गुर्राया। \"लेकिन अगर एक दिन भी बिना भोजन के बीता, तो मैं इस जंगल के हर प्राणी को नष्ट कर दूँगा।\"",
          bn: "অনেক আলোচনার পর প্রাণীরা সিংহের কাছে একটি প্রতিনিধি দল পাঠাল। \"হে মহান রাজা,\" শিয়াল বলল, \"আমরা একটি প্রস্তাব নিয়ে এসেছি। আপনি এলোমেলো শিকার বন্ধ করলে আমরা প্রতিদিন একটি প্রাণী আপনার খাবার হিসেবে পাঠাব।\"\n\nঅনেক সপ্তাহ ব্যবস্থাটি কাজ করল।",
          ta: "நீண்ட ஆலோசனைக்குப் பிறகு, விலங்குகள் சிங்கத்திடம் ஒரு குழுவை அனுப்பின. \"வலிமையான ராஜாவே,\" நரி வணங்கி கூறியது, \"நாங்கள் ஒரு முன்மொழிவுடன் வந்துள்ளோம்.\"\n\nபல வாரங்கள் ஏற்பாடு செயல்பட்டது.",
          es: "Tras mucha deliberación, los animales enviaron una delegación al león. \"Oh poderoso rey\", dijo el zorro inclinándose, \"venimos con una propuesta. Si aceptas dejar tu caza indiscriminada, te enviaremos un animal cada día como tu comida.\"\n\nBhasuraka lo consideró. \"Muy bien\", gruñó. \"Pero si pasa un solo día sin mi comida, destruiré a toda criatura en este bosque.\"",
        },
      },
      {
        id: "plr-3",
        text: {
          en: "Then came the day when the lot fell upon a small, old rabbit. The other animals wept, but the rabbit smiled calmly. \"Do not grieve for me,\" he said. \"I have a plan.\"\n\nThe rabbit deliberately arrived at the lion's cave very late. Bhasuraka was furious. \"You are late AND you are tiny!\" he roared. \"Where is my proper meal?\"\n\n\"Forgive me, O King,\" said the rabbit, trembling with perfectly acted fear. \"I was bringing your meal — a fat rabbit — but on the way, another lion attacked me and took it! He said HE is the true king of this forest.\"\n\n\"ANOTHER LION?\" Bhasuraka's eyes blazed. \"Show me this pretender!\"\n\nThe rabbit led the lion to a deep well. \"He lives down there, Your Majesty.\" Bhasuraka peered into the well and saw his own reflection in the dark water below — a fierce lion staring back at him. With a mighty roar, he leaped into the well to attack his rival.\n\nHe was never seen again.\n\nThe forest celebrated for seven days and seven nights, and the rabbit was honored as the wisest creature in all the land.",
          hi: "फिर वह दिन आया जब चिट्ठी एक छोटे, बूढ़े खरगोश पर गिरी। अन्य जानवर रोए, लेकिन खरगोश शांति से मुस्कुराया। \"मेरे लिए शोक मत करो,\" उसने कहा। \"मेरे पास एक योजना है।\"\n\nखरगोश जानबूझकर शेर की गुफा में बहुत देर से पहुँचा। भासुरक क्रोधित था। \"तू देर से आया है और तू बहुत छोटा है!\" उसने दहाड़ा।\n\n\"क्षमा करें, हे राजा,\" खरगोश ने बिल्कुल सटीक अभिनय करते हुए काँपते हुए कहा। \"मैं आपका भोजन ला रहा था — एक मोटा खरगोश — लेकिन रास्ते में एक और शेर ने हम पर हमला किया और उसे छीन लिया! उसने कहा कि वही इस जंगल का असली राजा है।\"\n\n\"एक और शेर?\" भासुरक की आँखें जल उठीं। \"मुझे यह ढोंगी दिखाओ!\"\n\nखरगोश शेर को एक गहरे कुएँ के पास ले गया। \"वह वहाँ नीचे रहता है, महाराज।\" भासुरक ने कुएँ में झाँका और नीचे अँधेरे पानी में अपना ही प्रतिबिंब देखा — एक भयंकर शेर उसे घूर रहा था। एक शक्तिशाली दहाड़ के साथ, वह अपने प्रतिद्वंद्वी पर हमला करने के लिए कुएँ में कूद गया।\n\nवह फिर कभी नहीं दिखा।\n\nजंगल ने सात दिन और सात रात जश्न मनाया, और खरगोश को सारी धरती का सबसे बुद्धिमान प्राणी सम्मानित किया गया।",
          bn: "তারপর সেই দিন এলো যখন ভাগ্য পড়ল একটি ছোট, বৃদ্ধ খরগোশের ওপর। অন্য প্রাণীরা কাঁদল, কিন্তু খরগোশ শান্তভাবে হাসল। \"আমার জন্য শোক করো না,\" সে বলল। \"আমার একটি পরিকল্পনা আছে।\"\n\nখরগোশ ইচ্ছাকৃতভাবে সিংহের গুহায় অনেক দেরিতে পৌঁছাল। সিংহ ক্রুদ্ধ হলো।\n\n\"ক্ষমা করুন, হে রাজা,\" খরগোশ বলল। \"আমি আপনার খাবার আনছিলাম — একটি মোটা খরগোশ — কিন্তু পথে আরেকটি সিংহ আক্রমণ করে সেটি নিয়ে গেল!\"\n\nখরগোশ সিংহকে একটি গভীর কূপের কাছে নিয়ে গেল। সিংহ কূপে নিজের প্রতিবিম্ব দেখে শত্রু ভেবে ঝাঁপ দিল। সে আর কখনো ফিরে আসেনি।",
          ta: "பின்னர் சீட்டு ஒரு சிறிய, வயதான முயல் மீது விழுந்த நாள் வந்தது. முயல் அமைதியாக சிரித்தது. \"எனக்காக வருத்தப்படாதீர்கள்,\" அது கூறியது. \"எனக்கு ஒரு திட்டம் உள்ளது.\"\n\nமுயல் வேண்டுமென்றே சிங்கத்தின் குகைக்கு மிகவும் தாமதமாக வந்தது.\n\n\"மன்னியுங்கள், ராஜாவே,\" முயல் நடுங்கியது. \"வழியில் மற்றொரு சிங்கம் தாக்கி உணவைப் பிடுங்கியது!\"\n\nமுயல் சிங்கத்தை ஒரு ஆழமான கிணற்றுக்கு அழைத்துச் சென்றது. சிங்கம் தண்ணீரில் தன் பிரதிபலிப்பைக் கண்டு எதிரி என்று நினைத்து குதித்தது. அது மீண்டும் காணப்படவில்லை.",
          es: "Llegó el día en que la suerte cayó sobre un pequeño y viejo conejo. Los demás animales lloraron, pero el conejo sonrió con calma. \"No lloréis por mí\", dijo. \"Tengo un plan.\"\n\nEl conejo llegó deliberadamente muy tarde a la cueva del león. \"Perdóname, oh Rey\", dijo el conejo. \"Traía tu comida — un conejo gordo — pero en el camino, ¡otro león me atacó y se lo llevó!\"\n\nEl conejo llevó al león a un pozo profundo. Bhasuraka miró dentro y vio su propio reflejo en el agua oscura. Con un poderoso rugido, saltó al pozo para atacar a su rival.\n\nNunca más se le volvió a ver.",
        },
      },
    ],
  },
  {
    id: "panchatantra-monkey-crocodile",
    title: { en: "The Monkey and the Crocodile", hi: "बंदर और मगरमच्छ", bn: "বানর ও কুমির", ta: "குரங்கும் முதலையும்", es: "El mono y el cocodrilo" },
    author: "Vishnu Sharma",
    genre: "Folklore",
    region: "South Asia",
    era: "Ancient",
    passageLength: "long",
    coverEmoji: "🐒",
    originalLanguage: "Sanskrit",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🌍 Multilingual", "🇮🇳 Regional Highlight", "Fable"],
    storytoneMeter: "Playful",
    moral: {
      en: "Quick thinking can save you from the most dangerous situations. True friendship is tested in times of crisis.",
      hi: "तेज़ सोच आपको सबसे खतरनाक परिस्थितियों से बचा सकती है।",
      bn: "দ্রুত চিন্তা সবচেয়ে বিপজ্জনক পরিস্থিতি থেকে বাঁচাতে পারে।",
      ta: "விரைவான சிந்தனை மிக ஆபத்தான சூழ்நிலைகளிலிருந்து உங்களை காப்பாற்றும்.",
      es: "El pensamiento rápido puede salvarte de las situaciones más peligrosas.",
    },
    description: {
      en: "A friendship between a monkey and a crocodile is tested when the crocodile's wife demands the monkey's heart — leading to a battle of wits on the river.",
      hi: "एक बंदर और मगरमच्छ की दोस्ती की परीक्षा होती है जब मगरमच्छ की पत्नी बंदर का दिल माँगती है।",
      bn: "একটি বানর ও কুমিরের বন্ধুত্বের পরীক্ষা হয় যখন কুমিরের স্ত্রী বানরের হৃদয় চায়।",
      ta: "ஒரு குரங்கும் முதலையும் இடையேயான நட்பு சோதிக்கப்படுகிறது.",
      es: "La amistad entre un mono y un cocodrilo se pone a prueba cuando la esposa del cocodrilo exige el corazón del mono.",
    },
    paragraphs: [
      {
        id: "pmc-1",
        text: {
          en: "On the banks of a great river stood a magnificent jamun tree, its branches heavy with sweet, purple fruit. In this tree lived a monkey named Raktamukha — Red-Face — who was known throughout the forest for his generosity. Every day, he would eat his fill and then toss the remaining fruit into the river below.\n\nOne day, a crocodile named Karalamukha swam to the bank and tasted the floating fruit. \"Delicious!\" he exclaimed. He looked up and saw the monkey grinning from the branches. \"Thank you, friend! I have never tasted anything so sweet.\"\n\n\"Come every day,\" said the monkey cheerfully. \"I have more fruit than I can eat alone.\"\n\nAnd so began an unlikely friendship. Every afternoon, the crocodile would swim to the jamun tree, and the two would spend hours talking — about the river and the forest, about the stars and the seasons. The monkey shared his fruit, and the crocodile shared stories of the underwater world.",
          hi: "एक महान नदी के किनारे एक भव्य जामुन का पेड़ खड़ा था, जिसकी शाखाएँ मीठे, बैंगनी फलों से लदी थीं। इस पेड़ पर रक्तमुख नामक एक बंदर रहता था जो अपनी उदारता के लिए प्रसिद्ध था। हर दिन, वह भरपेट खाता और फिर बचे हुए फल नीचे नदी में फेंक देता।\n\nएक दिन, करालमुख नामक एक मगरमच्छ किनारे पर तैरकर आया और तैरते हुए फल चखे। \"स्वादिष्ट!\" उसने कहा।\n\nइस तरह एक अनोखी दोस्ती शुरू हुई।",
          bn: "একটি বিশাল নদীর তীরে একটি জমকালো জামগাছ দাঁড়িয়ে ছিল। এই গাছে রক্তমুখ নামে একটি বানর থাকত। প্রতিদিন সে পেট ভরে খেয়ে বাকি ফল নদীতে ফেলে দিত।\n\nএকদিন করালমুখ নামে একটি কুমির তীরে সাঁতরে এসে ভেসে আসা ফল খেল। \"সুস্বাদু!\" সে বলল।\n\nএভাবে একটি অসম্ভব বন্ধুত্ব শুরু হলো।",
          ta: "ஒரு பெரிய ஆற்றின் கரையில் ஒரு அழகிய நாவல் மரம் நின்றது. இந்த மரத்தில் ரக்தமுகன் என்ற குரங்கு வாழ்ந்தது. ஒவ்வொரு நாளும் வயிறு நிறைய சாப்பிட்டு மீதமுள்ள பழங்களை ஆற்றில் போடும்.\n\nஒரு நாள் கரளமுகன் என்ற முதலை கரைக்கு நீந்தி வந்து மிதக்கும் பழங்களை சுவைத்தது.\n\nஇவ்வாறு ஒரு அசாதாரண நட்பு தொடங்கியது.",
          es: "A orillas de un gran río se alzaba un magnífico árbol de jamún. En este árbol vivía un mono llamado Raktamukha, conocido por su generosidad.\n\nUn día, un cocodrilo llamado Karalamukha nadó hasta la orilla y probó la fruta flotante. \"¡Delicioso!\"\n\nAsí comenzó una amistad improbable.",
        },
      },
      {
        id: "pmc-2",
        text: {
          en: "The crocodile began bringing the sweet jamun fruit home to his wife. She loved them at first, but soon grew jealous. \"If the fruit from this monkey's tree is so sweet,\" she said slyly, \"imagine how sweet the monkey's heart must be — the heart of a creature that eats such divine fruit every day.\"\n\n\"But he is my friend!\" the crocodile protested.\n\n\"Then you must choose,\" she said coldly. \"Your friend or your wife.\"\n\nTorn between loyalty and love, the crocodile devised a plan. He invited the monkey to ride on his back across the river. \"My wife wishes to meet you,\" he said. \"She has prepared a feast.\"\n\nThe monkey, trusting his friend, climbed onto the crocodile's back. But halfway across the deep river, the crocodile began to sink. \"I must confess,\" he said sadly. \"My wife wants your heart. I am taking you to your death.\"\n\nThe monkey's blood ran cold, but his mind raced. \"Oh dear friend,\" he said calmly, \"why didn't you say so earlier? I don't carry my heart with me — I left it hanging in the jamun tree for safekeeping! Take me back and I'll fetch it for you.\"\n\nThe foolish crocodile believed him and swam back to the riverbank. The moment they reached the tree, the monkey leaped to the highest branch.\n\n\"You fool!\" the monkey called down. \"Who keeps their heart outside their body? Go home to your treacherous wife, and never come back. Our friendship is over.\"\n\nThe crocodile swam away in shame, having lost his only true friend.",
          hi: "मगरमच्छ मीठे जामुन घर ले जाने लगा। उसकी पत्नी को पहले फल बहुत पसंद आए, लेकिन जल्दी ही उसे ईर्ष्या होने लगी। \"अगर इस बंदर के पेड़ का फल इतना मीठा है,\" उसने चालाकी से कहा, \"तो सोचो बंदर का दिल कितना मीठा होगा।\"\n\n\"लेकिन वह मेरा दोस्त है!\" मगरमच्छ ने विरोध किया।\n\n\"तो तुम्हें चुनना होगा,\" उसने ठंडक से कहा। \"तुम्हारा दोस्त या तुम्हारी पत्नी।\"\n\nमगरमच्छ ने बंदर को नदी पार ले जाने के लिए अपनी पीठ पर बैठने का निमंत्रण दिया। नदी के बीच में, मगरमच्छ ने सच बताया।\n\nबंदर ने शांति से कहा, \"अरे मित्र, तुमने पहले क्यों नहीं बताया? मैं अपना दिल अपने साथ नहीं रखता — मैंने इसे जामुन के पेड़ पर सुरक्षित रख छोड़ा है! मुझे वापस ले चलो।\"\n\nमूर्ख मगरमच्छ ने विश्वास कर लिया और वापस तैरा। पेड़ पहुँचते ही बंदर सबसे ऊँची डाल पर कूद गया।\n\n\"मूर्ख!\" बंदर ने नीचे पुकारा। \"कौन अपना दिल शरीर से बाहर रखता है? जाओ अपनी विश्वासघाती पत्नी के पास, और कभी मत लौटो।\"",
          bn: "কুমির মিষ্টি জামফল বাড়িতে আনতে শুরু করল। তার স্ত্রী প্রথমে ভালোবাসল, কিন্তু শীঘ্রই ঈর্ষান্বিত হলো। \"যদি এই বানরের গাছের ফল এত মিষ্টি হয়, ভাবো তার হৃদয় কত মিষ্টি হবে!\"\n\nকুমির বানরকে নদীর মাঝখানে সত্যি কথা বলল। বানর শান্তভাবে বলল, \"আমি আমার হৃদয় সাথে রাখি না — জামগাছে ঝুলিয়ে রেখেছি! আমাকে ফিরিয়ে নাও।\"\n\nমূর্খ কুমির বিশ্বাস করল। গাছে পৌঁছে বানর সবচেয়ে উঁচু ডালে লাফিয়ে উঠল।\n\n\"বোকা! কে হৃদয় শরীরের বাইরে রাখে?\"",
          ta: "முதலை இனிப்பான நாவல் பழங்களை வீட்டிற்கு கொண்டு செல்லத் தொடங்கியது. அதன் மனைவி முதலில் விரும்பினாள், ஆனால் விரைவில் பொறாமைப்பட்டாள்.\n\nமுதலை நடு ஆற்றில் உண்மையை சொன்னது. குரங்கு அமைதியாக கூறியது, \"என் இதயத்தை நான் எடுத்து வரவில்லை — மரத்தில் தொங்கவிட்டுள்ளேன்!\"\n\nமுட்டாள் முதலை நம்பி திரும்பி நீந்தியது. மரத்தை அடைந்ததும் குரங்கு உயரமான கிளைக்கு தாவியது.",
          es: "El cocodrilo comenzó a llevar fruta a casa. Su esposa pronto sintió celos. \"Si la fruta es tan dulce, imagina cuán dulce debe ser el corazón del mono.\"\n\nA mitad del río, el cocodrilo confesó la verdad. El mono dijo calmamente: \"¡Oh amigo, no llevo mi corazón conmigo — lo dejé colgando en el árbol! Llévame de vuelta.\"\n\nEl tonto cocodrilo le creyó y nadó de regreso. Al llegar al árbol, el mono saltó a la rama más alta.\n\n\"¡Tonto! ¿Quién guarda su corazón fuera del cuerpo?\"",
        },
      },
    ],
  },
  {
    id: "panchatantra-blue-jackal",
    title: { en: "The Blue Jackal", hi: "नीला सियार", bn: "নীল শিয়াল", ta: "நீல நரி", es: "El chacal azul" },
    author: "Vishnu Sharma",
    genre: "Folklore",
    region: "South Asia",
    era: "Ancient",
    passageLength: "medium",
    coverEmoji: "🐺",
    originalLanguage: "Sanskrit",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🌍 Multilingual", "🇮🇳 Regional Highlight", "Fable"],
    storytoneMeter: "Satirical",
    moral: {
      en: "Pretending to be what you are not will eventually be exposed. True identity cannot be hidden forever.",
      hi: "जो तुम नहीं हो वह होने का नाटक करना अंततः उजागर हो जाएगा।",
      bn: "যা তুমি নও তা হওয়ার ভান শেষ পর্যন্ত ধরা পড়বে।",
      ta: "நீ அல்லாதது போல் நடிப்பது இறுதியில் அம்பலமாகும்.",
      es: "Fingir ser lo que no eres eventualmente será expuesto.",
    },
    description: {
      en: "A jackal accidentally falls into a vat of blue dye, and his transformed appearance lets him rule the forest — until his true nature reveals itself.",
      hi: "एक सियार गलती से नीले रंग के टब में गिर जाता है और उसकी बदली हुई शक्ल उसे जंगल पर राज करने देती है।",
      bn: "একটি শিয়াল দুর্ঘটনাক্রমে নীল রঙের পাত্রে পড়ে যায়, তার বদলে যাওয়া চেহারা তাকে বন শাসন করতে দেয়।",
      ta: "ஒரு நரி தற்செயலாக நீல சாயத் தொட்டியில் விழுகிறது, மாறிய தோற்றம் காட்டை ஆள அனுமதிக்கிறது.",
      es: "Un chacal cae accidentalmente en una tina de tinte azul, y su apariencia transformada le permite gobernar el bosque.",
    },
    paragraphs: [
      {
        id: "pbj-1",
        text: {
          en: "A jackal named Chandarava lived on the outskirts of a city. One night, driven by terrible hunger, he ventured into the town in search of food. The town dogs spotted him immediately and gave chase. Terrified, Chandarava ran blindly through the narrow streets until he stumbled into a washerman's yard and fell headlong into a large vat of indigo dye.\n\nWhen the dogs lost his scent and departed, Chandarava climbed out of the vat. He was completely transformed — his entire body was now a vivid, brilliant blue. He looked at his reflection in the water and could not recognize himself.\n\nHe slunk back to the forest, and the reaction was extraordinary. Every animal that saw him froze in terror. No one had ever seen such a creature. The lions backed away. The elephants trumpeted in alarm. The deer scattered like leaves in a storm.\n\n\"Who are you?\" whispered the fox chieftain. \"What divine being are you?\"\n\nChandarava saw his opportunity. \"I am sent by Brahma himself,\" he declared in a deep, regal voice. \"I am appointed as your new king. You shall call me Emperor Kakudruma.\"\n\nAnd so the blue jackal became king. He appointed the tiger as his minister, the leopard as his guard, and the elephant as his doorkeeper. He banished all the other jackals from the forest, fearing they might recognize him.\n\nFor many months, he ruled in luxury. But one autumn evening, a pack of jackals outside the forest began to howl at the moon. The sound pierced Chandarava's heart like an arrow. It was the song of his own kind — wild, free, and achingly familiar. Before he could stop himself, he threw back his head and howled.\n\nThe court fell silent. The tiger narrowed his eyes. The leopard sniffed the air. \"That,\" said the fox chieftain slowly, \"is the howl of a jackal.\"\n\nIn an instant, the animals understood they had been deceived. The enraged court fell upon the blue jackal, and that was the end of Emperor Kakudruma.",
          hi: "चंद्ररव नामक एक सियार शहर के बाहरी इलाके में रहता था। एक रात, भयानक भूख से प्रेरित होकर, वह भोजन की तलाश में शहर में घुस गया। शहर के कुत्तों ने उसे तुरंत देख लिया और पीछा किया। डरा हुआ, चंद्ररव गलियों में भागता रहा जब तक कि एक धोबी के आंगन में ठोकर खाकर नील के रंग से भरे एक बड़े टब में जा गिरा।\n\nजब वह बाहर निकला तो पूरी तरह बदल चुका था — उसका पूरा शरीर चमकदार नीला था। जंगल में लौटने पर हर जानवर आतंकित हो गया।\n\n\"मैं ब्रह्मा द्वारा भेजा गया हूँ,\" उसने घोषणा की। \"मैं तुम्हारा नया राजा हूँ।\"\n\nकई महीनों तक उसने विलासिता में राज किया। लेकिन एक शरद शाम, जंगल के बाहर सियारों का एक झुंड चाँद पर हुआँ भरने लगा। यह आवाज़ उसके दिल में तीर की तरह चुभी। इससे पहले कि वह खुद को रोक पाता, उसने सिर पीछे झुकाकर हुआँ भरी।\n\nदरबार शांत हो गया। \"वह,\" लोमड़ी प्रमुख ने धीरे से कहा, \"सियार की हुआँ है।\"",
          bn: "চন্দ্ররব নামে একটি শিয়াল শহরের উপকণ্ঠে থাকত। একরাতে ভয়ানক ক্ষুধায় শহরে ঢুকল। কুকুরদের তাড়া খেয়ে একটি ধোপার উঠোনে নীল রঙের পাত্রে পড়ে গেল।\n\nবেরিয়ে এসে দেখল পুরো শরীর উজ্জ্বল নীল। বনে ফিরলে সব প্রাণী আতঙ্কিত হলো।\n\n\"আমি ব্রহ্মা কর্তৃক প্রেরিত,\" সে ঘোষণা করল।\n\nকিন্তু এক শরতের সন্ধ্যায় শিয়ালদের হুক্কা শুনে সে নিজেও হুক্কা দিল। প্রতারণা ধরা পড়ল।",
          ta: "சந்த்ரரவ என்ற நரி நகரின் புறநகரில் வாழ்ந்தது. ஒரு இரவு பசியால் நகரத்துக்குள் நுழைந்தது. நாய்கள் துரத்தியதில் ஒரு சலவைக்காரனின் முற்றத்தில் நீல சாயத் தொட்டியில் விழுந்தது.\n\nவெளியே வந்தபோது முழு உடலும் பிரகாசமான நீலமாக இருந்தது. காட்டில் அனைத்து விலங்குகளும் பயந்தன.\n\n\"நான் பிரம்மாவால் அனுப்பப்பட்டவன்,\" அது அறிவித்தது.\n\nஆனால் ஒரு இரவு நரிகளின் ஊளையைக் கேட்டு தானும் ஊளையிட்டது. ஏமாற்றம் அம்பலமானது.",
          es: "Un chacal llamado Chandarava vivía en las afueras de una ciudad. Una noche, impulsado por el hambre, se aventuró en la ciudad. Los perros lo persiguieron hasta que cayó en una tina de tinte índigo.\n\nCuando salió, su cuerpo entero era de un azul brillante. Todos los animales del bosque quedaron aterrados.\n\n\"Soy enviado por Brahma\", declaró. \"Soy vuestro nuevo rey.\"\n\nPero una noche de otoño, al oír aullar a otros chacales a la luna, no pudo contenerse y aulló. El engaño fue descubierto.",
        },
      },
    ],
  },

  // ── GLOBAL CLASSICS ──
  {
    id: "pride-and-prejudice",
    title: { en: "Pride and Prejudice", hi: "अभिमान और पूर्वाग्रह", bn: "অহংকার ও কুসংস্কার", ta: "பெருமையும் தவறான எண்ணமும்", es: "Orgullo y Prejuicio" },
    author: "Jane Austen",
    genre: "Classic",
    region: "Europe",
    era: "19th Century",
    passageLength: "long",
    coverEmoji: "💌",
    originalLanguage: "English",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🌍 Multilingual", "🆕 Newly Added"],
    isNew: true,
    introduction: {
      en: "Published in 1813, Pride and Prejudice is Jane Austen's masterwork of wit, social commentary, and romance. Through the sparkling interplay of Elizabeth Bennet and Mr. Darcy, Austen dissects class, marriage, and human folly with a precision that remains razor-sharp two centuries later.",
      hi: "1813 में प्रकाशित, प्राइड एंड प्रेजुडिस जेन ऑस्टिन की बुद्धि, सामाजिक टिप्पणी और रोमांस की उत्कृष्ट कृति है।",
      bn: "১৮১৩ সালে প্রকাশিত, প্রাইড অ্যান্ড প্রেজুডিস জেন অস্টেনের রচনাশৈলী, সামাজিক ভাষ্য ও রোমান্সের মাস্টারপিস।",
      ta: "1813 இல் வெளியிடப்பட்ட பிரைட் அண்ட் பிரெஜுடிஸ் ஜேன் ஆஸ்டினின் நகைச்சுவை, சமூக விமர்சனம் மற்றும் காதலின் தலைசிறந்த படைப்பு.",
      es: "Publicada en 1813, Orgullo y Prejuicio es la obra maestra de Jane Austen sobre ingenio, comentario social y romance.",
    },
    description: {
      en: "The opening chapter of Austen's most beloved novel — a masterclass in irony, social observation, and the marriage market of Regency England.",
      hi: "ऑस्टिन के सबसे प्रिय उपन्यास का प्रारंभिक अध्याय — व्यंग्य और सामाजिक अवलोकन में एक उत्कृष्ट पाठ।",
      bn: "অস্টেনের সবচেয়ে প্রিয় উপন্যাসের প্রারম্ভিক অধ্যায়।",
      ta: "ஆஸ்டினின் மிகவும் அன்பான நாவலின் தொடக்க அத்தியாயம்.",
      es: "El capítulo inicial de la novela más querida de Austen.",
    },
    paragraphs: [
      {
        id: "pp-1",
        text: {
          en: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.\n\nHowever little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.\n\n\"My dear Mr. Bennet,\" said his lady to him one day, \"have you heard that Netherfield Park is let at last?\"\n\nMr. Bennet replied that he had not.\n\n\"But it is,\" returned she; \"for Mrs. Long has just been here, and she told me all about it.\"\n\nMr. Bennet made no answer.\n\n\"Do not you want to know who has taken it?\" cried his wife impatiently.\n\n\"You want to tell me, and I have no objection to hearing it.\"\n\nThis was invitation enough.\n\n\"Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week.\"\n\n\"What is his name?\"\n\n\"Bingley.\"\n\n\"Is he married or single?\"\n\n\"Oh! single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!\"",
          hi: "यह एक सर्वमान्य सत्य है कि एक अच्छी संपत्ति वाले अविवाहित पुरुष को एक पत्नी की आवश्यकता अवश्य होती है।\n\nऐसे पुरुष की भावनाएँ या विचार किसी पड़ोस में पहली बार प्रवेश करते समय कितने भी अज्ञात हों, यह सत्य आसपास के परिवारों के मन में इतना दृढ़ है कि उसे उनकी किसी न किसी बेटी की उचित संपत्ति माना जाता है।\n\n\"मेरे प्रिय मिस्टर बेनेट,\" उनकी पत्नी ने एक दिन उनसे कहा, \"क्या आपने सुना कि नेदरफील्ड पार्क आखिरकार किराए पर उठ गया?\"\n\n\"उसका नाम क्या है?\" \"बिंगले।\" \"वह विवाहित है या अविवाहित?\" \"अविवाहित, प्रिये! हमारी लड़कियों के लिए कितना अच्छा!\"",
          bn: "এটি একটি সর্বজনীনভাবে স্বীকৃত সত্য যে, একজন ভালো সম্পদের অধিকারী অবিবাহিত পুরুষের অবশ্যই একজন স্ত্রীর প্রয়োজন।\n\n\"আমার প্রিয় মিস্টার বেনেট,\" তাঁর স্ত্রী একদিন বললেন, \"আপনি কি শুনেছেন নেদারফিল্ড পার্ক অবশেষে ভাড়া হয়ে গেছে?\"\n\n\"তার নাম কী?\" \"বিংলি।\" \"সে বিবাহিত না অবিবাহিত?\" \"অবিবাহিত! আমাদের মেয়েদের জন্য কী চমৎকার!\"",
          ta: "ஒரு நல்ல செல்வம் படைத்த திருமணமாகாத ஆண் ஒரு மனைவியை விரும்ப வேண்டும் என்பது உலகளாவிய உண்மை.\n\n\"என் அன்பான மிஸ்டர் பென்னட்,\" அவரது மனைவி கூறினார், \"நெதர்ஃபீல்ட் பார்க் கடைசியாக வாடகைக்கு விடப்பட்டது என்று கேள்விப்பட்டீர்களா?\"\n\n\"அவர் பெயர் என்ன?\" \"பிங்லி.\" \"திருமணமானவரா?\" \"திருமணமாகாதவர்! நம் பெண்களுக்கு என்ன நல்ல விஷயம்!\"",
          es: "Es una verdad universalmente reconocida que un hombre soltero en posesión de una buena fortuna debe estar necesitado de esposa.\n\n\"Mi querido señor Bennet\", le dijo su esposa un día, \"¿has oído que Netherfield Park por fin se ha alquilado?\"\n\n\"¿Cómo se llama?\" \"Bingley.\" \"¿Es casado o soltero?\" \"¡Soltero, querido! ¡Qué cosa tan buena para nuestras hijas!\"",
        },
        essenceData: {
          originalLine: "It is a truth universally acknowledged",
          literalVersion: "It is a truth universally acknowledged",
          translitVersion: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          emotionalIntent: "Austen's irony is surgical — the 'universal truth' is actually the assumption of matchmaking mothers. The sentence reads as fact but means the opposite.",
          adaptationType: "direct",
        },
      },
    ],
  },
  {
    id: "les-miserables",
    title: { en: "Les Misérables", hi: "ले मिज़रेबल", bn: "লে মিজেরাবল", ta: "லே மிசெரபிள்ஸ்", es: "Los Miserables" },
    author: "Victor Hugo",
    genre: "Classic",
    region: "Europe",
    era: "19th Century",
    passageLength: "long",
    coverEmoji: "🕯️",
    originalLanguage: "French",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🌍 Multilingual", "🆕 Newly Added"],
    isNew: true,
    introduction: {
      en: "Les Misérables (1862) is Victor Hugo's monumental novel of justice, redemption, and the human capacity for grace. The Bishop Myriel scene — where the Bishop saves the ex-convict Jean Valjean from arrest by claiming the stolen silver was a gift — is one of literature's most powerful moments of mercy.",
      hi: "ले मिज़रेबल (1862) विक्टर ह्यूगो का न्याय, मुक्ति और करुणा का विशाल उपन्यास है।",
      bn: "লে মিজেরাবল (১৮৬২) ভিক্টর হুগোর ন্যায়, মুক্তি ও করুণার বিশাল উপন্যাস।",
      ta: "லே மிசெரபிள்ஸ் (1862) விக்டர் ஹ்யூகோவின் நீதி, மீட்பு மற்றும் கருணையின் நினைவுச்சின்ன நாவல்.",
      es: "Los Miserables (1862) es la monumental novela de Victor Hugo sobre justicia, redención y la capacidad humana de gracia.",
    },
    description: {
      en: "The Bishop Myriel scene — a pivotal moment of mercy that transforms a hardened convict into a man of grace. One of the most powerful scenes in world literature.",
      hi: "बिशप म्यरिएल का दृश्य — दया का एक निर्णायक क्षण जो एक कठोर अपराधी को बदल देता है।",
      bn: "বিশপ মিরিয়েলের দৃশ্য — করুণার এক গুরুত্বপূর্ণ মুহূর্ত।",
      ta: "பிஷப் மிரியல் காட்சி — இரக்கத்தின் முக்கியமான தருணம்.",
      es: "La escena del Obispo Myriel — un momento crucial de misericordia que transforma a un convicto endurecido.",
    },
    paragraphs: [
      {
        id: "lm-1",
        text: {
          en: "The door opened. A singular and violent group made its appearance on the threshold. Three men were holding a fourth by the collar. The three men were gendarmes; the fourth was Jean Valjean.\n\nA brigadier of gendarmes, who appeared to be the chief of the group, was near the door. He entered and advanced towards the Bishop with a military salute.\n\n\"Monseigneur—\" he began.\n\nAt this word Jean Valjean, who was sullen and seemed utterly dejected, raised his head with a stupefied air.\n\n\"Monseigneur!\" he murmured. \"Then he is not the curé?\"\n\n\"Silence!\" said a gendarme. \"He is Monseigneur the Bishop.\"\n\nIn the meantime, Monseigneur Bienvenu had approached as quickly as his great age permitted.\n\n\"Ah! there you are!\" he exclaimed, looking at Jean Valjean. \"I am glad to see you. Well, but how is this? I gave you the candlesticks also, which are of silver like the rest, and for which you can certainly get two hundred francs. Why did you not carry them away with your forks and spoons?\"\n\nJean Valjean opened his eyes wide and stared at the venerable Bishop with an expression which no human tongue could render any account of.\n\n\"Monseigneur,\" said the brigadier of gendarmes, \"so what this man said is true, then? We came across him. He was walking like a man who is running away. We stopped him to look into the matter. He had this silver—\"\n\n\"And he told you,\" interrupted the Bishop with a smile, \"that it had been given to him by a kind old fellow of a priest at whose house he had spent the night? I see how the matter stands. And you have brought him back here? It is a mistake.\"\n\n\"In that case,\" replied the brigadier, \"we can let him go?\"\n\n\"Certainly,\" replied the Bishop.\n\nThe gendarmes released Jean Valjean, who recoiled.\n\n\"Is it true that I am to be released?\" he said, in an almost inarticulate voice, as though he were talking in his sleep.\n\n\"Yes, you are released. Do you not understand?\" said a gendarme.\n\n\"My friend,\" resumed the Bishop, \"before you go, here are your candlesticks. Take them.\"\n\nHe went to the chimney-piece, took the two silver candlesticks, and brought them to Jean Valjean. The two women looked on without a word, without a gesture, without a look which could disturb the Bishop.\n\nJean Valjean was trembling in every limb. He took the two candlesticks mechanically, and with a bewildered air.\n\n\"Now,\" said the Bishop, \"go in peace. By the way, my friend, when you come again, you need not pass through the garden. You can always enter and depart through the street door. It is never fastened with anything but a latch, day or night.\"\n\nThen, turning to the gendarmes: \"Gentlemen, you may retire.\"\n\nThe gendarmes withdrew.\n\nJean Valjean was like a man on the point of fainting.\n\nThe Bishop drew near to him, and said in a low voice: \"Do not forget, never forget, that you have promised to use this money in becoming an honest man.\"\n\nJean Valjean, who had no recollection of ever having promised anything, remained speechless. The Bishop had laid emphasis on the words when he uttered them. He resumed with solemnity:\n\n\"Jean Valjean, my brother, you no longer belong to evil, but to good. It is your soul that I am buying for you. I withdraw it from dark thoughts and from the spirit of perdition, and I give it to God.\"",
          hi: "दरवाज़ा खुला। तीन सिपाही एक चौथे आदमी को कॉलर से पकड़े हुए थे। वह चौथा आदमी जीन वालजीन था।\n\n\"मोन्सेन्यर—\" सिपाही ने शुरू किया।\n\n\"आह! तुम यहाँ हो!\" बिशप ने जीन वालजीन को देखकर कहा। \"मुझे तुम्हें देखकर खुशी हुई। लेकिन यह कैसे? मैंने तुम्हें मोमबत्ती-दान भी दिए थे, जो बाकी की तरह चाँदी के हैं। तुम उन्हें अपने काँटे-चम्मच के साथ क्यों नहीं ले गए?\"\n\n\"अब,\" बिशप ने कहा, \"शांति से जाओ। मेरे मित्र, जब तुम दोबारा आओ, तुम्हें बगीचे से होकर आने की ज़रूरत नहीं। तुम हमेशा सड़क के दरवाज़े से आ-जा सकते हो।\"\n\nबिशप उसके पास आए और धीमी आवाज़ में बोले: \"मत भूलो, कभी मत भूलो, कि तुमने इस पैसे का उपयोग एक ईमानदार आदमी बनने में करने का वादा किया है।\"\n\n\"जीन वालजीन, मेरे भाई, तुम अब बुराई के नहीं, अच्छाई के हो। मैं तुम्हारी आत्मा ख़रीद रहा हूँ। मैं इसे अंधेरे विचारों से छुड़ाकर ईश्वर को दे रहा हूँ।\"",
          bn: "দরজা খুলল। তিন সেনা একটি চতুর্থ মানুষকে কলার ধরে নিয়ে এসেছিল। সেই চতুর্থজন ছিল জঁ ভালজঁ।\n\n\"আহ! তুমি এখানে!\" বিশপ বললেন। \"আমি তোমাকে দেখে খুশি হলাম। কিন্তু কী ব্যাপার? আমি তো তোমাকে মোমদানিগুলোও দিয়েছিলাম!\"\n\n\"এখন,\" বিশপ বললেন, \"শান্তিতে যাও।\"\n\n\"জঁ ভালজঁ, আমার ভাই, তুমি আর মন্দের নও, ভালোর। আমি তোমার আত্মা কিনছি। অন্ধকার চিন্তা থেকে মুক্ত করে ঈশ্বরকে দিচ্ছি।\"",
          ta: "கதவு திறந்தது. மூன்று போலீசார் நான்காவது நபரை கழுத்தைப் பிடித்து இழுத்து வந்தனர். நான்காவது நபர் ஜீன் வால்ஜீன்.\n\n\"ஆ! நீ இங்கே!\" பிஷப் கூறினார். \"மெழுகுத்திரி பிடிகளையும் கொடுத்தேனே!\"\n\n\"இப்போது,\" பிஷப் கூறினார், \"அமைதியுடன் செல்.\"\n\n\"ஜீன் வால்ஜீன், என் சகோதரா, நீ இனி தீமையின் அல்ல, நன்மையின். உன் ஆத்மாவை நான் வாங்குகிறேன். இருள் எண்ணங்களிலிருந்து விடுவித்து கடவுளுக்கு அளிக்கிறேன்.\"",
          es: "La puerta se abrió. Tres gendarmes sujetaban a un cuarto hombre por el cuello. El cuarto era Jean Valjean.\n\n\"¡Ah, aquí estás!\" exclamó el Obispo. \"Me alegro de verte. Pero, ¿cómo es esto? Te di también los candelabros, que son de plata como el resto. ¿Por qué no te los llevaste con los cubiertos?\"\n\n\"Ahora\", dijo el Obispo, \"vete en paz.\"\n\nEl Obispo se acercó y dijo en voz baja: \"No olvides, nunca olvides, que has prometido usar este dinero para convertirte en un hombre honrado.\"\n\n\"Jean Valjean, hermano mío, ya no perteneces al mal, sino al bien. Compro tu alma. La retiro de los pensamientos oscuros y del espíritu de perdición, y se la entrego a Dios.\"",
        },
        essenceData: {
          originalLine: "Jean Valjean, my brother, you no longer belong to evil, but to good",
          literalVersion: "Jean Valjean, my brother, you no longer belong to evil, but to good",
          translitVersion: "Jean Valjean, my brother, you no longer belong to evil, but to good. It is your soul that I am buying for you.",
          emotionalIntent: "The Bishop's lie transforms theft into a gift and a criminal into a brother. This single act of radical mercy becomes the turning point of a 1,500-page novel — and arguably of Western literature's moral imagination.",
          adaptationType: "direct",
        },
      },
    ],
  },
  {
    id: "sherlock-holmes",
    title: { en: "A Study in Scarlet", hi: "एक लाल रंग का अध्ययन", bn: "স্টাডি ইন স্কারলেট", ta: "ஒரு சிவப்பு ஆய்வு", es: "Estudio en Escarlata" },
    author: "Arthur Conan Doyle",
    genre: "Classic",
    region: "Europe",
    era: "19th Century",
    passageLength: "long",
    coverEmoji: "🔍",
    originalLanguage: "English",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🌍 Multilingual", "🆕 Newly Added"],
    isNew: true,
    introduction: {
      en: "A Study in Scarlet (1887) introduced the world to Sherlock Holmes and Dr. John Watson. The opening — Watson's return from Afghanistan and his first meeting with Holmes at St. Bartholomew's Hospital — is one of the most famous character introductions in fiction.",
      hi: "अ स्टडी इन स्कार्लेट (1887) ने दुनिया को शरलॉक होम्स और डॉ. जॉन वॉटसन से परिचित कराया।",
      bn: "এ স্টাডি ইন স্কারলেট (১৮৮৭) বিশ্বকে শার্লক হোমস ও ড. জন ওয়াটসনের সাথে পরিচয় করিয়ে দিয়েছিল।",
      ta: "எ ஸ்டடி இன் ஸ்கார்லெட் (1887) உலகுக்கு ஷெர்லாக் ஹோம்ஸ் மற்றும் டாக்டர் ஜான் வாட்சனை அறிமுகப்படுத்தியது.",
      es: "Estudio en Escarlata (1887) presentó al mundo a Sherlock Holmes y al Dr. John Watson.",
    },
    description: {
      en: "Dr. Watson's first meeting with Sherlock Holmes — the moment that launched one of fiction's greatest partnerships.",
      hi: "डॉ. वॉटसन की शरलॉक होम्स से पहली मुलाकात — वह क्षण जिसने साहित्य की सबसे बड़ी जोड़ी को जन्म दिया।",
      bn: "ড. ওয়াটসনের শার্লক হোমসের সাথে প্রথম সাক্ষাৎ।",
      ta: "டாக்டர் வாட்சனின் ஷெர்லாக் ஹோம்ஸுடனான முதல் சந்திப்பு.",
      es: "El primer encuentro del Dr. Watson con Sherlock Holmes.",
    },
    paragraphs: [
      {
        id: "sh-1",
        text: {
          en: "In the year 1878 I took my degree of Doctor of Medicine of the University of London, and proceeded to Netley to go through the course prescribed for surgeons in the Army. Having completed my studies there, I was duly attached to the Fifth Northumberland Fusiliers as assistant surgeon. The regiment was stationed in India at the time, and before I could join it, the second Afghan war had broken out. On landing at Bombay, I learned that my corps had advanced through the passes, and was already deep in the enemy's country.\n\nI was struck on the shoulder by a Jezail bullet, which shattered the bone and grazed the subclavian artery. I should have fallen into the hands of the murderous Ghazis had it not been for the devotion and courage shown by Murray, my orderly, who threw me across a pack-horse, and succeeded in bringing me safely to the British lines.\n\nWorn with pain, and weakened by the prolonged hardships which I had undergone, I was removed, with a great train of wounded sufferers, to the base hospital at Peshawar. Here I rallied, and had already improved so far as to be able to walk about the wards, and even to bask a little upon the verandah, when I was struck down by enteric fever, that curse of our Indian possessions. For months my life was despaired of, and when at last I came to myself and became convalescent, I was so weak and emaciated that a medical board determined that not a day should be lost in sending me back to England.",
          hi: "1878 में मैंने लंदन विश्वविद्यालय से चिकित्सा में डिग्री प्राप्त की और सेना के सर्जनों के लिए निर्धारित पाठ्यक्रम पूरा करने के लिए नेटली गया। मेरी रेजिमेंट उस समय भारत में तैनात थी, और मैं उससे जुड़ पाता उससे पहले, दूसरा अफ़गान युद्ध छिड़ गया।\n\nमुझे जेज़ाइल गोली कंधे पर लगी, जिसने हड्डी तोड़ दी। मुझे मरे की भक्ति और साहस ने बचाया।\n\nपेशावर के अस्पताल में मैं धीरे-धीरे ठीक हुआ, लेकिन आंत्र ज्वर ने मुझे फिर गिरा दिया। महीनों तक मेरे जीवन की आशा नहीं थी।",
          bn: "১৮৭৮ সালে আমি লন্ডন বিশ্ববিদ্যালয় থেকে মেডিসিনে ডিগ্রি নিলাম। আমার রেজিমেন্ট তখন ভারতে ছিল, দ্বিতীয় আফগান যুদ্ধ শুরু হয়ে গিয়েছিল।\n\nজেজাইল বুলেট কাঁধে লাগল। পেশাওয়ারের হাসপাতালে সুস্থ হচ্ছিলাম, তখন আন্ত্রিক জ্বর ধরল।",
          ta: "1878 ஆம் ஆண்டில் லண்டன் பல்கலைக்கழகத்தில் மருத்துவ பட்டம் பெற்றேன். என் படைப்பிரிவு அப்போது இந்தியாவில் நிலை கொண்டிருந்தது, இரண்டாவது ஆப்கான் போர் வெடித்தது.\n\nஜெஸைல் குண்டு தோளில் பதிந்தது. பெஷாவர் மருத்துவமனையில் குணமடைந்தேன், பின் குடல் காய்ச்சல் தாக்கியது.",
          es: "En el año 1878 obtuve mi título de Doctor en Medicina de la Universidad de Londres. Mi regimiento estaba estacionado en la India, y la segunda guerra afgana había estallado.\n\nFui alcanzado en el hombro por una bala jezail. Fui llevado al hospital base en Peshawar, donde me recuperé, pero la fiebre entérica me derribó de nuevo.",
        },
        essenceData: {
          originalLine: "I was struck on the shoulder by a Jezail bullet",
          literalVersion: "I was struck on the shoulder by a Jezail bullet",
          translitVersion: "I was struck on the shoulder by a Jezail bullet, which shattered the bone and grazed the subclavian artery.",
          emotionalIntent: "Watson's matter-of-fact account of near-death underscores the military stoicism that will contrast beautifully with Holmes's theatrical brilliance.",
          adaptationType: "direct",
        },
      },
    ],
  },

  // ── PRESERVED EXISTING WORKS ──
  {
    id: "borges-garden",
    title: { en: "The Garden of Forking Paths", hi: "कांटेदार रास्तों का बगीचा", bn: "বিভক্ত পথের বাগান", ta: "பிரியும் பாதைகளின் தோட்டம்", es: "El jardín de senderos que se bifurcan" },
    author: "Jorge Luis Borges",
    genre: "Fiction",
    region: "Latin America",
    era: "Modern",
    passageLength: "medium",
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
          hi: "बोर्खेस ने शाखित कथाओं की अवधारणा हाइपरटेक्ट और वीडियो गेम से दशकों पहले बनाई।",
          bn: "বোর্হেস হাইপারটেক্সট ও ভিডিও গেমের দশক আগে শাখাবিশিষ্ট বর্ণনার ধারণা তৈরি করেছিলেন।",
          ta: "ஹைப்பர்டெக்ஸ்ட் மற்றும் வீடியோ கேம்களுக்கு பல தசாப்தங்களுக்கு முன்பே போர்ஹெஸ் கிளைக் கதைகளின் கருத்தை உருவாக்கினார்.",
          es: "Borges inventó el concepto de narrativas ramificadas décadas antes de que el hipertexto y los videojuegos exploraran ideas similares.",
        },
        essenceData: {
          originalLine: "opta — simultáneamente — por todas",
          literalVersion: "he chooses — simultaneously — for all",
          translitVersion: "he chooses — simultaneously — all of them",
          emotionalIntent: "The dramatic em-dashes create a pause that makes 'simultaneously' land with full impact — it's the philosophical bombshell of the story.",
          adaptationType: "direct",
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
    era: "Medieval",
    passageLength: "short",
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
    id: "kalidasa-meghaduta",
    title: { en: "Meghadūta (The Cloud Messenger)", hi: "मेघदूत", bn: "মেঘদূত", ta: "மேகதூதம்", es: "Meghadūta (El mensajero de las nubes)" },
    author: "Kālidāsa",
    genre: "Poetry",
    region: "South Asia",
    era: "Ancient",
    passageLength: "short",
    coverEmoji: "☁️",
    originalLanguage: "Sanskrit",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🇮🇳 Regional Highlight", "🌍 Multilingual"],
    description: {
      en: "A lyric poem where an exiled yaksha sends a message to his beloved through a monsoon cloud.",
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
    id: "premchand-idgah",
    title: { en: "Idgah (The Eid Ground)", hi: "ईदगाह", bn: "ঈদগাহ", ta: "ஈத்காஹ்", es: "Idgah (El campo de Eid)" },
    author: "Munshi Premchand",
    genre: "Fiction",
    region: "South Asia",
    era: "Modern",
    passageLength: "short",
    coverEmoji: "🕌",
    originalLanguage: "Hindi",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🇮🇳 Regional Highlight", "🌍 Multilingual"],
    description: {
      en: "A heartwarming tale of young Hamid who goes to the Eid fair with just three paise — and makes a choice that reveals the depth of a child's love.",
      hi: "छोटे हामिद की मार्मिक कहानी जो सिर्फ तीन पैसे लेकर ईदगाह जाता है।",
      bn: "ছোট্ট হামিদের হৃদয়স্পর্শী গল্প যে মাত্র তিন পয়সা নিয়ে ঈদের মেলায় যায়।",
      ta: "மூன்று பைசாக்களுடன் ஈத் கொண்டாட்டத்திற்குச் செல்லும் சிறுவன் ஹாமித்தின் இதயத்தைத் தொடும் கதை.",
      es: "La conmovedora historia del joven Hamid que va a la feria de Eid con solo tres paisas.",
    },
    paragraphs: [
      {
        id: "id1",
        text: {
          en: "All the boys were buying toys — clay soldiers, tin horses, whistles that sang. Hamid had only three paise. He walked past the toy stalls, looking, not touching.",
          hi: "सब लड़के खिलौने खरीद रहे थे — मिट्टी के सिपाही, टिन के घोड़े। हामिद के पास केवल तीन पैसे थे।",
          bn: "সব ছেলেরা খেলনা কিনছে। হামিদের কাছে মাত্র তিন পয়সা।",
          ta: "அனைத்து சிறுவர்களும் பொம்மைகள் வாங்கிக்கொண்டிருந்தனர். ஹாமித்திடம் மூன்று பைசாக்கள் மட்டுமே இருந்தன.",
          es: "Todos los niños compraban juguetes. Hamid solo tenía tres paisas.",
        },
      },
      {
        id: "id2",
        text: {
          en: "While the other boys spent their money on sweets and toys, Hamid bought a pair of iron tongs — a chimta — for his grandmother Amina, so she wouldn't burn her fingers making rotis.",
          hi: "जब बाकी लड़कों ने मिठाइयों और खिलौनों पर पैसे खर्च किए, हामिद ने अपनी दादी अमीना के लिए एक चिमटा खरीदा।",
          bn: "যখন অন্য ছেলেরা মিষ্টি আর খেলনায় টাকা খরচ করল, হামিদ তার দাদি আমিনার জন্য একটি চিমটা কিনল।",
          ta: "மற்ற சிறுவர்கள் இனிப்புகளிலும் பொம்மைகளிலும் பணத்தை செலவழித்தபோது, ஹாமித் தன் பாட்டி அமீனாவுக்கு ஒரு இரும்பு சிம்டா வாங்கினான்.",
          es: "Mientras los otros niños gastaban en dulces y juguetes, Hamid compró unas tenazas de hierro para su abuela Amina.",
        },
        essenceData: {
          originalLine: "यह चिमटा बड़े काम की चीज़ है",
          literalVersion: "This tongs big work's thing is",
          translitVersion: "These tongs are a thing of great use",
          emotionalIntent: "Hamid's childlike justification reveals selflessness that is both heartbreaking and profoundly beautiful.",
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
    era: "Medieval",
    passageLength: "short",
    coverEmoji: "🗡️",
    originalLanguage: "Spanish",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🌍 Multilingual"],
    description: {
      en: "The world's first modern novel — a nobleman's delusional quest for chivalric glory.",
      hi: "दुनिया का पहला आधुनिक उपन्यास — एक कुलीन व्यक्ति की शौर्य की भ्रामक खोज।",
      bn: "বিশ্বের প্রথম আধুনিক উপন্যাস — একজন অভিজাতের বীরত্বের বিভ্রান্তিকর অন্বেষণ।",
      ta: "உலகின் முதல் நவீன நாவல் — ஒரு பிரபுவின் வீரம் தேடும் மாயை நிறைந்த பயணம்.",
      es: "La primera novela moderna del mundo — la búsqueda delirante de gloria caballeresca.",
    },
    paragraphs: [
      {
        id: "dq1",
        text: {
          en: "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing.",
          hi: "ला मांचा के एक गाँव में, जिसका नाम याद करने की मेरी कोई इच्छा नहीं, कुछ समय पहले एक सज्जन रहते थे।",
          bn: "লা মানচার একটি গ্রামে, যার নাম মনে করার কোনো ইচ্ছা আমার নেই, একজন ভদ্রলোক থাকতেন।",
          ta: "லா மான்சாவின் ஒரு கிராமத்தில், அதன் பெயரை நினைவுகூர எனக்கு ஆசையில்லை, ஒரு பிரபு வாழ்ந்தார்.",
          es: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo.",
        },
        essenceData: {
          originalLine: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme",
          literalVersion: "In a place of the Mancha, of whose name not I-want to-remember-myself",
          translitVersion: "In a village of La Mancha, the name of which I have no desire to call to mind",
          emotionalIntent: "The deliberate forgetting signals universality — this story could happen anywhere.",
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
    era: "Modern",
    passageLength: "short",
    coverEmoji: "🍇",
    originalLanguage: "Bengali",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🇮🇳 Regional Highlight", "🌍 Multilingual"],
    description: {
      en: "A story of unexpected friendship between a little girl and an Afghan fruit seller in Calcutta.",
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
          hi: "मेरी पाँच वर्ष की बेटी मिनी बिना बकबक किए नहीं रह सकती।",
          bn: "আমার পাঁচ বছরের মেয়ে মিনি কথা না বলে থাকতে পারে না।",
          ta: "என் ஐந்து வயது மகள் மினி பேசாமல் இருக்க முடியாது.",
          es: "Mi hija de cinco años, Mini, no puede vivir sin charlar.",
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
    era: "Modern",
    passageLength: "short",
    coverEmoji: "🌬️",
    originalLanguage: "Tamil",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🇮🇳 Regional Highlight", "🆕 First Global Translation"],
    isFirstTranslation: true,
    description: {
      en: "A revolutionary Tamil poet's ode to the wind — a metaphor for change, resilience, and strength.",
      hi: "एक क्रांतिकारी तमिल कवि की हवा को समर्पित कविता।",
      bn: "একজন বিপ্লবী তামিল কবির বাতাসের প্রতি কবিতা।",
      ta: "புரட்சிகர தமிழ் கவிஞரின் காற்றுக்கான கவிதை.",
      es: "Oda de un poeta revolucionario tamil al viento.",
    },
    paragraphs: [
      {
        id: "sb1",
        text: {
          en: "Come, O wind! Come, O wind!\nCome and blow with all your might.\nBreak the weak trees, scatter the straw,\nbut the strong ones stand firm, unmoved.",
          hi: "आओ, हे वायु! आओ, हे वायु!\nपूरी शक्ति से बहो।\nकमज़ोर पेड़ों को तोड़ो, तिनके उड़ाओ,\nपर मज़बूत अडिग खड़े रहें।",
          bn: "এসো, হে বাতাস! এসো, হে বাতাস!\nসমস্ত শক্তি দিয়ে বইতে থাকো।",
          ta: "வாடா காற்றே! வாடா காற்றே!\nஉன் முழு பலத்துடன் வீசு.",
          es: "¡Ven, oh viento! ¡Ven, oh viento!\nVen y sopla con toda tu fuerza.",
        },
        essenceData: {
          originalLine: "வாடா காற்றே வாடா",
          literalVersion: "Come wind come",
          translitVersion: "Come, O wind! Come, O wind!",
          emotionalIntent: "Bharati's invocation is defiant, not fearful — he welcomes adversity as a test of strength.",
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
    era: "Ancient",
    passageLength: "short",
    coverEmoji: "📜",
    originalLanguage: "Tamil",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🇮🇳 Regional Highlight", "🆕 First Global Translation"],
    isFirstTranslation: true,
    description: {
      en: "A masterpiece of Tamil literature — 1,330 couplets covering virtue, wealth, and love.",
      hi: "तमिल साहित्य की कृति — 1330 दोहे।",
      bn: "তামিল সাহিত্যের মাস্টারপিস — ১৩৩০ দোহা।",
      ta: "தமிழ் இலக்கியத்தின் தலைசிறந்த படைப்பு — 1330 குறள்கள்.",
      es: "Una obra maestra de la literatura tamil — 1.330 coplas.",
    },
    paragraphs: [
      {
        id: "tk1",
        text: {
          en: "What is the use of eyes if they cannot express what the heart feels?\nThey are mere spots on the face.",
          hi: "उन आँखों का क्या उपयोग जो हृदय की भावनाओं को व्यक्त न कर सकें?",
          bn: "সেই চোখের কী প্রয়োজন যা হৃদয়ের অনুভূতি প্রকাশ করতে পারে না?",
          ta: "கண்ணிற் கண்டது உள்ளத்தின் உணர்வை வெளிப்படுத்தவில்லையேல்\nஅவை முகத்தில் உள்ள புள்ளிகள் மட்டுமே.",
          es: "¿De qué sirven los ojos si no pueden expresar lo que siente el corazón?",
        },
        essenceData: {
          originalLine: "கண்ணிற் கண்டேன் என்று உரைத்தல் கடிநகர் புகுதல் போல்",
          literalVersion: "Eyes-with saw said-telling, fortified-city entering like",
          translitVersion: "What use are eyes that cannot speak the heart's truth?",
          emotionalIntent: "Thiruvalluvar equates unexpressive eyes with purposeless existence.",
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
    era: "Ancient",
    passageLength: "short",
    coverEmoji: "🌸",
    originalLanguage: "Classical Tamil",
    availableLanguages: ["English", "Hindi", "Bengali", "Tamil", "Spanish"],
    tags: ["🏛️ Heritage", "🆕 First Global Translation", "🇮🇳 Regional Highlight"],
    isFirstTranslation: true,
    isHeritage: true,
    description: {
      en: "2,000-year-old Tamil love poems — among the oldest secular poetry in any living language.",
      hi: "2,000 वर्ष पुरानी तमिल प्रेम कविताएँ।",
      bn: "২,০০০ বছরের পুরনো তামিল প্রেম কবিতা।",
      ta: "2,000 ஆண்டுகள் பழமையான தமிழ் காதல் கவிதைகள்.",
      es: "Poemas de amor tamiles de 2.000 años.",
    },
    paragraphs: [
      {
        id: "sg1",
        text: {
          en: "What could my mother be\nto yours? What kin is my father\nto yours anyway? And how\ndid you and I meet ever?\nBut in love our hearts are as red earth\nand pouring rain: mingled\nbeyond parting.",
          hi: "मेरी माँ तुम्हारी माँ से क्या लगती है?\nमेरे पिता का तुम्हारे पिता से क्या नाता?\nपर प्रेम में हमारे हृदय लाल मिट्टी\nऔर मूसलाधार बारिश की तरह हैं।",
          bn: "আমার মা তোমার মায়ের কে?\nকিন্তু প্রেমে আমাদের হৃদয় লাল মাটি\nআর ঝরা বৃষ্টির মতো মিশে গেছে।",
          ta: "என் தாய் உன் தாய்க்கு என்ன உறவு?\nஆனால் காதலில் நம் இதயங்கள்\nசெம்மண்ணும் பெய்யும் மழையும் போல:\nபிரிக்க முடியாதபடி கலந்துவிட்டன.",
          es: "¿Qué podría ser mi madre\npara la tuya?\nPero en amor nuestros corazones son como tierra roja\ny lluvia torrencial: mezclados\nmás allá de toda separación.",
        },
        culturalNote: {
          en: "The 'red earth and rain' image has been called the most perfect metaphor for love ever written.",
          hi: "'लाल मिट्टी और बारिश' का बिंब प्रेम का सबसे सटीक रूपक कहा जाता है।",
          bn: "'লাল মাটি ও বৃষ্টি' ভাবমূর্তিটি প্রেমের সবচেয়ে নিখুঁত রূপক।",
          ta: "'செம்மண்ணும் மழையும்' உருவகம் காதலுக்கான மிகச் சிறந்த உருவகம்.",
          es: "La imagen de 'tierra roja y lluvia' ha sido llamada la metáfora más perfecta del amor.",
        },
        essenceData: {
          originalLine: "யாயும் ஞாயும் யாரா கியரோ",
          literalVersion: "My-mother and your-mother who-being who",
          translitVersion: "What could my mother be to yours?",
          emotionalIntent: "The poet strips away all social bonds to reveal love as an elemental force.",
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
      cultural: "In Indian cuisine, black particles in dal (lentils) indicate something unwanted.",
      emotional: "Both expressions convey distrust and alertness.",
      localUsage: "Used in everyday Hindi conversation when something seems off.",
    },
  },
  {
    id: "idiom-2",
    original: "நெற்றிக்கண் திறந்தாலும் குற்றம் குற்றமே",
    originalLang: "Tamil",
    literal: "Even if the forehead eye opens, a fault is still a fault",
    translit: "A wrong is a wrong, no matter who commits it",
    explanation: {
      cultural: "The 'forehead eye' refers to Lord Shiva's third eye.",
      emotional: "Conveys moral absolutism with reverence.",
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
      cultural: "The Spanish phrasing emphasizes inevitability of good emerging.",
      emotional: "Both offer consolation, but with different philosophical tones.",
      localUsage: "Common in Latin American and Spanish conversation as reassurance.",
    },
  },
];
