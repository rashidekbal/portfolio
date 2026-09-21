import { motion } from 'framer-motion';
import { HelpCircle, Mail, Shield, FileText, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'How many worlds and levels are available in Bubble Shooter Pro?',
    answer: 'Bubble Shooter Pro features 49 uniquely designed worlds with custom background aesthetics, dynamic world progression maps, and themed challenges totaling hundreds of progressive levels.'
  },
  {
    question: 'How do Hearts (Lives) work?',
    answer: 'You start with a maximum of 5 hearts. Winning a level preserves your hearts. If you fail a level, 1 heart is deducted. Hearts naturally regenerate over time (1 heart every 30 minutes). You can also replenish hearts by watching a short rewarded video ad (+1 heart) or by exchanging diamonds in the Heart Store. In Endless Mode, no hearts are deducted!'
  },
  {
    question: 'How do Gift Chests and Rewards unlock?',
    answer: 'Gift chests unlock after every 5 levels on the world map (such as after Level 5 and Level 10 of each world). Tapping an unlocked chest grants free diamonds, extra boosters, and bonus items to aid your journey.'
  },
  {
    question: 'What is Endless Mode?',
    answer: 'Endless Mode is an arcade survival challenge where bubble rows descend continuously. The goal is to clear clusters quickly and set high scores. Failing in Endless Mode never consumes hearts, making it ideal for unlimited practice and fun.'
  },
  {
    question: 'How do Diamonds and the Store work?',
    answer: 'Diamonds are earned by clearing levels, beating personal bests, and opening milestone gift chests. You can spend diamonds in the Heart Store for single refills (5💎), triple refills (12💎), or full instant refills (20💎).'
  },
  {
    question: 'Can I customize my player avatar on the world map?',
    answer: 'Yes! Tap the profile avatar icon in the top app bar to open the Profile Dialog. You can set your player name and select from multiple custom avatars. Your chosen avatar appears on the current level pin as you travel across the 49 worlds.'
  },
  {
    question: 'Can I play offline without an internet connection?',
    answer: 'Yes! Bubble Shooter Pro is fully playable offline. All levels, custom canvas physics, and local progression are stored on-device. An internet connection is only required to load optional rewarded video ads.'
  }
];

export default function BubbleShooterSupport() {
  return (
    <>
      <SEOHead
        title="Support & FAQ — Bubble Shooter Pro"
        description="Help center, rules, FAQs, and developer support for Bubble Shooter Pro Android App."
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
                  Bubble Shooter Pro Support
                </h1>
                <p className="text-text-muted text-sm mt-1">
                  Frequently Asked Questions, gameplay guides, and direct assistance
                </p>
              </div>
            </div>

            {/* Quick action card */}
            <div className="p-6 rounded-2xl bg-bg-elevated border border-border/50 my-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-bold text-text-primary text-base">Have Feedback or Found a Bug?</h3>
                <p className="text-text-secondary text-sm">Contact the developer directly for quick support or level suggestions.</p>
              </div>
              <a
                href="mailto:dev.rasid.ekbal@gmail.com?subject=Bubble%20Shooter%20Pro%20Support"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-colors text-sm shrink-0"
              >
                <Mail size={16} />
                Contact Developer
              </a>
            </div>

            {/* Legal quicklinks */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/apps/bubble-shooter/privacy"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors py-2 px-4 rounded-lg bg-bg-surface border border-border/40"
              >
                <Shield size={16} />
                Privacy Policy
              </Link>
              <Link
                to="/apps/bubble-shooter/terms"
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
