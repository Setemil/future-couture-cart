import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { About } from "@/components/About";
import { Lookbook } from "@/components/Lookbook";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Collections />
          <About />
          <Lookbook />
        </main>
        <Footer />
        <Newsletter />
      </div>
    </CartProvider>
  );
};

export default Index;
