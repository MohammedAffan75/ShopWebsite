"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site.config";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Menu, X, Globe, Scissors } from "lucide-react";

export function Header() {
  const { lang, setLang, toggleLang, isKannada } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = siteConfig.navigation;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#2C061B]/95 backdrop-blur-md shadow-lg shadow-[#1A0310]/30 py-2.5"
          : "bg-[#2C061B] py-3.5"
      } border-b border-[#D4AF37]/30`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-lg p-1"
            aria-label="Hiba Ladies Tailor Home"
          >
            {/* Ornate Gold Emblem */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#996515] p-[2px] shadow-md flex-shrink-0">
              <div className="w-full h-full bg-[#2C061B] rounded-full flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform">
                <Scissors className="w-5 h-5 text-[#F3E5AB]" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-display text-sm sm:text-base md:text-lg font-bold text-white tracking-wide uppercase leading-tight">
                HIBA LADIES TAILOR
              </span>
              <span className="text-[10px] sm:text-xs text-[#D4AF37] font-medium tracking-wider">
                {isKannada ? "ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ ವರ್ಕ್ಸ್" : "& EMBROIDERY WORKS"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-2.5 py-1.5 rounded-md text-xs xl:text-sm font-medium text-white/90 hover:text-[#F3E5AB] hover:bg-white/5 transition-colors"
              >
                {lang === "kn" ? item.label.kn : item.label.en}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Language Toggle & Call */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLang}
              className="btn-touch flex items-center gap-1.5 px-2.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full border border-[#D4AF37]/50 bg-[#3D0B24] text-[#F3E5AB] hover:bg-[#D4AF37] hover:text-[#2C061B] transition-all shadow-sm"
              title="Toggle language English / Kannada"
              aria-label="Switch language between English and Kannada"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className={isKannada ? "font-bold text-[#FFFFFF]" : ""}>
                {lang === "kn" ? "ಕನ್ನಡ" : "EN"}
              </span>
              <span className="text-[10px] text-[#D4AF37]/80">|</span>
              <span className={!isKannada ? "opacity-60" : "opacity-60"}>
                {lang === "kn" ? "EN" : "ಕನ್ನಡ"}
              </span>
            </button>

            {/* Prominent Header Call Button */}
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="btn-touch hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C07B] to-[#D4AF37] text-[#2C061B] font-bold text-xs sm:text-sm hover:brightness-110 shadow-md hover:shadow-lg transition-all"
              id="header-call-btn"
            >
              <Phone className="w-4 h-4 fill-[#2C061B]" />
              <span>{isKannada ? "ಕರೆ ಮಾಡಿ" : "Call Now"}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-touch lg:hidden p-2 rounded-lg text-white hover:text-[#D4AF37] hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2C061B] border-b border-[#D4AF37]/40 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-[#3D0B24] hover:text-[#F3E5AB] transition-colors"
              >
                {lang === "kn" ? item.label.kn : item.label.en}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="btn-touch w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#2C061B] font-bold text-sm shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4 fill-[#2C061B]" />
              <span>{isKannada ? "ಕರೆ ಮಾಡಿ (093537 63089)" : "Call Us: 093537 63089"}</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
                isKannada
                  ? siteConfig.business.whatsappPreFilledMessage.kn
                  : siteConfig.business.whatsappPreFilledMessage.en
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-touch w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{isKannada ? "WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ" : "Chat on WhatsApp"}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
