import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const getImagePath = (imageName: string) => {
    try {
      return new URL(`../assets/${imageName}.jpg`, import.meta.url).href;
    } catch {
      return '';
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
              <h2 className="text-3xl font-playfair font-bold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Add some delicious items to get started!</p>
              <Button asChild size="lg">
                <Link to="/shop">Browse Shop</Link>
              </Button>
            </motion.div>
          </div>
        </main>

        <Footer />
        <BackToTop />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-playfair font-bold text-gradient-gold mb-4">
              Shopping Cart
            </h1>
            <p className="text-muted-foreground text-lg">
              {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 flex gap-6 items-center"
                >
                  <img
                    src={getImagePath(item.image)}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-playfair font-bold mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-semibold w-8 text-center">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                <h2 className="text-2xl font-playfair font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery</span>
                    <span>$5.00</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">${(getCartTotal() + 5).toFixed(2)}</span>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full mb-3">
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Cart;
