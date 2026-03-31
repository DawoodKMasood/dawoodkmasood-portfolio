import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <section style={styles.container}>
        <div className="container" style={styles.content}>
          <h1 style={styles.title}>404</h1>
          <h2 style={styles.subtitle}>Page Not Found</h2>
          <p style={styles.description}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div style={styles.links}>
            <Link to="/" className="btn">
              Go Home
            </Link>
            <Link to="/web-apps/" className="btn btn-outline">
              View Web Apps
            </Link>
            <Link to="/mobile-apps/" className="btn btn-outline">
              View Mobile Apps
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const styles = {
  container: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '8rem',
    fontWeight: '700',
    color: '#DBE2EF',
    lineHeight: 1,
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#112D4E',
    marginBottom: '16px',
  },
  description: {
    fontSize: '1.125rem',
    color: '#3F72AF',
    marginBottom: '32px',
  },
  links: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};

export default NotFoundPage;

export const Head = () => (
  <>
    <title>Page Not Found | Dawood Khan Masood</title>
    <meta name="description" content="The page you're looking for doesn't exist." />
  </>
);
