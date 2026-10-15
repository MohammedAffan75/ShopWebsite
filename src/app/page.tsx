import { getGalleryData } from "@/lib/gallery-server";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { NewCollections } from "@/components/NewCollections";
import { DesignGallery } from "@/components/DesignGallery";
import { AboutUs } from "@/components/AboutUs";
import { Testimonials } from "@/components/Testimonials";
import { VisitUs } from "@/components/VisitUs";
import { VisitingCardSection } from "@/components/VisitingCardSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingSpeedDial } from "@/components/FloatingSpeedDial";


export default function Home() {
  const galleryData = getGalleryData();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] selection:bg-[#D4AF37] selection:text-[#2C061B]">
      {/* 1. Header with Language Toggle & Sticky Nav */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          heroImage={galleryData.shopOutside[0]}
          featuredDesign={galleryData.designs[0]}
        />

        {/* 3. Tailoring & Computer Embroidery Services */}
        <ServicesSection />

        {/* 4. Why Choose Us (Real Google Review Insights) */}
        <WhyChooseUs />

        {/* 5. New Collections */}
        <NewCollections items={galleryData.newCollections} />

        {/* 6. Design Gallery & Lightbox */}
        <DesignGallery items={galleryData.allGalleryItems} />

        {/* 7. About Us & Interior Photos */}
        <AboutUs interiorPhotos={galleryData.shopInside} />

        {/* 8. Customer Testimonials & Google 5.0 Star Badge */}
        <Testimonials />

        {/* 9. Visit Us, Map & Live Opening Status */}
        <VisitUs outsidePhotos={galleryData.shopOutside} />

        {/* 10. Visiting Card & QR Codes */}
        <VisitingCardSection
          cardImages={galleryData.visitingCards.images}
          cardPdfUrl={galleryData.visitingCards.pdfUrl}
          qrCodes={galleryData.qrCodes}
        />

        {/* 11. Contact & Direct WhatsApp Enquiry Form */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Mobile Bottom Sticky Action Bar & Floating Speed Dials */}
      <FloatingSpeedDial />
    </div>
  );
}
