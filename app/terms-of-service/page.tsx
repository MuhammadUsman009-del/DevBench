import type { Metadata } from 'next';
import Prose from '@/components/Prose';
import { generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Terms of Service',
  description: 'Terms of Service for DevBench. Read our terms and conditions for using our online developer tools.',
  path: '/terms-of-service',
  keywords: ['terms of service', 'terms and conditions', 'user agreement'],
});

export default function TermsOfServicePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-dark-bg min-h-screen">
      <Prose>
        <h1>Terms of Service</h1>

        <p>
          <strong>Effective Date: April 2025</strong>
        </p>

        <p>
          These Terms of Service ("Terms") govern your use of DevBench (the "Service"), including
          our website and all associated tools, features, and content. By accessing and using
          DevBench, you agree to be bound by these Terms. If you do not agree with any part of
          these Terms, you may not use our Service.
        </p>

        <h2>1. Acceptance of Terms</h2>

        <p>
          By accessing, browsing, and using DevBench, you acknowledge that you have read,
          understood, and agree to be legally bound by these Terms and our{' '}
          <Link href="/privacy-policy" className="text-accent hover:text-green-400">
            Privacy Policy
          </Link>
          . If you are using DevBench on behalf of an organization, you represent and warrant that
          you have authority to bind that organization to these Terms.
        </p>

        <p>
          We reserve the right to modify these Terms at any time. Changes become effective when
          posted on this page. Your continued use of DevBench following any modifications
          constitutes your acceptance of the updated Terms. It is your responsibility to review
          these Terms periodically for changes.
        </p>

        <h2>2. Description of Service</h2>

        <p>
          DevBench provides free, online developer tools including but not limited to: JSON
          formatter, Base64 encoder/decoder, URL encoder/decoder, regular expression tester, and
          cryptographic hash generator. All processing occurs 100% in your browser using
          client-side JavaScript — no data is transmitted to our servers.
        </p>

        <p>
          We provide the Service "AS IS" without warranties of any kind, either express or
          implied. We make no guarantees regarding accuracy, availability, or fitness for a
          particular purpose.
        </p>

        <h2>3. Eligibility</h2>

        <p>
          You must be at least 13 years of age to use DevBench. If you are under 18, you
          represent that you have obtained parental or guardian consent to use this Service. By
          using DevBench, you warrant that you are of legal age in your jurisdiction and have the
          authority to enter into these Terms. If you are under 13, you may not use our Service.
        </p>

        <h2>4. User Responsibilities & Acceptable Use</h2>

        <h3>4.1 Permitted Use</h3>

        <p>You may use DevBench only for lawful purposes and in ways that do not infringe upon the rights of others or restrict their use and enjoyment of the Service. Prohibited behavior includes:</p>

        <ul>
          <li>
            <strong>Illegal Activity:</strong> Using the Service for any illegal purpose or in
            violation of any applicable law or regulation
          </li>
          <li>
            <strong>Harassment & Abuse:</strong> Transmitting threatening, abusive, defamatory,
            obscene, or otherwise objectionable material
          </li>
          <li>
            <strong>Malware & Hacking:</strong> Attempting to gain unauthorized access to our
            systems, introducing viruses, or conducting distributed denial-of-service (DDoS)
            attacks
          </li>
          <li>
            <strong>Reverse Engineering:</strong> Attempting to reverse engineer, decompile, or
            otherwise derive the source code (except where explicitly permitted)
          </li>
          <li>
            <strong>Automated Access:</strong> Using bots, scrapers, or automated tools to access
            the Service without permission
          </li>
          <li>
            <strong>Impersonation:</strong> Misrepresenting yourself or pretending to be someone
            else
          </li>
          <li>
            <strong>Spam:</strong> Transmitting unsolicited or bulk messages
          </li>
          <li>
            <strong>Resale:</strong> Reselling access to DevBench without authorization
          </li>
        </ul>

        <h3>4.2 Your Input Data</h3>

        <p>
          You are solely responsible for any data you input into DevBench. Do not input or share:
          personal identification numbers, financial account information, or other sensitive
          personal data unless absolutely necessary. While our tools process data locally in your
          browser, you remain responsible for the security and confidentiality of your own data.
        </p>

        <h2>5. Intellectual Property</h2>

        <h3>5.1 DevBench Intellectual Property</h3>

        <p>
          The DevBench Service, including all content, features, functionality, text, graphics,
          logos, icons, images, audio, video, and code, is owned by DevBench or its licensors and
          is protected by copyright, trademark, and other intellectual property laws. You may not
          reproduce, distribute, transmit, display, or modify any content without our express
          written permission.
        </p>

        <h3>5.2 Open Source</h3>

        <p>
          DevBench uses open-source software and is available under an open-source license on
          GitHub. See our GitHub repository for specific license terms. Where applicable, the
          terms of the open-source license supersede these Terms.
        </p>

        <h3>5.3 Your Data Ownership</h3>

        <p>
          You retain all intellectual property rights to any data or content you input into
          DevBench. By using our tools, you do not grant us any rights to your input data. We do
          not claim ownership of, nor do we monitor or control, any data you enter into our tools.
        </p>

        <h2>6. User-Generated Content</h2>

        <p>
          DevBench processes but does not store user-generated content. Any text, JSON, files,
          regular expressions, or other data you input into our tools remains entirely on your
          device. We have no access to, control over, or ability to store this information. Once
          you close your browser or navigate away from our tools, your input is discarded from
          memory and is not retained on our servers.
        </p>

        <h2>7. Disclaimers</h2>

        <h3>7.1 "AS IS" Disclaimer</h3>

        <p>
          DEVBENCH IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY
          KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO
          WARRANTY THAT:
        </p>

        <ul>
          <li>The Service will meet your requirements</li>
          <li>The Service will be uninterrupted, timely, secure, or error-free</li>
          <li>Any defects in the Service will be corrected</li>
          <li>The results obtained from using the Service will be accurate or reliable</li>
        </ul>

        <h3>7.2 No Professional Advice</h3>

        <p>
          DevBench is not a substitute for professional security advice, cryptographic audits,
          legal advice, or other professional services. If you require professional advice, please
          consult a qualified expert in the relevant field. We assume no liability for decisions
          made based on information provided by DevBench.
        </p>

        <h3>7.3 Accuracy of Tools</h3>

        <p>
          While we strive to provide accurate tools, we cannot guarantee perfect accuracy. For
          critical operations (especially cryptographic hashing, security decisions, or legal
          compliance), we recommend independently verifying results using trusted third-party
          tools.
        </p>

        <h2>8. Limitation of Liability</h2>

        <p>
          <strong>
            TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL DEVBENCH, ITS OFFICERS,
            DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT
            LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE
            LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE, EVEN IF
            DEVBENCH HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </strong>
        </p>

        <p>
          Our total liability to you for any and all claims arising out of or relating to these
          Terms or your use of the Service shall not exceed $100 USD.
        </p>

        <p>
          Some jurisdictions do not allow the limitation or exclusion of certain damages, so these
          limitations may not apply to you.
        </p>

        <h2>9. Indemnification</h2>

        <p>
          You agree to indemnify, defend, and hold harmless DevBench and its officers, directors,
          employees, agents, and licensors from and against any and all claims, damages, losses,
          costs, and expenses (including reasonable attorneys' fees) arising out of or in
          connection with:
        </p>

        <ul>
          <li>Your use of the Service in violation of these Terms</li>
          <li>Your violation of any applicable law or regulation</li>
          <li>Your infringement of any third-party intellectual property rights</li>
          <li>Any disputes arising from your use of the Service</li>
        </ul>

        <h2>10. Third-Party Links</h2>

        <p>
          DevBench may contain links to third-party websites and services that we do not operate
          or control. We are not responsible for the content, accuracy, legality, or any other
          aspect of third-party sites. Your access to and use of third-party sites is at your own
          risk and subject to their terms and conditions. We recommend reviewing their privacy
          policies and terms before using their services.
        </p>

        <h2>11. Modifications to Service</h2>

        <p>
          We reserve the right to modify, suspend, or discontinue DevBench or any part of it at
          any time with or without notice. We shall not be liable to you or any third party for
          any such modification, suspension, or discontinuance. We may also impose limits on
          certain features or restrict your access to parts of the Service without liability.
        </p>

        <h2>12. Termination</h2>

        <p>
          We reserve the right to terminate or suspend your access to DevBench at any time, for
          any reason, without notice or liability. This includes violations of these Terms,
          illegal activity, or any other conduct we deem inappropriate.
        </p>

        <p>
          Upon termination, all rights and privileges granted to you immediately cease, and you
          must delete any cached or downloaded portions of the Service.
        </p>

        <h2>13. Governing Law</h2>

        <p>
          These Terms shall be governed by and construed in accordance with the laws of the United
          States of America, without regard to its conflict of law principles. Any legal action or
          proceeding arising under these Terms shall be brought exclusively in the federal or state
          courts located in the United States, and you consent to the jurisdiction and venue of
          such courts.
        </p>

        <h2>14. Dispute Resolution</h2>

        <h3>14.1 Informal Resolution</h3>

        <p>
          Before initiating formal legal proceedings, we encourage you to contact us at{' '}
          <Link href="/contact" className="text-accent hover:text-green-400">
            our contact page
          </Link>{' '}
          to attempt to resolve any disputes informally.
        </p>

        <h3>14.2 Binding Arbitration</h3>

        <p>
          Any dispute, claim, or controversy arising out of or relating to these Terms or your use
          of DevBench shall be resolved by binding arbitration administered by the American
          Arbitration Association (AAA) under its Commercial Arbitration Rules. The arbitration
          shall be conducted in the English language in the United States.
        </p>

        <p>
          <strong>Exception to Arbitration:</strong> Notwithstanding the above, either party may
          seek injunctive or other equitable relief in any court of competent jurisdiction to
          prevent irreparable harm.
        </p>

        <h2>15. Severability</h2>

        <p>
          If any provision of these Terms is found to be invalid, illegal, or unenforceable by a
          court of competent jurisdiction, such provision shall be severed, and the remaining
          provisions shall continue in full force and effect. The severed provision shall be
          modified to the minimum extent necessary to make it valid and enforceable.
        </p>

        <h2>16. Entire Agreement</h2>

        <p>
          These Terms, together with our{' '}
          <Link href="/privacy-policy" className="text-accent hover:text-green-400">
            Privacy Policy
          </Link>
          ,{' '}
          <Link href="/disclaimer" className="text-accent hover:text-green-400">
            Disclaimer
          </Link>
          , and{' '}
          <Link href="/cookie-policy" className="text-accent hover:text-green-400">
            Cookie Policy
          </Link>
          , constitute the entire agreement between you and DevBench and supersede all prior or
          contemporaneous communications, representations, or agreements, whether written or oral.
        </p>

        <h2>17. Waiver</h2>

        <p>
          Our failure to enforce any right or provision of these Terms shall not constitute a
          waiver of such right or provision. Any waiver must be in writing and signed by an
          authorized representative of DevBench.
        </p>

        <h2>18. Contact Information</h2>

        <p>If you have questions about these Terms of Service, please contact us at:</p>

        <ul>
          <li>
            <strong>Email:</strong> legal@devbench.dev
          </li>
          <li>
            <strong>General Support:</strong>{' '}
            <Link href="/contact" className="text-accent hover:text-green-400">
              Contact Form
            </Link>
          </li>
        </ul>

        <hr />

        <p className="text-sm text-muted">
          © {currentYear} DevBench. All rights reserved. Last updated: April 2025.
        </p>
      </Prose>
    </div>
  );
}
