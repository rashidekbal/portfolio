import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, HelpCircle, Shield, FileText, ChevronLeft, Send, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEOHead from '../../components/SEOHead';
import SectionWrapper from '../../components/SectionWrapper';
import Button from '../../components/Button';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // TODO: Replace
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // TODO: Replace
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // TODO: Replace

const faqs = [
  {
    q: 'Why is the app not scanning my audio/video files?',
    a: 'Ensure you have granted "Music and Audio" and "Videos" media permissions. On Android 13+ devices, navigate to Android Settings -> Apps -> 4K Media Player -> Permissions, and ensure media access permissions are set to "Allow".'
  },
  {
    q: 'Does the app play network video streams?',
    a: 'Currently, the app focuses on local-first media playback. Network streams and HTTP video links are on our development roadmap and will be included in the v1.1 update.'
  },
  {
    q: 'Why does background playback stop unexpectedly?',
    a: 'Android OS sometimes terminates background tasks to optimize battery. Go to your phone Settings -> Battery -> Apps -> 4K Media Player, and set it to "Unrestricted" or disable battery optimization.'
  },
  {
    q: 'How do I clear my playback history?',
    a: 'You can wipe your playback history and cache by going to Android Settings -> Apps -> 4K Media Player -> Storage & Cache -> Clear Storage. All locally cached positions will be removed.'
  }
];

export default function VideoPlayerSupport() {
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    appVersion: '',
    osVersion: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a detailed description of the issue (min 10 characters).';
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
      await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: '4K Media Player Support Request',
            message: `App: 4K Media Player\nApp Version: ${formData.appVersion || 'N/A'}\nOS Version: ${formData.osVersion || 'N/A'}\n\nMessage:\n${formData.message}`
          },
          EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', appVersion: '', osVersion: '', message: '' });
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
            title="4K Media Player Support Center — Help & Ticket Submission"
            description="Get help and submit support requests for the 4K Media Player Android application."
        />

        <div className="pt-32 pb-24 section-padding relative">
          <div className="max-container">
            {/* Back to App Link */}
            <Link
                to="/apps/4k-media-player"
                className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors mb-10 group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Play Store App</span>
            </Link>

            {/* Header */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-16 pb-8 border-b border-border/40">
              <img
                  src="/images/videoplayer-icon.png"
                  alt="4K Media Player Icon"
                  className="w-20 h-20 rounded-2xl object-cover shadow-lg border border-border/50"
              />
              <div>
              <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
                Support Hub
              </span>
                <h1 className="text-4xl font-heading font-bold mt-2 text-text-primary">
                  4K Media Player Support
                </h1>
                <p className="text-text-secondary mt-1">
                  Having trouble or want to submit feedback? We are here to help.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-bg-elevated border border-border/50 rounded-2xl p-6 md:p-8 shadow-lg shadow-black/10">
                  <h2 className="text-xl font-heading font-bold text-text-primary mb-6">
                    Submit a Support Ticket
                  </h2>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
                            placeholder="e.g. 1.0.0"
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
                        Description of issue
                      </label>
                      <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please specify issue details, file scanning problems, or playback errors..."
                          required
                          rows={6}
                          className={`${inputClasses} resize-none`}
                      />
                      {errors.message && (
                          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button variant="primary" type="submit" className="w-full justify-center gap-2" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : (
                          <>
                            <Send size={16} />
                            <span>Submit Ticket</span>
                          </>
                      )}
                    </Button>
                  </form>

                  {submitStatus === 'success' && (
                      <motion.div
                          className="mt-4 flex items-center gap-2 text-emerald-500 text-sm bg-emerald-500/10 rounded-lg px-4 py-3 border border-emerald-500/20"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                      >
                        <Check size={16} />
                        <span>Your support ticket is received! We will reach out within 24-48 hours.</span>
                      </motion.div>
                  )}
                  {submitStatus === 'error' && (
                      <div className="mt-4 text-red-400 text-sm bg-red-500/10 rounded-lg px-4 py-3 border border-red-500/20">
                        Something went wrong. Please submit directly by emailing us at support@rasidekbal.com.
                      </div>
                  )}
                </div>
              </div>

              {/* FAQs / Info Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* FAQs */}
                <div className="bg-bg-elevated border border-border p-6 rounded-2xl shadow-sm">
                  <h3 className="text-lg font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
                    <HelpCircle className="text-accent" size={20} />
                    <span>FAQ Hub</span>
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-border/30 pb-4 last:border-0 last:pb-0">
                          <h4 className="font-semibold text-text-primary text-sm">{faq.q}</h4>
                          <p className="text-text-muted text-xs mt-1 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Legal Shortcuts */}
                <div className="bg-bg-elevated border border-border p-6 rounded-2xl shadow-sm">
                  <h3 className="text-lg font-heading font-bold text-text-primary mb-3 flex items-center gap-2">
                    <Shield className="text-accent" size={20} />
                    <span>Legal & Compliance</span>
                  </h3>
                  <p className="text-xs text-text-muted mb-4">
                    Read our privacy standards and user agreements governing the 4K Media Player client and local database operations.
                  </p>
                  <div className="space-y-3">
                    <Link
                        to="/apps/4k-media-player/privacy"
                        className="flex items-center gap-2 text-xs text-text-secondary hover:text-accent transition-colors"
                    >
                      <Shield size={14} />
                      <span>Privacy Policy</span>
                    </Link>
                    <Link
                        to="/apps/4k-media-player/terms"
                        className="flex items-center gap-2 text-xs text-text-secondary hover:text-accent transition-colors"
                    >
                      <FileText size={14} />
                      <span>Terms of Service</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
