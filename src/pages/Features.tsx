import Header from "@/components/landing/Header";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import AppShowcaseSection from "@/components/landing/AppShowcaseSection";
import Footer from "@/components/landing/Footer";
import FloatingChat from "@/components/landing/FloatingChat";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <FeaturesSection />
        <HowItWorksSection />
        <AppShowcaseSection />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Features;
