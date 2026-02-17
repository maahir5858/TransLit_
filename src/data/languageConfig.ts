// Scalable language configuration — add new languages here
export type Language =
  | "en" | "hi" | "bn" | "ta" | "te" | "pa" | "gu" | "kn" | "ml"
  | "mr" | "ur" | "or" | "as" | "es" | "fr" | "de" | "pt" | "ar"
  | "zh" | "ja" | "ko" | "ru" | "sa";

export interface LanguageInfo {
  label: string;
  nativeLabel: string;
  script: string;
  region: string;
  rtl?: boolean;
}

export const languages: Record<Language, LanguageInfo> = {
  en: { label: "English", nativeLabel: "English", script: "Latin", region: "Global" },
  hi: { label: "Hindi", nativeLabel: "हिन्दी", script: "Devanagari", region: "South Asia" },
  bn: { label: "Bengali", nativeLabel: "বাংলা", script: "Bengali", region: "South Asia" },
  ta: { label: "Tamil", nativeLabel: "தமிழ்", script: "Tamil", region: "South Asia" },
  te: { label: "Telugu", nativeLabel: "తెలుగు", script: "Telugu", region: "South Asia" },
  pa: { label: "Punjabi", nativeLabel: "ਪੰਜਾਬੀ", script: "Gurmukhi", region: "South Asia" },
  gu: { label: "Gujarati", nativeLabel: "ગુજરાતી", script: "Gujarati", region: "South Asia" },
  kn: { label: "Kannada", nativeLabel: "ಕನ್ನಡ", script: "Kannada", region: "South Asia" },
  ml: { label: "Malayalam", nativeLabel: "മലയാളം", script: "Malayalam", region: "South Asia" },
  mr: { label: "Marathi", nativeLabel: "मराठी", script: "Devanagari", region: "South Asia" },
  ur: { label: "Urdu", nativeLabel: "اردو", script: "Nastaliq", region: "South Asia", rtl: true },
  or: { label: "Odia", nativeLabel: "ଓଡ଼ିଆ", script: "Odia", region: "South Asia" },
  as: { label: "Assamese", nativeLabel: "অসমীয়া", script: "Bengali", region: "South Asia" },
  es: { label: "Spanish", nativeLabel: "Español", script: "Latin", region: "Latin America" },
  fr: { label: "French", nativeLabel: "Français", script: "Latin", region: "Europe" },
  de: { label: "German", nativeLabel: "Deutsch", script: "Latin", region: "Europe" },
  pt: { label: "Portuguese", nativeLabel: "Português", script: "Latin", region: "Latin America" },
  ar: { label: "Arabic", nativeLabel: "العربية", script: "Arabic", region: "Middle East", rtl: true },
  zh: { label: "Chinese", nativeLabel: "中文", script: "Hanzi", region: "East Asia" },
  ja: { label: "Japanese", nativeLabel: "日本語", script: "Mixed", region: "East Asia" },
  ko: { label: "Korean", nativeLabel: "한국어", script: "Hangul", region: "East Asia" },
  ru: { label: "Russian", nativeLabel: "Русский", script: "Cyrillic", region: "Europe" },
  sa: { label: "Sanskrit", nativeLabel: "संस्कृतम्", script: "Devanagari", region: "South Asia" },
};

// Subset of languages that have curated content in the library
export type ContentLanguage = "en" | "hi" | "bn" | "ta" | "es";

export const contentLanguageLabels: Record<ContentLanguage, string> = {
  en: "English",
  hi: "हिन्दी",
  bn: "বাংলা",
  ta: "தமிழ்",
  es: "Español",
};

// All languages available for AI translation
export const aiTranslationLanguages: Language[] = Object.keys(languages) as Language[];

export const getLanguageLabel = (lang: Language): string => languages[lang].nativeLabel;
export const getLanguageEnglishLabel = (lang: Language): string => languages[lang].label;
export const TOTAL_SUPPORTED_LANGUAGES = Object.keys(languages).length;
