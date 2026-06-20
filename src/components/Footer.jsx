import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Feedback', path: '/feedback' },
  { label: 'Contact', path: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', path: '/legal/privacy' },
  { label: 'Terms of Service', path: '/legal/terms' },
  { label: 'Cookie Policy', path: '/legal/cookies' },
];

const Footer = () => {
  return (
    <footer className="bg-bg-elevated border-t border-border mt-20">
      <div className="max-container section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-heading font-bold text-lg text-text-primary">
              Rasid Ekbal
            </h3>
            <p className="text-text-secondary text-sm mt-2">
              Building digital experiences with passion and precision.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-text-secondary hover:text-accent text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-text-primary font-semibold mb-3">Legal</h4>
            <div className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-text-secondary hover:text-accent text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; 2026 Rasid Ekbal. All rights reserved.
          </p>
          <SocialIcons showLabels={false} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
