import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ConsistencyShowcase from "@/components/landing/ConsistencyShowcase";
import DownloadSection from "@/components/landing/DownloadSection";
import Footer from "@/components/landing/Footer";
import FloatingChat from "@/components/landing/FloatingChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ConsistencyShowcase />
        <DownloadSection />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
