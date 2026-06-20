import { motion, useReducedMotion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';

const NotFound = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead title="Page Not Found" />

      <div className="min-h-screen flex items-center justify-center section-padding">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="text-8xl md:text-9xl font-heading font-bold text-accent opacity-20 mb-4 select-none"
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            404
          </motion.p>

          <h1 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Page not found
          </h1>

          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Button variant="primary" href="/">
            Go back home
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
