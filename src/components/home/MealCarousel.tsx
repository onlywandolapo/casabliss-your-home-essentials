import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Sparkles, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products, categories } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

const FILTERS = [
  { id: 'all', name: 'Popular' },
  ...categories.map((c) => ({ id: c.id, name: c.name })),
];

const formatNaira = (n: number) => `₦${n.toLocaleString('en-NG')}`;

const MealCarousel = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { addToCart } = useCart();

  const filteredMeals =
    activeFilter === 'all'
      ? products.slice(0, 10)
      : products.filter((p) => p.category === activeFilter).slice(0, 10);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: false },
    [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Re-init when filter changes so snaps are recalculated
  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [activeFilter, emblaApi]);

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-10 animate-fade-in">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <p className="text-primary font-medium text-sm uppercase tracking-widest">
              Taste the Selection
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Today's Top Picks
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Hand-picked meals our customers love — slide through and order in seconds.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all border',
                activeFilter === f.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-md scale-105'
                  : 'bg-card text-muted-foreground border-border hover:border-primary hover:text-primary'
              )}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {filteredMeals.map((meal, idx) => (
                <div
                  key={meal.id}
                  className="pl-4 min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div
                    className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col animate-fade-in"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <Link to={`/products/${meal.id}`} className="block relative overflow-hidden aspect-[4/3]">
                      <img
                        src={meal.image}
                        alt={meal.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Badge className="absolute top-3 left-3 bg-background/90 text-foreground hover:bg-background backdrop-blur-sm">
                        {formatNaira(meal.price)}
                      </Badge>
                    </Link>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-display font-semibold text-lg text-foreground mb-1 line-clamp-1">
                        {meal.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                        {meal.description}
                      </p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1"
                          onClick={() => addToCart(meal)}
                        >
                          <ShoppingCart className="h-4 w-4" />
                          Order Now
                        </Button>
                        <Link to={`/products/${meal.id}`}>
                          <Button size="sm" variant="outline">
                            Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous meal"
            className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-card border border-border shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next meal"
            className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-card border border-border shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                'h-2 rounded-full transition-all',
                i === selectedIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealCarousel;
