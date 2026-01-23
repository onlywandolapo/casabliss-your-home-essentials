import { Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/data/products';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, items } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const inCart = items.some((item) => item.id === product.id);
  const cartItem = items.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <span className="text-muted-foreground font-medium">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-foreground truncate">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-display text-lg font-semibold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          <Button
            variant={inCart ? 'secondary' : 'default'}
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={isAdding ? 'animate-bounce-subtle' : ''}
          >
            {inCart ? (
              <>
                <Check className="h-4 w-4" />
                {cartItem?.quantity}
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
