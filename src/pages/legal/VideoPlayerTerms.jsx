import { motion, useReducedMotion } from 'framer-motion';
import { FileText } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: '1. Agreement to Terms',
    content:
      "By using the 4K Media Player application, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, do not install or use the app."
  },
  {
    title: '2. Grant of License',
    content:
      'We grant you a limited, non-exclusive, non-transferable, and revocable license to use the 4K Media Player app for personal, non-commercial purposes on your Android device. The application itself, including all code, interface designs, and assets, is protected by intellectual property laws and remains the property of the developer.'
  },
  {
    title: '3. Media Ownership & Copyright',
    content:
      'The 4K Media Player does not provide or host media content. You are solely responsible for all audio and video files played through the application. You must ensure you have the appropriate legal rights or ownership to play and store the media files on your device.'
  },
  {
    title: '4. System Limitations',
    content: null,
    list: [
      'The application relies on Android system APIs (MediaStore, Jetpack Media3) to fetch and render local media tracks. Some device-specific file formats or high-resolution encodings might not play depending on hardware acceleration support.',
      'Background media notification widgets require you to keep Android background execution optimization rules enabled for our foreground playback service.'
    ]
  },
  {
    title: '5. Limitation of Liability',
    content:
      "The 4K Media Player is provided 'as is' and 'as available' without warranties of any kind. We do not guarantee that database caching, playback restoration, or background audio control will always remain error-free or compatible with all devices."
  },
  {
    title: '6. Contact',
    content: (
      <>
        For legal or technical inquiries, contact us at:{' '}
        <a
          href="mailto:support@rasidekbal.com?subject=4K%20Media%20Player%20Terms"
          className="text-accent hover:text-accent-hover transition-colors link-underline"
        >
          support@rasidekbal.com
        </a>
      </>
    )
  }
];

export default function VideoPlayerTerms() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="4K Media Player — Terms of Service"
        description="Terms of Service for the 4K Media Player Android application."
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
                4K Media Player Terms of Service
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
