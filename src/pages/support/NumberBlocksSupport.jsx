import { motion } from 'framer-motion';
import { HelpCircle, Mail, Shield, FileText, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'How does the Endless 2048 mode work?',
    answer: 'Unlike classic 2048 where reaching the 2048 tile ends the puzzle, Number Blocks 2048 allows you to continue merging indefinitely into 4096, 8192, 16384, 32768, 65536, and higher. Dynamic color themes and font scaling adapt automatically to multi-digit numbers.'
  },
  {
    question: 'How do Undos work in the game?',
    answer: 'Every game session starts with 5 complimentary free undos. When you exhaust your 5 free undos, you can voluntarily watch a short rewarded video ad to restore undos and continue your high-score run.'
  },
  {
    question: 'Is my active game saved if I exit?',
    answer: 'Yes! Your board state, score, combo streak, and undo counters are automatically saved to local storage. When you return to the home screen or reopen the app, an "Active Run" card allows you to resume exactly where you left off.'
  },
  {
    question: 'How do I switch themes and toggle audio/haptics?',
    answer: 'Tap the settings gear icon on the home screen or the pause button in-game. You can toggle audio tone synthesis, switch haptics, or select from four curated architectural themes (Alabaster Minimal, Titanium Slate, Nordic Clay, and Obsidian Charcoal).'
  },
  {
    question: 'Are there gestures outside the board?',
    answer: 'Yes! You can swipe anywhere across the screen to slide tiles, while touch-sensitive top controls and ad banners are guarded against accidental swipes.'
  }
];

export default function NumberBlocksSupport() {
  return (
    <>
      <SEOHead
        title="Support & FAQ — Number Blocks 2048"
        description="Help center, rules, FAQs, and developer support for Number Blocks 2048 Android App."
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
                  Number Blocks 2048 Support
                </h1>
                <p className="text-text-muted text-sm mt-1">
                  Frequently Asked Questions and direct developer assistance
                </p>
              </div>
            </div>

            {/* Quick action card */}
            <div className="p-6 rounded-2xl bg-bg-elevated border border-border/50 my-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-bold text-text-primary text-base">Have Feedback or Questions?</h3>
                <p className="text-text-secondary text-sm">Contact the developer directly or submit a feature request.</p>
              </div>
              <a
                href="mailto:dev.rasid.ekbal@gmail.com?subject=Number%20Blocks%202048%20Support"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-colors text-sm shrink-0"
              >
                <Mail size={16} />
                Contact Developer
              </a>
            </div>

            {/* Legal quicklinks */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/apps/number-blocks/privacy"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors py-2 px-4 rounded-lg bg-bg-surface border border-border/40"
              >
                <Shield size={16} />
                Privacy Policy
              </Link>
              <Link
                to="/apps/number-blocks/terms"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors py-2 px-4 rounded-lg bg-bg-surface border border-border/40"
              >
                <FileText size={16} />
                Terms of Service
              </Link>
            </div>

            {/* FAQs */}
            <h2 className="font-heading font-bold text-xl text-text-primary mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-bg-surface border border-border/40"
                >
                  <h3 className="font-heading font-semibold text-text-primary text-base mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
