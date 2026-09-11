import { motion } from 'framer-motion';
import { Shield, Mail, Lock, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: '1. Executive Summary & Privacy Philosophy',
    content:
      'Number Blocks 2048 is engineered with a strict on-device computing architecture. Your puzzle state, high scores, moves history, and personalized settings are stored exclusively in local device storage. We do not transmit or store your personal gameplay data on external servers.'
  },
  {
    title: '2. Information We Collect & Use',
    content: null,
    list: [
      'Gameplay Data: Stored 100% locally on your device via Android SharedPreferences (high scores, best tiles, moves count, undo counters).',
      'Advertising Data: Google AdMob SDK may collect anonymous advertising identifiers and device diagnostics to serve banner and rewarded video ads.',
      'Crash Diagnostics: In the event of an unexpected crash, anonymous stack traces and Android OS version info may be collected to help resolve bugs.',
      'Support Communications: If you contact developer support, your email address is used solely to respond to your inquiry and never for marketing.'
    ]
  },
  {
    title: '3. Data Storage & Security',
    content:
      'All user preferences (sound toggles, haptics, theme selections) and game snapshots reside locally in your app sandbox. Clearing app storage or uninstalling Number Blocks removes all local scores and saved game states.'
  },
  {
    title: '4. Third-Party Services & SDKs',
    content: null,
    list: [
      'Google AdMob: Powers banner advertisements and optional rewarded video ads for extra game undos.',
      'Google Play Services: Provides basic ecosystem security and framework services.'
    ]
  },
  {
    title: '5. Children’s Privacy',
    content:
      'Number Blocks 2048 does not knowingly collect any personally identifiable information from children under the age of 13. The app is a family-friendly math puzzle game designed for users of all ages.'
  },
  {
    title: '6. Developer Contact & Inquiries',
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
        description="Privacy Policy for Number Blocks 2048 Android App. 100% on-device game state guarantee."
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
                  Number Blocks 2048 · Effective Date: September 2026
                </p>
              </div>
            </div>

            {/* Badge Highlight */}
            <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 mb-8 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">On-Device Guarantee:</strong> Your game states, scores, and preferences are processed strictly on your hardware. We never sell your personal information.
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
