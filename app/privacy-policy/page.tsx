import type { Metadata } from 'next';
import Prose from '@/components/Prose';
import { generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy Policy for DevBench. Learn how we collect, use, and protect your data. Your privacy is our priority.',
  path: '/privacy-policy',
  keywords: ['privacy policy', 'data protection', 'GDPR', 'CCPA'],
});

export default function PrivacyPolicyPage() {
  const currentDate = new Date();
  const lastUpdated = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <div className="bg-dark-bg min-h-screen">
      <Prose>
        <h1>Privacy Policy</h1>

        <p>
          <strong>Last Updated: {lastUpdated}</strong>
        </p>

        <p>
          DevBench ("we," "us," "our," or "Company") respects your privacy and is committed to
          protecting it through our compliance with this policy. This Privacy Policy explains our
          data practices and your rights regarding information we collect through our website at
          devbench.vercel.app (the "Service").
        </p>

        <p>
          <strong>Important:</strong> DevBench is designed with privacy at its core. All tool
          processing happens 100% in your browser using client-side JavaScript. Your inputs to
          our tools (JSON, text, files, etc.) are never sent to our servers or any third-party
          service.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>1.1 Information You Provide Directly</h3>

        <p>We only collect information that you voluntarily provide to us:</p>

        <ul>
          <li>
            <strong>Contact Form Data:</strong> When you submit our contact form, we collect your
            name, email address, subject, and message. This information is used solely to respond
            to your inquiry.
          </li>
          <li>
            <strong>Email Communications:</strong> If you email us directly, we collect your email
            address and the content of your message.
          </li>
          <li>
            <strong>User Support Requests:</strong> Information you provide when reporting bugs or
            requesting features.
          </li>
        </ul>

        <h3>1.2 Information Collected Automatically</h3>

        <p>When you use our Service, we may collect certain information automatically:</p>

        <ul>
          <li>
            <strong>IP Address & Device Information:</strong> Standard web server logs collect your
            IP address, browser type, operating system, device type, and general location data
            (country/region level).
          </li>
          <li>
            <strong>Website Analytics:</strong> We use analytics tools (Vercel Analytics) to
            understand how users interact with our Service. This includes page views, referrer
            sources, and usage patterns — but never the actual data you input into our tools.
          </li>
          <li>
            <strong>Cookies:</strong> We use minimal cookies for essential functionality. See
            Section 3 for details.
          </li>
        </ul>

        <h3>1.3 Data We Do NOT Collect</h3>

        <p>
          <strong>Critical Note:</strong> We never collect or store the actual inputs you provide
          to our tools:
        </p>

        <ul>
          <li>JSON you format or validate</li>
          <li>Text you encode or decode</li>
          <li>Regular expressions you test</li>
          <li>Hashes you generate</li>
          <li>Files you upload</li>
          <li>Any other user input to our tools</li>
        </ul>

        <p>
          All data processing happens locally in your browser. We cannot access, view, store, or
          analyze any of this information. You can verify this by opening your browser's Network
          tab — you'll see no POST requests containing your tool inputs.
        </p>

        <h2>2. How We Use Your Information</h2>

        <p>We use the information we collect for limited purposes:</p>

        <ul>
          <li>
            <strong>Service Delivery:</strong> To provide, maintain, and improve our Service
          </li>
          <li>
            <strong>Communication:</strong> To respond to your inquiries, provide support, and
            send service-related announcements
          </li>
          <li>
            <strong>Analytics & Improvement:</strong> To understand how our Service is used,
            identify issues, and optimize performance
          </li>
          <li>
            <strong>Legal Compliance:</strong> To comply with applicable laws and regulations
          </li>
          <li>
            <strong>Fraud Prevention:</strong> To detect and prevent fraudulent or malicious
            activity
          </li>
        </ul>

        <p>
          <strong>We do not:</strong> Use your information for targeted advertising (beyond
          general Google AdSense), sell your data to third parties, or use automated
          decision-making systems on your data.
        </p>

        <h2>3. Cookies and Tracking Technologies</h2>

        <h3>3.1 Types of Cookies We Use</h3>

        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Purpose</th>
              <th>Duration</th>
              <th>Essential?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Session Cookies</td>
              <td>Maintain your session while browsing</td>
              <td>Expires when you close browser</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Analytics Cookies</td>
              <td>Track aggregated usage patterns</td>
              <td>Up to 30 days</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Preference Cookies</td>
              <td>Remember your theme/language settings</td>
              <td>Up to 1 year</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Third-Party Cookies</td>
              <td>Google AdSense advertising</td>
              <td>Varies</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>

        <h3>3.2 Third-Party Tracking</h3>

        <p>Our Service includes third-party tracking technologies:</p>

        <ul>
          <li>
            <strong>Google Analytics:</strong> Helps us understand user behavior and service
            performance
          </li>
          <li>
            <strong>Vercel Analytics:</strong> Infrastructure provider analytics
          </li>
          <li>
            <strong>Google AdSense:</strong> Displays advertisements and uses cookies for ad
            personalization
          </li>
        </ul>

        <h3>3.3 Managing Cookies</h3>

        <p>You can control cookies through your browser settings:</p>

        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chrome: Cookie settings
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/en-US/kb/cookies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Firefox: Cookie management
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/en-us/105082"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari: Privacy settings
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Edge: Cookie management
            </a>
          </li>
        </ul>

        <h2>4. Third-Party Services</h2>

        <p>Our Service uses the following third-party providers:</p>

        <h3>4.1 Google AdSense</h3>

        <p>
          We use Google AdSense to display advertisements on our Service. Google may collect
          information about your browsing behavior and use cookies to serve personalized ads.
        </p>

        <ul>
          <li>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Preferences: Opt out of personalized advertising
            </a>
          </li>
        </ul>

        <h3>4.2 Google Analytics</h3>

        <p>
          We use Google Analytics to analyze how users interact with our Service. Google Analytics
          does not collect information about the content you submit to our tools.
        </p>

        <ul>
          <li>
            <a
              href="https://marketingplatform.google.com/about/analytics/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-Out Browser Add-on
            </a>
          </li>
        </ul>

        <h3>4.3 Vercel Analytics</h3>

        <p>
          Our Service is hosted on Vercel, which collects analytics about Service performance and
          usage.
        </p>

        <ul>
          <li>
            <a href="https://vercel.com/legal/privacy" target="_blank" rel="noopener noreferrer">
              Vercel Privacy Policy
            </a>
          </li>
        </ul>

        <h3>4.4 Contact Form Services</h3>

        <p>
          Contact form submissions may be processed through Formspree or Web3Forms to ensure
          reliable email delivery.
        </p>

        <ul>
          <li>
            <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
              Formspree Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://www.web3forms.com/privacy-policy" target="_blank" rel="noopener noreferrer">
              Web3Forms Privacy Policy
            </a>
          </li>
        </ul>

        <h2>5. Google AdSense & Advertising Disclosure</h2>

        <p>
          DevBench displays advertisements through Google AdSense to help sustain our free,
          ad-supported model. Here's important information about advertising on our Service:
        </p>

        <ul>
          <li>
            <strong>DoubleClick Cookie:</strong> Google uses the DoubleClick cookie to serve ads
            across the internet
          </li>
          <li>
            <strong>Personalized Ads:</strong> Google may serve personalized ads based on your
            browsing history
          </li>
          <li>
            <strong>Ad Choices:</strong> You can opt out of personalized advertising through{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google Ad Settings
            </a>
          </li>
          <li>
            <strong>Network Advertising Initiative:</strong> Learn more at{' '}
            <a href="http://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer">
              NAI Opt-Out
            </a>
          </li>
        </ul>

        <h2>6. Data Sharing & Disclosure</h2>

        <p>
          We do not share, sell, or lease your personal information to third parties except as
          follows:
        </p>

        <ul>
          <li>
            <strong>Service Providers:</strong> We share information with trusted third-party
            service providers (hosting, analytics, email) who process data on our behalf under
            confidentiality agreements
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose information if required by law or
            when necessary to protect our rights, privacy, safety, or property
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of
            assets, your information may be transferred as part of that transaction
          </li>
        </ul>

        <h2>7. Data Retention</h2>

        <p>We retain information for as long as necessary to fulfill the purposes outlined above:</p>

        <ul>
          <li>
            <strong>Contact Form Data:</strong> Retained for 90 days after our last communication,
            unless you request deletion
          </li>
          <li>
            <strong>Analytics Data:</strong> Retained for up to 26 months
          </li>
          <li>
            <strong>Cookies:</strong> See Section 3 for cookie retention periods
          </li>
          <li>
            <strong>Email Communications:</strong> Retained indefinitely unless you request
            deletion
          </li>
        </ul>

        <h2>8. Your Privacy Rights</h2>

        <h3>8.1 General Rights</h3>

        <p>You have the right to:</p>

        <ul>
          <li><strong>Access:</strong> Request a copy of the information we hold about you</li>
          <li><strong>Correction:</strong> Request that we correct inaccurate information</li>
          <li><strong>Deletion:</strong> Request that we delete your information</li>
          <li>
            <strong>Opt-Out:</strong> Opt out of marketing communications and non-essential
            cookies
          </li>
        </ul>

        <h3>8.2 GDPR Rights (European Union)</h3>

        <p>
          If you are in the EU, you have additional rights under the General Data Protection
          Regulation (GDPR):
        </p>

        <ul>
          <li><strong>Right to Access:</strong> Request your personal data</li>
          <li>
            <strong>Right to Rectification:</strong> Correct inaccurate data
          </li>
          <li>
            <strong>Right to Erasure:</strong> Request deletion ("Right to be Forgotten")
          </li>
          <li>
            <strong>Right to Restrict Processing:</strong> Limit how we use your data
          </li>
          <li>
            <strong>Right to Data Portability:</strong> Receive your data in a portable format
          </li>
          <li>
            <strong>Right to Object:</strong> Object to certain types of processing
          </li>
          <li>
            <strong>Right to Lodge a Complaint:</strong> File a complaint with your local data
            protection authority
          </li>
        </ul>

        <h3>8.3 CCPA Rights (California)</h3>

        <p>
          If you are a California resident, you have rights under the California Consumer Privacy
          Act (CCPA):
        </p>

        <ul>
          <li>
            <strong>Right to Know:</strong> Request the specific personal information we collect
          </li>
          <li>
            <strong>Right to Delete:</strong> Request deletion of personal information
          </li>
          <li>
            <strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of personal
            information
          </li>
          <li>
            <strong>Right to Correct:</strong> Request correction of inaccurate information
          </li>
        </ul>

        <h3>8.4 How to Exercise Your Rights</h3>

        <p>
          To exercise any of these rights, please contact us at privacy@devbench.dev with your
          request. We will respond within 30 days (or as otherwise required by law).
        </p>

        <h2>9. Children's Privacy</h2>

        <p>
          Our Service is not intended for children under 13 years of age, and we do not knowingly
          collect personal information from children under 13. If we become aware that we have
          collected information from a child under 13, we will take steps to delete such
          information promptly. If you believe a child under 13 has provided us with information,
          please contact us immediately at privacy@devbench.dev.
        </p>

        <h2>10. International Data Transfers</h2>

        <p>
          Our Service is hosted in the United States. If you are accessing our Service from
          outside the US, your information may be transferred to, stored in, and processed in the
          US, where data protection laws may differ from your home country. By using our Service,
          you consent to the transfer of your information to the US and its processing as
          described in this policy.
        </p>

        <h2>11. Security Measures</h2>

        <p>
          We implement industry-standard security measures to protect your information from
          unauthorized access, alteration, disclosure, or destruction:
        </p>

        <ul>
          <li>HTTPS encryption for all data in transit</li>
          <li>Secure hosting on Vercel's infrastructure</li>
          <li>Limited access to personal data by authorized personnel only</li>
          <li>Regular security assessments and updates</li>
          <li>100% client-side processing for tool inputs (never transmitted)</li>
        </ul>

        <p>
          <strong>Important:</strong> While we strive to protect your information, no security
          system is impenetrable. We cannot guarantee absolute security. If you become aware of a
          security vulnerability, please contact us immediately at security@devbench.dev.
        </p>

        <h2>12. Changes to This Privacy Policy</h2>

        <p>
          We may update this Privacy Policy periodically to reflect changes in our practices or
          applicable law. We will notify you of any material changes by posting the new policy on
          this page and updating the "Last Updated" date above. Continued use of our Service after
          changes become effective constitutes your acceptance of the updated Privacy Policy.
        </p>

        <h2>13. Contact Us</h2>

        <p>If you have questions about this Privacy Policy or our privacy practices, please contact:</p>

        <ul>
          <li>
            <strong>Email:</strong> privacy@devbench.dev
          </li>
          <li>
            <strong>General Support:</strong>{' '}
            <Link href="/contact" className="text-accent hover:text-green-400">
              Contact Form
            </Link>
          </li>
          <li>
            <strong>Mailing Address:</strong> [Your Address]
          </li>
        </ul>

        <p>
          We will respond to all privacy inquiries within 30 days. If you are not satisfied with
          our response, you may have the right to lodge a complaint with your local data
          protection authority.
        </p>

        <hr />

        <p className="text-sm text-muted">
          This Privacy Policy is provided in English. If you are accessing from a non-English
          speaking country, your local laws may provide you with additional rights not outlined
          here. Please contact us for clarification.
        </p>
      </Prose>
    </div>
  );
}
