import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { ArrowRight, Flame } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame className="h-5 w-5 text-orange-500" />
              <p className="text-primary font-medium text-sm uppercase tracking-widest">Most Ordered</p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Dishes
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Customer favorites and bestsellers you'll love
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline" className="group">
              View Full Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
