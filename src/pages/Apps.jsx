import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, FileText, HelpCircle, ExternalLink, Download } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const publishedApps = [
  {
    slug: 'bubble-shooter',
    title: 'Bubble Shooter Pro',
    icon: '/images/bubbleshooter-icon.jpeg',
    tagline: 'A production-grade arcade bubble shooter with 49 themed worlds, custom 2D canvas physics, and rewarded progression.',
    description: 'Bubble Shooter Pro is a native Android casual puzzle and arcade game crafted from the ground up in Java targeting modern Android SDK 37. It features a custom hex-grid physics engine, 49 immersive world themes with dynamic level maps, interactive gift chests unlocking after every 5 levels, an avatar-driven progression pin, a fair-play heart and diamond economy, and Google AdMob rewarded video integrations.',
    features: [
      '49 beautifully crafted themed worlds with dynamic map scrolling and progressive coordinate pin navigation',
      'Custom 2D Canvas game physics engine with hexagonal grid collision and cluster chain-reaction popping',
      'Milestone gift reward chests unlocking after every 5 levels (offsets 5 & 10) granting diamonds and booster rewards',
      'Fair-play Heart Economy: 5 max lives with automatic time-based regeneration, diamond refills, and rewarded ad options (no hearts lost in Endless mode)',
      'Arcade Endless Mode offering unlimited, heart-free rapid bubble matching and continuous survival scoring',
      'Profile customization with custom player name and avatar pins navigating the world map',
      '100% ViewBinding, low-latency audio effects, and modern edge-to-edge window insets'
    ],
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.redcodersgroup.bubbleshooter',
    privacyUrl: '/apps/bubble-shooter/privacy',
    termsUrl: '/apps/bubble-shooter/terms',
    supportUrl: '/apps/bubble-shooter/support',
    projectUrl: '/projects/bubble-shooter',
    tech: ['Java', 'Android SDK 37', 'Custom 2D Engine', 'Hex Grid Physics', 'AdMob', 'ViewBinding', 'JSON Maps'],
    screenshots: [
      '/images/bubbleshooter/1.jpg',
      '/images/bubbleshooter/2.jpg',
      '/images/bubbleshooter/3.jpg',
      '/images/bubbleshooter/4.jpg',
      '/images/bubbleshooter/5.jpg'
    ]
  },
  {
    slug: 'number-blocks',
    title: 'Number Blocks 2048',
    icon: '/images/numberblocks-icon.png',
    tagline: 'An architectural, tactile 2048 puzzle with endless merge progression, multi-board dimensions (4x4, 5x5, 6x6), procedural audio, and rewarded undos.',
    description: 'Number Blocks 2048 is a native Android architectural puzzle game engineered for endless progression beyond the 2048 boundary. Built in modern Java 17 targeting Android SDK 37, it features custom low-latency 2D Canvas rendering, synthesized audio generation, AdMob banner and rewarded video ads, multi-screen responsive dimension tables, and edge-to-edge window insets.',
    features: [
      'Endless tile progression beyond 2048 (4096, 8192, 16384, 32768, 65536, etc.) with logarithmic typography scaling',
      'Multi-grid dimensions: 4×4 Standard, 5×5 Extended, and 6×6 Expanded with independent game state save & resume',
      '5 free undos per run with Google AdMob Rewarded Video integration for continuous play',
      'Zero-asset procedural sound engine using low-level AudioTrack sine-wave synthesis and calibrated haptics',
      'Screen-wide gesture navigation with touch-guarded action button exclusion areas',
      '100% ViewBinding and full Android 15 / SDK 37 edge-to-edge window insets compliance'
    ],
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.redcodersgroup.numberblocks',
    privacyUrl: '/apps/number-blocks/privacy',
    termsUrl: '/apps/number-blocks/terms',
    supportUrl: '/apps/number-blocks/support',
    projectUrl: '/projects/number-blocks',
    tech: ['Java 17', 'Android SDK 37', 'ViewBinding', 'Custom Canvas', 'AdMob', 'AudioTrack', 'Material Design'],
    screenshots: [
      '/images/numberblocks/1.jpg',
      '/images/numberblocks/2.jpg',
      '/images/numberblocks/3.jpg',
      '/images/numberblocks/4.jpg',
      '/images/numberblocks/5.jpg',
      '/images/numberblocks/6.jpg'
    ]
  },
  {
    slug: 'pdf-tools',
    title: 'PDF Tools',
    icon: '/images/pdftool-icon.png',
    tagline: 'A privacy-first, 100% on-device Android PDF utility to merge, split, compress, unlock, lock, and organize PDF files.',
    description: 'PDF Tools is a native Android application engineered to perform document manipulations locally on-device without uploading sensitive files to cloud servers. Features PDFBox processing, Google Play subscriptions (₹49/mo & ₹699 lifetime), and AdMob rewarded ads.',
    features: [
      '100% on-device local file processing via Apache PDFBox — zero server uploads',
      'Dual-tier Google Play Billing (₹49/month recurring sub & ₹699 lifetime purchase)',
      'AdMob Rewarded Video ad pipeline to earn Moon Credits for ad-supported saves',
      'Compress, Merge, Split, Password Lock/Unlock, and Drag-and-Drop Page Reordering',
      'Clean MVVM architecture in Java 17 with ViewBinding and Room SQLite'
    ],
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.redcodersgroup.pdftool',
    privacyUrl: '/apps/pdf-tools/privacy',
    termsUrl: '/apps/pdf-tools/terms',
    supportUrl: '/apps/pdf-tools/support',
    projectUrl: '/projects/pdf-tools',
    tech: ['Java 17', 'Android SDK', 'MVVM', 'PDFBox', 'Room', 'Google Play Billing', 'AdMob']
  },
  {
    slug: '4k-media-player',
    title: '4K Media Player',
    icon: '/images/videoplayer-icon.png',
    tagline: 'A premium, native Android media player with Room DB caching, custom overlays, and foreground playback services.',
    description: '4K Media Player is a native Android media utility designed to browse, manage, and play local audio and video files. It leverages Media3 ExoPlayer for low-latency playback pipelines and incorporates a persistent background music service.',
    features: [
      'ExoPlayer-backed low-latency video playback controller',
      'Robust background playback service via MediaSessionService',
      'SQLite Room database for persistent state restoration and play history',
      'Custom controller overlay featuring speed control, screen lock, and orientation options',
      'Dynamic search and local files organization'
    ],
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.redcodegroups.videoplayer',
    privacyUrl: '/apps/4k-media-player/privacy',
    termsUrl: '/apps/4k-media-player/terms',
    supportUrl: '/apps/4k-media-player/support',
    projectUrl: '/projects/4k-media-player',
    tech: ['Java', 'Android SDK', 'Jetpack Media3', 'Room', 'MVVM', 'Material Design']
  },
  {
    slug: 'attend',
    title: 'Attend',
    icon: '/images/attend-icon.png',
    tagline: 'An intelligent, period-weighted college attendance tracker and academic hub with safe-to-bunk analytics.',
    description: 'Attend is a native Android academic management app built for college students. It features period-weighted multi-lab attendance math, real-time safe-to-bunk predictions, mid-sem score tracking, and offline Room DB persistence.',
    features: [
      'Period-weighted attendance engine accounting for multi-hour labs and daily timetable variations',
      'Real-time Safe-to-Bunk and recovery calculation algorithms',
      'Assignment tracker with dynamic due dates and submission toggling',
      'Mid-Sem examination mark tracking and performance trends across 3 assessment cycles',
      'Android launcher App Widget for live percentage updates and bunk safety warnings'
    ],
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.redcodersgroup.attend_collegeattendancetracker',
    privacyUrl: '/apps/attend/privacy',
    termsUrl: '/apps/attend/terms',
    supportUrl: '/apps/attend/support',
    projectUrl: '/projects/attend',
    tech: ['Java 17', 'Android SDK', 'MVVM', 'Room', 'App Widgets', 'Material Design']
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function Apps() {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Google Play Store Apps — Rasid Ekbal"
        description="Browse and download premium mobile applications published on Google Play. Built natively for Android."
      />

      <div className="min-h-screen pt-32 pb-24 section-padding relative">
        <div className="max-container">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Published <span className="text-gradient">Android Apps</span>
            </motion.h1>
            <motion.p
              className="text-text-secondary text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover, install, and experience feature-rich mobile products engineered natively for performance, reliability, and modern aesthetics.
            </motion.p>
          </div>

          {/* Grid list */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {publishedApps.map((app) => (
              <motion.div
                key={app.slug}
                variants={cardVariants}
                onClick={() => navigate(`/apps/${app.slug}`)}
                className="bg-bg-elevated border border-border/40 hover:border-accent/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group shadow-lg shadow-black/10 cursor-pointer"
              >
                {/* Visual glow backdrop */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Top section: Icon and basic info */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={app.icon}
                      alt={`${app.title} icon`}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover shadow-md border border-border/50 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div>
                      <h2 className="text-2xl font-heading font-bold text-text-primary group-hover:text-accent transition-colors">
                        {app.title}
                      </h2>
                      <p className="text-text-muted text-xs tracking-wider uppercase mt-1">
                        Google Play Developer Program
                      </p>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-text-secondary font-medium text-base mb-4">
                    {app.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-text-muted text-sm mb-6 leading-relaxed">
                    {app.description}
                  </p>

                  {/* Features list */}
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-text-primary tracking-wider uppercase mb-3">
                      Key Highlights
                    </h3>
                    <ul className="space-y-2">
                      {app.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start text-sm text-text-secondary">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {app.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-bg-subtle border border-border/30 text-text-secondary text-xs font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions and Legal links */}
                <div className="border-t border-border/40 pt-6 mt-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Primary Play Store Button */}
                    <a
                      href={app.googlePlayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-bg-base font-semibold rounded-xl transition-all shadow-md hover:shadow-accent/20 active:scale-98"
                    >
                      <Download size={18} />
                      <span>Get it on Google Play</span>
                    </a>

                    {/* Secondary Detail Button */}
                    <Link
                      to={app.projectUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-bg-subtle hover:bg-bg-elevated border border-border/50 text-text-primary text-sm font-medium rounded-xl transition-all"
                    >
                      <span>Engineering Details</span>
                      <ExternalLink size={14} />
                    </Link>
                  </div>

                  {/* App specific legal pages footer */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6 text-xs text-text-muted">
                    <Link
                      to={app.privacyUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 hover:text-accent transition-colors"
                    >
                      <Shield size={12} />
                      <span>Privacy Policy</span>
                    </Link>
                    <span className="text-border/60">|</span>
                    <Link
                      to={app.termsUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 hover:text-accent transition-colors"
                    >
                      <FileText size={12} />
                      <span>Terms of Service</span>
                    </Link>
                    <span className="text-border/60">|</span>
                    <Link
                      to={app.supportUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 hover:text-accent transition-colors"
                    >
                      <HelpCircle size={12} />
                      <span>Support & Help</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
