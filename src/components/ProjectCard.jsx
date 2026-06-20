import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Tag from './Tag';

const ProjectCard = ({ project, index = 0 }) => {
  const prefersReducedMotion = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: prefersReducedMotion ? 0 : index * 0.1,
      },
    },
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="block bg-bg-elevated rounded-xl border border-border overflow-hidden hover:border-accent transition-colors group"
      >
        <div className="aspect-video bg-bg-subtle rounded-t-xl overflow-hidden">
          {project.coverImage && !imgError ? (
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-bg-subtle to-bg-elevated flex items-center justify-center">
              <span className="text-text-muted text-sm font-body">No preview</span>
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-xl font-heading font-semibold text-text-primary">
            {project.title}
          </h3>
          {project.tagline && (
            <p className="text-text-secondary text-sm mt-1 line-clamp-2">
              {project.tagline}
            </p>
          )}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
