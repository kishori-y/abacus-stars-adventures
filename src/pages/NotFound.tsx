import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90 flex items-center justify-center p-4">
      <Card className="shadow-card bg-card/80 backdrop-blur-sm border-border/50 max-w-md w-full">
        <CardContent className="p-8 text-center space-y-6">
          <div className="relative mx-auto w-24 h-24">
            <Calculator className="h-24 w-24 text-primary/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">404</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              Oops! Page Not Found
            </h1>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist. Let's get you back to learning!
            </p>
          </div>

          <div className="space-y-3">
            <Link to="/" className="w-full">
              <Button className="w-full gradient-primary shadow-button transition-bounce hover:scale-105">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Button>
            </Link>
            
            <Link to="/dashboard" className="w-full">
              <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
