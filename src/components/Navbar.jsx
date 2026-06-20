import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Feedback', path: '/feedback' },
  { label: 'Contact', path: '/contact' },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 },
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border dark text-text-primary">
      <div className="max-container section-padding py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-heading font-bold text-xl">
          <span className="text-text-primary">Rasid Ekbal</span>
        </Link>

        {/* Right side actions */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-accent link-underline'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>



          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors p-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden glass-effect border-b border-border overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg transition-colors ${
                    isActive(link.path)
                      ? 'text-accent font-medium'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
