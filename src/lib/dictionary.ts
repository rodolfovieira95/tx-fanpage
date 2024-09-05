import de from "@/locales/de.json";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import nl from "@/locales/nl.json";
import pt from "@/locales/pt.json";

const dictionaries = {
  de,
  en,
  es,
  nl,
  pt,
};

export const getDictionary = async (locale: string) => {
  return dictionaries[locale as keyof typeof dictionaries] || dictionaries.en;
};
