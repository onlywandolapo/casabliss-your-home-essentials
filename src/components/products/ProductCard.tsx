import { Plus, Check, Star } from 'lucide-react';
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

  // Generate a pseudo-random rating between 4.3 and 5.0 based on product id
  const rating = (4.3 + (product.id.charCodeAt(product.id.length - 1) % 8) * 0.1).toFixed(1);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={imageError ? fallbackImage : product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={() => setImageError(true)}
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick add button overlay */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <Button
            variant={inCart ? 'secondary' : 'default'}
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full backdrop-blur-sm ${isAdding ? 'animate-bounce-subtle' : ''}`}
          >
            {inCart ? (
              <>
                <Check className="h-4 w-4" />
                In Cart ({cartItem?.quantity})
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                Add to Cart
              </>
            )}
          </Button>
        </div>

        {!product.inStock && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center backdrop-blur-sm">
            <span className="text-muted-foreground font-medium px-4 py-2 bg-card rounded-full text-sm">Sold Out</span>
          </div>
        )}
        
        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
          {rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-body font-semibold text-foreground truncate group-hover:text-primary transition-colors duration-200">{product.name}</h3>
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
            className={`md:hidden ${isAdding ? 'animate-bounce-subtle' : ''}`}
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
