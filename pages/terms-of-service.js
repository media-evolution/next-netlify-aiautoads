import React from 'react';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="container">
      <main>
        <div className="content">
            <h1>Terms of Service</h1>

                <p>Welcome to Media Evolution! By accessing and using our app, you agree to comply with these Terms of Service. Please read them carefully.</p>

                <h2>1. Use of Service</h2>
                <p>ME Intelligence provides ad reporting tools for small businesses. You agree to use the app in accordance with all applicable laws and not for any unlawful or unauthorized purpose.</p>

                <h2>2. User Accounts</h2>
                <p>To use certain features, you must create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.</p>

                <h2>3. Data Privacy</h2>
                <p>Our use of your data is governed by our <a href="/privacy-policy">Privacy Policy</a>. By using our app, you consent to our collection and use of your information.</p>

                <h2>4. Third-Party Integrations</h2>
                <p>The app integrates with third-party services (e.g., Google Ads, Facebook Ads). You agree to comply with their respective terms of service when using these integrations.</p>

                <h2>5. Limitation of Liability</h2>
                <p>ME Intelligence is not liable for any indirect, incidental, or consequential damages arising from your use of the app. We do not guarantee the accuracy of data provided by third-party services.</p>

                <h2>6. Termination</h2>
                <p>We reserve the right to terminate or suspend access to our service for any violation of these Terms of Service without prior notice.</p>

                <h2>7. Changes to Terms</h2>
                <p>We may update these Terms of Service from time to time. Your continued use of the app constitutes acceptance of any changes.</p>

                <h2>8. Contact Us</h2>
                <p>If you have any questions or concerns about these Terms, please contact us at <a href="mailto:support@mediaevolution.agency">support@mediaevolution.agency</a>.</p>
        </div>
      </main>

      <Footer />
    </div>

  );
};

export default TermsOfService;
