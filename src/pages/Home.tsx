import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChefHat, Clock, Award, Sparkles } from "lucide-react";
import dishSalmon from "@/assets/dish-salmon.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishLobster from "@/assets/dish-lobster.jpg";

const Home = () => {
  const featuredDishes = [
    {
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with lemon butter sauce and asparagus",
      price: "$42",
      image: dishSalmon,
    },
    {
      name: "Wagyu Steak",
      description: "Premium wagyu beef with truffle mashed potatoes",
      price: "$68",
      image: dishSteak,
    },
    {
      name: "Artisan Pasta",
      description: "Handmade carbonara with pancetta and parmesan",
      price: "$32",
      image: dishPasta,
    },
    {
      name: "Butter Lobster Tail",
      description: "Succulent lobster tail with herb butter and seasonal vegetables",
      price: "$58",
      image: dishLobster,
    },
    {
      name: "Mediterranean Sea Bass",
      description: "Whole roasted sea bass with olive tapenade and lemon",
      price: "$46",
      image: dishSalmon,
    },
    {
      name: "Filet Mignon",
      description: "8oz grass-fed beef with red wine reduction and roasted vegetables",
      price: "$62",
      image: dishSteak,
    },
    {
      name: "Truffle Risotto",
      description: "Creamy arborio rice with black truffle and parmesan",
      price: "$38",
      image: dishPasta,
    },
    {
      name: "Lobster Thermidor",
      description: "Classic French preparation with cognac sauce and gruyère",
      price: "$72",
      image: dishLobster,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "Absolutely phenomenal dining experience. The attention to detail in every dish was remarkable.",
      rating: 5,
    },
    {
      name: "James Rodriguez",
      text: "Best restaurant in the city! The ambiance and service are unmatched.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      text: "A culinary masterpiece. Every visit feels like a special occasion.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "The perfect blend of elegance and warmth. Chef's special was extraordinary!",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description: "World-class culinary team with decades of experience",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in fine dining",
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Ingredients sourced fresh every morning",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <BackToTop />

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-playfair">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
              Featured <span className="text-gradient-gold">Dishes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our chef's signature creations, crafted with passion and precision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover-scale cursor-pointer group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-foreground font-playfair mb-1">
                        {dish.name}
                      </h3>
                      <p className="text-primary font-semibold text-lg">
                        {dish.price}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">{dish.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button variant="hero" size="lg">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Chef's Special */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold font-playfair">
                Chef's <span className="text-gradient-gold">Special</span>
              </h2>
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A limited-time masterpiece crafted by our Executive Chef
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden hover-scale cursor-pointer group">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-80 md:h-auto overflow-hidden">
                  <img
                    src={dishLobster}
                    alt="Chef's Special - Butter Lobster Tail"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                    Limited Time
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold font-playfair mb-4">
                    Butter Lobster Tail
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Succulent lobster tail bathed in herb-infused butter, accompanied by seasonal roasted vegetables and saffron-infused rice. A symphony of flavors that celebrates the ocean's finest bounty.
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-primary">$58</span>
                    <span className="text-sm text-muted-foreground">Available this month</span>
                  </div>
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="w-full">
                      Reserve & Order
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
              What Our <span className="text-gradient-gold">Guests Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied diners about their exceptional experiences
            </p>
          </motion.div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-playfair"
          >
            Ready for an <span className="text-gradient-gold">Exceptional</span> Experience?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Reserve your table today and let us create an unforgettable dining experience for you
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Make a Reservation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
