import type { Metadata } from 'next';
import Prose from '@/components/Prose';
import ContactForm from '@/components/ContactForm';
import { generateSEOMetadata, generateContactPageSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact DevBench',
  description:
    'Get in touch with DevBench. Report bugs, request features, or inquire about partnerships. We respond within 2-3 business days.',
  path: '/contact',
  keywords: ['contact', 'support', 'bug report', 'feature request', 'partnership'],
});

export default function ContactPage() {
  const faqs = [
    {
      question: 'How long until I get a response?',
      answer:
        'We typically respond to all inquiries within 2-3 business days. For urgent issues, please mark your message as urgent in the subject line.',
    },
    {
      question: 'Can I request a new tool?',
      answer:
        'Absolutely! We love hearing feature requests from our community. Use the contact form and select "Feature Request" as the subject. The more detail you provide about your use case, the better.',
    },
    {
      question: 'Do you offer custom development?',
      answer:
        'For custom tool development or integration services, please reach out via the contact form with "Partnership" as the subject. We\'ll discuss your requirements and explore options.',
    },
    {
      question: 'Is DevBench open source?',
      answer:
        'Yes! DevBench is built on open-source principles. Visit our GitHub repository to explore the code, report issues, and contribute improvements. We welcome pull requests from the community.',
    },
    {
      question: 'How can I report a security vulnerability?',
      answer:
        'Please do not share security vulnerabilities publicly. Instead, email security@devbench.dev with details. We take security seriously and will respond promptly to all reports.',
    },
    {
      question: 'Can I self-host DevBench?',
      answer:
        'The DevBench source code is available on GitHub, and you\'re welcome to self-host it for your own use. For enterprise deployments, contact us for support and licensing information.',
    },
  ];

  return (
    <div className="bg-dark-bg min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Prose>
          <h1>Contact DevBench</h1>

          <p>
            We'd love to hear from you! Whether you've discovered a bug, have a feature request,
            or just want to say hello, use the form below to get in touch. We typically respond
            within 2-3 business days.
          </p>

          <h2>Get In Touch</h2>
        </Prose>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto px-4 mb-12">
          <div className="border border-border bg-dark-surface2 rounded-lg p-8">
            <ContactForm />
          </div>
        </div>

        <Prose>
          <h2>Alternative Contact Methods</h2>

          <p>Prefer not to use the form? Here are other ways to reach us:</p>

          <ul>
            <li>
              <strong>Email:</strong> support@devbench.dev
            </li>
            <li>
              <strong>Bug Reports:</strong> bugs@devbench.dev or use the{' '}
              <a
                href="https://github.com/devbench/devbench/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Issues
              </a>{' '}
              page
            </li>
            <li>
              <strong>Feature Requests:</strong> features@devbench.dev
            </li>
            <li>
              <strong>Partnerships:</strong> partnerships@devbench.dev
            </li>
            <li>
              <strong>Security Issues:</strong> security@devbench.dev (please do not share
              publicly)
            </li>
          </ul>

          <h2>Frequently Asked Questions</h2>
        </Prose>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto px-4 mb-12">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="border border-border bg-dark-surface2 rounded-lg p-6 group cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-accent hover:text-green-400 transition-colors">
                  {faq.question}
                  <span className="text-lg group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted text-sm mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <Prose>
          <h2>Response Times</h2>

          <p>
            Our team is spread across multiple time zones, which allows us to provide support
            around the clock. Here's what to expect:
          </p>

          <table>
            <thead>
              <tr>
                <th>Inquiry Type</th>
                <th>Typical Response Time</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>General Questions</td>
                <td>2-3 business days</td>
                <td>Normal</td>
              </tr>
              <tr>
                <td>Bug Reports</td>
                <td>1-2 business days</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Feature Requests</td>
                <td>3-5 business days</td>
                <td>Normal</td>
              </tr>
              <tr>
                <td>Security Issues</td>
                <td>24 hours</td>
                <td>Critical</td>
              </tr>
              <tr>
                <td>Partnership Inquiries</td>
                <td>2-5 business days</td>
                <td>Normal</td>
              </tr>
            </tbody>
          </table>

          <h2>What to Include in Your Message</h2>

          <p>To help us respond faster and more effectively, please include:</p>

          <ul>
            <li>
              <strong>Clear Subject:</strong> A one-line description of your inquiry
            </li>
            <li>
              <strong>Details:</strong> Specific information about your issue or request
            </li>
            <li>
              <strong>Browser/OS:</strong> For bug reports, include your browser version and
              operating system
            </li>
            <li>
              <strong>Steps to Reproduce:</strong> For bugs, detailed steps help us fix issues
              faster
            </li>
            <li>
              <strong>Expected Behavior:</strong> What should happen vs. what actually happened
            </li>
          </ul>

          <h2>Community & Support</h2>

          <p>
            Beyond direct support, check out our growing community resources and documentation:
          </p>

          <ul>
            <li>
              <strong>GitHub Discussions:</strong> Join conversations with other developers and
              the DevBench team
            </li>
            <li>
              <strong>Blog:</strong> Read tutorials, best practices, and technical deep-dives
            </li>
            <li>
              <strong>Documentation:</strong> Explore guides for each tool and integration options
            </li>
            <li>
              <strong>Status Page:</strong> Check the current status of all DevBench services
            </li>
          </ul>

          <p>
            We're committed to making DevBench the best developer tools suite available. Your
            feedback drives our development, so please don't hesitate to reach out.
          </p>
        </Prose>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateContactPageSchema(),
        }}
      />
    </div>
  );
}
