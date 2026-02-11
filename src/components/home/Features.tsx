import { Truck, Shield, Clock, HeartHandshake, Star, Utensils } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Lightning Delivery',
    description: 'Hot food at your door in under 30 minutes',
    stat: '30 min',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Fresh ingredients sourced daily from trusted suppliers',
    stat: '100%',
  },
  {
    icon: Clock,
    title: 'Always Open',
    description: 'Serving you from 8am to 11pm, 7 days a week',
    stat: '15 hrs',
  },
  {
    icon: HeartHandshake,
    title: '24/7 Support',
    description: "Questions or issues? We're always just a message away",
    stat: '24/7',
  },
];

const reviews = [
  { name: 'Tobi A.', text: 'Best jollof rice in Lagos! Always hot and perfectly seasoned 🔥', rating: 5 },
  { name: 'Funke O.', text: 'Fast delivery and the meat pie is incredible. My new go-to spot!', rating: 5 },
  { name: 'Chidi N.', text: 'Love the variety of drinks and the food never disappoints.', rating: 4 },
];

const Features = () => {
  return (
    <>
      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Metro Munch Experience
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-card border border-border/50 card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 animate-fade-in cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 group-hover:scale-110 transform">
                  <feature.icon className="h-7 w-7" />
                </div>
                <p className="font-display text-2xl font-bold text-primary mb-1">{feature.stat}</p>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Testimonials</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-muted-foreground/30" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Utensils className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
