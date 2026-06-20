import { motion, useReducedMotion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: 'Introduction',
    content:
      "This Privacy Policy explains how Rasid Ekbal ('I', 'me', 'my') collects, uses, and protects information when you visit rasidekbal.com ('the Site'). Your privacy matters, and I'm committed to being transparent about data practices.",
  },
  {
    title: 'Information I Collect',
    content: null,
    list: [
      'Contact form submissions: name, email address, subject selection, and message content.',
      'Automatically collected: standard server logs (IP address, browser type, pages visited, timestamps) provided by the hosting platform.',
      'I do not use tracking cookies or third-party analytics tools at this time.',
    ],
  },
  {
    title: 'How I Use Your Information',
    content: null,
    list: [
      'Contact form data: solely to respond to your inquiry and discuss potential projects.',
      'Server logs: for basic site performance monitoring and security.',
      'I do not sell, rent, or share your personal information with third parties for marketing purposes.',
    ],
  },
  {
    title: 'Third-Party Services',
    content: null,
    list: [
      'EmailJS: processes contact form submissions to deliver them to my inbox. EmailJS acts as a data processor. View their privacy policy at emailjs.com/legal/privacy-policy.',
      'Hosting (Vercel/Netlify): provides standard server infrastructure and may collect basic access logs.',
    ],
  },
  {
    title: 'Cookies',
    content:
      'This site currently does not use tracking cookies. If this changes, the Cookie Policy will be updated accordingly. See the Cookie Policy page for details.',
  },
  {
    title: 'Data Retention',
    content:
      'Contact form submissions are retained for as long as needed to respond to and follow up on inquiries, typically no longer than 12 months after the last communication.',
  },
  {
    title: 'Your Rights',
    content:
      'You may request access to, correction of, or deletion of any personal data I hold about you by contacting me at the email address below. I will respond to such requests within 30 days.',
  },
  {
    title: 'Security',
    content:
      'I take reasonable measures to protect your information, but no method of transmission over the Internet is 100% secure.',
  },
  {
    title: 'Changes to This Policy',
    content:
      'I may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.',
  },
  {
    title: 'Contact',
    content: (
      <>
        For privacy-related questions or data requests, email:{' '}
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

const Privacy = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy for rasidekbal.com"
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
              Privacy Policy
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

export default Privacy;
