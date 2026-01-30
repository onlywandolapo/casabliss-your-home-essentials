import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Check, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products, categories } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/products/ProductCard';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart, removeFromCart, items } = useCart();

  const product = products.find((p) => p.id === productId);
  const cartItem = items.find((item) => item.id === productId);
  const quantity = cartItem?.quantity || 0;

  if (!product) {
    return (
      <main className="py-16 page-transition">
        <div className="container text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Item Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The menu item you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate('/products')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Menu
          </Button>
        </div>
      </main>
    );
  }

  const category = categories.find((c) => c.id === product.category);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="py-8 page-transition">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">
            Menu
          </Link>
          {category && (
            <>
              <span>/</span>
              <Link
                to={`/products?category=${category.id}`}
                className="hover:text-foreground transition-colors"
              >
                {category.name}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Image */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted card-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-4">
              {category && (
                <Link
                  to={`/products?category=${category.id}`}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-2"
                >
                  <span>{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </Link>
              )}
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-4xl font-bold text-foreground">
                {formatPrice(product.price)}
              </span>
              {product.inStock ? (
                <span className="inline-flex items-center gap-1 text-sm text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                  <Check className="h-3 w-3" />
                  Available
                </span>
              ) : (
                <span className="text-sm text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-full">
                  Sold Out
                </span>
              )}
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-4 mb-8">
              {quantity > 0 ? (
                <div className="flex items-center gap-3 bg-muted rounded-lg p-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(product.id)}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-display text-xl font-semibold w-8 text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => addToCart(product)}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  size="lg"
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className="gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Order
                </Button>
              )}
            </div>

            {/* Product Details List */}
            <div className="border-t border-border pt-6 mt-auto">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Item Details
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center justify-between">
                  <span>Category</span>
                  <span className="text-foreground">{category?.name || 'N/A'}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Item Code</span>
                  <span className="text-foreground font-mono text-sm">{product.id.toUpperCase()}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Availability</span>
                  <span className="text-foreground">{product.inStock ? 'Available Now' : 'Sold Out'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <div
                  key={relatedProduct.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                >
                  <ProductCard product={relatedProduct} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;