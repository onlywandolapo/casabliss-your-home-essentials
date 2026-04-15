import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories, products } from '@/data/products';

const Categories = () => {
  const getProductCount = (categoryId: string) => {
    return products.filter((p) => p.category === categoryId).length;
  };

  return (
    <main className="py-8 page-transition">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Our Menu Categories
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our delicious menu featuring Nigerian favorites and international cuisine
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="mb-2">
                  <h2 className="font-body text-2xl font-semibold text-background tracking-wide">
                    {category.name}
                  </h2>
                  <p className="text-background/80 text-sm font-body">
                    {getProductCount(category.id)} items
                  </p>
                </div>
                <p className="text-background/90 text-sm mb-4 font-body">{category.description}</p>
                <div className="flex items-center gap-2 text-background font-medium font-body group-hover:gap-3 transition-all">
                  <span>Order Now</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Categories;