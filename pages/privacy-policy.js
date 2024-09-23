// pages/privacy-policy.js
import React from 'react';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="container">

      <main>
        <div className="content">
            <h1>Privacy Policy</h1>

            <p>At Media Evolution, we prioritize your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when using our app.</p>

            <h2>Information We Collect</h2>
            <ul>
            <li><strong>User Data:</strong> Includes name, email address, and ad account details for authentication purposes.</li>
            <li><strong>Advertising Data:</strong> We access ad performance metrics (e.g., impressions, clicks) to generate reports.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our app to improve functionality.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul>
            <li>Authenticate access to advertising platforms (Google, Meta, etc.)</li>
            <li>Provide reports on advertising performance.</li>
            <li>Enhance user experience and optimize app features.</li>
            </ul>

            <h2>Data Sharing</h2>
            <p>We do not share or sell your personal data. We may share your data only to comply with legal obligations or protect our rights.</p>

            <h2>Security</h2>
            <p>We use encryption and other security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>

            <h2>Third-Party Services</h2>
            <p>Our app integrates with third-party APIs (Google Ads, Facebook Ads). These services may have their own privacy policies governing the use of your data.</p>

            <h2>Your Rights</h2>
            <p>You may request to view, modify, or delete your personal information by contacting us.</p>

            <h2>Contact Us</h2>
            <p>If you have questions regarding this Privacy Policy, please contact us at <a href="mailto:support@mediaevolution.agency">support@mediaevolution.agency</a>.</p>
        </div>
      </main>

      <Footer />
    </div>

  );
};

export default TermsOfService;