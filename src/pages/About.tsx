import { Utensils, Heart, ShieldCheck, Users, Clock, MapPin, UserRound } from 'lucide-react';
import heroBistro from '@/assets/hero-bistro.jpg';
import metroMunchLogo from '@/assets/metro-munch-logo.jpg';

const values = [
  {
    icon: Utensils,
    title: 'Authentic Flavors',
    description: 'Every dish is prepared with traditional Nigerian recipes passed down through generations, using only the freshest ingredients.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Our chefs pour passion into every plate — from smoky jollof rice to perfectly flaky meat pies.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality First',
    description: 'We maintain the highest hygiene and food safety standards. Your health and satisfaction come first.',
  },
  {
    icon: Users,
    title: 'Community Focused',
    description: 'Metro Munch is more than food — we\'re building a community of food lovers across Lagos.',
  },
];

const team = [
  { name: 'Mr. Destiny Agbanimu', role: 'Founder' },
  { name: 'Hon. Remi Odunsi', role: 'Co-Founder' },
  { name: 'Mrs. Oluwaseun Adeniji', role: 'Business Manager' },
  { name: 'Mrs. Mercy Bamidele', role: 'Operations Manager' },
];

const About = () => {
  return (
    <main className="page-transition">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <img
          src={heroBistro}
          alt="Metro Munch restaurant interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative text-center text-background z-10 px-4">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            About Metro Munch
          </h1>
          <p className="text-lg md:text-xl text-background/90 max-w-xl mx-auto">
            Where every meal tells a story of flavor, tradition, and love.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Our Story</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Born from a Love for Nigerian Food
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Metro Munch started with a simple idea: make delicious, authentic Nigerian food accessible to everyone in Lagos. What began as a small kitchen in Ikeja has grown into a beloved fast-food destination known for quality and speed.
                </p>
                <p>
                  Our menu features everything from smoky party-style jollof rice and rich egusi soup to crispy meat pies and ice-cold drinks. Every item is prepared fresh daily by our team of experienced chefs who understand that great food starts with great ingredients.
                </p>
                <p>
                  Whether you're grabbing a quick lunch, ordering for the family, or catering an event, Metro Munch delivers the taste of home — fast, fresh, and affordable.
                </p>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-60" />
                <img
                  src={metroMunchLogo}
                  alt="Metro Munch logo"
                  className="relative w-full max-w-sm mx-auto rounded-3xl card-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center max-w-3xl mx-auto animate-fade-in">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Our Mission</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Feeding Lagos, One Plate at a Time
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To serve affordable, high-quality Nigerian meals with unmatched speed and consistency — making every customer feel at home with every bite. We believe everyone deserves access to great food without the wait.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">What We Stand For</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-card border border-border/50 card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Meet the Team</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              The People Behind Metro Munch
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group text-center p-8 rounded-2xl bg-card border border-border/50 card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <UserRound className="h-9 w-9" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-8 w-8 mb-2" />
              <h3 className="font-display text-xl font-semibold">Open Daily</h3>
              <p className="text-primary-foreground/80">8:00 AM — 10:00 PM</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-8 w-8 mb-2" />
              <h3 className="font-display text-xl font-semibold">Our Location</h3>
              <p className="text-primary-foreground/80 text-sm">The Phillipi Centre, Obafemi Awolowo Way, Ikeja, Lagos</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Utensils className="h-8 w-8 mb-2" />
              <h3 className="font-display text-xl font-semibold">30+ Menu Items</h3>
              <p className="text-primary-foreground/80">Nigerian dishes, snacks & drinks</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
