import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import '../styles/global.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          linkedin
          github
        }
      }
    }
  `);

  const { email, linkedin, github } = data.site.siteMetadata;

  return (
    <>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.navContainer}>
            <Link to="/" style={styles.logo}>
              DK
            </Link>
            <div style={styles.navLinks}>
              <Link to="/" style={styles.navLink} activeStyle={styles.navLinkActive}>
                Home
              </Link>
              <Link to="/web-apps/" style={styles.navLink} activeStyle={styles.navLinkActive}>
                Web Apps
              </Link>
              <Link to="/mobile-apps/" style={styles.navLink} activeStyle={styles.navLinkActive}>
                Mobile Apps
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer style={styles.footer}>
        <div className="container">
          <div style={styles.footerContent}>
            <div style={styles.footerBrand}>
              <span style={styles.footerLogo}>DK</span>
              <p style={styles.footerText}>
                Building exceptional digital experiences
              </p>
            </div>
            <div style={styles.footerLinks}>
              <a
                href={`https://linkedin.com/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.footerLink}
              >
                LinkedIn
              </a>
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.footerLink}
              >
                GitHub
              </a>
              <a href={`mailto:${email}`} style={styles.footerLink}>
                Email
              </a>
            </div>
            <p style={styles.copyright}>
              © {new Date().getFullYear()} Dawood Khan Masood. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

const styles = {
  header: {
    background: 'rgba(249, 247, 247, 0.95)',
    backdropFilter: 'blur(10px)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    borderBottom: '1px solid rgba(17, 45, 78, 0.1)',
  },
  nav: {
    padding: '16px 0',
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#112D4E',
    letterSpacing: '-0.5px',
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
  },
  navLink: {
    color: '#3F72AF',
    fontWeight: '500',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
  },
  navLinkActive: {
    color: '#112D4E',
  },
  footer: {
    background: '#112D4E',
    color: '#F9F7F7',
    padding: '60px 0 30px',
    marginTop: '80px',
  },
  footerContent: {
    textAlign: 'center',
  },
  footerBrand: {
    marginBottom: '24px',
  },
  footerLogo: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#DBE2EF',
  },
  footerText: {
    color: '#DBE2EF',
    marginTop: '8px',
    fontSize: '0.95rem',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    marginBottom: '24px',
  },
  footerLink: {
    color: '#DBE2EF',
    transition: 'color 0.3s ease',
  },
  copyright: {
    color: 'rgba(219, 226, 239, 0.6)',
    fontSize: '0.875rem',
  },
};

export default Layout;
