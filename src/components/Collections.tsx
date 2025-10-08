import { ProductCard } from "./ProductCard";
import { Product } from "@/contexts/CartContext";
import productBag1 from "@/assets/product-bag-1.jpg";
import productBag2 from "@/assets/product-bag-2.jpg";
import productShoes1 from "@/assets/product-shoes-1.jpg";
import productCoat1 from "@/assets/product-coat-1.jpg";

const products: Product[] = [
  {
    id: "1",
    name: "Noir Elegance Tote",
    category: "Handbags",
    price: 1299,
    image: productBag1,
    imageAlt: "Luxury black leather handbag",
  },
  {
    id: "2",
    name: "Luna Leather Slides",
    category: "Footwear",
    price: 849,
    image: productShoes1,
    imageAlt: "Minimalist black leather shoes",
  },
  {
    id: "3",
    name: "Midnight Overcoat",
    category: "Outerwear",
    price: 2499,
    image: productCoat1,
    imageAlt: "Designer black coat",
  },
  {
    id: "4",
    name: "Arctic Structured Bag",
    category: "Handbags",
    price: 1599,
    image: productBag2,
    imageAlt: "White designer handbag",
  },
];

export const Collections = () => {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-5xl font-bold tracking-wide">
            The Collection
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-muted-foreground">
            Each piece is meticulously crafted to embody timeless elegance and modern sophistication
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
