import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Shield, HelpCircle, ExternalLink, Smartphone } from 'lucide-react';
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
          <StatItem number={2} suffix="+" label="Years Experience" />
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

      {/* ─── SECTION 3.5 · Published Android Apps ─────────── */}
      <SectionWrapper className="section-padding bg-bg-surface/50 border-y border-border/40">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Smartphone size={20} className="text-accent" />
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Google Play & Android Ecosystem
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Published Apps & Games
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-xl mx-auto">
          Production mobile applications deployed to users with dedicated privacy policies, terms of service, and direct support centers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-container mx-auto">
          {/* App 1: Number Blocks 2048 */}
          <div className="bg-bg-elevated rounded-2xl border border-border/60 p-6 flex flex-col justify-between hover:border-accent/40 transition-all shadow-sm">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/images/numberblocks-icon.png"
                  alt="Number Blocks 2048"
                  className="w-14 h-14 rounded-2xl object-cover border border-border shadow-md"
                />
                <div>
                  <h3 className="font-heading font-bold text-lg text-text-primary">
                    Number Blocks 2048
                  </h3>
                  <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent mt-0.5">
                    Tactile Game · SDK 37
                  </span>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Endless merge puzzle beyond 2048 with multi-grid boards (4x4, 5x5, 6x6), procedural audio synthesis, and rewarded undos.
              </p>

              {/* Screenshots Preview */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <img
                  src="/images/numberblocks/1.jpg"
                  alt="Number Blocks Menu Screen"
                  className="rounded-lg object-cover h-24 w-full border border-border/40 shadow-xs"
                />
                <img
                  src="/images/numberblocks/2.jpg"
                  alt="Number Blocks Gameplay"
                  className="rounded-lg object-cover h-24 w-full border border-border/40 shadow-xs"
                />
                <img
                  src="/images/numberblocks/3.jpg"
                  alt="Number Blocks Tutorial"
                  className="rounded-lg object-cover h-24 w-full border border-border/40 shadow-xs"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between border-t border-border/50 pt-4 gap-2 text-xs">
                <Link
                  to="/apps/number-blocks/privacy"
                  className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors"
                >
                  <Shield size={14} />
                  Privacy Policy
                </Link>
                <Link
                  to="/apps/number-blocks/support"
                  className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors"
                >
                  <HelpCircle size={14} />
                  Support
                </Link>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  Google Play
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* App 2: PDF Tools */}
          <div className="bg-bg-elevated rounded-2xl border border-border/60 p-6 flex flex-col justify-between hover:border-accent/40 transition-all shadow-sm">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/images/pdftool-icon.png"
                  alt="PDF Tools"
                  className="w-14 h-14 rounded-2xl object-cover border border-border shadow-md"
                />
                <div>
                  <h3 className="font-heading font-bold text-lg text-text-primary">
                    PDF Tools
                  </h3>
                  <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent mt-0.5">
                    100% On-Device Utility
                  </span>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Privacy-first PDF utility to merge, split, compress, encrypt, and organize documents on-device without cloud server uploads.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between border-t border-border/50 pt-4 gap-2 text-xs">
                <Link
                  to="/apps/pdf-tools/privacy"
                  className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors"
                >
                  <Shield size={14} />
                  Privacy Policy
                </Link>
                <Link
                  to="/apps/pdf-tools/support"
                  className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors"
                >
                  <HelpCircle size={14} />
                  Support
                </Link>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  Google Play
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* App 3: 4K Media Player */}
          <div className="bg-bg-elevated rounded-2xl border border-border/60 p-6 flex flex-col justify-between hover:border-accent/40 transition-all shadow-sm">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/images/videoplayer-icon.png"
                  alt="4K Media Player"
                  className="w-14 h-14 rounded-2xl object-cover border border-border shadow-md"
                />
                <div>
                  <h3 className="font-heading font-bold text-lg text-text-primary">
                    4K Media Player
                  </h3>
                  <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent mt-0.5">
                    ExoPlayer Media Suite
                  </span>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Native Android media utility with Room DB caching, custom controllers, and persistent background playback services.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between border-t border-border/50 pt-4 gap-2 text-xs">
                <Link
                  to="/apps/4k-media-player/privacy"
                  className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors"
                >
                  <Shield size={14} />
                  Privacy Policy
                </Link>
                <Link
                  to="/apps/4k-media-player/support"
                  className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors"
                >
                  <HelpCircle size={14} />
                  Support
                </Link>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  Google Play
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/apps"
            className="text-accent hover:text-accent-hover transition-colors font-medium text-sm inline-flex items-center gap-1.5"
          >
            Explore all published apps & legal centers →
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
