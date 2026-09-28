import { motion } from 'framer-motion';
import { Shield, Mail, Lock, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: '1. Executive Summary & 100% On-Device Processing',
    content:
      'PDF Tools (com.redcodersgroup.pdftool) is engineered with a strict on-device processing architecture. All document operations—including compression, merging, splitting, encryption, decryption, page organizing, and viewing—take place entirely on your device using local compute APIs. Your PDF files, document contents, and passwords are NEVER uploaded, transmitted, or saved to external servers.'
  },
  {
    title: '2. Information We Collect & Data Safety Declarations',
    content: null,
    list: [
      'Document Data: Zero collection. All file processing happens locally in device memory and temporary cache.',
      'Device or Other IDs: Google Advertising ID (AAID), App Set ID, and Android ID collected and shared by third-party advertising and analytics SDKs for ad serving, frequency capping, fraud prevention, and performance metrics.',
      'App Performance & Crash Diagnostics: Crash logs, device hardware specifications, OS version, and diagnostic telemetry collected via Google Firebase Crashlytics & Firebase Analytics to ensure app stability.',
      'In-App Purchase Information: Processed securely through Google Play Billing. We validate purchase tokens and active subscription entitlements without storing payment card or banking information.',
      'User Communications: If you email our support team, your email address is used solely to respond to your inquiry.'
    ]
  },
  {
    title: '3. Third-Party SDKs & Data Sharing',
    content:
      'We partner with reputable third-party SDKs to provide monetization, in-app billing, and crash monitoring services in accordance with Google Play policies:',
    list: [
      'Google AdMob: Used for banner ads and rewarded video ads. Collects and shares Device IDs and advertising identifiers with certified ad partners for ad serving, ad personalization, and fraud prevention.',
      'Google Firebase Analytics & Crashlytics: Collects app instance identifiers, crash logs, and feature interaction metrics.',
      'Google Play Billing: Handles subscription and lifetime purchase transactions securely.'
    ]
  },
  {
    title: '4. Data Security, Retention & User Rights',
    content:
      'All network communications with third-party SDKs (such as AdMob and Firebase) are encrypted in transit over HTTPS/TLS. App settings and offline credit balances are stored locally using Android SQLite Room and SharedPreferences. You can reset or delete your Advertising ID at any time via Android device settings (Settings > Google > Ads > Reset/Delete advertising ID).'
  },
  {
    title: '5. Contact Information',
    content: (
      <>
        For any privacy inquiries, data requests, or support regarding PDF Tools, please contact us at:{' '}
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
                  Last updated: March 2026 • Effective for all users
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
