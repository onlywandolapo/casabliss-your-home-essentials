import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Star, Send, Instagram, Facebook, Linkedin, Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import metroMunchLogo from '@/assets/metro-munch-logo.jpg';

// X (Twitter) and TikTok aren't in lucide-react — inline brand glyphs.
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.05a8.16 8.16 0 0 0 4.77 1.52V7.12a4.85 4.85 0 0 1-1.84-.43z" />
  </svg>
);

const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/eat_metromunch/', Icon: Instagram },
  { name: 'X (Twitter)', href: 'https://x.com/Metromunchng', Icon: XIcon },
  { name: 'Facebook', href: 'https://www.facebook.com/share/1EVqpkuecr/', Icon: Facebook },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/metro-munch/', Icon: Linkedin },
  { name: 'TikTok', href: 'https://www.tiktok.com/@metro.munch4', Icon: TikTokIcon },
];

const PHONE_DISPLAY = '+234 902 318 2683';
const WHATSAPP_URL = 'https://wa.me/2349023182683';
const EMAIL = 'metromunchng@gmail.com';

const Footer = () => {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error('Please select a rating');
      return;
    }
    toast.success('Thank you for your feedback! 🎉');
    setRating(0);
    setFeedback('');
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src={metroMunchLogo} 
                alt="Metro Munch" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-display text-xl font-bold text-primary">Metro Munch</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your favorite fast food spot for authentic Nigerian dishes and delicious snacks. Quality food, fast delivery!
            </p>
            {/* Social Media */}
            <div className="flex flex-wrap gap-3 pt-2">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  aria-label={`Follow us on ${name}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Full Menu</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="/faqs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-primary transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a
                  href={`tel:+2349023182683`}
                  className="hover:text-primary transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Chat with us on WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>The Phillipi Centre, Obafemi Awolowo Way, Ikeja, Lagos</span>
              </li>
              <li className="pt-1">
                <span className="text-primary font-medium">Open Daily: 8am – 10pm</span>
              </li>
            </ul>
          </div>

          {/* Feedback */}
          <div>
            <h4 className="font-display font-semibold mb-4">Give Us Feedback</h4>
            <form onSubmit={handleSubmitFeedback} className="space-y-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    className="transition-transform hover:scale-125"
                  >
                    <Star
                      className={`h-5 w-5 transition-colors ${
                        star <= (hoveredStar || rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-muted-foreground'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <Textarea
                placeholder="Tell us about your experience..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="resize-none h-20 text-sm"
              />
              <Button type="submit" size="sm" className="w-full group">
                Send Feedback
                <Send className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Metro Munch. All rights reserved. Made with 💚 in Nigeria</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
