import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏡</span>
              <span className="font-display text-xl font-semibold">CasaBliss</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for quality home essentials. From spices to snacks, we've got everything you need.
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
                  All Products
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
            <h4 className="font-display font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=spices" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Spices
                </Link>
              </li>
              <li>
                <Link to="/products?category=teas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Teas
                </Link>
              </li>
              <li>
                <Link to="/products?category=juices" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Juices
                </Link>
              </li>
              <li>
                <Link to="/products?category=pantry" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pantry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📧 hello@casabliss.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Home Street, City</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CasaBliss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
