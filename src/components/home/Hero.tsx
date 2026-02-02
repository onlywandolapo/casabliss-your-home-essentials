import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import metroMunchLogo from '@/assets/metro-munch-logo.jpg';

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
              <span>🔥</span>
              <span>Fast Food • Nigerian Cuisine</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight">
              Taste the <span className="text-gradient">Flavor</span> of Nigeria
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              From smoky jollof rice to crispy shawarma, discover authentic Nigerian dishes 
              and intercontinental favorites. Fresh, fast, and absolutely delicious!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button variant="hero" size="xl">
                  Order Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" size="xl">
                  View Menu
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="font-display text-4xl font-semibold text-foreground">30+</p>
                <p className="text-sm text-muted-foreground tracking-wide">Menu Items</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-foreground">30min</p>
                <p className="text-sm text-muted-foreground tracking-wide">Fast Delivery</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-foreground">4.9★</p>
                <p className="text-sm text-muted-foreground tracking-wide">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative hidden lg:block">
            <div className="flex flex-col items-center justify-center">
              <img
                src={metroMunchLogo}
                alt="Metro Munch Logo"
                className="w-80 h-80 object-cover rounded-full card-shadow animate-fade-in border-4 border-primary/20"
                style={{ animationDelay: '0.1s' }}
              />
              <div className="mt-8 text-center">
                <p className="font-display text-2xl font-bold text-primary">by Eridan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;