import { motion } from 'framer-motion';
import { Shield, Mail, Lock, CheckCircle2, ExternalLink } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: '1. Executive Summary & Privacy Commitment',
    content:
      'Bubble Shooter Pro is built with a strict on-device data processing philosophy. Your game progression across all 49 worlds, level scores, stars, collected diamonds, avatars, and audio preferences are stored exclusively on your device. To provide free gameplay and optional rewarded perks (like restoring hearts), Bubble Shooter Pro integrates Google AdMob, which collects device identifiers (such as the Android Advertising ID) as detailed below. We never sell your personal information.'
  },
  {
    title: '2. Information We Process & Collect',
    content: null,
    list: [
      'Device or Other Identifiers (Collected by Google AdMob): Google Mobile Ads (AdMob) SDK collects and transmits device identifiers, specifically the Android Advertising ID (AAID), IP address, device hardware specs, and diagnostics to serve banner, interstitial, and rewarded video ads, measure ad performance, and prevent fraudulent activity.',
      'Local Game Progression (Stored 100% Locally): All level completions, high scores, stars earned, unlocked maps, gifts, diamond balances, and heart counts reside exclusively on your device via Android SharedPreferences and are never transmitted to external servers.',
      'Anonymous Crash Analytics: In the unlikely event of an app error or crash, standard Android OS diagnostic logs and stack traces may be gathered anonymously through Google Play Console to resolve technical issues.',
      'Direct Support Contact: When you reach out to our support team, your email address and message contents are used strictly to provide customer assistance and are never shared or used for marketing.'
    ]
  },
  {
    title: '3. Device Advertising ID & Google Play Data Safety Disclosure',
    content: (
      <div className="space-y-3">
        <p>
          In compliance with Google Play User Data policies and Data Safety requirements, we disclose the collection of{' '}
          <strong className="text-text-primary">Device or other IDs</strong>:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong className="text-text-primary">Data Type Collected:</strong> Device or other identifiers (including Android Advertising ID / AAID, device model, operating system version, and IP address).
          </li>
          <li>
            <strong className="text-text-primary">Data Transmission & Handling:</strong> Data is transmitted off-device securely to Google AdMob servers. All data in transit is encrypted using industry-standard TLS/HTTPS protocols.
          </li>
          <li>
            <strong className="text-text-primary">Purposes of Collection:</strong>
            <ul className="list-circle list-inside pl-5 mt-1 space-y-1">
              <li><strong className="text-text-primary">Advertising & Marketing:</strong> Delivering contextual, banner, interstitial, and rewarded video ads (such as watching an ad for an extra heart).</li>
              <li><strong className="text-text-primary">Analytics & Measurement:</strong> Measuring impressions, ad views, click-through rates, and rewarded video engagement.</li>
              <li><strong className="text-text-primary">Fraud Prevention & Security:</strong> Detecting bot activity, invalid clicks, and protecting network integrity.</li>
            </ul>
          </li>
          <li>
            <strong className="text-text-primary">Data Sharing:</strong> Shared with third-party service provider Google LLC (AdMob) under Google’s Privacy Policy. We do not sell your personal data.
          </li>
        </ul>
      </div>
    )
  },
  {
    title: '4. How to Manage or Reset Your Advertising ID (User Controls)',
    content: (
      <div className="space-y-3">
        <p>
          Android users have full control over the advertising identifier associated with their device. You can reset or delete your Advertising ID or opt out of personalized ads at any time through your device settings:
        </p>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Open your Android device <strong className="text-text-primary">Settings</strong>.</li>
          <li>Navigate to <strong className="text-text-primary">Google</strong> &gt; <strong className="text-text-primary">Ads</strong> (or <strong className="text-text-primary">Security &amp; privacy</strong> &gt; <strong className="text-text-primary">Privacy</strong> &gt; <strong className="text-text-primary">Ads</strong> on Android 12+).</li>
          <li>Tap <strong className="text-text-primary">Reset advertising ID</strong> to create a fresh identifier, or tap <strong className="text-text-primary">Delete advertising ID</strong> to remove personalized ad tracking entirely.</li>
          <li>You may also toggle <strong className="text-text-primary">Opt out of Ads Personalization</strong> where available.</li>
        </ol>
      </div>
    )
  },
  {
    title: '5. Third-Party Services & Privacy Policies',
    content: (
      <div className="space-y-3">
        <p>
          Bubble Shooter Pro integrates the following third-party SDKs which handle data under their respective privacy terms:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong className="text-text-primary">Google AdMob:</strong> Serves banner advertisements, level-transition interstitials, and voluntary rewarded video ads (such as +1 heart refills). Learn more at{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover inline-flex items-center gap-1 font-medium underline"
            >
              Google Privacy Policy <ExternalLink size={14} />
            </a>{' '}
            and{' '}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover inline-flex items-center gap-1 font-medium underline"
            >
              How Google Uses Ad Data <ExternalLink size={14} />
            </a>.
          </li>
          <li>
            <strong className="text-text-primary">Google Play Services:</strong> Enables core Android platform runtime security, app distribution, and compliance.
          </li>
        </ul>
      </div>
    )
  },
  {
    title: '6. Data Storage & Local Persistence',
    content:
      'All user game data resides in the application sandbox protected by Android OS security boundaries. Uninstalling Bubble Shooter Pro or manually clearing application cache/data will permanently erase your local world progress, heart counters, and diamond balance.'
  },
  {
    title: '7. In-App Economy & Lives System',
    content:
      'Bubble Shooter Pro features an in-game heart and diamond progression system. Hearts replenish over time or can be restored using earned diamonds or rewarded ad views. No banking credentials, real-world financial identifiers, or personal payment details are stored on our servers.'
  },
  {
    title: '8. Children’s Privacy',
    content:
      'Bubble Shooter Pro is a family-friendly arcade puzzle game designed for audiences of all ages. We do not knowingly collect, harvest, or solicit personally identifiable data from children under the age of 13. Advertising configurations comply with Google Play Families policy requirements.'
  },
  {
    title: '9. Developer Contact & Privacy Inquiries',
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
        description="Privacy Policy for Bubble Shooter Pro Android App. On-device local progress guarantee and Google Play Data Safety AdMob disclosures."
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
                  Bubble Shooter Pro · Effective Date: October 2026
                </p>
              </div>
            </div>

            {/* Guarantee Highlight */}
            <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 mb-8 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">Privacy Summary:</strong> Your world levels, scores, diamonds, and game settings are processed strictly on your hardware. Third-party advertising (Google AdMob) collects device identifiers (such as the Android Advertising ID) for ad delivery, analytics, and fraud prevention as detailed below.
              </p>
            </div>

            <div className="space-y-8 text-text-secondary text-sm md:text-base leading-relaxed">
              {sections.map((sec, idx) => (
                <div key={idx} className="border-b border-border/40 pb-6 last:border-0">
                  <h2 className="font-heading font-semibold text-text-primary text-lg mb-3">
                    {sec.title}
                  </h2>
                  {sec.content && (
                    typeof sec.content === 'string' ? <p>{sec.content}</p> : <div>{sec.content}</div>
                  )}
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
