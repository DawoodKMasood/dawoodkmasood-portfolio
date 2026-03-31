import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import mobileApps from '../data/mobile-apps.json';

const PrivacyPolicy = ({ pageContext }) => {
  const { appId } = pageContext;
  const app = mobileApps.find((a) => a.id === appId);

  if (!app) {
    return (
      <Layout>
        <div className="container" style={{ padding: '100px 24px', textAlign: 'center' }}>
          <h1 style={{ color: '#112D4E', marginBottom: '16px' }}>App Not Found</h1>
          <Link to="/mobile-apps/" className="btn">Back to Mobile Apps</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section style={styles.hero}>
        <div className="container">
          <Link to={`/mobile-apps/${app.id}/`} style={styles.backLink}>
            ← Back to {app.name}
          </Link>
          <h1 style={styles.title}>Privacy Policy</h1>
          <p style={styles.appName}>{app.name}</p>
          <p style={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section style={styles.content}>
        <div className="container">
          <div className="card" style={styles.policyCard}>
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>1. Introduction</h2>
              <p style={styles.paragraph}>
                Welcome to {app.name}. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
              </p>
              <p style={styles.paragraph}>
                Please read this privacy policy carefully. By using the app, you acknowledge that you have read and understood this policy and agree to be bound by it. If you do not agree with the terms of this privacy policy, please do not use the app.
              </p>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>2. Information Collection</h2>
              <p style={styles.paragraph}>
                We may collect the following types of information:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <strong>Personal Data:</strong> Name, email address, and other contact information you provide when creating an account or contacting us.
                </li>
                <li style={styles.listItem}>
                  <strong>Usage Data:</strong> Information about how you interact with the app, including features used, time spent, and navigation patterns.
                </li>
                <li style={styles.listItem}>
                  <strong>Device Information:</strong> Device type, operating system, unique device identifiers, and mobile network information.
                </li>
                <li style={styles.listItem}>
                  <strong>Notifications:</strong> If you enable notifications, we may collect data related to your notification preferences to deliver reminders and updates.
                </li>
              </ul>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>3. How Information is Used</h2>
              <p style={styles.paragraph}>
                We use the collected information for the following purposes:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>To provide and maintain the app's functionality</li>
                <li style={styles.listItem}>To send you sleep reminders and notifications as configured</li>
                <li style={styles.listItem}>To track and analyze usage patterns to improve user experience</li>
                <li style={styles.listItem}>To respond to your inquiries and support requests</li>
                <li style={styles.listItem}>To notify you about changes to the app or new features</li>
                <li style={styles.listItem}>To ensure the security and integrity of our services</li>
              </ul>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>4. Information Sharing</h2>
              <p style={styles.paragraph}>
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating the app, conducting our business, or servicing you.
                </li>
                <li style={styles.listItem}>
                  <strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities.
                </li>
                <li style={styles.listItem}>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </li>
              </ul>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>5. Data Retention</h2>
              <p style={styles.paragraph}>
                We will retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Upon deletion of your account, we will endeavor to delete your personal data within a reasonable timeframe, except where we are legally required to retain it.
              </p>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>6. Data Security</h2>
              <p style={styles.paragraph}>
                We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>7. Your Rights</h2>
              <p style={styles.paragraph}>
                Depending on your location, you may have certain rights regarding your personal data, including:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>The right to access your personal data</li>
                <li style={styles.listItem}>The right to correct inaccurate data</li>
                <li style={styles.listItem}>The right to delete your personal data</li>
                <li style={styles.listItem}>The right to restrict or object to processing</li>
                <li style={styles.listItem}>The right to data portability</li>
                <li style={styles.listItem}>The right to withdraw consent</li>
              </ul>
              <p style={styles.paragraph}>
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>8. Children's Privacy</h2>
              <p style={styles.paragraph}>
                Our app is not intended for children under 13 years of age, and we do not knowingly collect personal data from children under 13. If we learn that we have collected personal data from a child under 13 without parental consent, we will take steps to delete that information as soon as possible.
              </p>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>9. Third-Party Services</h2>
              <p style={styles.paragraph}>
                Our app may contain links to third-party websites, services, or applications that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party services you access.
              </p>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>10. Changes to This Privacy Policy</h2>
              <p style={styles.paragraph}>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date. You are advised to review this privacy policy periodically for any changes.
              </p>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>11. Contact Information</h2>
              <p style={styles.paragraph}>
                If you have any questions or concerns about this privacy policy or our privacy practices, please contact us:
              </p>
              <div style={styles.contactInfo}>
                <p style={styles.contactItem}>
                  <strong>Developer:</strong> Dawood Khan Masood
                </p>
                <p style={styles.contactItem}>
                  <strong>Email:</strong> dawoodkmasood@gmail.com
                </p>
                <p style={styles.contactItem}>
                  <strong>Website:</strong> https://dawood.me
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const styles = {
  hero: {
    padding: '60px 0 40px',
    background: 'linear-gradient(180deg, rgba(219, 226, 239, 0.4) 0%, transparent 100%)',
  },
  backLink: {
    color: '#3F72AF',
    fontWeight: '500',
    marginBottom: '24px',
    display: 'inline-block',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#112D4E',
    marginBottom: '8px',
  },
  appName: {
    fontSize: '1.25rem',
    color: '#3F72AF',
    fontWeight: '500',
    marginBottom: '8px',
  },
  lastUpdated: {
    fontSize: '0.9rem',
    color: 'rgba(63, 114, 175, 0.7)',
  },
  content: {
    padding: '40px 0 80px',
  },
  policyCard: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#112D4E',
    marginBottom: '16px',
  },
  paragraph: {
    color: '#3F72AF',
    lineHeight: 1.8,
    marginBottom: '12px',
  },
  list: {
    marginLeft: '24px',
    color: '#3F72AF',
  },
  listItem: {
    lineHeight: 1.8,
    marginBottom: '8px',
  },
  contactInfo: {
    marginTop: '16px',
    padding: '20px',
    background: 'rgba(219, 226, 239, 0.3)',
    borderRadius: '8px',
  },
  contactItem: {
    color: '#3F72AF',
    marginBottom: '8px',
  },
};

export default PrivacyPolicy;

export const Head = ({ pageContext }) => {
  const { appId } = pageContext;
  const app = mobileApps.find((a) => a.id === appId);
  
  return (
    <>
      <title>Privacy Policy | {app ? app.name : 'App'} | Dawood Khan Masood</title>
      <meta name="description" content={`Privacy policy for ${app ? app.name : 'this app'}`} />
    </>
  );
};
