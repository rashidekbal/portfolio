import { motion } from 'framer-motion';
import { Shield, Mail, Lock, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: '1. Executive Summary & Privacy First Philosophy',
    content:
      'PDF Tools is engineered with a strict 100% on-device processing architecture. All document operations—including compression, merging, splitting, encryption, decryption, and page reordering—take place entirely on your device using local compute APIs. Your PDF files, document text, and metadata are NEVER uploaded, transmitted, or saved to any external servers.'
  },
  {
    title: '2. Information We Collect',
    content: null,
    list: [
      'Document Data: Zero collection. All PDF processing happens locally in your device memory.',
      'Purchase Information: Handled securely through Google Play Billing. We do not store or process your credit card numbers or payment credentials directly.',
      'App Analytics & Stability Logs: Anonymous performance, feature usage events, and crash diagnostics collected via Google Firebase Analytics & Crashlytics to improve app performance.',
      'Ad-Supported Diagnostics: Non-personal diagnostic logs managed by Google AdMob when watching rewarded ads to earn credits.',
      'Support Requests: If you email support, we only use your email address to reply to your inquiry.'
    ]
  },
  {
    title: '3. Data Security & Storage',
    content:
      'Application configuration and earned credit balances ("Moon Credits") are stored locally on your device using Android Room SQLite and Encrypted SharedPreferences. Clearing app data or uninstalling the app removes local preferences.'
  },
  {
    title: '4. Third-Party Services',
    content: null,
    list: [
      'Google Play Billing: Used for processing subscription (₹49/month) and lifetime (₹699) purchases.',
      'Google AdMob: Used for serving rewarded video ads to earn free credits.',
      'Google Firebase Analytics & Crashlytics: Used for anonymous usage statistics, tool analytics, and crash reporting.'
    ]
  },
  {
    title: '5. Contact Information',
    content: (
      <>
        For any privacy inquiries or support regarding PDF Tools, please contact us at:{' '}
        <a
          href="mailto:dev.rasid.ekbal@gmail.com?subject=PDF%20Tools%20Privacy"
          className="text-accent hover:text-accent-hover transition-colors font-medium"
        >
          dev.rasid.ekbal@gmail.com
        </a>
      </>
    )
  }
];

export default function PdfToolPrivacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy — PDF Tools"
        description="Privacy Policy for PDF Tools Android App. 100% on-device local document processing guarantee."
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
                  PDF Tools Privacy Policy
                </h1>
                <p className="text-text-muted text-sm mt-1">
                  Last updated: August 2026 • Effective for all users
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-start gap-3 my-8">
              <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                <strong>100% Local Guarantee:</strong> Your documents are processed locally on your phone. PDF Tools never collects, stores, or transmits your PDF files.
              </p>
            </div>
          </motion.div>

          <div className="space-y-8 text-text-secondary leading-relaxed mt-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-bg-elevated border border-border/50 rounded-xl p-6"
              >
                <h2 className="text-xl font-heading font-semibold text-text-primary mb-3">
                  {section.title}
                </h2>

                {section.content && <p className="text-sm">{section.content}</p>}

                {section.list && (
                  <ul className="list-disc list-outside ml-5 space-y-2 text-sm">
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
