import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our Menu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From authentic Nigerian dishes to international favorites, we've got something for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative aspect-square rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                <span className="text-3xl mb-2">{category.icon}</span>
                <h3 className="font-display font-semibold text-background text-lg">
                  {category.name}
                </h3>
                <p className="text-background/80 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {category.description}
                </p>
                <ArrowRight className="h-4 w-4 text-background mt-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;