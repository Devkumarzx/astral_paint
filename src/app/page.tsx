import HeroSection from "@/app/_components/HeroSection";
import AboutSection from "@/app/_components/AboutSection";
import CategorySection from "@/app/_components/CategorySection";
import ServicesSection from "@/app/_components/ServicesSection";
import ColorSection from "@/app/_components/ColorSection";
import DealerSection from "@/app/_components/DealerSection";
import BlogSection from "@/app/_components/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex bg-gradient-to-b from-ap-red via-ap-orange via-ap-yellow/60 via-20%  via-ap-green  to-ap-blue pl-4">
        <div className="space-y-28 bg-white">
          <AboutSection />
          <CategorySection />
          <ServicesSection />
          <ColorSection />
          <DealerSection />
          <BlogSection />
        </div>
      </div>
    </>
  );
}
