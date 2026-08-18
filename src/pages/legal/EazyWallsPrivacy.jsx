import { motion, useReducedMotion } from 'framer-motion';
import { Shield } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: 'Introduction',
    content:
      "This Privacy Policy explains how EazyWalls ('we', 'us', 'our') handles user data within the EazyWalls Android application. We respect your privacy and provide a clean, modern experience that prioritizes your data safety."
  },
  {
    title: 'Information We Collect',
    content: null,
    list: [
      'Account Information: Email address, username, profile details if you sign up for an account.',
      'Favorites: List of wallpapers you favorite or save to your account.',
      'Reports: Content reports you submit regarding wallpapers or categories.',
      'Device Data: Basic connection logs (IP address, device model) for security controls.'
    ]
  },
  {
    title: 'How We Use Your Information',
    content: null,
    list: [
      'To verify your email identity using our secure EazyOTP verification microservice.',
      'To persist your favorites across different devices.',
      'To review and moderate wallpaper reports via our admin client.',
      'To monitor and optimize server and CDN retrieval speeds.'
    ]
  },
  {
    title: 'Third-Party Services & CDN',
    content: null,
    list: [
      'Cloudinary CDN: Hosts all high-resolution wallpapers, serving optimized thumbnails and processing full-quality downloads.',
      'MongoDB: Securely hosts our databases, keeping password hashes and session logs protected.'
    ]
  },
  {
    title: 'Data Retention and Account Deletion',
    content:
      'We retain your account favorites as long as your account is active. You can delete your account or unfavorite wallpapers at any time. Account deletion completely clears your database record, active session, and preferences.'
  },
  {
    title: 'Security',
    content:
      'All communications with the EazyWalls backend are encrypted using SSL/TLS. Passwords are salted and hashed using bcrypt. Access controls are managed strictly by verified JSON Web Tokens (JWT).'
  },
  {
    title: 'Contact & Support',
    content: (
      <>
        For privacy questions, reach support at:{' '}
        <a
          href="mailto:dev.rasid.ekbal@gmail.com?subject=EazyWalls%20Privacy"
          className="text-accent hover:text-accent-hover transition-colors link-underline"
        >
          dev.rasid.ekbal@gmail.com
        </a>
      </>
    )
  }
];

export default function EazyWallsPrivacy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="EazyWalls App — Privacy Policy"
        description="Privacy policy for the EazyWalls Android wallpaper application."
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
                EazyWalls Privacy Policy
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
