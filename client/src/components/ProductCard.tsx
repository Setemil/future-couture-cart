import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart, Product } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  imageHover?: string;
}

export const ProductCard = ({ product, imageHover }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`, {
      description: `Price: $${product.price.toFixed(2)}`,
    });
  };

  return (
    <Card
      className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-luxury"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={isHovered && imageHover ? imageHover : product.image}
          alt={product.imageAlt || product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        
        {/* Add to Cart Button (appears on hover) */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <Button
            onClick={handleAddToCart}
            className="w-full rounded-none bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground"
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <p className="mb-1 font-sans text-xs uppercase tracking-wider text-muted-foreground">
          {product.category}
        </p>
        <h3 className="mb-2 font-serif text-lg font-medium">{product.name}</h3>
        <p className="font-sans text-lg font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </Card>
  );
};
