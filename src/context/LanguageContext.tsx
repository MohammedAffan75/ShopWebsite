"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "kn";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (localizedText: { en: string; kn: string }) => string;
  isKannada: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("hiba_tailor_lang");
      if (stored === "en" || stored === "kn") {
        setLangState(stored);
      }
    } catch {
      // localStorage may fail in private mode or if blocked
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("hiba_tailor_lang", newLang);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "kn" : "en");
  };

  const t = (localizedText: { en: string; kn: string }): string => {
    if (!localizedText) return "";
    return localizedText[lang] || localizedText.en || "";
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        isKannada: lang === "kn",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
