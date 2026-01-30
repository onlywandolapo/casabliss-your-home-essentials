import { Plus, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/data/products';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, items } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [imageError, setImageError] = useState(false);

  const inCart = items.some((item) => item.id === product.id);
  const cartItem = items.find((item) => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  const fallbackImage = `https://placehold.co/400x400/2d5a3d/ffffff?text=${encodeURIComponent(product.name.split(' ')[0])}`;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={imageError ? fallbackImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setImageError(true)}
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <span className="text-muted-foreground font-medium">Sold Out</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-body font-medium text-foreground truncate">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2 font-body">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-display text-lg font-semibold text-foreground">
            {formatPrice(product.price)}
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
    </Link>
  );
};

export default ProductCard;