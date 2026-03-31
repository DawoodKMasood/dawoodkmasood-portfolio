import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import webApps from '../data/web-apps.json';

const WebAppsPage = () => {
  return (
    <Layout>
      <section style={styles.hero}>
        <div className="container">
          <h1 style={styles.title}>Web Applications</h1>
          <p style={styles.subtitle}>
            A collection of web applications I've built using modern technologies like React, TypeScript, and Node.js.
          </p>
        </div>
      </section>

      <section style={styles.projects}>
        <div className="container">
          <div className="grid grid-2">
            {webApps.map((app) => (
              <article key={app.id} className="card" style={styles.projectCard}>
                <div style={styles.projectHeader}>
                  <h2 style={styles.projectTitle}>{app.name}</h2>
                  <div style={styles.platformBadge}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={styles.webIcon}>
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Web
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
                  {app.url && (
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={styles.primaryBtn}
                    >
                      Visit App
                    </a>
                  )}
                  <a
                    href={app.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.cta}>
        <div className="container">
          <h2 style={styles.ctaTitle}>Interested in Mobile Apps?</h2>
          <p style={styles.ctaDesc}>
            Check out my mobile applications built with React Native.
          </p>
          <Link to="/mobile-apps/" className="btn">
            View Mobile Apps
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
  },
  projectTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#112D4E',
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
    flexShrink: 0,
  },
  webIcon: {
    width: '16px',
    height: '16px',
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
  },
  primaryBtn: {
    flex: 'none',
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

export default WebAppsPage;

export const Head = () => (
  <>
    <title>Web Apps | Dawood Khan Masood</title>
    <meta name="description" content="Web applications built by Dawood Khan Masood using React, TypeScript, Node.js, and other modern technologies." />
  </>
);
