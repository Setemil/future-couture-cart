import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-model.jpg";

export const Hero = () => {
  const scrollToCollections = () => {
    const element = document.getElementById("collections");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-luxury">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fashion model in luxury black outfit"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="mb-6 font-serif text-6xl font-bold tracking-wider text-primary-foreground animate-fade-in md:text-8xl">
          AURUM
        </h1>
        <p className="mb-4 font-serif text-xl text-primary-foreground/90 animate-fade-in md:text-2xl">
          Where fashion meets the future
        </p>
        <p className="mb-12 max-w-2xl mx-auto font-sans text-sm text-primary-foreground/80 tracking-wide animate-fade-in">
          Discover timeless elegance reimagined for the modern era
        </p>
        
        <Button
          onClick={scrollToCollections}
          size="lg"
          className="group relative overflow-hidden bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-sans tracking-wider animate-fade-in"
        >
          <span className="relative z-10">Discover Collection</span>
          <div className="absolute inset-0 bg-gradient-shine opacity-0 transition-opacity group-hover:opacity-100" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToCollections}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        aria-label="Scroll to collections"
      >
        <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
      </button>
    </section>
  );
};
