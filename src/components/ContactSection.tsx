"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site.config";
import { useLanguage } from "@/context/LanguageContext";
import {
  Phone,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function ContactSection() {
  const { lang, isKannada } = useLanguage();
  const { business } = siteConfig;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    stitchingType: "Bridal Blouse",
    customNotes: "",
    hasReferencePhoto: "Yes, I have photos",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*New Tailoring Enquiry - Hiba Ladies Tailor Website*
👤 *Customer Name:* ${formData.name || "Customer"}
📱 *Phone Number:* ${formData.phone || "Not provided"}
✂️ *Service Needed:* ${formData.stitchingType}
📸 *Reference Photo:* ${formData.hasReferencePhoto}
📝 *Details / Measurements:* ${formData.customNotes || "Standard consultation required"}

_Sent via hibaladiestailor.com_`;

    const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const serviceOptions = [
    { value: "Bridal Blouse", label: { en: "Bridal & Designer Blouse", kn: "ಬ್ರೈಡಲ್ ಮತ್ತು ಡಿಸೈನರ್ ಬ್ಲೌಸ್" } },
    { value: "Computer Embroidery", label: { en: "Computer Embroidery & Aari Work", kn: "ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ ಮತ್ತು ಆರಿ ವರ್ಕ್" } },
    { value: "Salwar Suit", label: { en: "Salwar Suit / Churidar", kn: "ಸಲ್ವಾರ್ ಸೂಟ್ / ಚೂಡಿದಾರ್" } },
    { value: "Lehenga", label: { en: "Lehenga & Bridal Wear", kn: "ಲೆಹೆಂಗಾ ಮತ್ತು ಮದುವೆ ಉಡುಪು" } },
    { value: "Kurti", label: { en: "Custom Kurti / Daily Wear", kn: "ಕಸ್ಟಮ್ ಕುರ್ತಿ" } },
    { value: "Alterations", label: { en: "Alterations & Resizing", kn: "ಆಲ್ಟರೇಷನ್ ಮತ್ತು ರೀ-ಫಿಟ್ಟಿಂಗ್" } },
    { value: "Other Custom Work", label: { en: "Other Custom Design", kn: "ಇತರ ಕಸ್ಟಮ್ ಕೆಲಸ" } },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF6F0] relative overflow-hidden">
      
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-1 border-thread" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#380B23]/10 border border-[#D4AF37]/40 text-[#5C123B] text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{isKannada ? "ನೇರ ಸಂಪರ್ಕ ಮತ್ತು ವಿಚಾರಣೆ" : "Get in Touch Today"}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#2C061B] tracking-tight">
            {isKannada ? "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ" : "Contact & WhatsApp Enquiry"}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600">
            {isKannada
              ? "ಹೊಲಿಗೆ ವಿಚಾರಣೆಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ ಕೆಳಗಿನ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ ನೇರವಾಗಿ WhatsApp ಮೂಲಕ ಸಂದೇಶ ಕಳುಹಿಸಿ."
              : "Call us directly or fill in this quick form to send your enquiry straight to our WhatsApp."}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#EAE0D3] shadow-md space-y-6">
              <h3 className="font-display text-lg font-bold text-[#2C061B]">
                {isKannada ? "ನೇರವಾಗಿ ಮಾತನಾಡಿ" : "Direct Contact Details"}
              </h3>

              {/* Call Card */}
              <a
                href={`tel:${business.phone}`}
                className="p-4 rounded-xl bg-[#FAF6F0] hover:bg-[#FAF1F6] border border-[#EAE0D3] hover:border-[#D4AF37] transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2C061B] text-[#D4AF37] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 fill-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-gray-500 uppercase">
                    {isKannada ? "ಕರೆ ಮಾಡಿ" : "Call Directly"}
                  </span>
                  <p className="font-display text-base sm:text-lg font-bold text-[#2C061B]">
                    093537 63089
                  </p>
                  <p className="text-[11px] text-emerald-700 font-medium">
                    {isKannada ? "ಪ್ರತಿದಿನ ಲಭ್ಯವಿದೆ (ರಾತ್ರಿ 8:00 ವರೆಗೆ)" : "Available Daily until 8:00 PM"}
                  </p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
                  isKannada
                    ? business.whatsappPreFilledMessage.kn
                    : business.whatsappPreFilledMessage.en
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-gray-500 uppercase">
                    WhatsApp Chat
                  </span>
                  <p className="font-display text-base sm:text-lg font-bold text-[#128C7E]">
                    +91 93537 63089
                  </p>
                  <p className="text-[11px] text-gray-600">
                    {isKannada ? "ಫೋಟೋ ಅಥವಾ ಡಿಸೈನ್ ಕಳುಹಿಸಿ" : "Send photos or enquire instantly"}
                  </p>
                </div>
              </a>

              {/* Address Quick Snippet */}
              <div className="pt-2 border-t border-gray-100 flex items-start gap-3 text-xs text-gray-700">
                <MapPin className="w-4 h-4 text-[#996515] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2C061B]">Shop Address:</strong>
                  <p className="mt-0.5 leading-relaxed">
                    1/4-1258-409, Mavinakere, Raichur, Karnataka 584103
                  </p>
                </div>
              </div>

              {/* Hours Quick Snippet */}
              <div className="flex items-start gap-3 text-xs text-gray-700">
                <Clock className="w-4 h-4 text-[#996515] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2C061B]">Shop Timings:</strong>
                  <p className="mt-0.5">
                    Open Daily: {business.hours.openingTime} - {business.hours.closingTime}
                  </p>
                </div>
              </div>

              {/* Social Channels (if configured) */}
              <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                <span className="text-xs font-semibold text-gray-600">
                  {isKannada ? "ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳು:" : "Follow Us:"}
                </span>

                {business.links.instagramUrl && (
                  <a
                    href={business.links.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#FAF1F6] text-[#7A1950] flex items-center justify-center hover:bg-[#7A1950] hover:text-white transition-colors"
                    title="Instagram Profile"
                    aria-label="Instagram Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                )}

                {business.links.facebookUrl && (
                  <a
                    href={business.links.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#FAF1F6] text-[#7A1950] flex items-center justify-center hover:bg-[#7A1950] hover:text-white transition-colors"
                    title="Facebook Page"
                    aria-label="Facebook Page"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
              </div>

            </div>

          </div>

          {/* Right Column: WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#EAE0D3] shadow-lg">
              
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#2C061B]">
                  {isKannada ? "ತ್ವರಿತ ಹೊಲಿಗೆ ವಿಚಾರಣೆ ಫಾರ್ಮ್" : "Send WhatsApp Stitching Enquiry"}
                </h3>
              </div>
              <p className="text-xs text-gray-600 mb-6">
                {isKannada
                  ? "ಕೆಳಗಿನ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿದಾಗ ಅದು ನೇರವಾಗಿ ನಿಮ್ಮ WhatsApp ನಲ್ಲಿ ಸಂದೇಶವಾಗಿ ಸಿದ್ಧವಾಗುತ್ತದೆ."
                  : "No backend required. Clicking submit formats these details directly into your WhatsApp app."}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2C061B] mb-1">
                      {isKannada ? "ನಿಮ್ಮ ಹೆಸರು *" : "Your Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isKannada ? "ಉದಾಹರಣೆಗೆ: ಸುಕೃತಾ" : "e.g. Sukrutha B"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-[#2C061B] text-xs sm:text-sm bg-gray-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C061B] mb-1">
                      {isKannada ? "ಫೋನ್ ನಂಬರ್ *" : "Phone Number *"}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-[#2C061B] text-xs sm:text-sm bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#2C061B] mb-1">
                    {isKannada ? "ಹೊಲಿಯಬೇಕಾದ ಬಟ್ಟೆಯ ಪ್ರಕಾರ *" : "What would you like stitched? *"}
                  </label>
                  <select
                    value={formData.stitchingType}
                    onChange={(e) => setFormData({ ...formData, stitchingType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-[#2C061B] text-xs sm:text-sm bg-gray-50 focus:bg-white"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {isKannada ? opt.label.kn : opt.label.en}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Reference Photo Selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#2C061B] mb-1">
                    {isKannada ? "ನಿಮ್ಮಲ್ಲಿ ಡಿಸೈನ್ ಫೋಟೋ ಇದೆಯೇ?" : "Do you have a design photo / reference?"}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                      formData.hasReferencePhoto === "Yes, I have photos"
                        ? "bg-[#FAF1F6] border-[#7A1950] text-[#7A1950]"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}>
                      <input
                        type="radio"
                        name="photoRef"
                        value="Yes, I have photos"
                        checked={formData.hasReferencePhoto === "Yes, I have photos"}
                        onChange={() => setFormData({ ...formData, hasReferencePhoto: "Yes, I have photos" })}
                        className="hidden"
                      />
                      <span>{isKannada ? "ಹೌದು, ಫೋಟೋ ಇದೆ" : "Yes, I have photos"}</span>
                    </label>

                    <label className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                      formData.hasReferencePhoto === "Need shop suggestions"
                        ? "bg-[#FAF1F6] border-[#7A1950] text-[#7A1950]"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}>
                      <input
                        type="radio"
                        name="photoRef"
                        value="Need shop suggestions"
                        checked={formData.hasReferencePhoto === "Need shop suggestions"}
                        onChange={() => setFormData({ ...formData, hasReferencePhoto: "Need shop suggestions" })}
                        className="hidden"
                      />
                      <span>{isKannada ? "ಅಂಗಡಿಯಲ್ಲಿ ಆಯ್ಕೆ ಮಾಡುತ್ತೇನೆ" : "Need suggestions"}</span>
                    </label>
                  </div>
                </div>

                {/* Custom Notes / Measurements */}
                <div>
                  <label className="block text-xs font-semibold text-[#2C061B] mb-1">
                    {isKannada
                      ? "ವಿಶೇಷ ಅಗತ್ಯತೆಗಳು ಅಥವಾ ಅಳತೆಯ ಟಿಪ್ಪಣಿಗಳು (ಐಚ್ಛಿಕ)"
                      : "Special Requirements / Measurements / Delivery Date (Optional)"}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={
                      isKannada
                        ? "ಉದಾ: ಬೋಟ್ ನೆಕ್ ಬ್ಲೌಸ್, ಆರಿ ವರ್ಕ್, ಅಕ್ಟೋಬರ್ 24 ಕ್ಕೆ ಡೆಲಿವರಿ ಬೇಕು..."
                        : "e.g. Princess cut blouse with back dori, needed before next weekend..."
                    }
                    value={formData.customNotes}
                    onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-[#2C061B] text-xs sm:text-sm bg-gray-50 focus:bg-white resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-touch w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    id="submit-whatsapp-enquiry-btn"
                  >
                    <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                    <span>
                      {isKannada
                        ? "WhatsApp ಮೂಲಕ ವಿಚಾರಣೆ ಕಳುಹಿಸಿ"
                        : "Send Enquiry on WhatsApp"}
                    </span>
                  </button>
                </div>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>WhatsApp chat opened with your formatted details!</span>
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
