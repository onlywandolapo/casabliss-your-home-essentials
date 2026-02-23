import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex flex-1 items-center justify-center py-20 page-transition">
      <div className="container max-w-lg text-center animate-fade-in">
        <p className="text-8xl mb-4">🍔</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-2">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          Looks like this page doesn't exist. Let's get you back to something delicious!
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/">
            <Button variant="hero" size="lg">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" size="lg">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Browse Menu
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
