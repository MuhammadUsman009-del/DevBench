'use client';

import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

interface FormResponse {
  success: boolean;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: 'general',
    message: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<FormResponse | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return 'Please enter a valid email';
    if (!formData.message.trim()) return 'Message is required';
    if (formData.message.length < 10) return 'Message must be at least 10 characters';
    if (formData.honeypot) return 'Form submission failed';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    const validationError = validateForm();
    if (validationError) {
      setResponse({ success: false, message: validationError });
      setLoading(false);
      return;
    }

    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
      if (!endpoint) {
        throw new Error('Contact form endpoint not configured');
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setResponse({
          success: true,
          message: 'Thank you! Your message has been sent. We typically respond within 2-3 business days.',
        });
        setFormData({ name: '', email: '', subject: 'general', message: '', honeypot: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setResponse({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'Failed to send message. Please try again or email us directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Hidden Honeypot */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-accent">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full px-4 py-2 bg-dark-bg border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent transition-colors"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-accent">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full px-4 py-2 bg-dark-bg border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent transition-colors"
          required
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-accent">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-dark-bg border border-border rounded-lg text-text focus:outline-none focus:border-accent transition-colors"
        >
          <option value="general">General Inquiry</option>
          <option value="bug">Bug Report</option>
          <option value="feature">Feature Request</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-accent">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what's on your mind..."
          rows={6}
          className="w-full px-4 py-2 bg-dark-bg border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none"
          required
        />
      </div>

      {/* Response Message */}
      {response && (
        <div
          className={`p-4 rounded-lg border ${
            response.success
              ? 'bg-green-950 border-success text-success'
              : 'bg-red-950 border-error text-error'
          }`}
        >
          {response.message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-accent text-dark-bg font-semibold rounded-lg hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-xs text-muted text-center">
        We'll respond within 2-3 business days. Your email will never be shared.
      </p>
    </form>
  );
}
