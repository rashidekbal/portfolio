import { motion, useReducedMotion } from 'framer-motion';
import { Shield } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: 'Introduction',
    content:
      "This Privacy Policy explains how Threadly ('we', 'us', 'our') collects, uses, and protects information for our mobile application published on the Google Play Store. We are committed to safeguarding your personal data and ensuring transparent practices."
  },
  {
    title: 'Information We Collect',
    content: null,
    list: [
      'Account Registration: Email address, phone number, display name, username, and profile picture.',
      'User Content: Posts, stories, reels, comments, and replies uploaded to the platform.',
      'Real-time Messaging: Chats, messages, and associated metadata. Messages are stored securely for delivery guarantees.',
      'Device Data: Firebase Cloud Messaging (FCM) tokens to route push notifications, device manufacturer, and OS version.'
    ]
  },
  {
    title: 'How We Use Your Information',
    content: null,
    list: [
      'To provide, maintain, and moderate the social media platform and messaging service.',
      'To verify identities during registration using our OTP verification pipeline.',
      'To deliver push notifications for real-time messages and interactions.',
      'To secure your active login sessions and prevent unauthorized access.'
    ]
  },
  {
    title: 'Third-Party Services & Infrastructure',
    content: null,
    list: [
      'Cloudinary: Used for hosting and transforming user-uploaded media (photos, videos, reels, avatars).',
      'Firebase (FCM): Routes real-time push notifications for chat messages and social updates.',
      'Vercel & Redis: Host backend web services and maintain active session security controls.'
    ]
  },
  {
    title: 'Data Retention and Account Deletion',
    content:
      'We retain your account details and social content as long as your account is active. You can delete your account or any uploaded content at any time directly through the app settings, which will instantly purge your database records, active sessions, and media assets.'
  },
  {
    title: 'Security',
    content:
      'We enforce strict encryption protocols (SSL/TLS for API requests, DTLS for real-time streams) and hash passwords using bcrypt to prevent unauthorized access. However, no internet-based service can guarantee absolute security.'
  },
  {
    title: 'Contact & Support',
    content: (
      <>
        For privacy inquiries, contact support at:{' '}
        <a
          href="mailto:dev.rasid.ekbal@gmail.com?subject=Threadly%20Privacy"
          className="text-accent hover:text-accent-hover transition-colors link-underline"
        >
          dev.rasid.ekbal@gmail.com
        </a>
      </>
    )
  }
];

export default function ThreadlyPrivacy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="Threadly App — Privacy Policy"
        description="Privacy policy for the Threadly Android social media application."
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
                Threadly Privacy Policy
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
