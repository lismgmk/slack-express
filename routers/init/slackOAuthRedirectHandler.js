// slackOAuthRedirectHandler.js
const installer = require('./slackInstaller');

module.exports = async (req, res) => {
  await installer.handleCallback(req, res);
};
