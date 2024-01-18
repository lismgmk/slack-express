const installer = require('./slackInstaller');

module.exports = async (req, res, next) => {
  await installer.handleInstallPath(
    req,
    res,
    {},
    {
      scopes: installer.options.scopes,
      userScopes: installer.options.userScopes,
      metadata: 'some_metadata',
    }
  );
};
