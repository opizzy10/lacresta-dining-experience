import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuLightbox from "@/components/MenuLightbox";
import dishSalmon from "@/assets/dish-salmon.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import menuAppetizer from "@/assets/menu-appetizer.jpg";
import menuWine from "@/assets/menu-wine.jpg";

const Menu = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string }[]>([]);
  const menuItems = {
    starters: [
      {
        name: "Shrimp Cocktail",
        description: "Fresh jumbo shrimp with zesty cocktail sauce and lemon",
        price: "$18",
        image: menuAppetizer,
      },
      {
        name: "Caesar Salad",
        description: "Crisp romaine, parmesan, croutons, classic Caesar dressing",
        price: "$14",
        image: menuAppetizer,
      },
      {
        name: "French Onion Soup",
        description: "Caramelized onions, beef broth, melted Gruyère cheese",
        price: "$12",
        image: menuAppetizer,
      },
      {
        name: "Bruschetta Trio",
        description: "Tomato basil, mushroom truffle, roasted pepper varieties",
        price: "$16",
        image: menuAppetizer,
      },
    ],
    mains: [
      {
        name: "Grilled Salmon",
        description: "Atlantic salmon, lemon butter sauce, asparagus, herb rice",
        price: "$42",
        image: dishSalmon,
      },
      {
        name: "Wagyu Beef Steak",
        description: "Premium wagyu, truffle mashed potatoes, red wine reduction",
        price: "$68",
        image: dishSteak,
      },
      {
        name: "Artisan Carbonara",
        description: "Handmade pasta, pancetta, parmesan, egg yolk",
        price: "$32",
        image: dishPasta,
      },
      {
        name: "Herb Roasted Chicken",
        description: "Free-range chicken, root vegetables, rosemary jus",
        price: "$36",
        image: dishSteak,
      },
      {
        name: "Lobster Risotto",
        description: "Creamy arborio rice, fresh lobster, saffron, white wine",
        price: "$54",
        image: dishPasta,
      },
      {
        name: "Rack of Lamb",
        description: "New Zealand lamb, mint pesto, garlic potatoes",
        price: "$58",
        image: dishSteak,
      },
    ],
    desserts: [
      {
        name: "Chocolate Lava Cake",
        description: "Molten chocolate center, vanilla ice cream, berry coulis",
        price: "$14",
        image: dishDessert,
      },
      {
        name: "Crème Brûlée",
        description: "Classic vanilla custard with caramelized sugar top",
        price: "$12",
        image: dishDessert,
      },
      {
        name: "Tiramisu",
        description: "Italian classic with espresso-soaked ladyfingers, mascarpone",
        price: "$13",
        image: dishDessert,
      },
      {
        name: "Seasonal Fruit Tart",
        description: "Fresh berries, pastry cream, almond crust",
        price: "$11",
        image: dishDessert,
      },
    ],
    drinks: [
      {
        name: "House Red Wine",
        description: "Carefully selected full-bodied red blend",
        price: "$12 / glass",
        image: menuWine,
      },
      {
        name: "House White Wine",
        description: "Crisp and refreshing Sauvignon Blanc",
        price: "$11 / glass",
        image: menuWine,
      },
      {
        name: "Champagne",
        description: "Premium French champagne, celebration worthy",
        price: "$18 / glass",
        image: menuWine,
      },
      {
        name: "Signature Cocktails",
        description: "Ask your server for our rotating cocktail menu",
        price: "$15",
        image: menuWine,
      },
      {
        name: "Fresh Juices",
        description: "Orange, grapefruit, or mixed berry",
        price: "$8",
        image: menuWine,
      },
      {
        name: "Artisan Coffee",
        description: "Espresso, cappuccino, or latte",
        price: "$6",
        image: menuWine,
      },
    ],
  };

  const handleImageClick = (items: typeof menuItems.starters, index: number) => {
    const images = items.map((item) => ({ src: item.image, alt: item.name }));
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const MenuSection = ({ items }: { items: typeof menuItems.starters }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <Card
          key={index}
          className="overflow-hidden hover-scale cursor-pointer group animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex flex-col sm:flex-row">
            <div 
              className="relative w-full sm:w-40 h-40 overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(items, index)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold">
                  View Image
                </span>
              </div>
            </div>
            <CardContent className="flex-1 p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold font-playfair">
                  {item.name}
                </h3>
                <span className="text-primary font-semibold ml-4">
                  {item.price}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 text-center">
        <div className="container mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
            Our <span className="text-gradient-gold">Menu</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of exquisite dishes, crafted with passion and precision
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="mains" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-auto">
              <TabsTrigger value="starters" className="text-sm md:text-base py-3">
                Starters
              </TabsTrigger>
              <TabsTrigger value="mains" className="text-sm md:text-base py-3">
                Main Course
              </TabsTrigger>
              <TabsTrigger value="desserts" className="text-sm md:text-base py-3">
                Desserts
              </TabsTrigger>
              <TabsTrigger value="drinks" className="text-sm md:text-base py-3">
                Drinks
              </TabsTrigger>
            </TabsList>

            <TabsContent value="starters">
              <MenuSection items={menuItems.starters} />
            </TabsContent>

            <TabsContent value="mains">
              <MenuSection items={menuItems.mains} />
            </TabsContent>

            <TabsContent value="desserts">
              <MenuSection items={menuItems.desserts} />
            </TabsContent>

            <TabsContent value="drinks">
              <MenuSection items={menuItems.drinks} />
            </TabsContent>
          </Tabs>
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
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
      />

      <Footer />
    </div>
  );
};

export default Menu;
