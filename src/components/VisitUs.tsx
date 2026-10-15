"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site.config";
import { useLanguage } from "@/context/LanguageContext";
import { GalleryMediaItem } from "@/lib/gallery-server";
import {
  MapPin,
  Clock,
  Navigation,
  Copy,
  Check,
  ExternalLink,
  Phone,
  Store,
  Compass,
} from "lucide-react";

interface VisitUsProps {
  outsidePhotos: GalleryMediaItem[];
}

export function VisitUs({ outsidePhotos }: VisitUsProps) {
  const { lang, isKannada } = useLanguage();
  const { business } = siteConfig;
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);
  const [timeMessage, setTimeMessage] = useState<string>("Open Today until 8:00 PM");

  // Determine live "Open Now / Closed" based on IST (UTC+5:30)
  useEffect(() => {
    const calculateOpenStatus = () => {
      const now = new Date();
      // Calculate current IST time
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + 3600000 * 5.5);
      const hour = istDate.getHours();
      const minutes = istDate.getMinutes();

      const openHour = business.hours.openingHour24 || 10;
      const closeHour = business.hours.closingHour24 || 20; // 8 PM

      if (hour >= openHour && hour < closeHour) {
        setIsOpenNow(true);
        setTimeMessage(
          isKannada
            ? `ಈಗ ತೆರೆದಿದೆ • ಇಂದು ರಾತ್ರಿ ${business.hours.closingTime} ವರೆಗೆ`
            : `Open Now • Closes today at ${business.hours.closingTime}`
        );
      } else {
        setIsOpenNow(false);
        setTimeMessage(
          isKannada
            ? `ಈಗ ಮುಚ್ಚಿದೆ • ನಾಳೆ ಬೆಳಗ್ಗೆ ${business.hours.openingTime} ತೆರೆಯಲಿದೆ`
            : `Closed Now • Opens at ${business.hours.openingTime}`
        );
      }
    };

    calculateOpenStatus();
    const interval = setInterval(calculateOpenStatus, 60000);
    return () => clearInterval(interval);
  }, [business.hours, isKannada]);

  const handleCopyPlusCode = () => {
    try {
      navigator.clipboard.writeText(business.address.plusCode);
      setCopiedPlusCode(true);
      setTimeout(() => setCopiedPlusCode(false), 2500);
    } catch {
      // fallback
    }
  };

  const outsideImage =
    outsidePhotos.length > 0
      ? outsidePhotos[0].src
      : "/images/placeholders/shop-outside.svg";

  return (
    <section id="visit-us" className="py-16 sm:py-24 bg-[#FAF6F0] relative overflow-hidden">
      
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-1 border-thread" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#380B23]/10 border border-[#D4AF37]/40 text-[#5C123B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Store className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{isKannada ? "ನಮ್ಮ ಅಂಗಡಿಗೆ ಭೇಟಿ ನೀಡಿ" : "Find Us in Raichur"}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#2C061B] tracking-tight">
            {isKannada ? "ವಿಳಾಸ ಮತ್ತು ಭೇಟಿಯ ಸಮಯ" : "Visit Our Shop in Mavinakere"}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600">
            {isKannada
              ? "ರಾಯಚೂರಿನ ಮಾವಿನಕೆರೆಯಲ್ಲಿರುವ ನಮ್ಮ ಟೈಲರಿಂಗ್ ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ ಅಂಗಡಿಗೆ ಸ್ವಾಗತ."
              : "Easy to reach from anywhere in Raichur. Drop by with your fabrics or design references."}
          </p>
        </div>

        {/* 2-Column Layout: Details + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Address, Live Hours & Outside Shop Photo */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#EAE0D3] shadow-md space-y-5">
              
              {/* Live Open / Closed Status Pill */}
              <div className="flex items-center justify-between">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${
                    isOpenNow
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                      : "bg-amber-50 text-amber-800 border border-amber-300"
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                    }`}
                  />
                  <span>{timeMessage}</span>
                </div>

                <span className="text-[11px] text-gray-500 font-medium">
                  {isKannada ? business.hours.weeklyOffText.kn : business.hours.weeklyOffText.en}
                </span>
              </div>

              {/* Full Address */}
              <div className="flex items-start gap-3.5 pt-2">
                <div className="w-10 h-10 rounded-xl bg-[#2C061B] text-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#F3E5AB]" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#2C061B]">
                    {isKannada ? business.nameKannada : business.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-1">
                    {isKannada
                      ? business.address.fullAddressKannada
                      : business.address.fullAddress}
                  </p>
                </div>
              </div>

              {/* Plus Code with Copy Action */}
              <div className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/30 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <Compass className="w-4 h-4 text-[#996515] flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-500 block uppercase font-bold">
                      Google Plus Code:
                    </span>
                    <span className="font-mono font-bold text-[#2C061B]">
                      {business.address.plusCode}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyPlusCode}
                  className="btn-touch px-3 py-1.5 rounded-lg bg-white hover:bg-[#D4AF37] hover:text-[#2C061B] text-xs font-semibold text-gray-700 border border-gray-300 transition-colors flex items-center gap-1.5 shadow-2xs"
                  aria-label="Copy Google Plus Code to clipboard"
                >
                  {copiedPlusCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">{isKannada ? "ನಕಲಿಸಲಾಗಿದೆ" : "Copied"}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{isKannada ? "ಕಾಪಿ ಮಾಡಿ" : "Copy"}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Working Hours Breakdown */}
              <div className="pt-2 border-t border-gray-100 space-y-1.5 text-xs text-gray-700">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-500">
                    {isKannada ? "ದೈನಂದಿನ ಕೆಲಸದ ಸಮಯ:" : "Daily Working Hours:"}
                  </span>
                  <span className="font-bold text-[#2C061B]">
                    {business.hours.openingTime} - {business.hours.closingTime}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-500">
                    {isKannada ? "ವಾರದ ರಜೆ:" : "Weekly Holiday:"}
                  </span>
                  <span className="font-semibold text-emerald-700">
                    {isKannada ? business.hours.weeklyOffText.kn : business.hours.weeklyOffText.en}
                  </span>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-2">
                <a
                  href={business.links.googleDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-touch w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#2C061B] font-bold text-sm shadow-md hover:brightness-105 transition-all"
                  id="visit-get-directions-btn"
                >
                  <Navigation className="w-4 h-4 fill-[#2C061B]" />
                  <span>{isKannada ? "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ದಾರಿ ಪಡೆಯಿರಿ" : "Get Directions on Google Maps"}</span>
                </a>
              </div>

            </div>

            {/* Outside Shop Recognition Card */}
            <div className="p-4 rounded-2xl bg-white border border-[#EAE0D3] shadow-md flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-[#2C061B] flex-shrink-0 border border-[#D4AF37]/50">
                <img
                  src={outsideImage}
                  alt="Outside view of Hiba Ladies Tailor shop in Raichur"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#996515] block">
                  {isKannada ? "ಕಟ್ಟಡ ಗುರುತಿಸಲು" : "Storefront Reference"}
                </span>
                <h4 className="font-display text-sm font-bold text-[#2C061B]">
                  {isKannada ? "ಹೊರಗಿನ ಅಂಗಡಿ ನೋಟ" : "Look for our sign at Mavinakere"}
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  {isKannada
                    ? "ಬರುವಾಗ ಈ ಅಂಗಡಿ ಬೋರ್ಡ್ ನೋಡಿ ಸುಲಭವಾಗಿ ಗುರುತಿಸಬಹುದು."
                    : "Easily spot our shop front with our sign board when you reach Mavinakere."}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed & Interactive Action */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-[#EAE0D3] shadow-xl flex-grow min-h-[380px] lg:min-h-full flex flex-col">
              
              {/* Map Header Bar */}
              <div className="p-4 bg-[#2C061B] text-white flex items-center justify-between gap-2 border-b border-[#D4AF37]/30">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-display text-xs sm:text-sm font-bold text-white truncate">
                    59R4+FC Raichur, Karnataka (Mavinakere)
                  </span>
                </div>

                <a
                  href={business.links.googleMapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-touch px-3 py-1 rounded-lg bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#2C061B] text-xs font-bold transition-colors inline-flex items-center gap-1 flex-shrink-0"
                >
                  <span>{isKannada ? "ಮ್ಯಾಪ್ ತೆರೆಯಿರಿ" : "Open in Maps"}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="relative w-full flex-grow min-h-[320px]">
                <iframe
                  title="Hiba Ladies Tailor & Embroidery Works Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.8!2d77.3463!3d16.2076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc9d7!2s59R4%2BFC%20Raichur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map Footer Helper */}
              <div className="p-3 bg-[#FAF6F0] border-t border-gray-200 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-600">
                <span>📍 Mavinakere, Karnataka 584103</span>
                <a
                  href={business.links.googleDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5C123B] font-bold hover:underline flex items-center gap-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Start Navigation</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
