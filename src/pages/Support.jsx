import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, HelpCircle, Shield, FileText } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEOHead from '../components/SEOHead';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const EMAILJS_SERVICE_ID = 'service_jcakom3';
const EMAILJS_TEMPLATE_ID = 'template_arq0jqo';
const EMAILJS_PUBLIC_KEY = 'BG2At-wOZdOn2krC4';

const appOptions = [
  { value: '', label: 'Select App' },
  { value: 'pdf-tools', label: 'PDF Tools (PDF Utility)' },
  { value: 'threadly', label: 'Threadly (Social Media)' },
  { value: 'eazywalls', label: 'EazyWalls (Wallpaper Discover)' },
  { value: '4k-media-player', label: '4K Media Player (Media Player)' },
  { value: 'attend', label: 'Attend (College Attendance Tracker)' }
];

export default function Support() {
  const prefersReducedMotion = useReducedMotion();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    app: '',
    appVersion: '',
    osVersion: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  // Pre-fill app selection from query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const appParam = params.get('app');
    if (appParam && appOptions.some((opt) => opt.value === appParam)) {
      setFormData((prev) => ({ ...prev, app: appParam }));
    }
  }, [location]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!formData.app) {
      newErrors.app = 'Please select the app you need help with.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a description of the issue (min 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('idle');
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      // Support notification
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: `Play Store Support: ${formData.app.toUpperCase()}`,
          message: `App: ${formData.app}\nApp Version: ${formData.appVersion || 'N/A'}\nOS Version: ${formData.osVersion || 'N/A'}\n\nMessage:\n${formData.message}`
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', app: '', appVersion: '', osVersion: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full bg-bg-subtle border border-border rounded-lg px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors placeholder:text-text-muted';

  return (
    <>
      <SEOHead
        title="App Support & Help — Rasid Ekbal"
        description="Need support for Threadly or EazyWalls? Submit a ticket or browse help topics."
      />

      <div className="pt-32 pb-24 section-padding">
        <div className="max-container mx-auto">
          <SectionWrapper>
            {/* Header */}
            <div className="mb-12">
              <motion.h1
                className="text-4xl md:text-5xl font-heading font-bold mb-4"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                App Support & <span className="text-gradient">Help Center</span>
              </motion.h1>
              <p className="text-text-secondary text-lg">
                Have trouble with our mobile apps, found a bug, or want to suggest a feature? Submit a support ticket and we will help you out.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-bg-elevated rounded-xl border border-border p-6 md:p-8">
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label htmlFor="name" className="text-text-secondary text-sm font-medium mb-2 block">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className={inputClasses}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="text-text-secondary text-sm font-medium mb-2 block">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            className={inputClasses}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* App Selector */}
                      <div>
                        <label htmlFor="app" className="text-text-secondary text-sm font-medium mb-2 block">
                          App Title
                        </label>
                        <select
                          id="app"
                          name="app"
                          value={formData.app}
                          onChange={handleChange}
                          className={inputClasses}
                        >
                          {appOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        {errors.app && (
                          <p className="text-red-500 text-xs mt-1">{errors.app}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* App Version */}
                        <div>
                          <label htmlFor="appVersion" className="text-text-secondary text-sm font-medium mb-2 block">
                            App Version (Optional)
                          </label>
                          <input
                            type="text"
                            id="appVersion"
                            name="appVersion"
                            value={formData.appVersion}
                            onChange={handleChange}
                            placeholder="e.g. 1.0.4"
                            className={inputClasses}
                          />
                        </div>

                        {/* OS Version */}
                        <div>
                          <label htmlFor="osVersion" className="text-text-secondary text-sm font-medium mb-2 block">
                            Android OS Version (Optional)
                          </label>
                          <input
                            type="text"
                            id="osVersion"
                            name="osVersion"
                            value={formData.osVersion}
                            onChange={handleChange}
                            placeholder="e.g. Android 14"
                            className={inputClasses}
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="text-text-secondary text-sm font-medium mb-2 block">
                          Describe the issue
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please provide details about what went wrong and steps to reproduce..."
                          required
                          rows={6}
                          className={`${inputClasses} resize-none`}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                        )}
                      </div>

                      {/* Submit */}
                      <Button variant="primary" type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Support Request'}
                      </Button>
                    </div>
                  </form>

                  {/* Status */}
                  {submitStatus === 'success' && (
                    <p className="mt-4 text-emerald-500 text-sm bg-emerald-500/10 rounded-lg px-4 py-3 border border-emerald-500/20">
                      Support ticket submitted! We will respond to your registered email address within 24-48 hours.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="mt-4 text-red-400 text-sm bg-red-500/10 rounded-lg px-4 py-3 border border-red-500/20">
                      Something went wrong. Please try again or email us directly at dev.rasid.ekbal@gmail.com.
                    </p>
                  )}
                </div>
              </div>

              {/* Info panel */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-bg-elevated border border-border p-6 rounded-xl">
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <HelpCircle className="text-accent" size={20} />
                    Frequently Asked
                  </h3>
                  <div className="space-y-4 text-sm text-text-secondary">
                    <div>
                      <h4 className="font-semibold text-text-primary">How do I request account deletion?</h4>
                      <p className="text-text-muted mt-1">Go to app Settings → Account → Delete Account. Alternatively, submit a support request choosing your app and using the message body to specify deletion.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">What happens when I delete my account?</h4>
                      <p className="text-text-muted mt-1">All personal data, profile imagery, content uploads (posts, stories, reels, custom favorites) are instantly purged from the servers.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-elevated border border-border p-6 rounded-xl">
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Shield className="text-accent" size={20} />
                    Legal Policies
                  </h3>
                  <p className="text-sm text-text-muted mb-4">
                    Please read our privacy policies and terms of service for full details on how we store and handle your personal details.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium">PDF Tools:</span>
                      <div className="space-x-2">
                        <a href="/apps/pdf-tools/privacy" className="text-accent hover:underline">Privacy</a>
                        <a href="/apps/pdf-tools/terms" className="text-accent hover:underline">Terms</a>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium">Threadly:</span>
                      <div className="space-x-2">
                        <a href="/apps/threadly/privacy" className="text-accent hover:underline">Privacy</a>
                        <a href="/apps/threadly/terms" className="text-accent hover:underline">Terms</a>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium">EazyWalls:</span>
                      <div className="space-x-2">
                        <a href="/apps/eazywalls/privacy" className="text-accent hover:underline">Privacy</a>
                        <a href="/apps/eazywalls/terms" className="text-accent hover:underline">Terms</a>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium">4K Media Player:</span>
                      <div className="space-x-2">
                        <a href="/apps/4k-media-player/privacy" className="text-accent hover:underline">Privacy</a>
                        <a href="/apps/4k-media-player/terms" className="text-accent hover:underline">Terms</a>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium">Attend:</span>
                      <div className="space-x-2">
                        <a href="/apps/attend/privacy" className="text-accent hover:underline">Privacy</a>
                        <a href="/apps/attend/terms" className="text-accent hover:underline">Terms</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </>
  );
}
