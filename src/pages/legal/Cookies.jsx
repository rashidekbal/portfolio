import { motion, useReducedMotion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: 'What Are Cookies',
    content:
      'Cookies are small text files stored on your device when you visit websites. They serve various purposes including remembering preferences and analyzing usage patterns.',
  },
  {
    title: 'Our Current Cookie Usage',
    content:
      'This website currently does not use tracking cookies, advertising cookies, or third-party analytics tools. This policy exists for transparency and will be updated if that changes.',
  },
  {
    title: 'Essential Cookies',
    content:
      'The hosting platform (Vercel/Netlify) may set minimal technical cookies required for the Site to function properly (e.g., load balancing, security). These are strictly necessary and do not track you.',
  },
  {
    title: 'Third-Party Cookies',
    content:
      'No third-party cookies are currently set by this Site. If analytics tools (such as Vercel Analytics, Plausible, or Google Analytics) are added in the future, this policy will be updated to name the specific tool and describe what it tracks.',
  },
  {
    title: 'Managing Cookies',
    content:
      'You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. Note that blocking essential cookies may affect Site functionality. Instructions for major browsers:',
    list: [
      'Chrome: Settings → Privacy and Security → Cookies',
      'Firefox: Settings → Privacy & Security',
      'Safari: Preferences → Privacy',
      'Edge: Settings → Cookies and Site Permissions',
    ],
  },
  {
    title: 'Changes',
    content:
      'This Cookie Policy will be updated if and when cookie usage changes on this Site.',
  },
  {
    title: 'Contact',
    content: (
      <>
        Questions? Email:{' '}
        <a
          href="mailto:hello@rasidekbal.com"
          className="text-accent hover:text-accent-hover transition-colors link-underline"
        >
          hello@rasidekbal.com
        </a>
      </>
    ),
  },
];

const Cookies = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="Cookie Policy"
        description="Cookie policy for rasidekbal.com"
      />

      <div className="pt-28 pb-20 section-padding">
        <div className="max-container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
              Cookie Policy
            </h1>
            <p className="text-text-muted text-sm mb-10">
              Last updated: June 2026
            </p>
          </motion.div>

          <div className="text-text-secondary leading-relaxed">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-4">
                  {section.title}
                </h2>

                {section.content && (
                  <p className="mb-4">{section.content}</p>
                )}

                {section.list && (
                  <ul className="list-disc list-outside ml-5 space-y-2 mb-4">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cookies;
