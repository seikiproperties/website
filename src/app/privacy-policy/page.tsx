import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Seiki Properties — how we collect, use, and protect your personal information.",
};

const lastUpdated = "August 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-navy text-cream pt-40 pb-16">
        <div className="container-x">
          <span className="eyebrow text-gold">Legal</span>
          <h1 className="mt-5 text-3xl md:text-4xl font-light leading-tight max-w-2xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-cream/55 text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="section bg-cream-light">
        <div className="container-x max-w-3xl prose-section">
          <div className="space-y-10 text-navy/75 text-sm leading-relaxed">

            <div>
              <h2 className="text-navy text-lg font-semibold mb-3">1. Who We Are</h2>
              <p>
                Seiki Properties (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a Dubai-based real
                estate advisory firm operating in compliance with Dubai Land
                Department (DLD) and Real Estate Regulatory Agency (RERA)
                regulations. Our website is located at{" "}
                <a
                  href="https://seikiproperties.com"
                  className="text-gold-dark underline underline-offset-2"
                >
                  seikiproperties.com
                </a>
                .
              </p>
              <p className="mt-3">
                We are committed to protecting your personal information and
                your right to privacy. This Privacy Policy explains what
                information we collect, how we use it, and what rights you have
                in relation to it.
              </p>
            </div>

            <div>
              <h2 className="text-navy text-lg font-semibold mb-3">2. Information We Collect</h2>
              <p>We collect information you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Submit an enquiry or contact form on our website</li>
                <li>Contact us via WhatsApp, phone, or email</li>
                <li>Book a consultation with our team</li>
                <li>Register interest in a property listing</li>
              </ul>
              <p className="mt-3">This information may include:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number (including country code)</li>
                <li>Investment budget and timeline preferences</li>
                <li>Any information you choose to include in your message</li>
              </ul>
              <p className="mt-3">
                We do not collect sensitive personal data such as national ID
                numbers, passport numbers, financial account details, or
                payment card information through our website.
              </p>
            </div>

            <div>
              <h2 className="text-navy text-lg font-semibold mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Respond to your enquiries and consultation requests</li>
                <li>Provide you with relevant property information and investment guidance</li>
                <li>Send you property updates and market information you have requested</li>
                <li>Improve our website and the services we offer</li>
                <li>Comply with applicable legal obligations under UAE law</li>
              </ul>
              <p className="mt-3">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-navy text-lg font-semibold mb-3">4. How We Share Your Information</h2>
              <p>
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>
                  <strong>Developer partners</strong> — only when you have
                  expressed specific interest in a project and consented to
                  being contacted about it
                </li>
                <li>
                  <strong>Service providers</strong> — including email and
                  communication tools we use to respond to your enquiries
                  (e.g. email delivery services), who are contractually
                  obligated to keep your data secure
                </li>
                <li>
                  <strong>Legal and regulatory authorities</strong> — when
                  required to do so by applicable UAE law, court order, or
                  government request
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-navy text-lg font-semibold mb-3">5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to
                fulfil the purposes outlined in this policy, unless a longer
                retention period is required or permitted by law. When your
                information is no longer needed, we will securely delete or
                anonymise it.
              </p>
            </div>

            <div>
              <h2 className="text-navy text-lg font-semibold mb-3">6. Cookies and Tracking</h2>
              <p>
                Our website may use standard web technologies including cookies
                to improve your browsing experience. These are small data files
                stored on your browser that help us understand how visitors use
                our site. You can choose to disable cookies through your browser
                settings, though some parts of the site may not function
                optimally as a result.
              </p>
              <p className="mt-3">
                We do not use cookies to track your activity across third-party
                websites or for targeted advertising.
              </p>
            </div>

            <div>
              <h2 className="text-navy text-lg font-semibold mb-3">7. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures
                to protect your personal information against unauthorised
                access, accidental loss, destruction, or disclosure. Our website
                uses HTTPS encryption for all data transmitted between your
                browser and our servers.
              </p>
              <p className="mt-3">
                While we take reasonable steps to protect your information, no
                method of transmission over the internet is completely secure.
                We cannot guarantee absolute security of data transmitted to us.
              </p>
            </div>

            <div>
              <h2 className="text-navy text-lg font-semibold mb-3">8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of any inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:contact@seikiproperties.com"
                  className="text-gold-dark underline underline-offset-2"
                >
                  contact@seikiproperties.com
                </a>
                . We will respond to your request within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-navy text-lg font-semibold mb-3">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites including
                developer project pages and listing platforms. We are not
                responsible for the privacy practices of these external sites
                and encourage you to review their privacy policies before
                providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-navy text-lg font-semibold mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we
                do, we will revise the &ldquo;Last updated&rdquo; date at the top of this
                page. We encourage you to review this policy periodically to
                stay informed about how we protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-navy text-lg font-semibold mb-3">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="mt-4 space-y-1">
                <p>
                  <strong>Seiki Properties</strong>
                </p>
                <p>Business Bay, Dubai, United Arab Emirates</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:contact@seikiproperties.com"
                    className="text-gold-dark underline underline-offset-2"
                  >
                    contact@seikiproperties.com
                  </a>
                </p>
                <p>
                  Dubai:{" "}
                  <a href="tel:+971568991112" className="text-gold-dark">
                    +971 56 899 1112
                  </a>
                </p>
                <p>
                  India:{" "}
                  <a href="tel:+919999911112" className="text-gold-dark">
                    +91 99999 11112
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
