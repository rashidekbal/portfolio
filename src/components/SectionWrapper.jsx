import { motion, useReducedMotion } from 'framer-motion';

const SectionWrapper = ({ children, className = '', id }) => {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id={id}
      className={`py-20 md:py-28 ${className}`}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
