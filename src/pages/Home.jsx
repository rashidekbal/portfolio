import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import Tag from '../components/Tag';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import AboutSection from '../components/AboutSection';

/* ───────────────────────────────────────────
   Custom hook – animate a number from 0 → end
   when the element scrolls into view
   ─────────────────────────────────────────── */
function useCountUp(end, duration = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          if (prefersReducedMotion) {
            setValue(end);
            return;
          }

          const start = performance.now();
          const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration, prefersReducedMotion]);

  return { ref, value };
}

/* ───────────────────────────────────────────
   Stat item component
   ─────────────────────────────────────────── */
function StatItem({ number, suffix = '', label }) {
  const { ref, value } = useCountUp(number);
  return (
    <div ref={ref} className="text-center">
      <span className="text-3xl md:text-4xl font-heading font-bold text-accent">
        {value}
        {suffix}
      </span>
      <p className="text-text-secondary text-sm mt-1">{label}</p>
    </div>
  );
}

/* ───────────────────────────────────────────
   Framer Motion variants
   ─────────────────────────────────────────── */
const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const heroChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/* ───────────────────────────────────────────
   Home page
   ─────────────────────────────────────────── */
export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <SEOHead
        title="Rasid Ekbal — Full-Stack · Mobile · AI Systems"
        description="I design and engineer production-grade applications, bridging robust backend architecture with polished user experiences and intelligent AI integrations."
      />

      {/* ─── SECTION 1 · Hero ─────────────────────────── */}
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center text-center relative pt-24 section-padding"
        initial={prefersReducedMotion ? 'visible' : 'hidden'}
        animate="visible"
        variants={heroContainer}
      >
        <motion.p
          variants={heroChild}
          className="text-text-muted text-sm tracking-widest uppercase mb-4 font-body"
        >
          Full-Stack · Mobile · AI Systems
        </motion.p>

        <motion.h1
          variants={heroChild}
          className="text-5xl md:text-7xl font-heading font-bold tracking-tight"
        >
          <span className="text-gradient">Rasid Ekbal</span>
        </motion.h1>

        <motion.p
          variants={heroChild}
          className="text-xl md:text-2xl text-text-secondary max-w-2xl mt-6 font-body"
        >
          I design and engineer production-grade applications, bridging robust backend
          architecture with polished user experiences and intelligent AI integrations.
        </motion.p>

        <motion.div
          variants={heroChild}
          className="flex gap-4 mt-8 items-center justify-center"
        >
          <Button variant="primary" href="/projects">
            View Projects
          </Button>
          <Button variant="secondary" href="/contact">
            Get in touch
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={heroChild}
          className="absolute bottom-8 text-text-muted animate-bounce-subtle"
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.section>

      {/* ─── SECTION 2 · Quick Stats ─────────────────── */}
      <SectionWrapper className="section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          <StatItem number={40} suffix="+" label="Repositories" />
          <StatItem number={3} suffix="+" label="Shipped Products" />
          <StatItem number={7} suffix="+" label="Years Experience" />
          <StatItem number={2} suffix="" label="External Adopters" />
        </div>
      </SectionWrapper>

      {/* ─── SECTION 3 · Featured Projects ───────────── */}
      <SectionWrapper className="section-padding">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-xl mx-auto">
          A selection of recent work spanning full-stack platforms, developer
          tools, and AI systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-container mx-auto">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/projects"
            className="text-accent hover:text-accent-hover transition-colors font-medium"
          >
            View all projects →
          </Link>
        </div>
      </SectionWrapper>

      {/* ─── SECTION 4 · About Me / Developer Info ───────── */}
      <AboutSection />

      {/* ─── SECTION 5 · CTA Banner ──────────────────── */}
      <SectionWrapper className="section-padding">
        <div className="bg-bg-elevated rounded-2xl border border-border p-10 md:p-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            I&apos;m currently available for freelance work. Let&apos;s build
            something great together.
          </p>
          <Button variant="primary" href="/contact">
            Let&apos;s work together
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
