import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const Lightbox = ({ images, currentIndex, isOpen, onClose, onNext, onPrev }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Previous arrow */}
          {images.length > 1 && (
            <button
              className="absolute left-4 w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center hover:bg-accent transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
          )}

          {/* Image */}
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1} of ${images.length}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next arrow */}
          {images.length > 1 && (
            <button
              className="absolute right-4 w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center hover:bg-accent transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          )}

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-text-secondary text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
