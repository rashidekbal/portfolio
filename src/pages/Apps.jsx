import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, FileText, HelpCircle, ExternalLink, Download } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const publishedApps = [
  {
    slug: 'threadly',
    title: 'Threadly',
    icon: '/images/threadly-icon.png',
    tagline: 'A production-grade social media platform with real-time messaging, stories, reels, and a full social graph.',
    description: 'Threadly is a feature-complete Android social media app built to solve real-world engineering challenges: session security, instant message delivery, offline local caching, and custom camera media pipelines.',
    features: [
      'Real-time messaging via WebSockets with delivery receipts',
      'ExoPlayer cache integration for smooth Reels and video post playback',
      'CameraX custom camera implementation for stories and posts',
      'Room database local cache for offline feed support',
      'Firebase Cloud Messaging (FCM) for instant offline notifications'
    ],
    googlePlayUrl: 'https://play.google.com/store',
    privacyUrl: '/apps/threadly/privacy',
    termsUrl: '/apps/threadly/terms',
    supportUrl: '/apps/threadly/support',
    projectUrl: '/projects/threadly',
    tech: ['Java', 'Android SDK', 'MVVM', 'Room', 'Socket.IO', 'ExoPlayer']
  },
  {
    slug: 'eazywalls',
    title: 'EazyWalls',
    icon: '/images/eazywalls-icon.png',
    tagline: 'A curated wallpaper discovery platform with high-resolution collection feeds and category exploration.',
    description: 'EazyWalls brings premium, hand-picked digital art to your device screen. It utilizes a native Android client connected to a high-performance Express 5 API backend with Cloudinary CDN storage and delivery.',
    features: [
      'Vibrant category exploration grids (Abstract, Anime, Pattern, Minimal)',
      'Glide image caching with custom shimmer performance placeholders',
      'Cloudinary CDN media storage with original/preview delivery separation',
      'OTP-gated registration to guarantee authentic user verification',
      'One-click wallpaper downloader and set-on-device action'
    ],
    googlePlayUrl: 'https://play.google.com/store',
    privacyUrl: '/apps/eazywalls/privacy',
    termsUrl: '/apps/eazywalls/terms',
    supportUrl: '/apps/eazywalls/support',
    projectUrl: '/projects/eazywalls',
    tech: ['Java', 'Android SDK', 'MVVM', 'Room', 'Glide', 'Cloudinary']
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
    googlePlayUrl: 'https://play.google.com/store',
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
    googlePlayUrl: 'https://play.google.com/store',
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
