import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
          Delicious Meals,
          <br />
          <span className="text-gradient-gold">Unforgettable Taste</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
          Experience the perfect blend of local and continental cuisine in an atmosphere of refined elegance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/menu">
            <Button variant="hero" size="lg">
              View Our Menu
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Reserve a Table
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
