import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";

const lookbookImages = [
  { src: lookbook1, alt: "Model in futuristic black outfit in urban setting" },
  { src: lookbook2, alt: "Elegant model in white minimalist luxury outfit" },
  { src: lookbook3, alt: "Confident model in modern black designer clothing" },
];

export const Lookbook = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="lookbook" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-5xl font-bold tracking-wide">
            Lookbook
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-muted-foreground">
            Experience the intersection of art and fashion through our curated visual narrative
          </p>
        </div>

        {/* Lookbook Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lookbookImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button
                  className="group relative aspect-[2/3] overflow-hidden rounded shadow-luxury transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl border-0 bg-transparent p-0">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};
