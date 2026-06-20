import { motion, useReducedMotion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import SectionWrapper from '../components/SectionWrapper';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

const Feedback = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
      },
    },
  };

  const renderTestimonials = () => {
    if (testimonials.length === 0) {
      return (
        <motion.div
          className="text-center py-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full bg-bg-subtle border border-border flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">💬</span>
          </div>
          <p className="text-text-muted text-lg max-w-md mx-auto">
            Testimonials coming soon — check back after my first few freelance projects ship.
          </p>
        </motion.div>
      );
    }

    if (testimonials.length <= 2) {
      return (
        <motion.div
          className="max-w-2xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      );
    }

    return (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <>
      <SEOHead
        title="Feedback"
        description="What clients and collaborators say about working with Rasid Ekbal"
      />

      <div className="pt-28 section-padding">
        <div className="max-container mx-auto">
          <SectionWrapper>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                What People Say
              </h1>
              <p className="text-text-secondary text-lg max-w-xl mx-auto">
                Feedback from clients and collaborators I've worked with.
              </p>
            </motion.div>

            {renderTestimonials()}
          </SectionWrapper>
        </div>
      </div>
    </>
  );
};

export default Feedback;
