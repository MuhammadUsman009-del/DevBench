import type { Metadata } from 'next';
import Prose from '@/components/Prose';
import { generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Cookie Policy',
  description:
    'Cookie Policy for DevBench. Learn about the cookies we use and how to manage your cookie preferences.',
  path: '/cookie-policy',
  keywords: ['cookie policy', 'cookies', 'tracking', 'privacy'],
});

export default function CookiePolicyPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <Prose>
        <h1>Cookie Policy</h1>

        <p>
          <strong>Last Updated: April 2025</strong>
        </p>

        <p>
          This Cookie Policy explains what cookies are, how DevBench uses them, and your choices
          regarding cookies. For detailed information about how we handle your personal data,
          please see our{' '}
          <a href="/privacy-policy" className="text-accent hover:text-green-400">
            Privacy Policy
          </a>
          .
        </p>

        <h2>1. What Are Cookies?</h2>

        <p>
          Cookies are small data files stored on your device (computer, smartphone, tablet) when
          you visit websites. They contain text information and can be stored temporarily (session
          cookies) or for extended periods (persistent cookies). Cookies serve various functions:
        </p>

        <ul>
          <li>
            <strong>Session Management:</strong> Maintain your login status and preferences while
            browsing
          </li>
          <li>
            <strong>Personalization:</strong> Remember your choices and customize your experience
          </li>
          <li>
            <strong>Analytics:</strong> Track usage patterns to improve website functionality
          </li>
          <li>
            <strong>Advertising:</strong> Deliver targeted advertisements based on your interests
          </li>
        </ul>

        <p>
          Cookies cannot execute code, harbor viruses, or access your computer's files without
          permission. However, they can be used to track your online behavior, which raises privacy
          concerns.
        </p>

        <h2>2. Types of Cookies We Use</h2>

        <h3>2.1 Essential Cookies</h3>

        <p>
          Essential cookies are necessary for DevBench to function properly. Without these cookies,
          certain features of our Service may not work correctly.
        </p>

        <table>
          <thead>
            <tr>
              <th>Cookie Name</th>
              <th>Purpose</th>
              <th>Duration</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>__next</td>
              <td>Next.js framework functionality</td>
              <td>Session</td>
              <td>First-party</td>
            </tr>
            <tr>
              <td>__nextData</td>
              <td>Next.js data hydration</td>
              <td>Session</td>
              <td>First-party</td>
            </tr>
            <tr>
              <td>NXTAUTH</td>
              <td>Authentication state (if applicable)</td>
              <td>Session or 30 days</td>
              <td>First-party</td>
            </tr>
          </tbody>
        </table>

        <h3>2.2 Functional Cookies</h3>

        <p>
          Functional cookies enhance your experience by remembering your preferences and settings.
        </p>

        <table>
          <thead>
            <tr>
              <th>Cookie Name</th>
              <th>Purpose</th>
              <th>Duration</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>theme-preference</td>
              <td>Remember dark/light mode preference</td>
              <td>1 year</td>
              <td>First-party</td>
            </tr>
            <tr>
              <td>language-preference</td>
              <td>Remember language selection</td>
              <td>1 year</td>
              <td>First-party</td>
            </tr>
            <tr>
              <td>devbench-settings</td>
              <td>Store user preferences and settings</td>
              <td>1 year</td>
              <td>First-party</td>
            </tr>
          </tbody>
        </table>

        <h3>2.3 Analytics Cookies</h3>

        <p>
          Analytics cookies help us understand how visitors use DevBench, which allows us to
          improve functionality and user experience. These cookies do not identify you personally.
        </p>

        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Cookie Name(s)</th>
              <th>Purpose</th>
              <th>Duration</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Analytics</td>
              <td>_ga, _ga_*, _gat, _gid</td>
              <td>Track user behavior and page views</td>
              <td>2 years</td>
              <td>Third-party</td>
            </tr>
            <tr>
              <td>Vercel Analytics</td>
              <td>vercelAnalytics_*</td>
              <td>Monitor website performance</td>
              <td>30 days</td>
              <td>Third-party</td>
            </tr>
          </tbody>
        </table>

        <h3>2.4 Advertising Cookies</h3>

        <p>
          Advertising cookies are used to deliver personalized advertisements and track ad
          performance. These are set by Google AdSense and its partners.
        </p>

        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Cookie Name(s)</th>
              <th>Purpose</th>
              <th>Duration</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google AdSense/DoubleClick</td>
              <td>IDE, DSID, FLC, AID, ANID</td>
              <td>Personalize ads and track ad performance</td>
              <td>Varies (up to 2 years)</td>
              <td>Third-party</td>
            </tr>
            <tr>
              <td>Google Ads</td>
              <td>_gat_UA-*, pagead/1p-user-list/*</td>
              <td>Conversion tracking and remarketing</td>
              <td>Session to 2 years</td>
              <td>Third-party</td>
            </tr>
          </tbody>
        </table>

        <h2>3. Third-Party Cookies</h2>

        <p>
          DevBench includes third-party content and services that may set their own cookies:
        </p>

        <ul>
          <li>
            <strong>Google Services:</strong> Google Analytics, Google AdSense, and other Google
            services set cookies to track your behavior across websites
          </li>
          <li>
            <strong>Vercel Analytics:</strong> Our hosting provider Vercel sets cookies for
            performance monitoring
          </li>
          <li>
            <strong>Social Media:</strong> If we include social media widgets, they may set cookies
          </li>
        </ul>

        <p>
          We have no control over third-party cookies. Please review their privacy policies for
          more information:
        </p>

        <ul>
          <li>
            <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
              Google Cookies & Technologies
            </a>
          </li>
          <li>
            <a href="https://vercel.com/legal/privacy" target="_blank" rel="noopener noreferrer">
              Vercel Privacy Policy
            </a>
          </li>
        </ul>

        <h2>4. Cookie Management & Control</h2>

        <h3>4.1 Browser Settings</h3>

        <p>
          You can control cookies through your browser settings. Most browsers allow you to:
          refuse cookies, delete cookies, and be notified when a cookie is being set.
        </p>

        <h3>4.2 How to Manage Cookies</h3>

        <p>
          <strong>Google Chrome:</strong>
        </p>
        <ul>
          <li>Open Chrome Settings → Privacy and Security → Cookies and other site data</li>
          <li>
            Choose your preference: Allow all cookies, Block all cookies, or Manage exceptions
          </li>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Detailed Chrome Cookie Instructions
            </a>
          </li>
        </ul>

        <p>
          <strong>Mozilla Firefox:</strong>
        </p>
        <ul>
          <li>Open Firefox Settings → Privacy & Security → Cookies and Site Data</li>
          <li>
            Choose your preference: Accept all cookies, reject all cookies, or accept only
            third-party cookies
          </li>
          <li>
            <a
              href="https://support.mozilla.org/en-US/kb/cookies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Detailed Firefox Cookie Instructions
            </a>
          </li>
        </ul>

        <p>
          <strong>Apple Safari:</strong>
        </p>
        <ul>
          <li>
            Open Safari Preferences → Privacy → "Cookies and website data" section
          </li>
          <li>
            Choose: Allow cookies from websites you visit, Allow cookies only from current
            website, Block all cookies
          </li>
          <li>
            <a
              href="https://support.apple.com/en-us/105082"
              target="_blank"
              rel="noopener noreferrer"
            >
              Detailed Safari Cookie Instructions
            </a>
          </li>
        </ul>

        <p>
          <strong>Microsoft Edge:</strong>
        </p>
        <ul>
          <li>Open Edge Settings → Privacy, search, and services → Clear browsing data</li>
          <li>Select cookies and choose your privacy level</li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Detailed Edge Cookie Instructions
            </a>
          </li>
        </ul>

        <h3>4.3 Impact of Blocking Cookies</h3>

        <p>
          <strong>Important:</strong> Blocking essential cookies may prevent some DevBench
          features from working properly. However, you can usually allow essential cookies while
          blocking third-party analytics and advertising cookies:
        </p>

        <ul>
          <li>
            <strong>Essential Cookies Blocked:</strong> May cause login issues, session loss, or
            feature malfunctions
          </li>
          <li>
            <strong>Analytics Cookies Blocked:</strong> We lose data about how our Service is used,
            but functionality remains intact
          </li>
          <li>
            <strong>Advertising Cookies Blocked:</strong> You may see less relevant ads, but
            functionality is unaffected
          </li>
        </ul>

        <h2>5. Browser Extensions & Privacy Tools</h2>

        <p>
          You can also use browser extensions and privacy tools to manage cookies and tracking:
        </p>

        <ul>
          <li>
            <a href="https://www.eff.org/privacybadger" target="_blank" rel="noopener noreferrer">
              Privacy Badger
            </a>{' '}
            — Blocks trackers and third-party cookies
          </li>
          <li>
            <a href="https://www.ublock.org/" target="_blank" rel="noopener noreferrer">
              uBlock Origin
            </a>{' '}
            — Blocks ads and trackers
          </li>
          <li>
            <a
              href="https://www.ghostery.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ghostery
            </a>{' '}
            — Reveals tracking technologies
          </li>
          <li>
            <a href="https://www.eff.org/https-everywhere" target="_blank" rel="noopener noreferrer">
              HTTPS Everywhere
            </a>{' '}
            — Forces secure connections
          </li>
        </ul>

        <h2>6. Do Not Track (DNT)</h2>

        <p>
          Some browsers include a "Do Not Track" (DNT) feature. When you enable DNT, your browser
          sends a signal to websites asking them not to track you. However:
        </p>

        <ul>
          <li>DNT is not universally supported or enforced</li>
          <li>Many websites, including some third-party services used by DevBench, ignore DNT signals</li>
          <li>We respect DNT signals where technically feasible, but cannot guarantee third-party services will</li>
        </ul>

        <h2>7. Mobile App Cookies</h2>

        <p>
          If you access DevBench through a mobile app, cookies may be stored differently depending
          on your device's operating system. Mobile devices also use tracking technologies like
          Mobile Advertising IDs (IDFA, AAID) that function similarly to cookies.
        </p>

        <ul>
          <li>
            <strong>iOS:</strong> Manage app tracking in Settings → Privacy → App Tracking
            Transparency
          </li>
          <li>
            <strong>Android:</strong> Manage ad personalization in Google Settings → Ads
          </li>
        </ul>

        <h2>8. Consent & Cookie Consent Banner</h2>

        <p>
          DevBench respects your cookie preferences. Depending on your jurisdiction and our
          implementation:
        </p>

        <ul>
          <li>
            <strong>EU/GDPR:</strong> We may display a cookie consent banner asking for explicit
            consent before setting non-essential cookies
          </li>
          <li>
            <strong>CCPA:</strong> California residents have rights to opt out of certain tracking
          </li>
          <li>
            <strong>Other Regions:</strong> We may use implied consent or other mechanisms as
            permitted by local law
          </li>
        </ul>

        <h2>9. Updates to Cookie Policy</h2>

        <p>
          We may update this Cookie Policy to reflect changes in our practices, new technologies,
          or regulatory requirements. We will notify you of material changes by posting an updated
          policy on this page. Your continued use of DevBench following changes constitutes
          acceptance of the updated Cookie Policy.
        </p>

        <h2>10. Contact Us</h2>

        <p>
          If you have questions about our Cookie Policy or cookie practices, please contact us at:
        </p>

        <ul>
          <li>
            <strong>Email:</strong> privacy@devbench.dev
          </li>
          <li>
            <strong>Contact Form:</strong>{' '}
            <a href="/contact" className="text-accent hover:text-green-400">
              Get in touch
            </a>
          </li>
        </ul>

        <hr />

        <p className="text-sm text-muted">
          This Cookie Policy is effective as of April 2025. For detailed information about how we
          handle your personal data, please see our{' '}
          <a href="/privacy-policy" className="text-accent hover:text-green-400">
            Privacy Policy
          </a>
          .
        </p>
      </Prose>
    </div>
  );
}
