import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/heroSection";
import ServicesSection from "@/components/sections/servicesSection";
import AboutSection from "@/components/sections/aboutSection";
import ContactCTA from "@/components/sections/contactCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
