import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">What We Serve</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our Menu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From authentic Nigerian dishes to international favorites, we've got something for everyone
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 animate-fade-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent group-hover:from-primary/80 group-hover:via-primary/20 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
                <span className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1">{category.icon}</span>
                <h3 className="font-display font-semibold text-background text-lg">
                  {category.name}
                </h3>
                <p className="text-background/80 text-xs mt-1 max-h-0 overflow-hidden group-hover:max-h-10 transition-all duration-300">
                  {category.description}
                </p>
                <div className="flex items-center gap-1 mt-2 text-background/90 text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Browse</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
