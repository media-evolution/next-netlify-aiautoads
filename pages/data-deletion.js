// pages/data-deletion.js
import React from 'react';
import Footer from '../components/Footer';

const DataDeletion = () => {
  return (
    <div className="container">

      <main>
        <div className="content">
            <h1>Data Deletion</h1>
            <p>Your privacy is important to us. If you would like to request deletion of your data, please follow the instructions below.</p>
    
            <h2>Steps to Delete Your Data</h2>
            <ol>
                <li>Email us at <a href="mailto:support@mediaevolution.agency">support@mediaevolution.agency</a> from the account associated with your data.</li>
                <li>Include the subject line: <strong>Data Deletion Request</strong>.</li>
                <li>In the email, provide your full name, registered email, and any account information relevant to your request.</li>
            </ol>

            <p>Once we receive your request, we will process it within 30 days and confirm your data deletion.</p>
        </div>
      </main>

      <Footer />
    </div>

  );
};

export default DataDeletion;