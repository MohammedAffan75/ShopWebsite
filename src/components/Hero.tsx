"use client";

import React from "react";
import { siteConfig } from "@/data/site.config";
import { useLanguage } from "@/context/LanguageContext";
import { GalleryMediaItem } from "@/lib/gallery-server";
import { Phone, MessageCircle, Star, Sparkles, MapPin, Clock, Award, CheckCircle } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  heroImage?: GalleryMediaItem;
  featuredDesign?: GalleryMediaItem;
}

export function Hero({ heroImage, featuredDesign }: HeroProps) {
  const { lang, isKannada } = useLanguage();
  const { business } = siteConfig;

  const displayImage = heroImage?.src || "/images/placeholders/shop-outside.svg";
  const displayAlt = heroImage?.alt || "Hiba Ladies Tailor shop in Mavinakere, Raichur";

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#2C061B] via-[#380B23] to-[#1F0413] text-white pt-8 pb-14 sm:pt-14 sm:pb-20 overflow-hidden"
    >
      {/* Delicate background lace pattern overlay */}
      <div className="absolute inset-0 bg-plum-lace opacity-40 pointer-events-none" />

      {/* Decorative Gold Radial Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-4 sm:space-y-6">
            
            {/* 5.0 Star Google Rating Badge */}
            <div className="inline-flex items-center gap-2 self-start flex-wrap">
              <a
                href={business.links.googleMapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF5EE]/10 border border-[#D4AF37]/40 hover:bg-[#FAF5EE]/20 transition-all text-xs sm:text-sm text-[#F3E5AB] shadow-sm group"
                id="hero-google-badge"
              >
                <div className="flex items-center gap-0.5 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                  ))}
                </div>
                <span className="font-bold text-white">5.0</span>
                <span className="text-white/70">
                  ({business.rating.reviewCount} {isKannada ? "ವಿಮರ್ಶೆಗಳು" : "Google Reviews"})
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] group-hover:translate-x-0.5 transition-transform">
                  ★ Verified
                </span>
              </a>

              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-white/80 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                <MapPin className="w-3 h-3 text-[#D4AF37]" />
                Raichur, Karnataka
              </span>
            </div>

            {/* Main Heading (H1) */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {isKannada ? (
                  <>
                    <span className="text-gold-gradient block">
                      {business.nameKannada}
                    </span>
                    <span className="text-xl sm:text-2xl font-sans font-medium text-white/90 mt-1 block">
                      {business.categoryKannada}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-gold-gradient block">
                      HIBA LADIES TAILOR
                    </span>
                    <span className="text-white/95 block text-xl sm:text-3xl md:text-4xl font-semibold">
                      &amp; EMBROIDERY WORKS
                    </span>
                  </>
                )}
              </h1>

              {/* Tagline */}
              <p className="text-sm sm:text-base md:text-lg text-[#F3E5AB]/90 font-medium max-w-xl">
                {isKannada ? business.tagline.kn : business.tagline.en}
              </p>
            </div>

            {/* Review summary citation snippet */}
            <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-[#D4AF37]/20 backdrop-blur-sm max-w-xl">
              <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed">
                &ldquo;
                {isKannada
                  ? business.rating.googleSummary.kn
                  : business.rating.googleSummary.en}
                &rdquo;
              </p>
              <div className="mt-2 flex items-center justify-between text-[11px] text-[#D4AF37]">
                <span>✓ Mavinakere, Raichur</span>
                <span>✓ Closes 8:00 PM Daily</span>
              </div>
            </div>

            {/* Two Primary CTAs: Call Now & WhatsApp Us */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              
              {/* Call Now Button */}
              <a
                href={`tel:${business.phone}`}
                className="btn-touch flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-[#2C061B] font-bold text-sm sm:text-base shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                id="hero-call-now-btn"
              >
                <Phone className="w-5 h-5 fill-[#2C061B]" />
                <span>{isKannada ? "ಈಗಲೇ ಕರೆ ಮಾಡಿ" : "Call Now: 093537 63089"}</span>
              </a>

              {/* WhatsApp Us Button */}
              <a
                href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
                  isKannada
                    ? business.whatsappPreFilledMessage.kn
                    : business.whatsappPreFilledMessage.en
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-touch flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>{isKannada ? "WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ" : "WhatsApp Us"}</span>
              </a>
            </div>

            {/* Quick feature pill row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] sm:text-xs text-white/80">
              <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-2.5 py-1.5 border border-white/5">
                <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>{isKannada ? "ಪರ್ಫೆಕ್ಟ್ ಫಿಟ್ಟಿಂಗ್" : "Accurate Fitting"}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-2.5 py-1.5 border border-white/5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>{isKannada ? "ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ" : "Computer Embroidery"}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-2.5 py-1.5 border border-white/5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>{isKannada ? "ಸಮಯಕ್ಕೆ ಡೆಲಿವರಿ" : "On-Time Delivery"}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-2.5 py-1.5 border border-white/5">
                <Award className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>{isKannada ? "ನ್ಯಾಯಯುತ ಬೆಲೆ" : "Pocket Friendly"}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gold Frame with scalloped lace feel */}
              <div className="relative rounded-2xl p-2 sm:p-2.5 bg-gradient-to-tr from-[#996515] via-[#D4AF37] to-[#F3E5AB] shadow-2xl shadow-black/60">
                <div className="relative rounded-xl overflow-hidden bg-[#2C061B] aspect-[4/5] sm:aspect-[4/4.8]">
                  
                  {/* Hero Showcase Image */}
                  <img
                    src={displayImage}
                    alt={displayAlt}
                    loading="eager"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Top-Right Badge: Google Rated 5.0 */}
                  <div className="absolute top-3 right-3 bg-[#2C061B]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37] text-white flex items-center gap-1.5 shadow-lg">
                    <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                    <span className="font-bold text-xs">5.0 Star Rated</span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1F0413] via-[#1F0413]/85 to-transparent p-4 sm:p-5">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#D4AF37] text-[#2C061B] mb-1">
                      {isKannada ? "ಮಾವಿನಕೆರೆ, ರಾಯಚೂರು" : "Mavinakere, Raichur"}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white">
                      {heroImage?.title || "Hiba Ladies Tailor & Embroidery Works"}
                    </h3>
                    <p className="text-xs text-[#F3E5AB]/90 mt-0.5">
                      {isKannada
                        ? "1/4-1258-409, ಮಾವಿನಕೆರೆ, ರಾಯಚೂರು 584103"
                        : "1/4-1258-409, Mavinakere, Raichur 584103"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Overlapping Mini Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 bg-[#FAF6F0] text-[#2C061B] p-3 sm:p-3.5 rounded-xl shadow-xl border border-[#D4AF37] flex items-center gap-2.5 max-w-[220px]">
                <div className="w-9 h-9 rounded-full bg-[#420A29] flex items-center justify-center flex-shrink-0 text-[#F3E5AB]">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">
                    {isKannada ? "ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ" : "Computerized Embroidery"}
                  </p>
                  <p className="text-[10px] text-gray-600">
                    {isKannada ? "ನಿಖರ ಹಾಗೂ ನವೀನ ವಿನ್ಯಾಸ" : "Multi-thread fine art"}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
