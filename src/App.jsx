import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundVisuals from './components/BackgroundVisuals';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Cookies from './pages/legal/Cookies';
import NotFound from './pages/NotFound';
import Apps from './pages/Apps';
import Support from './pages/Support';
import ThreadlyPrivacy from './pages/legal/ThreadlyPrivacy';
import ThreadlyTerms from './pages/legal/ThreadlyTerms';
import EazyWallsPrivacy from './pages/legal/EazyWallsPrivacy';
import EazyWallsTerms from './pages/legal/EazyWallsTerms';
import AppDetail from './pages/AppDetail';
import ThreadlySupport from './pages/support/ThreadlySupport';
import EazyWallsSupport from './pages/support/EazyWallsSupport';
import VideoPlayerPrivacy from './pages/legal/VideoPlayerPrivacy';
import VideoPlayerTerms from './pages/legal/VideoPlayerTerms';
import VideoPlayerSupport from './pages/support/VideoPlayerSupport';
import AttendPrivacy from './pages/legal/AttendPrivacy';
import AttendTerms from './pages/legal/AttendTerms';
import AttendSupport from './pages/support/AttendSupport';
import PdfToolPrivacy from './pages/legal/PdfToolPrivacy';
import PdfToolTerms from './pages/legal/PdfToolTerms';
import PdfToolSupport from './pages/support/PdfToolSupport';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/apps/:slug" element={<AppDetail />} />
          <Route path="/support" element={<Support />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/cookies" element={<Cookies />} />
           <Route path="/apps/threadly/privacy" element={<ThreadlyPrivacy />} />
          <Route path="/apps/threadly/terms" element={<ThreadlyTerms />} />
          <Route path="/apps/threadly/support" element={<ThreadlySupport />} />
          <Route path="/apps/eazywalls/privacy" element={<EazyWallsPrivacy />} />
          <Route path="/apps/eazywalls/terms" element={<EazyWallsTerms />} />
          <Route path="/apps/eazywalls/support" element={<EazyWallsSupport />} />
          <Route path="/apps/4k-media-player/privacy" element={<VideoPlayerPrivacy />} />
          <Route path="/apps/4k-media-player/terms" element={<VideoPlayerTerms />} />
          <Route path="/apps/4k-media-player/support" element={<VideoPlayerSupport />} />
          <Route path="/apps/attend/privacy" element={<AttendPrivacy />} />
          <Route path="/apps/attend/terms" element={<AttendTerms />} />
          <Route path="/apps/attend/support" element={<AttendSupport />} />
          <Route path="/apps/pdf-tools/privacy" element={<PdfToolPrivacy />} />
          <Route path="/apps/pdf-tools/terms" element={<PdfToolTerms />} />
          <Route path="/apps/pdf-tools/support" element={<PdfToolSupport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-bg-base text-text-primary relative overflow-x-hidden">
          <BackgroundVisuals />
          <Navbar />
          <main className="flex-1 relative z-10">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
