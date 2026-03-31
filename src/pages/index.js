import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          email
          linkedin
          github
        }
      }
    }
  `);

  const { title, description, email, linkedin, github } = data.site.siteMetadata;

  return (
    <Layout>
      <section style={styles.hero}>
        <div className="container">
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Hi, I'm <span style={styles.heroName}>Dawood Khan Masood</span>
            </h1>
            <p style={styles.heroSubtitle}>Senior Frontend Engineer</p>
            <p style={styles.heroDescription}>
              A passionate frontend developer from Pakistan building exceptional web and mobile experiences with React, React Native, and TypeScript.
            </p>
            <div style={styles.heroCta}>
              <Link to="/web-apps/" className="btn">
                View Web Apps
              </Link>
              <Link to="/mobile-apps/" className="btn btn-outline" style={styles.heroBtnSecondary}>
                View Mobile Apps
              </Link>
            </div>
          </div>
        </div>
        <div style={styles.heroGradient} />
      </section>

      <section style={styles.skills}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
          <div style={styles.skillsGrid}>
            {['React', 'React Native', 'TypeScript', 'Node.js', 'JavaScript', 'CSS', 'PHP', 'Gatsby'].map((skill) => (
              <span key={skill} className="tag" style={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.projects}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <div className="grid grid-2">
            <div className="card" style={styles.projectCard}>
              <h3 style={styles.projectTitle}>Numfer</h3>
              <p style={styles.projectDesc}>
                A major project with 338 commits, featuring a powerful number management platform.
              </p>
              <div style={styles.projectLinks}>
                <a href="https://numfer.app" target="_blank" rel="noopener noreferrer">
                  Visit App →
                </a>
                <a href="https://github.com/DawoodKMasood/numfer" target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
              </div>
            </div>
            <div className="card" style={styles.projectCard}>
              <h3 style={styles.projectTitle}>Vektora Blog</h3>
              <p style={styles.projectDesc}>
                A modern MDX-powered blog platform with rich content creation.
              </p>
              <div style={styles.projectLinks}>
                <a href="https://blog.vektora.org" target="_blank" rel="noopener noreferrer">
                  Visit Blog →
                </a>
                <a href="https://github.com/DawoodKMasood/vektora-org-blog" target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
              </div>
            </div>
          </div>
          <div style={styles.projectsCta}>
            <Link to="/web-apps/" style={styles.viewAllLink}>
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      <section style={styles.contact}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Let's Connect</h2>
          <p style={styles.contactDesc}>
            Interested in working together or just want to say hi? Feel free to reach out!
          </p>
          <div style={styles.contactLinks}>
            <a href={`mailto:${email}`} className="btn">
              Email Me
            </a>
            <a href={`https://linkedin.com/${linkedin}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              LinkedIn
            </a>
            <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const styles = {
  hero: {
    position: 'relative',
    padding: '120px 0 100px',
    overflow: 'hidden',
  },
  heroContent: {
    maxWidth: '700px',
    position: 'relative',
    zIndex: 1,
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#112D4E',
    lineHeight: 1.2,
    marginBottom: '8px',
  },
  heroName: {
    color: '#3F72AF',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    color: '#3F72AF',
    fontWeight: '500',
    marginBottom: '24px',
  },
  heroDescription: {
    fontSize: '1.125rem',
    color: '#112D4E',
    lineHeight: 1.8,
    marginBottom: '32px',
  },
  heroCta: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  heroBtnSecondary: {
    marginLeft: '0',
  },
  heroGradient: {
    position: 'absolute',
    top: '-50%',
    right: '-20%',
    width: '70%',
    height: '200%',
    background: 'linear-gradient(135deg, rgba(219, 226, 239, 0.4) 0%, rgba(63, 114, 175, 0.1) 100%)',
    borderRadius: '50%',
    transform: 'rotate(-15deg)',
    pointerEvents: 'none',
  },
  skills: {
    padding: '80px 0',
    background: 'rgba(219, 226, 239, 0.3)',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#112D4E',
    marginBottom: '32px',
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
  skillTag: {
    fontSize: '1rem',
    padding: '8px 20px',
  },
  projects: {
    padding: '80px 0',
  },
  projectCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  projectTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#112D4E',
    marginBottom: '12px',
  },
  projectDesc: {
    color: '#3F72AF',
    flex: 1,
    marginBottom: '16px',
  },
  projectLinks: {
    display: 'flex',
    gap: '16px',
    fontWeight: '500',
  },
  projectsCta: {
    textAlign: 'center',
    marginTop: '40px',
  },
  viewAllLink: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#3F72AF',
  },
  contact: {
    padding: '80px 0',
    background: 'rgba(219, 226, 239, 0.3)',
    textAlign: 'center',
  },
  contactDesc: {
    fontSize: '1.125rem',
    color: '#3F72AF',
    marginBottom: '32px',
  },
  contactLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Dawood Khan Masood | Senior Frontend Engineer</title>
    <meta name="description" content="Senior Frontend Engineer from Pakistan - Building exceptional web and mobile experiences with React, React Native, and TypeScript." />
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>" />
  </>
);
