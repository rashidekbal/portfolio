import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, FileText, HelpCircle, Download, ChevronLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Lightbox from '../components/Lightbox';

const appDetailsData = {
  threadly: {
    title: 'Threadly',
    icon: '/images/threadly-icon.png',
    tagline: 'A production-grade social media platform with real-time messaging, stories, reels, and a full social graph.',
    category: 'Social Network',
    lastUpdated: 'July 2026',
    size: '28 MB',
    requires: 'Android 10.0 and up',
    googlePlayUrl: 'https://play.google.com/store',
    privacyUrl: '/apps/threadly/privacy',
    termsUrl: '/apps/threadly/terms',
    supportUrl: '/apps/threadly/support',
    aboutText: `Threadly is a high-performance, native social network built from the ground up to offer a fast, immersive social experience. Connect with friends, share moments through posts, stories, or reels, and communicate instantly through secure, low-latency messaging. Designed with a clean, distraction-free aesthetic and smooth transition animations, Threadly puts your social connections and content first.`,
    features: [
      {
        title: 'Real-Time Messaging',
        desc: 'Send messages instantly with delivery indicators and read receipts. Features dynamic group chat support and offline delivery synchronization.'
      },
      {
        title: 'Stories & Video Reels',
        desc: 'Share short video clips or disappearing photos using the high-performance CameraX camera module and custom media encoder.'
      },
      {
        title: 'Rich Content Feeds',
        desc: 'Upload high-resolution images and videos. Customize your feed, leave nested comment replies, and interact with post likes.'
      },
      {
        title: 'Advanced Local Caching',
        desc: 'Browser feeds even while offline. Threadly leverages local database replication to ensure your social experience is never interrupted.'
      },
      {
        title: 'Verified Access Control',
        desc: 'Registration is secured by verification codes sent to your email or phone, preventing spoofing and spam accounts.'
      }
    ],
    screenshots: [
      '/images/threadly-2.jpg',
      '/images/threadly-3.jpg',
      '/images/threadly-4.jpg',
      '/images/threadly-5.jpg',
      '/images/threadly-6.jpg'
    ]
  },
  eazywalls: {
    title: 'EazyWalls',
    icon: '/images/eazywalls-icon.png',
    tagline: 'A curated wallpaper discovery platform with high-resolution collection feeds and category exploration.',
    category: 'Personalization / Lifestyle',
    lastUpdated: 'July 2026',
    size: '14 MB',
    requires: 'Android 9.0 and up',
    googlePlayUrl: 'https://play.google.com/store',
    privacyUrl: '/apps/eazywalls/privacy',
    termsUrl: '/apps/eazywalls/terms',
    supportUrl: '/apps/eazywalls/support',
    aboutText: `EazyWalls is a gorgeous personalization application designed to bring premium, hand-picked digital art directly to your phone screen. Explore beautifully categorized grids, customize your home or lock screen with one-tap set actions, and save high-resolution imagery for offline viewing. Built to handle heavy visual feeds smoothly and efficiently.`,
    features: [
      {
        title: 'Daily Curated Feed',
        desc: 'Explore new additions uploaded by verified creators. Discover wallpapers categorized into Abstract, Anime, Pattern, Minimal, and more.'
      },
      {
        title: 'One-Tap Application',
        desc: 'Apply wallpapers instantly to your home screen, lock screen, or both directly inside the app with full-screen cropping previews.'
      },
      {
        title: 'High-Res Downloads',
        desc: 'Get access to uncompressed, high-fidelity files optimized via dynamic CDN nodes for fast, low-bandwidth data transfers.'
      },
      {
        title: 'Vibrant Shimmer UI',
        desc: 'Experience smooth scrolling with lazy image loading and elegant placeholder states for maximum perceived performance.'
      },
      {
        title: 'Favorites System',
        desc: 'Create your personal gallery by saving wallpapers to your account, syncing them automatically across all your devices.'
      }
    ],
    screenshots: [
      '/images/eazywalls-1.jpg',
      '/images/eazywalls-2.jpg',
      '/images/eazywalls-3.jpg',
      '/images/eazywalls-4.jpg'
    ]
  },
  '4k-media-player': {
    title: '4K Media Player',
    icon: '/images/videoplayer-icon.png',
    tagline: 'A premium, native Android media player with Room DB caching, custom overlays, and foreground playback services.',
    category: 'Video Players & Editors',
    lastUpdated: 'July 2026',
    size: '18 MB',
    requires: 'Android 8.0 and up',
    googlePlayUrl: 'https://play.google.com/store',
    privacyUrl: '/apps/4k-media-player/privacy',
    termsUrl: '/apps/4k-media-player/terms',
    supportUrl: '/apps/4k-media-player/support',
    aboutText: `4K Media Player is a premium offline media playback utility built natively for Android. It enables smooth, hardware-accelerated rendering of all major video and audio formats. Designed with a clean Material Design aesthetic, the application provides persistent playback history, intelligent queue control, and seamless background execution.`,
    features: [
      {
        title: 'ExoPlayer Render Pipeline',
        desc: 'Leverages Jetpack Media3 ExoPlayer for low-latency playback of standard and ultra-high-definition video codecs.'
      },
      {
        title: 'Persistent Room Caching',
        desc: 'Saves your active tracks, playback queue, and last playhead position inside a local SQLite Room DB to resume exactly where you left off.'
      },
      {
        title: 'True Background Playback',
        desc: 'Integrates MediaSessionService to support system-level audio controls, active notification controls, and screen-off execution.'
      },
      {
        title: 'On-Screen Lock & Controls',
        desc: 'Block screen touches during playback, toggle orientations instantly, and toggle audio speed (1.0x to 2.0x) on-the-fly.'
      },
      {
        title: 'Dynamic Playlist Queue',
        desc: 'Hop between tracks and modify active playback lists inside an elegant bottom-sheet controller.'
      }
    ],
    screenshots: [
      '/images/videoplayer/1.jpg',
      '/images/videoplayer/2.jpg',
      '/images/videoplayer/3.jpg',
      '/images/videoplayer/4.jpg',
      '/images/videoplayer/5.jpg',
      '/images/videoplayer/6.jpg',
      '/images/videoplayer/7.jpg',
      '/images/videoplayer/8.jpg',
      '/images/videoplayer/9.jpg',
      '/images/videoplayer/10.jpg'
    ]
  },
  attend: {
    title: 'Attend',
    icon: '/images/attend-icon.png',
    tagline: 'An intelligent, period-weighted college attendance tracker and academic planner built natively for Android.',
    category: 'Education / Productivity',
    lastUpdated: 'August 2026',
    size: '12 MB',
    requires: 'Android 8.0 and up',
    googlePlayUrl: 'https://play.google.com/store',
    privacyUrl: '/apps/attend/privacy',
    termsUrl: '/apps/attend/terms',
    supportUrl: '/apps/attend/support',
    aboutText: `Attend is a comprehensive academic companion engineered for university students. Built with an intelligent, period-weighted calculation engine, Attend accounts for varying daily timetables, multi-hour lab sessions, and dynamic institutional attendance criteria. With smart "Safe to Bunk" formulas, exam mark analytics, assignment deadline trackers, and a launcher home screen widget, Attend ensures you stay comfortably ahead of your academic requirements with zero cloud dependency.`,
    features: [
      {
        title: 'Period-Weighted Attendance Math',
        desc: 'Accurately calculates percentages by cross-referencing logs with scheduled period hours, handling 2-hour labs and differing daily period allocations perfectly.'
      },
      {
        title: 'Safe-to-Bunk & Recovery Analytics',
        desc: 'Live calculation indicates exactly how many consecutive sessions you can skip safely without dipping below threshold, or how many you need to attend to recover.'
      },
      {
        title: 'Assignment & Deadline Management',
        desc: 'Track academic tasks and assignments with dynamic countdowns, submission statuses, and overdue alert badges.'
      },
      {
        title: 'Mid-Sem Marks Hub',
        desc: 'Log and analyze internal examination scores across Mid Sem 1, 2, and 3 with target benchmark indicators and subject trend insights.'
      },
      {
        title: 'Launcher App Widget',
        desc: 'Instant attendance percentage and bunk safety visibility directly from your Android home screen launcher.'
      }
    ],
    screenshots: [
      '/images/attend/Screenshot_20260815_220741.jpg',
      '/images/attend/Screenshot_20260815_220743.jpg',
      '/images/attend/Screenshot_20260815_220746.jpg',
      '/images/attend/Screenshot_20260815_220829.jpg',
      '/images/attend/Screenshot_20260815_220839.jpg',
      '/images/attend/Screenshot_20260815_220845.jpg',
      '/images/attend/Screenshot_20260815_220849.jpg',
      '/images/attend/Screenshot_20260815_220853.jpg',
      '/images/attend/Screenshot_20260815_220856.jpg',
      '/images/attend/Screenshot_20260815_220859.jpg',
      '/images/attend/Screenshot_20260815_220918.jpg',
      '/images/attend/Screenshot_20260815_220948.jpg',
      '/images/attend/Screenshot_20260815_220950.jpg',
      '/images/attend/Screenshot_20260815_220951.jpg',
      '/images/attend/Screenshot_20260815_220956.jpg',
      '/images/attend/Screenshot_20260815_220959.jpg',
      '/images/attend/Screenshot_20260815_221000.jpg',
      '/images/attend/Screenshot_20260815_221004.jpg',
      '/images/attend/Screenshot_20260815_221006.jpg',
      '/images/attend/Screenshot_20260815_221007.jpg',
      '/images/attend/Screenshot_20260815_221044.jpg',
      '/images/attend/Screenshot_20260815_221116.jpg'
    ]
  }
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function AppDetail() {
  const { slug } = useParams();
  const app = appDetailsData[slug?.toLowerCase()];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 text-center">
        <div>
          <h1 className="text-3xl font-heading font-bold mb-4">App Not Found</h1>
          <p className="text-text-secondary mb-6">The requested application does not exist or has been removed.</p>
          <Link to="/apps" className="text-accent hover:underline flex items-center justify-center gap-2">
            <ChevronLeft size={16} /> Back to published apps
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${app.title} — Google Play Store App`}
        description={app.tagline}
      />

      <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
        {/* Decorative backdrop gradients matching Obsidian Pulse design system */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-container section-padding">
          {/* Back button */}
          <Link
            to="/apps"
            className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors mb-10 group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">All Apps</span>
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-center mb-16">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <img
                src={app.icon}
                alt={`${app.title} icon`}
                className="w-32 h-32 md:w-40 md:h-40 rounded-[28px] object-cover shadow-xl border border-border/40"
              />
            </div>
            <div className="md:col-span-3 text-center md:text-left">
              <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
                {app.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4 text-text-primary">
                {app.title}
              </h1>
              <p className="text-text-secondary text-lg mb-6 max-w-2xl">
                {app.tagline}
              </p>

              {/* Get App and Support actions */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a
                  href={app.googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-bg-base font-semibold rounded-xl transition-all shadow-lg shadow-accent/10 hover:shadow-accent/20 active:scale-98"
                >
                  <Download size={20} />
                  <span>Download on Google Play</span>
                </a>
                <Link
                  to={app.supportUrl}
                  className="flex items-center gap-1.5 px-5 py-3 bg-bg-elevated hover:bg-bg-subtle border border-border/50 text-text-primary font-medium rounded-xl transition-all"
                >
                  <span>Support Center</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 py-6 border-y border-border/40 max-w-3xl mb-16 text-center">
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wider mb-1">File Size</p>
              <p className="text-text-primary font-bold text-lg">{app.size}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Required OS</p>
              <p className="text-text-primary font-bold text-lg">{app.requires}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Latest Version</p>
              <p className="text-text-primary font-bold text-lg">v1.0.8</p>
            </div>
          </div>

          {/* Mobile Screens Showcase (Full Width Gallery) */}
          {app.screenshots && app.screenshots.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-text-primary flex items-center gap-2">
                    <span>In-App Mobile Screens</span>
                    <span className="text-xs font-normal font-body px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent">
                      Mobile View
                    </span>
                  </h2>
                  <p className="text-text-secondary text-sm mt-1">
                    Scroll horizontally to preview app screens — click any screen to enlarge.
                  </p>
                </div>
              </div>

              {/* Horizontal scroll container */}
              <div className="flex gap-5 overflow-x-auto pb-6 pt-2 scrollbar-thin snap-x snap-mandatory">
                {app.screenshots.map((shot, idx) => (
                  <motion.button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setLightboxIndex(idx);
                      setLightboxOpen(true);
                    }}
                    className="w-52 md:w-60 flex-shrink-0 snap-start rounded-2xl overflow-hidden border border-border/50 hover:border-accent/60 bg-bg-elevated aspect-[9/20] shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1 relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none z-10" />
                    <img
                      src={shot}
                      alt={`${app.title} mobile screen ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Col: Description & Features */}
            <div className="lg:col-span-2 space-y-12">
              {/* About section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUpVariants}
              >
                <h2 className="text-2xl font-heading font-bold mb-4 text-text-primary">
                  About {app.title}
                </h2>
                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {app.aboutText}
                </p>
              </motion.div>

              {/* Features list */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUpVariants}
              >
                <h2 className="text-2xl font-heading font-bold mb-6 text-text-primary">
                  Key Features
                </h2>
                <div className="space-y-6">
                  {app.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="text-accent w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-text-primary text-lg mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Col: Metadata sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Developer & Legal info card */}
              <div className="bg-bg-elevated border border-border p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-heading font-bold text-text-primary mb-4">
                  Information
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between py-2 border-b border-border/30">
                    <span className="text-text-muted">Developer</span>
                    <span className="text-text-primary font-medium">Rasid Ekbal</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/30">
                    <span className="text-text-muted">Publisher</span>
                    <span className="text-text-primary font-medium">Rasid Apps</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/30">
                    <span className="text-text-muted">Updated</span>
                    <span className="text-text-primary font-medium">{app.lastUpdated}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-text-muted">Content Rating</span>
                    <span className="text-text-primary font-medium">PEGI 3 (Everyone)</span>
                  </div>
                </div>

                <div className="border-t border-border/40 pt-6 mt-6 space-y-3">
                  <Link
                    to={app.privacyUrl}
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    <Shield size={16} />
                    <span>Privacy Policy</span>
                  </Link>
                  <Link
                    to={app.termsUrl}
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    <FileText size={16} />
                    <span>Terms of Service</span>
                  </Link>
                  <Link
                    to={app.supportUrl}
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    <HelpCircle size={16} />
                    <span>Support Center</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox for zooming screenshots */}
      {app.screenshots && (
        <Lightbox
          images={app.screenshots}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={() =>
            setLightboxIndex((prev) =>
              prev < app.screenshots.length - 1 ? prev + 1 : 0
            )
          }
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev > 0 ? prev - 1 : app.screenshots.length - 1
            )
          }
        />
      )}
    </>
  );
}
