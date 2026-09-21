import { motion } from 'framer-motion';
import { Shield, Mail, Lock, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: '1. Executive Summary & Privacy Commitment',
    content:
      'Bubble Shooter Pro is built with a strict on-device data processing philosophy. Your game progression across all 49 worlds, level scores, stars, collected diamonds, avatars, and audio preferences are stored exclusively on your device. We do not transmit or sell any of your personal gameplay data.'
  },
  {
    title: '2. Information We Process & Collect',
    content: null,
    list: [
      'Local Game Progression: All level completions, high scores, stars earned, unlocked maps, gifts, diamond balances, and heart counts are stored locally via Android SharedPreferences.',
      'Advertising Identifiers: The Google AdMob SDK may collect anonymous device diagnostics and advertising identifiers to deliver banner, interstitial, and rewarded video ads (e.g., watching an ad for an extra heart).',
      'Anonymous Crash Analytics: In the unlikely event of an app error or crash, standard Android OS diagnostic logs may be generated locally or processed anonymously through Google Play Console to resolve technical issues.',
      'Direct Support Contact: When you reach out to our support team, your email address and message contents are used strictly to provide customer assistance and are never shared or used for marketing.'
    ]
  },
  {
    title: '3. Data Storage & Local Persistence',
    content:
      'All user game data resides in the application sandbox protected by Android OS security boundaries. Uninstalling Bubble Shooter Pro or manually clearing application cache/data will permanently erase your local world progress, heart counters, and diamond balance.'
  },
  {
    title: '4. Third-Party Services & Advertising',
    content: null,
    list: [
      'Google AdMob: Serves banner advertisements, level-transition interstitials, and voluntary rewarded video ads (such as +1 heart refills). AdMob processes data under Google’s Privacy Policy.',
      'Google Play Services: Enables core Android platform runtime security, app distribution, and compliance.'
    ]
  },
  {
    title: '5. In-App Economy & Lives System',
    content:
      'Bubble Shooter Pro features an in-game heart and diamond progression system. Hearts replenish over time or can be restored using earned diamonds or rewarded ad views. No banking credentials, real-world financial identifiers, or personal payment details are stored on our servers.'
  },
  {
    title: '6. Children’s Privacy',
    content:
      'Bubble Shooter Pro is a family-friendly arcade puzzle game designed for audiences of all ages. We do not knowingly collect, harvest, or solicit personally identifiable data from children under the age of 13. If you believe any personal data has inadvertently been transmitted, please contact us for immediate deletion.'
  },
  {
    title: '7. Developer Contact & Privacy Inquiries',
    content: (
      <>
        For any privacy inquiries or feedback regarding Bubble Shooter Pro, please contact us at:{' '}
        <a
          href="mailto:dev.rasid.ekbal@gmail.com?subject=Bubble%20Shooter%20Pro%20Privacy"
          className="text-accent hover:text-accent-hover transition-colors font-medium"
        >
          dev.rasid.ekbal@gmail.com
        </a>
      </>
    )
  }
];

export default function BubbleShooterPrivacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy — Bubble Shooter Pro"
        description="Privacy Policy for Bubble Shooter Pro Android App. On-device local progress guarantee and Google Play safety compliance."
      />

      <div className="pt-32 pb-24 section-padding">
        <div className="max-container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Shield size={28} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold">
                  Privacy Policy
                </h1>
                <p className="text-text-muted text-sm mt-1">
                  Bubble Shooter Pro · Effective Date: September 2026
                </p>
              </div>
            </div>

            {/* Guarantee Highlight */}
            <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 mb-8 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">On-Device Guarantee:</strong> Your world levels, scores, diamonds, and game settings are processed strictly on your hardware. We never sell your personal information.
              </p>
            </div>

            <div className="space-y-8 text-text-secondary text-sm md:text-base leading-relaxed">
              {sections.map((sec, idx) => (
                <div key={idx} className="border-b border-border/40 pb-6 last:border-0">
                  <h2 className="font-heading font-semibold text-text-primary text-lg mb-3">
                    {sec.title}
                  </h2>
                  {sec.content && <p>{sec.content}</p>}
                  {sec.list && (
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      {sec.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
