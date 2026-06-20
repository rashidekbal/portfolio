import { motion, useReducedMotion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: 'Acceptance of Terms',
    content:
      'By accessing rasidekbal.com, you agree to these Terms. If you disagree, please do not use the Site.',
  },
  {
    title: 'About This Site',
    content:
      'This is a personal portfolio and freelance business website. It showcases my work and provides a way to get in touch for potential project collaborations. It is not a SaaS product or marketplace.',
  },
  {
    title: 'Acceptable Use',
    content: 'You agree not to:',
    list: [
      'Scrape or crawl the Site without permission.',
      'Use the contact form for spam, solicitation, or abusive messages.',
      "Attempt to interfere with the Site's functionality or security.",
      "Reproduce, distribute, or create derivative works from the Site's content without permission.",
    ],
  },
  {
    title: 'Intellectual Property',
    content:
      'All content on this Site — including project descriptions, written content, code samples, design elements, and media — is the intellectual property of Rasid Ekbal unless otherwise noted. Client names, logos, and testimonials are used with permission from the respective parties.',
  },
  {
    title: 'Freelance Engagements',
    content:
      "These Terms govern your use of this website only. Any paid freelance work, consulting, or development services will be governed by a separate signed contract or Statement of Work (SOW) agreed upon by both parties before work begins. This website's Terms do not constitute a service agreement.",
  },
  {
    title: 'Disclaimer',
    content:
      "The information on this Site — including project descriptions, availability status, and technical details — is provided 'as is' without warranties of any kind, express or implied. While I strive to keep content current and accurate, I do not guarantee that all information is complete or up to date at all times.",
  },
  {
    title: 'Limitation of Liability',
    content:
      'To the maximum extent permitted by applicable law, I shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Site.',
  },
  {
    title: 'Governing Law',
    content:
      'These Terms are governed by the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in India.',
  },
  {
    title: 'Changes',
    content:
      'I reserve the right to modify these Terms at any time. Continued use of the Site after changes constitutes acceptance.',
  },
  {
    title: 'Contact',
    content: (
      <>
        Questions about these Terms? Email:{' '}
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

const Terms = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="Terms of Service"
        description="Terms of service for rasidekbal.com"
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
              Terms of Service
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

export default Terms;
