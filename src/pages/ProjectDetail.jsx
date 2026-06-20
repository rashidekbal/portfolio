import { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Package,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
import SEOHead from '../components/SEOHead';
import Tag from '../components/Tag';
import Button from '../components/Button';
import Lightbox from '../components/Lightbox';
import { projects } from '../data/projects';

/* ───────────────────────────────────────────
   Simple markdown-ish description renderer
   ─────────────────────────────────────────── */
function RenderDescription({ text }) {
  if (!text) return null;

  const blocks = text.split('\n\n');

  return (
    <div className="max-w-3xl">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // ## headings
        if (trimmed.startsWith('## ')) {
          return (
            <h3
              key={i}
              className="text-2xl font-heading font-bold mt-8 mb-4 text-text-primary"
            >
              {trimmed.replace(/^##\s*/, '')}
            </h3>
          );
        }

        // Bullet list block (one or more lines starting with -)
        const lines = trimmed.split('\n');
        const isList = lines.every((l) => l.trimStart().startsWith('- ') || l.trimStart().startsWith('* '));

        if (isList) {
          return (
            <ul key={i} className="ml-4 mb-4 space-y-2">
              {lines.map((line, j) => (
                <li key={j} className="flex items-start gap-2 text-text-secondary text-base md:text-lg leading-relaxed">
                  <span className="text-accent mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{line.replace(/^[\s]*[-*]\s*/, '')}</span>
                </li>
              ))}
            </ul>
          );
        }

        // Normal paragraph
        return (
          <p
            key={i}
            className="text-text-secondary text-base md:text-lg leading-relaxed mb-4"
          >
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}

/* ───────────────────────────────────────────
   Motion variants
   ─────────────────────────────────────────── */
const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/* ───────────────────────────────────────────
   ProjectDetail page
   ─────────────────────────────────────────── */
export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Find project
  const projectIndex = useMemo(
    () => projects.findIndex((p) => p.slug === slug),
    [slug]
  );
  const project = projects[projectIndex];

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Not found
  if (!project) {
    return (
      <>
        <SEOHead title="Project Not Found" description="" />
        <div className="section-padding pt-28 pb-20 min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">
            Project not found
          </h1>
          <p className="text-text-secondary mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button variant="primary" href="/projects">
            View all projects
          </Button>
        </div>
      </>
    );
  }

  const {
    title,
    tagline,
    description,
    tags,
    coverImage,
    screenshots,
    videoUrl,
    links,
    year,
    role,
    highlights,
  } = project;

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const hasScreenshots = screenshots && screenshots.length > 0;
  const hasHighlights = highlights && highlights.length > 0;

  return (
    <>
      <SEOHead title={title} description={tagline} />

      <motion.div
        className="section-padding pt-28 pb-20"
        initial={prefersReducedMotion ? 'visible' : 'hidden'}
        animate="visible"
        variants={pageVariants}
      >
        <div className="max-container mx-auto">
          {/* ── Back link ─────────────────────────────── */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent mb-8 transition-colors group"
          >
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>All Projects</span>
          </Link>

          {/* ── Header ────────────────────────────────── */}
          <motion.div
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            animate="visible"
            variants={stagger}
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-heading font-bold mb-3"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-text-secondary mb-4"
            >
              {tagline}
            </motion.p>

            {/* Tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </motion.div>

            {/* Meta */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-6 text-text-muted text-sm mb-6"
            >
              {year && (
                <div>
                  <span className="text-text-secondary font-medium">Year</span>{' '}
                  · {year}
                </div>
              )}
              {role && (
                <div>
                  <span className="text-text-secondary font-medium">Role</span>{' '}
                  · {role}
                </div>
              )}
            </motion.div>

            {/* Links */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              {links?.live && (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base transition-colors bg-accent text-bg-base font-semibold hover:bg-accent-hover"
                >
                  <ExternalLink size={18} />
                  Live Site
                </a>
              )}
              {links?.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base transition-colors border border-accent text-accent hover:bg-accent-muted"
                >
                  <GithubIcon size={18} />
                  GitHub
                </a>
              )}
              {links?.npm && (
                <a
                  href={links.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base transition-colors border border-accent text-accent hover:bg-accent-muted"
                >
                  <Package size={18} />
                  npm
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* ── Hero media ────────────────────────────── */}
          <motion.div
            className="mt-10 mb-10"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {videoUrl ? (
              <div className="aspect-video rounded-xl overflow-hidden bg-bg-elevated">
                <iframe
                  src={videoUrl}
                  title={`${title} video`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : coverImage ? (
              <div className="aspect-video rounded-xl overflow-hidden bg-bg-subtle">
                <img
                  src={coverImage}
                  alt={title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Replace broken image with gradient placeholder
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add(
                      'bg-gradient-to-br',
                      'from-bg-elevated',
                      'to-bg-subtle'
                    );
                  }}
                />
              </div>
            ) : (
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-bg-elevated to-bg-subtle flex items-center justify-center">
                <span className="text-text-muted text-lg font-heading">
                  {title}
                </span>
              </div>
            )}
          </motion.div>

          {/* ── Description ───────────────────────────── */}
          <motion.div
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <RenderDescription text={description} />
          </motion.div>

          {/* ── Screenshots Gallery ───────────────────── */}
          {hasScreenshots && (
            <motion.div
              className="mt-12"
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="text-2xl font-heading font-semibold mb-6"
              >
                Screenshots
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {screenshots.map((src, idx) => (
                  <motion.button
                    key={idx}
                    variants={fadeUp}
                    type="button"
                    className="rounded-lg overflow-hidden cursor-pointer aspect-video bg-bg-subtle hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-base"
                    onClick={() => openLightbox(idx)}
                  >
                    <img
                      src={src}
                      alt={`${title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add(
                          'flex',
                          'items-center',
                          'justify-center'
                        );
                        const placeholder = document.createElement('span');
                        placeholder.textContent = `Screenshot ${idx + 1}`;
                        placeholder.className = 'text-text-muted text-sm';
                        e.target.parentElement.appendChild(placeholder);
                      }}
                    />
                  </motion.button>
                ))}
              </div>

              <Lightbox
                images={screenshots}
                currentIndex={lightboxIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                onNext={() =>
                  setLightboxIndex((prev) =>
                    prev < screenshots.length - 1 ? prev + 1 : 0
                  )
                }
                onPrev={() =>
                  setLightboxIndex((prev) =>
                    prev > 0 ? prev - 1 : screenshots.length - 1
                  )
                }
              />
            </motion.div>
          )}

          {/* ── Highlights ────────────────────────────── */}
          {hasHighlights && (
            <motion.div
              className="mt-12"
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="text-2xl font-heading font-semibold mb-6"
              >
                Key Highlights
              </motion.h2>

              <ul className="space-y-3">
                {highlights.map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <span className="text-text-secondary text-base">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* ── Prev / Next navigation ────────────────── */}
          <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.slug}`}
                className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors group"
              >
                <ChevronLeft
                  size={20}
                  className="transition-transform group-hover:-translate-x-1"
                />
                <div className="text-left">
                  <span className="text-xs text-text-muted block">
                    Previous
                  </span>
                  <span className="font-medium">{prevProject.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors group text-right"
              >
                <div>
                  <span className="text-xs text-text-muted block">Next</span>
                  <span className="font-medium">{nextProject.title}</span>
                </div>
                <ChevronRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}
