import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MenuLightbox from "@/components/MenuLightbox";
import { motion } from "framer-motion";
import menuAppetizer from "@/assets/menu-appetizer.jpg";
import dishSalmon from "@/assets/dish-salmon.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishLobster from "@/assets/dish-lobster.jpg";
import menuWine from "@/assets/menu-wine.jpg";
import menuData from "@/data/menuData.json";

const imageMap: Record<string, string> = {
  "menu-appetizer": menuAppetizer,
  "dish-salmon": dishSalmon,
  "dish-pasta": dishPasta,
  "dish-dessert": dishDessert,
  "dish-steak": dishSteak,
  "dish-lobster": dishLobster,
  "menu-wine": menuWine,
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  const categories = [
    { id: "all", name: "All" },
    { id: "starters", name: "Starters" },
    { id: "mains", name: "Main Courses" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Drinks" },
  ];

  const menuItems = {
    starters: menuData.starters.map(item => ({
      ...item,
      image: imageMap[item.image]
    })),
    mains: menuData.mains.map(item => ({
      ...item,
      image: imageMap[item.image]
    })),
    desserts: menuData.desserts.map(item => ({
      ...item,
      image: imageMap[item.image]
    })),
    drinks: menuData.drinks.map(item => ({
      ...item,
      image: imageMap[item.image]
    })),
  };

  const allItems = [
    ...menuItems.starters,
    ...menuItems.mains,
    ...menuItems.desserts,
    ...menuItems.drinks,
  ];

  const displayedItems =
    selectedCategory === "all"
      ? allItems
      : menuItems[selectedCategory as keyof typeof menuItems] || [];

  return (
    <>
      <Navigation />
      <BackToTop />

      {/* Hero Section */}
      <section className="pt-32 pb-12 text-center bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
              Our <span className="text-gradient-gold">Menu</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of exquisite dishes, crafted with passion and precision
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-card/50 sticky top-20 z-40 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="min-w-[120px]"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 font-playfair">
              {selectedCategory === "all"
                ? "All Menu Items"
                : categories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card
                    className="overflow-hidden hover-scale cursor-pointer"
                    onClick={() => setLightboxIndex(index)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold font-playfair">
                          {item.name}
                        </h3>
                        <span className="text-primary font-bold">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            * Prices and menu items are subject to change. Please ask your server about seasonal specials and chef recommendations.
          </p>
          <p className="text-muted-foreground mt-2">
            Allergies and dietary requirements? Our team is happy to accommodate your needs.
          </p>
        </div>
      </section>

      <MenuLightbox
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        images={displayedItems.map((item) => ({ src: item.image, alt: item.name }))}
        currentIndex={lightboxIndex >= 0 ? lightboxIndex : 0}
      />

      <Footer />
    </>
  );
};

export default Menu;
