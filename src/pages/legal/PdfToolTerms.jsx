import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content:
      'By installing or using PDF Tools for Android, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, please do not use the application.'
  },
  {
    title: '2. Local Processing & User Responsibility',
    content:
      'PDF Tools processes files locally on your device. You retain full ownership and responsibility for all documents, passwords, and content modified using the application. We are not liable for accidental data loss caused by low storage or OS file system disruptions.'
  },
  {
    title: '3. Subscriptions & In-App Purchases',
    content: null,
    list: [
      'Monthly Subscription (₹49/month): Provides unlimited ad-free PDF processing, auto-renewing until cancelled via Google Play Store settings.',
      'Lifetime Access (₹699): One-time purchase granting perpetual unlimited access to all PDF Tools features.',
      'Refunds: Managed in accordance with Google Play Store refund policies.'
    ]
  },
  {
    title: '4. Limitation of Liability',
    content:
      'PDF Tools is provided "as is" without warranty of any kind. Under no circumstances shall the developer be liable for indirect, incidental, or consequential damages resulting from app usage.'
  },
  {
    title: '5. Contact Information',
    content: (
      <>
        For legal or terms queries, contact developer support at:{' '}
        <a
          href="mailto:dev.rasid.ekbal@gmail.com?subject=PDF%20Tools%20Terms"
          className="text-accent hover:text-accent-hover transition-colors font-medium"
        >
          dev.rasid.ekbal@gmail.com
        </a>
      </>
    )
  }
];

export default function PdfToolTerms() {
  return (
    <>
      <SEOHead
        title="Terms of Service — PDF Tools"
        description="Terms of Service for PDF Tools Android App."
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
                <FileText size={28} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold">
                  PDF Tools Terms of Service
                </h1>
                <p className="text-text-muted text-sm mt-1">
                  Last updated: August 2026
                </p>
              </div>
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
