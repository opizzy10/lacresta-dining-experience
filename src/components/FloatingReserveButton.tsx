import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReservationModal from './ReservationModal';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingReserveButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 400px
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-40"
          >
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              variant="hero"
              className="rounded-full shadow-gold hover:shadow-elegant h-14 px-6 group"
            >
              <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Reserve Table
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <ReservationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default FloatingReserveButton;
