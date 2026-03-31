const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const mobileAppsData = require('./src/data/mobile-apps.json');

  mobileAppsData.forEach((app) => {
    createPage({
      path: `/mobile-apps/${app.id}/`,
      component: path.resolve('./src/templates/mobile-app-detail.js'),
      context: {
        appId: app.id,
      },
    });

    if (app.hasPrivacyPolicy) {
      createPage({
        path: `/mobile-apps/${app.id}/privacy-policy/`,
        component: path.resolve('./src/templates/privacy-policy.js'),
        context: {
          appId: app.id,
        },
      });
    }
  });
};
