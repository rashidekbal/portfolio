import { motion, useReducedMotion } from 'framer-motion';
import { Shield } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: 'Introduction',
    content:
      "This Privacy Policy explains how Attend ('we', 'us', 'our') handles user data within the Attend - College Attendance Tracker Android application. We believe strongly in user privacy and provide a 100% local-first, offline-first experience with zero tracking or telemetry."
  },
  {
    title: 'Information We Collect & Storage Model',
    content:
      'Attend operates completely offline on your device using a local SQLite Room database. All attendance logs, timetable entries, assignments, mid-sem examination scores, subject details, and personalized thresholds are stored solely on your smartphone.',
    list: [
      'Attendance & Timetable Records: Subject periods, lab sessions, present/absent logs, and holiday calendars are stored locally.',
      'Examination Marks: Mid-semester scores and subject benchmarks are processed entirely in-memory and in your local database.',
      'Assignments & Tasks: Task names, due dates, and submission states remain exclusively on your device.',
      'Notifications & Alarms: AlarmManager and BroadcastReceivers run natively on-device to dispatch schedule reminders and assignment alerts.'
    ]
  },
  {
    title: 'Zero Cloud Sync & No External Data Transmission',
    content:
      'We do not operate external database servers, analytics collectors, or cloud synchronization for Attend. No user data, device identifiers, or academic records are ever transmitted over the network.'
  },
  {
    title: 'Third-Party Libraries & Permissions',
    content:
      'Attend does not integrate third-party advertising SDKs or tracking frameworks. Standard Android permissions (such as POST_NOTIFICATIONS and SCHEDULE_EXACT_ALARM) are used solely to deliver local timetable alarms and deadline reminders.'
  },
  {
    title: 'Data Control & Deletion',
    content:
      'You have complete ownership and control over your data. You can edit or delete individual subjects, marks, and tasks within the app, or wipe all app data at any time via Android System Settings -> Apps -> Attend -> Storage & Cache -> Clear Storage.'
  },
  {
    title: 'Contact & Inquiries',
    content: (
      <>
        If you have questions regarding this Privacy Policy, please reach out to:{' '}
        <a
          href="mailto:support@rasidekbal.com?subject=Attend%20Privacy"
          className="text-accent hover:text-accent-hover transition-colors link-underline"
        >
          support@rasidekbal.com
        </a>
      </>
    )
  }
];

export default function AttendPrivacy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="Attend — Privacy Policy"
        description="Privacy policy for the Attend College Attendance Tracker Android application."
      />

      <div className="pt-28 pb-20 section-padding">
        <div className="max-container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <Shield className="text-accent w-8 h-8" />
            <div>
              <h1 className="text-3xl font-heading font-bold text-text-primary">
                Attend Privacy Policy
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
