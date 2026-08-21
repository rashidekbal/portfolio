import { motion } from 'framer-motion';
import { HelpCircle, Mail, Shield, FileText, CheckCircle2, MessageSquare } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Are my PDF documents stored on any server?',
    answer: 'No. PDF Tools operates 100% on-device. Your files are processed locally in your phone memory and saved directly to your local downloads folder. No data ever leaves your device.'
  },
  {
    question: 'How do Moon Credits work?',
    answer: 'Moon Credits allow you to save processed PDF files instantly without watching ads. You start with 50 complimentary credits and can earn +1 Moon credit by watching a rewarded video ad.'
  },
  {
    question: 'What are the premium subscription benefits?',
    answer: 'PDF Tools Premium provides unlimited ad-free saves, zero ads across all screens, and unconstrained file operations. Choose between ₹49/month or ₹699 lifetime access.'
  },
  {
    question: 'How do I cancel my monthly subscription?',
    answer: 'Open the Google Play Store app → Tap profile icon → Payments & Subscriptions → Subscriptions → Select PDF Tools → Cancel Subscription.'
  }
];

export default function PdfToolSupport() {
  return (
    <>
      <SEOHead
        title="Support & FAQ — PDF Tools"
        description="Help center, FAQs, and developer support for PDF Tools Android App."
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
                <HelpCircle size={28} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold">
                  PDF Tools Support & Help Center
                </h1>
                <p className="text-text-muted text-sm mt-1">
                  Answers to frequent questions and direct developer support channels
                </p>
              </div>
            </div>

            {/* Quick action card */}
            <div className="p-6 rounded-2xl bg-bg-elevated border border-border/50 my-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-bold text-text-primary text-base">Need Direct Help?</h3>
                <p className="text-text-secondary text-sm">Reach out to the developer directly via email or submit a ticket.</p>
              </div>
              <a
                href="mailto:dev.rasid.ekbal@gmail.com?subject=PDF%20Tools%20Support"
                className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-bg-base font-semibold rounded-xl transition-all flex-shrink-0"
              >
                <Mail size={16} />
                <span>Contact Developer</span>
              </a>
            </div>
          </motion.div>

          {/* FAQs */}
          <div className="space-y-6 mt-8">
            <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-bg-elevated border border-border/40 rounded-xl p-6"
              >
                <h3 className="text-base font-heading font-semibold text-text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Legal Links Footer */}
          <div className="mt-12 pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-4 text-sm text-text-muted">
            <div className="flex gap-4">
              <Link to="/apps/pdf-tools/privacy" className="flex items-center gap-1 hover:text-accent transition-colors">
                <Shield size={14} />
                <span>Privacy Policy</span>
              </Link>
              <Link to="/apps/pdf-tools/terms" className="flex items-center gap-1 hover:text-accent transition-colors">
                <FileText size={14} />
                <span>Terms of Service</span>
              </Link>
            </div>
            <Link to="/support?app=pdf-tools" className="flex items-center gap-1 text-accent font-medium hover:underline">
              <MessageSquare size={14} />
              <span>Submit Detailed Ticket</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
