import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface MenuLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string }[];
  currentIndex: number;
}

const MenuLightbox = ({ isOpen, onClose, images, currentIndex }: MenuLightboxProps) => {
  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      slides={slides}
      index={currentIndex}
    />
  );
};

export default MenuLightbox;
