import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import mobileApps from '../data/mobile-apps.json';

const MobileAppsPage = () => {
  return (
    <Layout>
      <section style={styles.hero}>
        <div className="container">
          <h1 style={styles.title}>Mobile Applications</h1>
          <p style={styles.subtitle}>
            A collection of mobile applications I've built using React Native, available on Android and iOS.
          </p>
        </div>
      </section>

      <section style={styles.projects}>
        <div className="container">
          <div className="grid grid-2">
            {mobileApps.map((app) => (
              <article key={app.id} className="card" style={styles.projectCard}>
                <div style={styles.projectHeader}>
                  <h2 style={styles.projectTitle}>{app.name}</h2>
                  <div style={styles.platformBadges}>
                    {app.platform === 'Both' || app.platform === 'Android' ? (
                      <span style={styles.platformBadge}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.523 15.34l-.555-.334a5.745 5.745 0 01-1.44-1.44l-.333-.555 1.328-1.265 1.44 1.44 1.265-1.328-1.44-1.44 1.265-1.265 1.44 1.44.555-.333c.6-.6 1.32-.96 2.16-.96v-2.16c-1.44 0-2.64.48-3.6 1.44l-.555.333-1.265-1.328-1.44 1.44 1.265 1.265-1.44 1.44-1.265-1.265-1.44 1.44 1.328 1.265-1.265 1.265-1.328-1.265-1.44 1.44-1.265-1.44 1.265-1.265-1.44-1.44 1.265-1.328 1.44 1.44 1.265 1.328-.555.333a5.745 5.745 0 01-1.44 1.44l-.333.555-1.328-1.265 1.44-1.44 1.265 1.328 1.44-1.44-1.265-1.265 1.44-1.44 1.265 1.265 1.44-1.44-1.328-1.265 1.265-1.265 1.328 1.265 1.44-1.44-1.265-1.328 1.44-1.44 1.265 1.265 1.328 1.328zM3 20.28v-3.56l3-1.8v3.56l-3 1.8zm18-3.56v3.56l-3 1.8v-3.56l3-1.8zm-9-2.7c-2.88 0-5.22 2.34-5.22 5.22s2.34 5.22 5.22 5.22 5.22-2.34 5.22-5.22-2.34-5.22-5.22-5.22z"/>
                        </svg>
                        Android
                      </span>
                    ) : null}
                    {app.platform === 'Both' || app.platform === 'iOS' ? (
                      <span style={styles.platformBadge}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        iOS
                      </span>
                    ) : null}
                  </div>
                </div>
                <p style={styles.projectDesc}>{app.description}</p>
                <div style={styles.technologies}>
                  {app.technologies.map((tech) => (
                    <span key={tech} className="tag" style={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={styles.projectLinks}>
                  {app.playStoreUrl && (
                    <a
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={styles.primaryBtn}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={styles.storeIcon}>
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                      </svg>
                      Play Store
                    </a>
                  )}
                  {app.appStoreUrl && (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={styles.primaryBtn}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={styles.storeIcon}>
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      App Store
                    </a>
                  )}
                  <Link
                    to={`/mobile-apps/${app.id}/`}
                    className="btn btn-outline"
                  >
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.cta}>
        <div className="container">
          <h2 style={styles.ctaTitle}>Interested in Web Development?</h2>
          <p style={styles.ctaDesc}>
            Check out my web applications built with React and TypeScript.
          </p>
          <Link to="/web-apps/" className="btn">
            View Web Apps
          </Link>
        </div>
      </section>
    </Layout>
  );
};

const styles = {
  hero: {
    padding: '80px 0 60px',
    background: 'linear-gradient(180deg, rgba(219, 226, 239, 0.4) 0%, transparent 100%)',
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
    maxWidth: '600px',
  },
  projects: {
    padding: '60px 0 80px',
  },
  projectCard: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
    gap: '16px',
    flexWrap: 'wrap',
  },
  projectTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#112D4E',
  },
  platformBadges: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  platformBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    background: 'rgba(63, 114, 175, 0.1)',
    color: '#3F72AF',
    borderRadius: '20px',
    fontSize: '0.875rem',
    fontWeight: '500',
  },
  projectDesc: {
    color: '#3F72AF',
    marginBottom: '20px',
    flex: 1,
    lineHeight: 1.7,
  },
  technologies: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '24px',
  },
  techTag: {
    fontSize: '0.8rem',
  },
  projectLinks: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  primaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    flex: 'none',
  },
  storeIcon: {
    width: '16px',
    height: '16px',
  },
  cta: {
    padding: '80px 0',
    background: 'rgba(219, 226, 239, 0.3)',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#112D4E',
    marginBottom: '12px',
  },
  ctaDesc: {
    fontSize: '1.125rem',
    color: '#3F72AF',
    marginBottom: '24px',
  },
};

export default MobileAppsPage;

export const Head = () => (
  <>
    <title>Mobile Apps | Dawood Khan Masood</title>
    <meta name="description" content="Mobile applications built by Dawood Khan Masood using React Native, available on Android and iOS." />
  </>
);
