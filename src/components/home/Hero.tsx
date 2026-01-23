import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 warm-overlay" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span>🌿</span>
              <span>Premium Home Essentials</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight">
              Bring <span className="text-gradient">Quality</span> to Your Kitchen
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Discover our curated collection of spices, teas, pantry essentials, and more.
              From exotic flavors to everyday basics, elevate your home cooking experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button variant="hero" size="xl">
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" size="xl">
                  Browse Categories
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="font-display text-4xl font-semibold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground tracking-wide">Products</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground tracking-wide">Spices</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-foreground">4.9★</p>
                <p className="text-sm text-muted-foreground tracking-wide">Rating</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=500&fit=crop"
                  alt="Spices"
                  className="w-full h-64 object-cover rounded-2xl card-shadow animate-fade-in"
                  style={{ animationDelay: '0.1s' }}
                />
                <img
                  src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop"
                  alt="Tea"
                  className="w-full h-40 object-cover rounded-2xl card-shadow animate-fade-in"
                  style={{ animationDelay: '0.2s' }}
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&h=300&fit=crop"
                  alt="Pantry"
                  className="w-full h-40 object-cover rounded-2xl card-shadow animate-fade-in"
                  style={{ animationDelay: '0.3s' }}
                />
                <img
                  src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=500&fit=crop"
                  alt="Juices"
                  className="w-full h-64 object-cover rounded-2xl card-shadow animate-fade-in"
                  style={{ animationDelay: '0.4s' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
