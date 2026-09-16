import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, MessageSquare, ShieldCheck, CheckCircle2, Layers, Server } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { services } from '../data/services';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="Services"
        description="Explore live web services, production applications, and real-time platforms built for performance and instant utility."
      />

      <div className="section-padding pt-28 pb-20 min-h-screen">
        <div className="max-container mx-auto">
          {/* Header */}
          <motion.div
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            animate="visible"
            variants={containerVariants}
            className="mb-12"
          >
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
            >
              Services & <span className="text-gradient">Live Apps</span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="text-text-secondary text-lg max-w-2xl"
            >
              Production web applications, microservices, and real-time platforms engineered for reliability, security, and instant utility.
            </motion.p>
          </motion.div>

          {/* Services list */}
          <motion.div
            className="space-y-10"
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            animate="visible"
            variants={containerVariants}
          >
            {services.map((service) => {
              const ServiceIcon = service.slug === 'eazyOTP' ? ShieldCheck : MessageSquare;

              return (
                <motion.div
                  key={service.slug}
                  variants={fadeUpVariants}
                  className="bg-bg-elevated border border-border/60 hover:border-accent/40 rounded-2xl p-6 md:p-10 transition-all duration-300 relative overflow-hidden shadow-lg shadow-black/5"
                >
                  {/* Visual glow backdrop */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

                  {/* Top header & Open button */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/50 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                        <ServiceIcon size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
                          {service.title}
                        </h2>
                        <p className="text-accent text-sm font-medium">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <a
                      href={service.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-bg-base font-semibold rounded-xl transition-all shadow-md hover:shadow-accent/20 active:scale-98 self-start sm:self-auto"
                    >
                      <span>Open Service</span>
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Description & Architecture */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Server size={16} className="text-accent" />
                          Service Overview
                        </h3>
                        <div className="text-text-secondary text-base leading-relaxed space-y-3 whitespace-pre-line">
                          {service.description}
                        </div>
                      </div>

                      {service.architecture && (
                        <div className="pt-4 border-t border-border/40">
                          <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                            <Layers size={16} className="text-accent" />
                            Backend Architecture
                          </h3>
                          <div className="text-text-secondary text-sm leading-relaxed whitespace-pre-line bg-bg-subtle/50 p-4 rounded-xl border border-border/30">
                            {service.architecture}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Key Highlights & Tech Stack */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
                          Key Highlights
                        </h3>
                        <ul className="space-y-2.5">
                          {service.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm text-text-secondary">
                              <CheckCircle2 size={16} className="text-accent mr-2 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-lg bg-bg-subtle border border-border/40 text-text-secondary text-xs font-semibold"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Secondary Action button */}
                      <div className="pt-4">
                        <a
                          href={service.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-bg-subtle hover:bg-bg-elevated border border-border/60 hover:border-accent/40 text-text-primary font-medium rounded-xl transition-all text-sm"
                        >
                          <span>Launch {service.title} App</span>
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
}
