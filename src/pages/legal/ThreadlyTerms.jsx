import { motion, useReducedMotion } from 'framer-motion';
import { FileText } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: '1. Agreement to Terms',
    content:
      "By installing, accessing, or using Threadly, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use or install the application."
  },
  {
    title: '2. User Accounts',
    content: null,
    list: [
      'You must register an account using a valid email or phone number verified through our OTP gateway.',
      'You are responsible for maintaining the confidentiality of your session tokens and credentials.',
      'You agree not to impersonate other users or create spoofed accounts.'
    ]
  },
  {
    title: '3. User Content & Conduct',
    content: 'Threadly is a social platform. You retain ownership of content you post, but you grant us a license to host, display, and process your content. You agree not to post:',
    list: [
      'Violent, abusive, harassing, or hateful content.',
      'Explicit or pornographic material.',
      'Spam, malware, or malicious code designed to disrupt the platform backend.'
    ]
  },
  {
    title: '4. Moderation & Termination',
    content:
      'We reserve the right to review, moderate, and remove any content or temporarily/permanently ban user accounts that violate these terms. This moderation can be managed dynamically through our administrative panel.'
  },
  {
    title: '5. Limitation of Liability',
    content:
      "Threadly is provided 'as is' without warranties of any kind. We are not liable for any service interruptions, loss of user content, or conduct of other users on the platform."
  },
  {
    title: '6. Contact',
    content: (
      <>
        For legal inquiries, contact us at:{' '}
        <a
          href="mailto:dev.rasid.ekbal@gmail.com?subject=Threadly%20Terms"
          className="text-accent hover:text-accent-hover transition-colors link-underline"
        >
          dev.rasid.ekbal@gmail.com
        </a>
      </>
    )
  }
];

export default function ThreadlyTerms() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="Threadly App — Terms of Service"
        description="Terms of Service for the Threadly Android social media application."
      />

      <div className="pt-28 pb-20 section-padding">
        <div className="max-container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <FileText className="text-accent w-8 h-8" />
            <div>
              <h1 className="text-3xl font-heading font-bold text-text-primary">
                Threadly Terms of Service
              </h1>
              <p className="text-text-muted text-sm mt-1">
                Last updated: July 2026
              </p>
            </div>
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
}
