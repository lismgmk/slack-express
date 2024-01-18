const {
  InstallProvider,
  LogLevel,
  FileInstallationStore,
} = require('@slack/oauth');
const { scopes, userScopes } = require('../../consts/slackScopes');

module.exports = new InstallProvider({
  clientId: process.env.SLACK_CLIENT_ID,
  clientSecret: process.env.SLACK_CLIENT_SECRET,
  authVersion: 'v2',
  stateSecret: 'my-state-secret',
  scopes,
  userScopes,
  installationStore: new FileInstallationStore(),
  logLevel: LogLevel.DEBUG,
});
