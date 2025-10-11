import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import aboutInterior from "@/assets/about-interior.jpg";
import dishSalmon from "@/assets/dish-salmon.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: heroRestaurant, alt: "Elegant dining room" },
    { src: dishSalmon, alt: "Grilled salmon dish" },
    { src: gallery1, alt: "Premium bar selection" },
    { src: dishSteak, alt: "Wagyu beef steak" },
    { src: aboutInterior, alt: "Restaurant interior" },
    { src: dishPasta, alt: "Artisan pasta" },
    { src: gallery2, alt: "Table setting" },
    { src: dishDessert, alt: "Chocolate lava cake" },
    { src: gallery3, alt: "Chef at work" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 text-center">
        <div className="container mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
            Our <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A visual journey through our restaurant, showcasing our ambiance, culinary creations, and the passion behind every detail
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-elegant group cursor-pointer animate-fade-in aspect-square"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair animate-fade-in">
            Experience It <span className="text-gradient-gold">Yourself</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            These images only capture a fraction of the magic. Visit us to experience the full ambiance, flavors, and hospitality that define LaCresta Dining.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
