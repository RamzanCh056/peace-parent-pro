import Header from "@/components/landing/Header";
import BooksSection from "@/components/landing/BooksSection";
import Footer from "@/components/landing/Footer";
import FloatingChat from "@/components/landing/FloatingChat";

const Books = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <BooksSection />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Books;
