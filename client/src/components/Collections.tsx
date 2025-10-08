/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductCard } from "./ProductCard";
import { useState, useEffect } from "react";
import { fetchProducts } from "@/config/strapi";

export const Collections = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      const formatted = data.map((product: any) => ({
        ...product,
        imageUrl: product.image?.url
          ? `${import.meta.env.VITE_STRAPI_URL || "http://localhost:1337"}${
              product.image.url
            }`
          : "",
      }));
      setProducts(formatted);
    });
  }, []);
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-5xl font-bold tracking-wide">
            The Collection
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-muted-foreground">
            Each piece is meticulously crafted to embody timeless elegance and
            modern sophistication
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                image: product.imageUrl,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
