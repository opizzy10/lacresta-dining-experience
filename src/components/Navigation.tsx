import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReservationModal from "./ReservationModal";
import { ThemeToggle } from "./ThemeToggle";
import { useCart } from "@/contexts/CartContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Shop", path: "/shop" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background shadow-elegant border-b border-border"
            : "bg-background/95 backdrop-blur-sm border-b border-border/50"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gradient-gold font-playfair">
                LaCresta
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon" className="w-9 h-9 hover-scale">
                  <ShoppingCart className="h-5 w-5" />
                  {getCartCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {getCartCount()}
                    </span>
                  )}
                </Button>
              </Link>
              <ThemeToggle />
              <Button onClick={() => setShowReservationModal(true)}>
                Reserve Table
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <Link to="/cart" className="relative flex-1" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Cart
                      {getCartCount() > 0 && (
                        <span className="ml-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                          {getCartCount()}
                        </span>
                      )}
                    </Button>
                  </Link>
                  <ThemeToggle />
                </div>
                <Button
                  className="w-full"
                  onClick={() => {
                    setShowReservationModal(true);
                    setIsOpen(false);
                  }}
                >
                  Reserve Table
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <ReservationModal
        open={showReservationModal}
        onOpenChange={setShowReservationModal}
      />
    </>
  );
};

export default Navigation;
