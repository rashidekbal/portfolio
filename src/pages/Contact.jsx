import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import SocialIcons from '../components/SocialIcons';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // TODO: Replace
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // TODO: Replace
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // TODO: Replace

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const subjectOptions = [
  { value: '', label: 'Select a subject' },
  { value: 'Web Application', label: 'Web Application' },
  { value: 'Mobile App', label: 'Mobile App' },
  { value: 'AI / Automation', label: 'AI / Automation' },
  { value: 'Consulting', label: 'Consulting' },
  { value: 'Other', label: 'Other' },
];

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
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
          subject: formData.subject || 'No subject selected',
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  const inputClasses =
    'w-full bg-bg-subtle border border-border rounded-lg px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors placeholder:text-text-muted';

  return (
    <>
      <SEOHead
        title="Contact"
        description="Get in touch with Rasid Ekbal for freelance web, mobile, and AI development projects"
      />

      <div className="pt-28 section-padding">
        <div className="max-container mx-auto">
          <SectionWrapper>
            {/* Header */}
            <motion.div
              className="mb-12"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Get In Touch
              </h1>
              <p className="text-text-secondary text-lg">
                Have a project in mind or just want to say hello? I'd love to hear from you.
              </p>
            </motion.div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Left — Contact Form */}
              <motion.div
                className="lg:col-span-3"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-bg-elevated rounded-xl border border-border p-6 md:p-8">
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="space-y-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="text-text-secondary text-sm font-medium mb-2 block"
                        >
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
                          <p className="text-red-600 dark:text-red-400 text-sm mt-1.5">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="text-text-secondary text-sm font-medium mb-2 block"
                        >
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
                          <p className="text-red-600 dark:text-red-400 text-sm mt-1.5">{errors.email}</p>
                        )}
                      </div>

                      {/* Subject */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="text-text-secondary text-sm font-medium mb-2 block"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={inputClasses}
                        >
                          {subjectOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="text-text-secondary text-sm font-medium mb-2 block"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project..."
                          required
                          rows={5}
                          className={`${inputClasses} resize-none`}
                        />
                        {errors.message && (
                          <p className="text-red-600 dark:text-red-400 text-sm mt-1.5">{errors.message}</p>
                        )}
                      </div>

                      {/* Submit */}
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>

                  {/* Status messages */}
                  {submitStatus === 'success' && (
                    <motion.p
                      className="mt-4 text-emerald-700 dark:text-emerald-400 text-sm bg-emerald-500/10 rounded-lg px-4 py-3 border border-emerald-500/20"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.p>
                  )}

                  {submitStatus === 'error' && (
                    <motion.p
                      className="mt-4 text-red-600 dark:text-red-400 text-sm bg-red-500/10 rounded-lg px-4 py-3 border border-red-500/20"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Something went wrong. Please try again or email me directly.
                    </motion.p>
                  )}
                </div>
              </motion.div>

              {/* Right — Contact Info */}
              <motion.div
                className="lg:col-span-2"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Availability badge */}
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
                
                  Currently available for freelance work
                </div>

                {/* Email */}
                <div className="mb-6">
                  <p className="text-text-muted text-sm mb-1">Email</p>
                  <a
                    href="mailto:hello@rasidekbal.com"
                    className="inline-flex items-center gap-2 text-text-primary hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    hello@rasidekbal.com
                  </a>
                </div>

                {/* Divider */}
                <div className="border-t border-border my-6" />

                {/* Social links */}
                <div>
                  <p className="text-text-muted text-sm uppercase tracking-wider mb-4">
                    Connect
                  </p>
                  <SocialIcons showLabels={true} />
                  <p className="text-text-muted text-xs mt-3">
                    Also posting build logs and coding content on Instagram &amp; YouTube
                  </p>
                </div>

                {/* Response note */}
                <p className="text-text-muted text-xs mt-8">
                  I typically respond within 24–48 hours.
                </p>
              </motion.div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </>
  );
};

export default Contact;
