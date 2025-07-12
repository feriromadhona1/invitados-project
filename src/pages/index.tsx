import FeaturesSection from "@/components/organisms/FeaturesSection";
import GallerySection from "@/components/organisms/GallerySection/index";
import HeroSection from "@/components/organisms/HeroSection/index";
import Navbar from "@/components/organisms/Navbar";
import PricingSection from "@/components/organisms/PricingSection";

export default function HomePage() {
  return (
    <main className="bg-secondary text-primary scroll-smooth font-sans">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <FeaturesSection />
      <PricingSection />
      {/* <TestimonialsSection />
      <CTASection /> */}
    </main>
  )
}
