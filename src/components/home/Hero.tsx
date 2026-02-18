import { ArrowRight, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroBistro from '@/assets/hero-bistro.jpg';
const Hero = () => {
  return <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 warm-overlay" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{
      animationDelay: '2s'
    }} />

      <div className="container relative py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20">
              <span className="animate-bounce">🔥</span>
              <span>Fast Food • Nigerian Cuisine</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight">Taste the <span className="text-gradient">Flavor</span> of Nigeria!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">From sizzling jollof to crunchy snacks and chilled drinks — your favorite Nigerian meals, delivered fast and fresh.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button variant="hero" size="xl" className="group">
                  Order Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" size="xl" className="hover:bg-primary/5 transition-colors">
                  View Menu
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="group cursor-default">
                <p className="font-display text-4xl font-semibold text-foreground group-hover:text-primary transition-colors">30+</p>
                <p className="text-sm text-muted-foreground tracking-wide">Menu Items</p>
              </div>
              <div className="group cursor-default">
                <div className="flex items-center gap-1">
                  <Clock className="h-5 w-5 text-primary" />
                  <p className="font-display text-4xl font-semibold text-foreground group-hover:text-primary transition-colors">30min</p>
                </div>
                <p className="text-sm text-muted-foreground tracking-wide">Fast Delivery</p>
              </div>
              <div className="group cursor-default">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <p className="font-display text-4xl font-semibold text-foreground group-hover:text-primary transition-colors">4.9</p>
                </div>
                <p className="text-sm text-muted-foreground tracking-wide">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <img src={heroBistro} alt="Customers enjoying food at Metro Munch" className="relative w-full h-[500px] object-cover rounded-3xl card-shadow transition-transform duration-500 group-hover:scale-[1.02]" />
              {/* Floating rating */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl px-4 py-3 card-shadow animate-fade-in border border-border" style={{
              animationDelay: '0.7s'
            }}>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">500+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;