import { motion, useReducedMotion } from 'framer-motion';
import { FileText } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: '1. Agreement to Terms',
    content:
      "By downloading, installing, or using Attend - College Attendance Tracker ('the App'), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not install or use the app."
  },
  {
    title: '2. Grant of License',
    content:
      'We grant you a personal, non-exclusive, non-transferable, revocable license to use the Attend application on your compatible Android device in accordance with these terms. All software logic, design tokens, UI layouts, and graphics remain the intellectual property of Rasid Ekbal.'
  },
  {
    title: '3. Academic Information & User Responsibility',
    content:
      'Attend is an academic productivity and management tool intended to assist students with schedule, assignment, and attendance organization. You are responsible for ensuring that all data entered (attendance logs, criteria thresholds, exam marks) matches your official university records.'
  },
  {
    title: '4. Offline Storage & Backup',
    content: null,
    list: [
      'Attend operates strictly on a local-first SQLite database architecture without mandatory cloud synchronization.',
      'Clearing application storage or uninstalling the app will delete local attendance records and schedule settings stored on the device.',
      'We recommend keeping periodic personal records of your critical academic data.'
    ]
  },
  {
    title: '5. Disclaimer of Warranties',
    content:
      "The App is provided 'as is' and 'as available' without warranties of any kind. While Attend employs precise period-weighted attendance algorithms and safe-to-bunk calculations, official institutional attendance calculations and eligibility criteria are determined solely by your educational institution."
  },
  {
    title: '6. Contact Information',
    content: (
      <>
        For legal inquiries or questions regarding these terms, please email:{' '}
        <a
          href="mailto:support@rasidekbal.com?subject=Attend%20Terms"
          className="text-accent hover:text-accent-hover transition-colors link-underline"
        >
          support@rasidekbal.com
        </a>
      </>
    )
  }
];

export default function AttendTerms() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="Attend — Terms of Service"
        description="Terms of Service for the Attend College Attendance Tracker Android application."
      />

      <div className="pt-28 pb-20 section-padding">
        <div className="max-container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <FileText className="text-accent w-8 h-8" />
            <div>
              <h1 className="text-3xl font-heading font-bold text-text-primary">
                Attend Terms of Service
              </h1>
              <p className="text-text-muted text-sm mt-1">
                Last updated: August 2026
              </p>
            </div>
          </motion.div>

          <div className="text-text-secondary leading-relaxed">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-4">
                  {section.title}
                </h2>

                {section.content && (
                  <p className="mb-4">{section.content}</p>
                )}

                {section.list && (
                  <ul className="list-disc list-outside ml-5 space-y-2 mb-4">
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
