import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, UtensilsCrossed } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-b from-background to-card/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <UtensilsCrossed className="w-24 h-24 text-primary mx-auto mb-8" />
          </motion.div>
          <h1 className="text-9xl font-bold text-gradient-gold mb-4 font-playfair">
            404
          </h1>
          <h2 className="text-4xl font-semibold mb-6 font-playfair">
            Recipe Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Oops! Looks like this dish isn't on our menu. The page you're looking
            for doesn't exist or has been moved to our secret recipe vault.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="gap-2">
                <Home className="w-4 h-4" />
                Return Home
              </Button>
            </Link>
            <Link to="/menu">
              <Button size="lg" variant="outline" className="gap-2">
                <UtensilsCrossed className="w-4 h-4" />
                View Menu
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
