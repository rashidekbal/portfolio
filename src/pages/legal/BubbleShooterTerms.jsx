import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content:
      'By installing, launching, or playing Bubble Shooter Pro, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue using the application.'
  },
  {
    title: '2. License and Intellectual Property',
    content:
      'Bubble Shooter Pro, including its 49 custom world maps, hex-grid physics algorithms, sound design, UI themes, visual effects, and source code, is the exclusive intellectual property of Rasid Ekbal. You are granted a revocable, non-exclusive, non-transferable, personal license to play the game on your Android device.'
  },
  {
    title: '3. In-Game Economy & Lives',
    content:
      'Bubble Shooter Pro implements an in-game heart (lives) and diamond progression economy. Hearts are deducted upon losing a standard level and refill automatically over time or via voluntary rewarded ad views / diamond exchanges. In Endless Mode, no hearts are deducted. In-game currency (diamonds) and hearts hold no real-world monetary value and cannot be redeemed for fiat currency.'
  },
  {
    title: '4. Advertisements & Google AdMob Disclosures',
    content: (
      <div className="space-y-2">
        <p>
          Bubble Shooter Pro includes banner advertisements, level-transition interstitials, and optional rewarded video ads powered by Google AdMob (e.g., allowing players to voluntarily watch ads in exchange for extra hearts or continued gameplay).
        </p>
        <p>
          By accessing ad-supported features, you acknowledge that third-party advertising partners (Google AdMob) collect and process device identifiers, including the Android Advertising ID (AAID), IP address, and technical diagnostic telemetry in accordance with our Privacy Policy and Google’s Advertising Policies. Ad delivery is subject to third-party network availability and internet connectivity.
        </p>
      </div>
    )
  },
  {
    title: '5. Disclaimer of Warranties',
    content:
      'The application is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express or implied. While we strive to maintain top-tier performance across all devices and screen sizes, we do not warrant that gameplay will be completely error-free or uninterrupted.'
  },
  {
    title: '6. Limitation of Liability',
    content:
      'To the maximum extent permitted by applicable law, the developer shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use Bubble Shooter Pro.'
  },
  {
    title: '7. Revisions and Modifications',
    content:
      'We reserve the right to revise or modify these Terms at any time. Continued use of the game following any updates signifies your agreement to the revised terms.'
  },
  {
    title: '8. Legal Inquiries & Contact',
    content: (
      <>
        For legal inquiries regarding Bubble Shooter Pro, reach out to:{' '}
        <a
          href="mailto:dev.rasid.ekbal@gmail.com?subject=Bubble%20Shooter%20Pro%20Terms"
          className="text-accent hover:text-accent-hover transition-colors font-medium"
        >
          dev.rasid.ekbal@gmail.com
        </a>
      </>
    )
  }
];

export default function BubbleShooterTerms() {
  return (
    <>
      <SEOHead
        title="Terms of Service — Bubble Shooter Pro"
        description="Terms of Service and gameplay conditions for Bubble Shooter Pro Android App."
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
                  Terms of Service
                </h1>
                <p className="text-text-muted text-sm mt-1">
                  Bubble Shooter Pro · Effective Date: October 2026
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 mb-8 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">Summary:</strong> Play freely, experience all 49 worlds, respect the game intellectual property, and acknowledge third-party AdMob services for in-game rewarded hearts and ads.
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
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
