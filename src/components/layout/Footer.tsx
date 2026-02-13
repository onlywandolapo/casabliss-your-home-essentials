import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import metroMunchLogo from '@/assets/metro-munch-logo.jpg';

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              Your favorite fast food spot for authentic Nigerian dishes, intercontinental cuisine, and delicious snacks. Quality food, fast delivery!
            </p>
          </div>

          {/* Feedback */}
          <div className="md:col-span-1">
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

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold mb-4">Our Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=nigerian-dishes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Nigerian Dishes
                </Link>
              </li>
              <li>
                <Link to="/products?category=proteins" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Extra Proteins
                </Link>
              </li>
              <li>
                <Link to="/products?category=beverages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Beverages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📧 metromunchng@gmail.com</li>
              <li>📞 +234 902 318 2683</li>
              <li>📍 The Phillipi Centre, Oluwalogbon House, Plot A, Obafemi Awolowo Way, Ikeja, Lagos</li>
              <li className="pt-2">
                <span className="text-primary font-medium">Open Daily: 8am - 10pm</span>
              </li>
            </ul>
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