"use client";

import React from "react";
import { siteConfig } from "@/data/site.config";
import { useLanguage } from "@/context/LanguageContext";
import {
  Scissors,
  Phone,
  MapPin,
  Clock,
  Heart,
  Star,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const { lang, isKannada } = useLanguage();
  const { business, navigation } = siteConfig;
  const currentYear = 2026;

  return (
    <footer className="bg-[#1A0310] text-white border-t border-[#D4AF37]/30 pt-14 pb-24 sm:pb-16 relative overflow-hidden">
      
      {/* Decorative radial ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand, Tagline & Rating */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] p-[2px]">
                <div className="w-full h-full bg-[#2C061B] rounded-full flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-[#F3E5AB]" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                  HIBA LADIES TAILOR
                </h3>
                <p className="text-xs text-[#D4AF37]">
                  {isKannada ? "ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ ವರ್ಕ್ಸ್" : "& EMBROIDERY WORKS"}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              {isKannada ? business.tagline.kn : business.tagline.en}
            </p>

            {/* Google Rating Badge */}
            <a
              href={business.links.googleMapsListing}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-[#D4AF37]/40 text-xs text-[#F3E5AB] transition-colors"
            >
              <div className="flex text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 Star</span>
              <span className="text-white/70">(10 Google Reviews)</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
            </a>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-[#F3E5AB] uppercase tracking-wider">
              {isKannada ? "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು" : "Quick Links"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-[#F3E5AB] transition-colors"
                  >
                    {lang === "kn" ? item.label.kn : item.label.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details & Hours */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="font-display text-sm font-bold text-[#F3E5AB] uppercase tracking-wider">
              {isKannada ? "ಅಂಗಡಿ ಮಾಹಿತಿ" : "Store Information"}
            </h4>

            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>
                  {isKannada
                    ? business.address.fullAddressKannada
                    : business.address.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href={`tel:${business.phone}`}
                  className="font-bold text-white hover:text-[#D4AF37] transition-colors"
                >
                  {business.phoneDisplay} / {business.phoneIntl}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>
                  {isKannada
                    ? `ಪ್ರತಿದಿನ: ${business.hours.openingTime} - ${business.hours.closingTime}`
                    : `Daily: ${business.hours.openingTime} - ${business.hours.closingTime}`}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-[#D4AF37] block font-mono">
                Plus Code: {business.address.plusCode}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center sm:text-left">
          <p>
            © {currentYear} {business.name}. All rights reserved.
          </p>

          <p className="flex items-center justify-center gap-1.5 text-gray-300">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>in Raichur, Karnataka</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
