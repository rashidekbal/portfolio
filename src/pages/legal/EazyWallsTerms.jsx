import { motion, useReducedMotion } from 'framer-motion';
import { FileText } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: '1. Agreement to Terms',
    content:
      "By using the EazyWalls application, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, do not install or use the app."
  },
  {
    title: '2. User Accounts',
    content: null,
    list: [
      'Accounts must be registered with a verified email via our OTP verification gateway.',
      'You are responsible for keeping your login credentials confidential.',
      'You must not share or sell your EazyWalls account to third parties.'
    ]
  },
  {
    title: '3. Intellectual Property & License',
    content:
      'Wallpapers offered in EazyWalls are curated from public domain sources or uploaded by artists. You are granted a limited, personal, non-transferable license to download and set these wallpapers on your personal devices. Commercial redistribution, selling, or republishing of any wallpapers is strictly prohibited.'
  },
  {
    title: '4. Prohibited Actions',
    content: null,
    list: [
      'Do not scrape, extract, or batch-download wallpapers using automated bots, scripts, or scrapers.',
      'Do not attempt to disrupt the Cloudinary CDN or our Express API servers.',
      'Do not submit false content reports or abuse report mechanisms.'
    ]
  },
  {
    title: '5. Limitation of Liability',
    content:
      "EazyWalls is provided 'as is' and 'as available' without warranties of any kind. We do not guarantee that all wallpapers will always remain available or that CDN delivery will be error-free."
  },
  {
    title: '6. Contact',
    content: (
      <>
        For legal inquiries, contact us at:{' '}
        <a
          href="mailto:support@rasidekbal.com?subject=EazyWalls%20Terms"
          className="text-accent hover:text-accent-hover transition-colors link-underline"
        >
          support@rasidekbal.com
        </a>
      </>
    )
  }
];

export default function EazyWallsTerms() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="EazyWalls App — Terms of Service"
        description="Terms of Service for the EazyWalls Android wallpaper application."
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
                EazyWalls Terms of Service
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
