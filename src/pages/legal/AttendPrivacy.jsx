import { motion, useReducedMotion } from 'framer-motion';
import { Shield } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const sections = [
  {
    title: '1. Introduction & Overview',
    content:
      "This Privacy Policy explains how Attend ('we', 'us', 'our') handles user data within the Attend - College Attendance Tracker Android application. We are committed to protecting student privacy. Attend is engineered with a privacy-respecting, local-first architecture: your academic records, timetable schedules, internal marks, and personal profile data remain stored directly on your device."
  },
  {
    title: '2. Information We Store Locally (On-Device)',
    content:
      'Attend stores your core academic and personal records exclusively on your smartphone using a secure local SQLite Room database. This data is never sent to our servers or synchronized to any external cloud database:',
    list: [
      'Academic Profile: Student name, college/university name, department/branch, semester, roll number, and contact details entered during setup remain solely in local storage.',
      'Attendance Logs & Timetable: Scheduled periods, laboratory sessions, timetable slots, present/absent/cancelled records, and holiday calendars are maintained on-device.',
      'Internal Assessment Marks: Mid-semester scores, benchmark targets, and percentage calculations are computed and retained locally.',
      'Assignments & Tasks: Task descriptions, deadlines, priority tags, and completion statuses are saved strictly on your local device.'
    ]
  },
  {
    title: '3. Application Analytics & Diagnostics',
    content:
      'To maintain application stability, improve feature performance, and diagnose technical issues, Attend integrates industry-standard Google Firebase services:',
    list: [
      'Firebase Analytics: Collects aggregated, non-personally identifiable app interaction metrics (such as screen views, button interactions, and feature usage frequency). We strictly do not transmit student names, email addresses, phone numbers, or academic marks to analytics.',
      'Firebase Crashlytics: Collects anonymous crash diagnostics, stack traces, device hardware models, and OS versions when an unexpected application error occurs. This diagnostic telemetry enables us to promptly debug and release stability updates.',
      'Data Encryption in Transit: All telemetry and diagnostic data sent to Google Firebase services is encrypted in transit using standard HTTPS/TLS protocols.'
    ]
  },
  {
    title: '4. Advertising (Google AdMob)',
    content:
      'Attend integrates Google AdMob (Google Mobile Ads SDK) to display non-intrusive advertisements (such as banner and interstitial ads) that keep the application free and actively maintained:',
    list: [
      'Google AdMob may process anonymous device identifiers, coarse network information, and Google Advertising ID (AAID) in accordance with Google’s Privacy Policy.',
      'Users can manage personalized ad preferences or reset their Google Advertising ID at any time via Android System Settings -> Google -> Ads.'
    ]
  },
  {
    title: '5. Android Permissions & Usage',
    content:
      'Attend requests only necessary permissions strictly required to provide its core utilities:',
    list: [
      'POST_NOTIFICATIONS: Enables the app to deliver local class schedule alarms, upcoming period reminders, and assignment deadline warnings.',
      'SCHEDULE_EXACT_ALARM: Allows precise on-device scheduling for daily class notification alarms at user-selected times.',
      'RECEIVE_BOOT_COMPLETED: Automatically re-arms your scheduled daily alarms and timetable reminders after your device restarts.',
      'INTERNET & ACCESS_NETWORK_STATE: Required solely to load advertising and transmit anonymous Firebase crash diagnostics and usage telemetry.'
    ]
  },
  {
    title: '6. User Data Control, Backup & Deletion',
    content:
      'You maintain absolute ownership and control over all your data:',
    list: [
      'Google Drive Cloud Backup: Attend offers an optional feature enabling users to sign in with their Google account to back up their data directly to their personal Google Drive storage. This data is written exclusively to the hidden Application Data folder (drive.appdata scope) allocated to Attend. Attend cannot view, modify, or delete any personal files, documents, or photos outside this sandboxed folder. Automated nightly backups run locally via Android WorkManager around 2:00 AM while the device is charging. Users can disconnect their Google account or disable auto-backups at any time in Settings.',
      'Local Backup & Export: Attend provides built-in JSON export and import tools allowing you to back up your timetable, attendance, marks, and tasks to your own storage or transfer them between devices.',
      'Instant Data Deletion: You can modify or delete individual entries directly in the app, or wipe all stored application records completely at any time by going to Android System Settings -> Apps -> Attend -> Storage & Cache -> Clear Storage.'
    ]
  },
  {
    title: '7. Children and Student Privacy',
    content:
      'Attend is intended for college and university students. We do not knowingly solicit or collect personal identifiable information from children under the age of 13. If you believe any such data has inadvertently reached our diagnostic tools, please contact us immediately for deletion.'
  },
  {
    title: '8. Contact & Support',
    content: (
      <>
        If you have questions, feedback, or concerns regarding this Privacy Policy or data practices, please contact us at:{' '}
        <a
          href="mailto:dev.rasid.ekbal@gmail.com?subject=Attend%20Privacy"
          className="text-accent hover:text-accent-hover transition-colors link-underline"
        >
          dev.rasid.ekbal@gmail.com
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
        description="Privacy policy and data collection disclosures for the Attend College Attendance Tracker Android application."
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
                Last updated: October 2026
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
