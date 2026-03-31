import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import mobileApps from '../data/mobile-apps.json';

const MobileAppDetail = ({ pageContext }) => {
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
          <Link to="/mobile-apps/" style={styles.backLink}>
            ← Back to Mobile Apps
          </Link>
          <h1 style={styles.title}>{app.name}</h1>
          <p style={styles.subtitle}>{app.description}</p>
        </div>
      </section>

      <section style={styles.content}>
        <div className="container">
          <div style={styles.mainContent}>
            <div className="card" style={styles.descriptionCard}>
              <h2 style={styles.sectionTitle}>About This App</h2>
              <p style={styles.description}>{app.detailedDescription}</p>
            </div>

            <div style={styles.sidebar}>
              <div className="card" style={styles.infoCard}>
                <h3 style={styles.infoTitle}>Platform</h3>
                <div style={styles.platformBadges}>
                  {app.platform === 'Both' || app.platform === 'Android' ? (
                    <span style={styles.platformBadge}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.523 15.34l-.555-.334a5.745 5.745 0 01-1.44-1.44l-.333-.555 1.328-1.265 1.44 1.44 1.265-1.328-1.44-1.44 1.265-1.265 1.44 1.44.555-.333c.6-.6 1.32-.96 2.16-.96v-2.16c-1.44 0-2.64.48-3.6 1.44l-.555.333-1.265-1.328-1.44 1.44 1.265 1.265-1.44 1.44-1.265-1.265-1.44 1.44 1.328 1.265-1.265 1.265-1.328-1.265-1.44 1.44-1.265-1.44 1.265-1.265-1.44-1.44 1.265-1.328 1.44 1.44 1.265 1.328-.555.333a5.745 5.745 0 01-1.44 1.44l-.333.555-1.328-1.265 1.44-1.44 1.265 1.328 1.44-1.44-1.265-1.265 1.44-1.44 1.265 1.265 1.44-1.44-1.328-1.265 1.265-1.265 1.328 1.265 1.44-1.44-1.265-1.328 1.44-1.44 1.265 1.265 1.328 1.328zM3 20.28v-3.56l3-1.8v3.56l-3 1.8zm18-3.56v3.56l-3 1.8v-3.56l3-1.8zm-9-2.7c-2.88 0-5.22 2.34-5.22 5.22s2.34 5.22 5.22 5.22 5.22-2.34 5.22-5.22-2.34-5.22-5.22-5.22z"/>
                      </svg>
                      Android
                    </span>
                  ) : null}
                  {app.platform === 'Both' || app.platform === 'iOS' ? (
                    <span style={styles.platformBadge}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      iOS
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="card" style={styles.infoCard}>
                <h3 style={styles.infoTitle}>Technologies</h3>
                <div style={styles.technologies}>
                  {app.technologies.map((tech) => (
                    <span key={tech} className="tag" style={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card" style={styles.infoCard}>
                <h3 style={styles.infoTitle}>Get the App</h3>
                <div style={styles.downloadLinks}>
                  {app.playStoreUrl && (
                    <a
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={styles.downloadBtn}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                      </svg>
                      Google Play
                    </a>
                  )}
                  {app.appStoreUrl && (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={styles.downloadBtn}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      App Store
                    </a>
                  )}
                </div>
              </div>

              {app.hasPrivacyPolicy && (
                <Link
                  to={`/mobile-apps/${app.id}/privacy-policy/`}
                  style={styles.privacyLink}
                >
                  View Privacy Policy
                </Link>
              )}
            </div>
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
    fontSize: '3rem',
    fontWeight: '700',
    color: '#112D4E',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#3F72AF',
    maxWidth: '700px',
  },
  content: {
    padding: '60px 0 80px',
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 340px',
    gap: '40px',
    alignItems: 'start',
  },
  descriptionCard: {
    padding: '32px',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#112D4E',
    marginBottom: '20px',
  },
  description: {
    color: '#3F72AF',
    lineHeight: 1.8,
    fontSize: '1.05rem',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  infoCard: {
    padding: '24px',
  },
  infoTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#112D4E',
    marginBottom: '16px',
  },
  platformBadges: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  platformBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    background: 'rgba(63, 114, 175, 0.1)',
    color: '#3F72AF',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  technologies: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  techTag: {
    fontSize: '0.85rem',
  },
  downloadLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  downloadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
  },
  privacyLink: {
    color: '#3F72AF',
    fontWeight: '500',
    textAlign: 'center',
    display: 'block',
    padding: '12px',
    background: 'rgba(63, 114, 175, 0.1)',
    borderRadius: '8px',
  },
};

export default MobileAppDetail;

export const Head = ({ pageContext }) => {
  const { appId } = pageContext;
  const app = mobileApps.find((a) => a.id === appId);
  
  return (
    <>
      <title>{app ? `${app.name} | Dawood Khan Masood` : 'App Not Found'}</title>
      <meta name="description" content={app ? app.description : 'App not found'} />
    </>
  );
};
