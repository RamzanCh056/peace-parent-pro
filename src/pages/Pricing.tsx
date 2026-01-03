import Header from "@/components/landing/Header";
import PricingSection from "@/components/landing/PricingSection";
import DownloadSection from "@/components/landing/DownloadSection";
import Footer from "@/components/landing/Footer";
import FloatingChat from "@/components/landing/FloatingChat";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PricingSection />
        <DownloadSection />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Pricing;
