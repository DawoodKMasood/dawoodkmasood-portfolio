module.exports = {
  siteMetadata: {
    title: `Dawood Khan Masood`,
    description: `Senior Frontend Engineer from Pakistan - Building exceptional web and mobile experiences with React, React Native, and TypeScript.`,
    author: `Dawood Khan Masood`,
    siteUrl: `https://dawood.me`,
    email: `dawoodkmasood@gmail.com`,
    linkedin: `in/dawoodkmasood`,
    github: `DawoodKMasood`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
};
