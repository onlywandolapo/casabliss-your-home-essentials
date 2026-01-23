import { Truck, Shield, Leaf, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Free shipping on orders over $50',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Premium products, always fresh',
  },
  {
    icon: Leaf,
    title: 'Natural & Organic',
    description: 'Sustainably sourced ingredients',
  },
  {
    icon: HeartHandshake,
    title: '24/7 Support',
    description: "We're here to help anytime",
  },
];

const Features = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
