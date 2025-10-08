import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CartDrawer } from "./CartDrawer";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-glass"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-serif text-2xl font-bold tracking-wider transition-colors hover:text-accent"
          >
            AURUM
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection("collections")}
              className="font-sans text-sm tracking-wide transition-colors hover:text-accent"
            >
              Collections
            </button>
            <button
              onClick={() => scrollToSection("lookbook")}
              className="font-sans text-sm tracking-wide transition-colors hover:text-accent"
            >
              Lookbook
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-sans text-sm tracking-wide transition-colors hover:text-accent"
            >
              About
            </button>

            <CartDrawer>
              <Button
                variant="ghost"
                size="icon"
                className="relative transition-transform hover:scale-110"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                    {totalItems}
                  </span>
                )}
              </Button>
            </CartDrawer>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-4 md:hidden">
            <CartDrawer>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                    {totalItems}
                  </span>
                )}
              </Button>
            </CartDrawer>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-serif text-2xl">AURUM</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-6">
                  <button
                    onClick={() => scrollToSection("collections")}
                    className="text-left font-sans text-lg tracking-wide transition-colors hover:text-accent"
                  >
                    Collections
                  </button>
                  <button
                    onClick={() => scrollToSection("lookbook")}
                    className="text-left font-sans text-lg tracking-wide transition-colors hover:text-accent"
                  >
                    Lookbook
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left font-sans text-lg tracking-wide transition-colors hover:text-accent"
                  >
                    About
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
