import { motion } from 'framer-motion';
import { Shield, Mail, Lock, CheckCircle2, Smartphone, ExternalLink } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: '1. Executive Summary & Privacy Philosophy',
    content:
      'Number Blocks 2048 is engineered with an on-device local computing architecture. Your puzzle states, high scores, moves history, and personalized settings are stored exclusively in local device storage. To support the free availability of the game and provide optional bonus features like rewarded undos, Number Blocks integrates Google AdMob, which collects device identifiers (such as the Android Advertising ID) as detailed in this policy.'
  },
  {
    title: '2. Information We Collect & Process',
    content: null,
    list: [
      'Device or Other Identifiers (Collected by Google AdMob): Google Mobile Ads (AdMob) SDK collects and transmits device identifiers, specifically the Android Advertising ID (AAID), IP address, and hardware diagnostics to serve banner and rewarded video ads, measure ad performance, and prevent fraudulent traffic.',
      'Gameplay Data (Stored 100% Locally): Your board layout, best tile reached, moves count, undo counters, and theme preferences reside solely in local device storage via Android SharedPreferences and are never transmitted to external servers.',
      'Crash Diagnostics: In the event of an unexpected crash, anonymous stack traces and Android OS version info may be gathered via Google Play Console to diagnose and resolve bugs.',
      'Support Communications: If you contact developer support, your email address and message contents are used solely to assist you and are never shared or used for marketing.'
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
            <strong className="text-text-primary">Data Transmission & Handling:</strong> Data is transmitted off-device directly to Google AdMob servers. All data in transit is encrypted using secure TLS/HTTPS protocols.
          </li>
          <li>
            <strong className="text-text-primary">Purposes of Collection:</strong>
            <ul className="list-circle list-inside pl-5 mt-1 space-y-1">
              <li><strong className="text-text-primary">Advertising & Marketing:</strong> Delivering contextual, personalized, or non-personalized banner and rewarded video ads.</li>
              <li><strong className="text-text-primary">Analytics & Measurement:</strong> Measuring impressions, clicks, engagement, and rewarded video completion.</li>
              <li><strong className="text-text-primary">Fraud Prevention & Security:</strong> Detecting invalid traffic, automated bot clicks, and protecting network integrity.</li>
            </ul>
          </li>
          <li>
            <strong className="text-text-primary">Data Sharing:</strong> Shared with third-party service provider Google LLC (AdMob) in accordance with Google’s Privacy Policy. We do not sell your personal data.
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
          <li>Tap <strong className="text-text-primary">Reset advertising ID</strong> to generate a fresh identifier, or tap <strong className="text-text-primary">Delete advertising ID</strong> to remove personalized ad tracking entirely.</li>
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
          Number Blocks 2048 integrates the following third-party SDKs which handle data under their respective privacy terms:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong className="text-text-primary">Google AdMob:</strong> Serves banner advertisements and optional rewarded video ads. Learn more at{' '}
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
            <strong className="text-text-primary">Google Play Services:</strong> Provides foundational Android OS runtime security and app distribution compliance.
          </li>
        </ul>
      </div>
    )
  },
  {
    title: '6. Data Storage & Local Persistence',
    content:
      'All puzzle records (current board configuration, undo counts, tile color themes, audio switches, and haptic feedback toggles) are stored locally within the application sandbox. Clearing app data or uninstalling Number Blocks 2048 removes all locally saved progress immediately.'
  },
  {
    title: '7. Children’s Privacy',
    content:
      'Number Blocks 2048 does not knowingly collect personally identifiable information from children under the age of 13. The app is a math puzzle game intended for general audiences, and advertising configurations comply with Google Play Families policy requirements.'
  },
  {
    title: '8. Developer Contact & Inquiries',
    content: (
      <>
        For any privacy questions or data inquiries regarding Number Blocks 2048, please contact us at:{' '}
        <a
          href="mailto:dev.rasid.ekbal@gmail.com?subject=Number%20Blocks%20Privacy"
          className="text-accent hover:text-accent-hover transition-colors font-medium"
        >
          dev.rasid.ekbal@gmail.com
        </a>
      </>
    )
  }
];

export default function NumberBlocksPrivacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy — Number Blocks 2048"
        description="Privacy Policy for Number Blocks 2048 Android App. On-device local progress guarantee and Google Play Data Safety AdMob disclosures."
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
                  Number Blocks 2048 · Effective Date: October 2026
                </p>
              </div>
            </div>

            {/* Badge Highlight */}
            <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 mb-8 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">Privacy Summary:</strong> Your puzzle board, scores, and preferences remain 100% on your device. Third-party advertising (Google AdMob) collects device identifiers (such as the Android Advertising ID) for ad delivery, analytics, and fraud prevention as detailed below.
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
