import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Facilities from "@/components/sections/Facilities";
import MembershipPlans from "@/components/sections/MembershipPlans";
import PlanCustomizer from "@/components/sections/PlanCustomizer";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Facilities />
        <MembershipPlans />
        <PlanCustomizer />
        <Gallery />
        <Reviews />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
