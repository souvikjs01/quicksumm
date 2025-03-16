import Faq from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import Functions from "@/components/home/Functions";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import Pricing from "@/components/home/Pricing";
import SemiFooter from "@/components/home/SemiFooter";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />

        {/* <Demos /> */}

        <Features />

        <Functions />
        
        <Testimonials />

        <Pricing />

        <Faq />

        <SemiFooter /> 

      </main>

      <Footer />
    </div>
  );
}
