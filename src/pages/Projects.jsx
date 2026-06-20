import { useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import Tag from '../components/Tag';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

/* ───────────────────────────────────────────
   Motion variants
   ─────────────────────────────────────────── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/* ───────────────────────────────────────────
   Projects listing page
   ─────────────────────────────────────────── */
export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState('All');

  // Collect all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set();
    projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return ['All', ...Array.from(tagSet).sort()];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <>
      <SEOHead
        title="Projects"
        description="Explore my portfolio of full-stack, mobile, and AI projects"
      />

      <div className="section-padding pt-28 pb-20 min-h-screen">
        <div className="max-container mx-auto">
          {/* ── Header ────────────────────────────────── */}
          <motion.div
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            animate="visible"
            variants={container}
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
            >
              Projects
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-lg mb-10 max-w-2xl"
            >
              Everything I&apos;ve built — from social platforms to OTP services
              to AI agent frameworks.
            </motion.p>
          </motion.div>

          {/* ── Filter bar ────────────────────────────── */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            animate="visible"
            variants={container}
          >
            {allTags.map((tag) => (
              <motion.div key={tag} variants={fadeUp}>
                <Tag
                  active={activeFilter === tag}
                  onClick={() => setActiveFilter(tag)}
                >
                  {tag}
                </Tag>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Projects grid ─────────────────────────── */}
          {filteredProjects.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              key={activeFilter} // re-mount on filter change for fresh animation
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              animate="visible"
              variants={container}
            >
              {filteredProjects.map((project, idx) => (
                <motion.div key={project.slug} variants={fadeUp}>
                  <ProjectCard project={project} index={idx} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              className="text-text-muted text-center py-20 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              No projects match this filter.
            </motion.p>
          )}
        </div>
      </div>
    </>
  );
}
