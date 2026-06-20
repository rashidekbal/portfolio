import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, User, Code2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import Tag from './Tag';
import { skillCategories } from '../data/skills';
import { experiences } from '../data/experience';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper className="section-padding py-20 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
          Developer Info
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* ─── LEFT COLUMN: Profile & Experience ─── */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            
            {/* Bio Section */}
            <motion.div
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <motion.div variants={staggerItem} className="shrink-0 relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-border glass-effect relative z-10">
                  <img
                    src="/images/profile_avatar.png"
                    alt="Rasid Ekbal"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-accent rounded-2xl blur-xl opacity-20 -z-0"></div>
              </motion.div>

              <motion.div variants={staggerItem} className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <User size={20} className="text-accent" />
                  <h3 className="text-xl font-heading font-semibold">About Me</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  I am a passionate software engineer specializing in full-stack architecture, 
                  mobile application development, and AI systems integration. I enjoy bridging 
                  the gap between robust, scalable backend infrastructure and polished, highly 
                  interactive user experiences. When I'm not building systems from the ground up, 
                  I'm actively researching the latest advancements in LLMs and AI agents to 
                  integrate cutting-edge intelligence into production-grade applications.
                </p>
              </motion.div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={20} className="text-accent" />
                <h3 className="text-xl font-heading font-semibold">Work Experience</h3>
              </div>

              <div className="relative border-l border-border ml-3 pl-8 flex flex-col gap-8">
                {experiences.map((exp) => (
                  <motion.div key={exp.id} variants={staggerItem} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[39.5px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-bg-base"></div>
                    
                    <h4 className="text-lg font-bold text-text-primary">{exp.role}</h4>
                    <p className="text-sm font-medium text-accent mb-2">{exp.company} <span className="text-text-muted mx-2">•</span> {exp.duration}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN: Skills & Frameworks ─── */}
          <div className="lg:col-span-5">
            <motion.div
              className="bg-bg-elevated border border-border rounded-2xl p-8 sticky top-32"
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-2 mb-8">
                <Code2 size={20} className="text-accent" />
                <h3 className="text-xl font-heading font-semibold">Skills & Frameworks</h3>
              </div>

              <div className="flex flex-col gap-8">
                {skillCategories.map((category) => (
                  <motion.div key={category.name} variants={staggerItem}>
                    <h4 className="text-text-muted text-xs uppercase tracking-wider font-semibold mb-3">
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Tag key={skill}>{skill}</Tag>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
