import { motion, useReducedMotion } from 'framer-motion';
import { Shield } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: 'Introduction',
    content:
      "This Privacy Policy explains how 4K Media Player ('we', 'us', 'our') handles user data within the 4K Media Player Android application. We respect your privacy and provide a premium, advertisement-ready, local-first media playback experience that prioritizes your data safety and privacy."
  },
  {
    title: 'Information We Collect & Access Permissions',
    content: "The 4K Media Player operates primarily as a local-first application. To function correctly, it requests standard Android runtime access permissions:",
    list: [
      'Media Library Access (READ_MEDIA_VIDEO & READ_MEDIA_AUDIO): Required under Android 13+ to scan your device for local video and audio files and populate the media tabs.',
      'Playback History Cache: Playback positions, durations, and track information are recorded locally in a Room database to support the "Recents" tab and resume playback where you left off.',
      'Storage Read/Write: On devices running older Android versions, storage permission is used exclusively for reading and displaying media content.'
    ]
  },
  {
    title: 'Data Sharing & Cloud Sync',
    content: 'We do not run external media synchronization servers or require account sign-ups. Your media files, playlists, and history never leave your device. All media scanning and playback history queries are processed 100% locally on your smartphone.'
  },
  {
    title: 'Third-Party Services',
    content: 'The application uses the Android system MediaSessionService API to support background audio notifications and hardware/lockscreen media controller widgets. Future versions may integrate standard, policy-compliant advertisement networks (such as AdMob) to support development. No personal identification data or local media metadata is shared with advertising partners.'
  },
  {
    title: 'Data Retention and Cache Management',
    content:
      'Playback history and recents lists are cached in the secure SQLite Room database on your device. You can clear this data at any time by clearing the application cache/data in your Android system Settings.'
  },
  {
    title: 'Security',
    content:
      'All local database transactions are securely isolated within the sandbox environment of the Android operating system. We do not transmit files, metadata, or telemetry over the internet.'
  },
  {
    title: 'Contact & Support',
    content: (
      <>
        For privacy questions or general inquiries, reach support at:{' '}
        <a
          href="mailto:support@rasidekbal.com?subject=4K%20Media%20Player%20Privacy"
          className="text-accent hover:text-accent-hover transition-colors link-underline"
        >
          support@rasidekbal.com
        </a>
      </>
    )
  }
];

export default function VideoPlayerPrivacy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="4K Media Player — Privacy Policy"
        description="Privacy policy for the 4K Media Player Android application."
      />

      <div className="pt-28 pb-20 section-padding">
        <div className="max-container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <Shield className="text-accent w-8 h-8" />
            <div>
              <h1 className="text-3xl font-heading font-bold text-text-primary">
                4K Media Player Privacy Policy
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
