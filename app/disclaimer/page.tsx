import type { Metadata } from 'next';
import Prose from '@/components/Prose';
import { generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Disclaimer',
  description:
    'Legal disclaimer for DevBench. Read important disclaimers regarding tool accuracy, professional advice, and liability limitations.',
  path: '/disclaimer',
  keywords: ['disclaimer', 'legal notice', 'no warranty'],
});

export default function DisclaimerPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <Prose>
        <h1>Disclaimer</h1>

        <p>
          <strong>IMPORTANT:</strong> Please read this disclaimer carefully before using DevBench.
          By accessing and using our website and tools, you acknowledge that you have read,
          understood, and agree to be bound by this disclaimer.
        </p>

        <h2>1. General Disclaimer</h2>

        <p>
          DevBench provides free online developer tools "AS IS" without any warranties, guarantees,
          or representations of any kind, either express or implied. The information, tools, and
          content provided by DevBench are provided for informational and educational purposes
          only. We do not warrant that:
        </p>

        <ul>
          <li>The tools will function without errors or interruptions</li>
          <li>The tools will produce accurate results in all circumstances</li>
          <li>The tools will meet your specific requirements or expectations</li>
          <li>Any defects or errors will be corrected or fixed</li>
          <li>The tools are safe from viruses, malware, or other harmful code</li>
          <li>Your use of the tools will be uninterrupted or secure</li>
        </ul>

        <p>
          <strong>You assume all risk and responsibility</strong> for the use of DevBench and its
          tools. In no event shall DevBench, its developers, operators, or affiliates be liable for
          any direct, indirect, incidental, special, or consequential damages arising from your use
          of the Service.
        </p>

        <h2>2. No Professional Advice</h2>

        <p>
          <strong>Critical:</strong> The tools and content provided by DevBench do NOT constitute
          professional advice of any kind. Specifically:
        </p>

        <ul>
          <li>
            <strong>Not Security Advice:</strong> DevBench tools are not a substitute for
            professional security consulting, penetration testing, or security audits. If you need
            professional security analysis, consult a qualified cybersecurity expert.
          </li>
          <li>
            <strong>Not Cryptographic Audit:</strong> Our hash generators and cryptographic tools
            are provided for educational and development purposes only. They are not substitutes
            for professional cryptographic audits or security assessments.
          </li>
          <li>
            <strong>Not Legal Advice:</strong> Nothing in DevBench constitutes legal advice. For
            legal matters, consult a qualified attorney licensed in your jurisdiction.
          </li>
          <li>
            <strong>Not Financial Advice:</strong> DevBench does not provide financial, investment,
            or tax advice. Consult a qualified financial advisor for such matters.
          </li>
          <li>
            <strong>Not Medical Advice:</strong> DevBench does not provide medical advice. Consult
            a qualified healthcare provider for medical concerns.
          </li>
        </ul>

        <p>
          You are solely responsible for evaluating the appropriateness and risks of using DevBench
          for your specific circumstances. We recommend consulting appropriate professionals before
          making important decisions based on information obtained from our tools.
        </p>

        <h2>3. Accuracy Disclaimer</h2>

        <p>
          While we strive to provide accurate tools and information, we make no guarantee regarding
          the accuracy, completeness, correctness, or reliability of any results produced by
          DevBench. Errors, bugs, and inaccuracies may occur.
        </p>

        <ul>
          <li>
            <strong>Hash Functions:</strong> For critical cryptographic operations, we strongly
            recommend independently verifying hash results using trusted, audited implementations
            from established security libraries (e.g., OpenSSL, Go crypto, Rust ring).
          </li>
          <li>
            <strong>JSON Validation:</strong> While our JSON formatter validates basic JSON
            structure, complex edge cases may not be handled correctly. Use dedicated JSON
            validators for critical applications.
          </li>
          <li>
            <strong>Regex Patterns:</strong> Regular expression behavior varies across
            implementations. Test patterns thoroughly in your specific environment.
          </li>
          <li>
            <strong>Encoding/Decoding:</strong> While our encoders follow standard specifications,
            edge cases and special characters may behave unexpectedly in different contexts.
          </li>
        </ul>

        <p>
          <strong>For critical applications involving security, compliance, or data integrity,
          always verify DevBench results independently.</strong>
        </p>

        <h2>4. External Links Disclaimer</h2>

        <p>
          DevBench may contain links to external websites and third-party resources. We do not
          endorse, sponsor, or assume any responsibility for the content, accuracy, legality,
          appropriateness, or any other aspect of external sites. Your access to external sites is
          at your own risk and subject to their terms and conditions.
        </p>

        <ul>
          <li>We are not responsible for any loss or damage caused by reliance on external content</li>
          <li>
            External links are provided for convenience and do not imply affiliation or endorsement
          </li>
          <li>We do not control the policies, practices, or content of external sites</li>
          <li>
            The presence of a link does not constitute recommendation or approval of the external
            site
          </li>
        </ul>

        <h2>5. Affiliate & Advertising Disclosure</h2>

        <h3>5.1 Advertising</h3>

        <p>
          DevBench displays advertisements through Google AdSense to support the free availability
          of our tools. Some ads may be personalized based on your browsing behavior.
        </p>

        <ul>
          <li>
            <strong>Ad Network Disclosure:</strong> We use Google AdSense, which may use cookies
            and other tracking technologies to serve advertisements. See Google's policies at{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
          </li>
          <li>
            <strong>No Endorsement:</strong> Advertisements displayed on DevBench do not constitute
            endorsement of advertised products or services
          </li>
          <li>
            <strong>Your Responsibility:</strong> You are solely responsible for evaluating
            advertised products and services. We assume no liability for your interactions with
            advertisers
          </li>
        </ul>

        <h3>5.2 Affiliate Programs</h3>

        <p>
          DevBench may participate in affiliate marketing programs. If we do so, we will clearly
          disclose affiliate relationships. We receive no commission based on your use of our free
          tools.
        </p>

        <h2>6. Errors and Omissions</h2>

        <p>
          Despite our efforts to ensure accuracy, DevBench may contain errors, omissions, or
          inaccuracies in:
        </p>

        <ul>
          <li>Tool functionality or output</li>
          <li>Content and informational materials</li>
          <li>Documentation and guides</li>
          <li>Feature descriptions</li>
        </ul>

        <p>
          We do not assume responsibility for correcting these errors, nor do we warrant that any
          errors will be corrected in a timely manner. Please report errors to{' '}
          <Link href="/contact" className="text-accent hover:text-green-400">
            our contact page
          </Link>{' '}
          so we can address them.
        </p>

        <h2>7. No Warranty for Tool Availability</h2>

        <p>
          We do not guarantee that DevBench will be continuously available, error-free, or
          uninterrupted. We may temporarily or permanently remove tools, features, or the entire
          Service without notice.
        </p>

        <ul>
          <li>
            <strong>Scheduled Maintenance:</strong> We may take the Service offline for maintenance
            or updates
          </li>
          <li>
            <strong>Emergencies:</strong> We may suspend the Service in response to security
            threats or technical emergencies
          </li>
          <li>
            <strong>Discontinuation:</strong> We may discontinue any tool or the entire Service at
            any time
          </li>
        </ul>

        <p>
          We are not liable for any loss or damage resulting from interruptions in Service
          availability.
        </p>

        <h2>8. Data Loss Disclaimer</h2>

        <p>
          DevBench tools process all data locally in your browser. We do not store, backup, or
          retain any user input data. If you accidentally close your browser or navigate away
          without saving your work, all data will be permanently lost.
        </p>

        <ul>
          <li>
            <strong>Your Responsibility:</strong> You are responsible for maintaining backups of
            any important data you process through DevBench
          </li>
          <li>
            <strong>No Data Recovery:</strong> We cannot recover lost data after session termination
          </li>
          <li>
            <strong>No Liability:</strong> We assume no liability for data loss resulting from your
            use of our tools
          </li>
        </ul>

        <h2>9. Browser Compatibility Disclaimer</h2>

        <p>
          DevBench is designed to work with modern browsers that support ES6, Web Crypto API, and
          other modern JavaScript features. Older or unsupported browsers may not function properly.
        </p>

        <ul>
          <li>We recommend using the latest version of Chrome, Firefox, Safari, or Edge</li>
          <li>
            We make no warranty regarding compatibility with older, outdated, or unsupported
            browsers
          </li>
          <li>
            Browser-specific bugs or compatibility issues are not our responsibility but rather
            that of the browser vendor
          </li>
        </ul>

        <h2>10. Third-Party Content Disclaimer</h2>

        <p>
          DevBench may include content from third parties, including open-source libraries,
          documentation, and educational materials. We do not assume responsibility for third-party
          content.
        </p>

        <ul>
          <li>
            <strong>Open Source:</strong> Third-party libraries are licensed under their respective
            licenses
          </li>
          <li>
            <strong>External Resources:</strong> Referenced external documentation may be outdated
            or incorrect
          </li>
          <li>
            <strong>No Endorsement:</strong> Inclusion of third-party content does not constitute
            endorsement
          </li>
        </ul>

        <h2>11. Fair Use Statement</h2>

        <p>
          DevBench respects the intellectual property rights of others and complies with the
          Digital Millennium Copyright Act (DMCA) and other applicable copyright laws.
        </p>

        <ul>
          <li>
            <strong>DMCA Compliance:</strong> If you believe that content on DevBench infringes
            your copyright, please contact us with a DMCA takedown notice
          </li>
          <li>
            <strong>Fair Use:</strong> We believe our use of third-party content falls under fair
            use doctrine for educational, transformative, and non-commercial purposes
          </li>
          <li>
            <strong>Attribution:</strong> We attempt to properly attribute all third-party content
            used in DevBench
          </li>
        </ul>

        <h2>12. Performance Disclaimer</h2>

        <p>
          DevBench performance depends on your device's capabilities, browser implementation, and
          network connectivity (for initial page load). We make no guarantees regarding tool speed
          or performance.
        </p>

        <ul>
          <li>Large file processing may be slow or crash depending on your device's RAM</li>
          <li>Browser implementation differences may affect tool functionality or speed</li>
          <li>Some operations may timeout on older or lower-powered devices</li>
        </ul>

        <h2>13. Limitation of Liability</h2>

        <p>
          <strong>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, DEVBENCH SHALL NOT BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES
            INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR
            OTHER INTANGIBLE LOSSES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </strong>
        </p>

        <p>
          Our total liability for all claims arising from your use of DevBench shall not exceed
          $100 USD.
        </p>

        <h2>14. Changes to Disclaimer</h2>

        <p>
          We reserve the right to modify this disclaimer at any time. Changes become effective when
          posted. Your continued use of DevBench constitutes acceptance of any modified disclaimer.
        </p>

        <h2>15. Acknowledgment</h2>

        <p>
          By using DevBench, you acknowledge that you have read and understood this disclaimer in
          its entirety and that you assume all risks associated with your use of our Service.
        </p>

        <h2>Contact Us</h2>

        <p>
          If you have questions about this disclaimer, please{' '}
          <Link href="/contact" className="text-accent hover:text-green-400">
            contact us
          </Link>{' '}
          or email legal@devbench.dev.
        </p>

        <hr />

        <p className="text-sm text-muted">
          This disclaimer is effective as of April 2025 and may be updated at any time without
          notice.
        </p>
      </Prose>
    </div>
  );
}
