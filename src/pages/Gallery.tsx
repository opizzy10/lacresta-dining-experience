import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Masonry from "react-masonry-css";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import aboutInterior from "@/assets/about-interior.jpg";
import dishSalmon from "@/assets/dish-salmon.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import dishLobster from "@/assets/dish-lobster.jpg";
import interiorFullWidth from "@/assets/interior-full-width.jpg";

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const galleryImages = [
    { src: heroRestaurant, alt: "Elegant dining room with premium ambiance" },
    { src: dishSalmon, alt: "Grilled salmon with lemon butter sauce" },
    { src: gallery1, alt: "Premium bar selection and cocktails" },
    { src: dishSteak, alt: "Wagyu beef steak with truffle potatoes" },
    { src: aboutInterior, alt: "Restaurant interior with sophisticated decor" },
    { src: dishPasta, alt: "Artisan carbonara pasta" },
    { src: gallery2, alt: "Elegant table setting for fine dining" },
    { src: dishDessert, alt: "Chocolate lava cake dessert" },
    { src: gallery3, alt: "Chef preparing gourmet dishes" },
    { src: dishLobster, alt: "Butter lobster tail with herbs" },
    { src: interiorFullWidth, alt: "Full panoramic view of dining room" },
  ];

  const breakpointColumns = {
    default: 3,
    1100: 3,
    768: 2,
    500: 1,
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "50px",
      threshold: 0.01,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index") || "0");
          setVisibleImages((prev) => [...prev, index]);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const imageElements = document.querySelectorAll(".gallery-image");
    imageElements.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

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

      {/* Gallery Masonry Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-6 w-auto"
            columnClassName="pl-6 bg-clip-padding"
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                data-index={index}
                className="gallery-image relative overflow-hidden rounded-lg shadow-elegant group cursor-pointer mb-6 animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: visibleImages.includes(index) ? 1 : 0,
                }}
              >
                {visibleImages.includes(index) && (
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-foreground text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </Masonry>
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
