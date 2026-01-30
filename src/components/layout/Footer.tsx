import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍔</span>
              <span className="font-script text-xl text-primary">Metro Munch</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your favorite fast food spot for authentic Nigerian dishes, intercontinental cuisine, and delicious snacks. Quality food, fast delivery!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Full Menu
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Categories
                </Link>
              </li>
            </ul>
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
                <Link to="/products?category=intercontinental" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Intercontinental
                </Link>
              </li>
              <li>
                <Link to="/products?category=grills-shawarma" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Grills & Shawarma
                </Link>
              </li>
              <li>
                <Link to="/products?category=snacks" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Snacks
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📧 hello@metromunch.ng</li>
              <li>📞 +234 (0) 812 345 6789</li>
              <li>📍 123 Victoria Island, Lagos</li>
              <li className="pt-2">
                <span className="text-primary font-medium">Open Daily: 8am - 11pm</span>
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