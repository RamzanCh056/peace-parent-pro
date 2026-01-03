import Header from "@/components/landing/Header";
import VideoTestimonialSection from "@/components/landing/VideoTestimonialSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import Footer from "@/components/landing/Footer";
import FloatingChat from "@/components/landing/FloatingChat";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <VideoTestimonialSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Testimonials;
