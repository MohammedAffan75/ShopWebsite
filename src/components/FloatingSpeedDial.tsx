"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site.config";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, Navigation, ChevronUp } from "lucide-react";

export function FloatingSpeedDial() {
  const { isKannada } = useLanguage();
  const { business } = siteConfig;
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Action Buttons for Desktop / Tablet (Bottom Right) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-center gap-3">
        
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="btn-touch w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#2C061B] text-[#F3E5AB] border border-[#D4AF37]/50 shadow-lg flex items-center justify-center hover:bg-[#420A29] transition-all hover:scale-110 active:scale-95 animate-in fade-in"
            aria-label="Scroll back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Speed Dial (Hidden on mobile bottom bar, visible on tablet/desktop) */}
        <a
          href={`tel:${business.phone}`}
          className="btn-touch hidden sm:flex w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#2C061B] shadow-xl items-center justify-center hover:scale-110 active:scale-95 transition-all group relative border border-[#F3E5AB]"
          aria-label="Call Hiba Ladies Tailor directly"
          title="Call 093537 63089"
        >
          <Phone className="w-5 h-5 fill-[#2C061B]" />
          <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-[#2C061B] text-[#F3E5AB] text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Call: 093537 63089
          </span>
        </a>

        {/* Floating WhatsApp Speed Dial */}
        <a
          href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
            isKannada
              ? business.whatsappPreFilledMessage.kn
              : business.whatsappPreFilledMessage.en
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-touch w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative border-2 border-white"
          aria-label="Chat on WhatsApp with Hiba Ladies Tailor"
          title="WhatsApp Us"
          id="floating-whatsapp-btn"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />
          <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-[#2C061B] text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Sticky Bottom Action Bar on Mobile: [Call Now] | [WhatsApp] | [Directions] */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#2C061B]/95 backdrop-blur-md border-t border-[#D4AF37]/40 px-3 py-2 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          
          {/* 1. Call Button */}
          <a
            href={`tel:${business.phone}`}
            className="btn-touch flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-b from-[#D4AF37] to-[#B8860B] text-[#2C061B] shadow-sm active:scale-95 transition-transform"
            id="mobile-bar-call"
          >
            <Phone className="w-4 h-4 fill-[#2C061B]" />
            <span className="text-[11px] font-bold mt-0.5 leading-none">
              {isKannada ? "ಕರೆ ಮಾಡಿ" : "Call Now"}
            </span>
          </a>

          {/* 2. WhatsApp Button */}
          <a
            href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
              isKannada
                ? business.whatsappPreFilledMessage.kn
                : business.whatsappPreFilledMessage.en
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-touch flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white shadow-sm active:scale-95 transition-transform"
            id="mobile-bar-whatsapp"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            <span className="text-[11px] font-bold mt-0.5 leading-none">
              WhatsApp
            </span>
          </a>

          {/* 3. Directions Button */}
          <a
            href={business.links.googleDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-touch flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#420A29] text-[#F3E5AB] border border-[#D4AF37]/50 shadow-sm active:scale-95 transition-transform"
            id="mobile-bar-directions"
          >
            <Navigation className="w-4 h-4 fill-[#F3E5AB]" />
            <span className="text-[11px] font-bold mt-0.5 leading-none">
              {isKannada ? "ದಾರಿ ನೋಡಿ" : "Directions"}
            </span>
          </a>

        </div>
      </div>
    </>
  );
}
