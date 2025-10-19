import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import shopData from '@/data/shopProducts.json';

const Shop = () => {
  const [filter, setFilter] = useState('all');
  const { addToCart } = useCart();

  const categories = ['all', ...Array.from(new Set(shopData.products.map(p => p.category)))];

  const filteredProducts = filter === 'all' 
    ? shopData.products 
    : shopData.products.filter(p => p.category === filter);

  const getImagePath = (imageName: string) => {
    try {
      return new URL(`../assets/${imageName}.jpg`, import.meta.url).href;
    } catch {
      return '';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-playfair font-bold text-gradient-gold mb-4">
              Our Shop
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Order your favorite dishes and get them delivered to your doorstep
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border transition-all duration-500 hover:shadow-gold"
              >
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground font-bold px-3 py-1 rounded-full text-sm">
                    -{product.discount}%
                  </div>
                )}

                {/* Image Container with Hover Effect */}
                <div className="relative h-64 overflow-hidden bg-muted transition-all duration-500 group-hover:bg-gradient-to-b group-hover:from-primary/30 group-hover:to-primary/10">
                  <img
                    src={getImagePath(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-full p-4 transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                  
                  {/* Add to Cart Button - Appears on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Button
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        originalPrice: product.originalPrice,
                        image: product.image,
                        category: product.category,
                      })}
                      variant="hero"
                      className="font-semibold px-8 py-6 text-base rounded-full shadow-gold hover:shadow-elegant scale-95 group-hover:scale-100 transition-all duration-300"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Add To Cart
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5 transition-colors duration-500 group-hover:bg-primary/5">
                  {/* Price */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-playfair font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating
                            ? 'fill-primary text-primary'
                            : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Shop;
