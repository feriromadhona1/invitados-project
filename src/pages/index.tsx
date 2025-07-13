import FloatingWhatsappButton from "@/components/molecules/FloatingWhatsappButton";
import FAQSection from "@/components/organisms/FAQSection";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import Footer from "@/components/organisms/Footer";
import GallerySection from "@/components/organisms/GallerySection/index";
import HeroSection from "@/components/organisms/HeroSection/index";
import Navbar from "@/components/organisms/Navbar";
import PricingSection from "@/components/organisms/PricingSection";
import TestimonialSlider from "@/components/organisms/TestimonialSlider";

export default function HomePage() {
  return (
    <main className="bg-secondary text-primary scroll-smooth font-sans">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <TestimonialSlider />
      <Footer />
      <FloatingWhatsappButton />
      
      {/* <FloatingWhatsappButton />
      <CTASection /> */}
    </main>
  )
}
