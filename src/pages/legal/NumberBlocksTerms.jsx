import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content:
      'By downloading, installing, or playing Number Blocks 2048, you agree to be bound by these Terms of Service. If you do not agree with any portion of these terms, please discontinue using the application.'
  },
  {
    title: '2. License and Intellectual Property',
    content:
      'Number Blocks 2048 and its original algorithms, graphic designs, tactile theme palettes, procedural sound synthesis, and UI code are the intellectual property of Rasid Ekbal. You are granted a personal, non-exclusive, non-transferable license to play the game on your Android device.'
  },
  {
    title: '3. In-Game Undos and Advertisements',
    content:
      'Number Blocks provides 5 free moves undos per game session. Additional undos can be activated by voluntarily choosing to view rewarded advertisements provided via Google AdMob. Ads are subject to AdMob policies and network availability.'
  },
  {
    title: '4. Disclaimer of Warranties',
    content:
      'The application is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express or implied. While we strive for smooth performance across all devices, we do not guarantee uninterrupted gameplay or absolute compatibility with every hardware variation.'
  },
  {
    title: '5. Limitation of Liability',
    content:
      'In no event shall the developer be liable for any indirect, incidental, or consequential damages resulting from your use or inability to use Number Blocks 2048.'
  },
  {
    title: '6. Changes to Terms',
    content:
      'We reserve the right to modify these Terms at any time. Continued use of Number Blocks following updates constitutes acceptance of the modified Terms.'
  },
  {
    title: '7. Contact',
    content: (
      <>
        For legal or terms questions, contact:{' '}
        <a
          href="mailto:dev.rasid.ekbal@gmail.com?subject=Number%20Blocks%20Terms"
          className="text-accent hover:text-accent-hover transition-colors font-medium"
        >
          dev.rasid.ekbal@gmail.com
        </a>
      </>
    )
  }
];

export default function NumberBlocksTerms() {
  return (
    <>
      <SEOHead
        title="Terms of Service — Number Blocks 2048"
        description="Terms of Service and usage conditions for Number Blocks 2048 Android App."
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
                  Number Blocks 2048 · Effective Date: September 2026
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 mb-8 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">Summary:</strong> Play freely, enjoy endless merging, respect intellectual property, and reach out if you encounter any issues.
              </p>
            </div>

            <div className="space-y-8 text-text-secondary text-sm md:text-base leading-relaxed">
              {sections.map((sec, idx) => (
                <div key={idx} className="border-b border-border/40 pb-6 last:border-0">
                  <h2 className="font-heading font-semibold text-text-primary text-lg mb-3">
                    {sec.title}
                  </h2>
                  <p>{sec.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
