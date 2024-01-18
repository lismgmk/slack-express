// slashEmailRealmHandler.js

const web = require('../../utils/slackWebClient');

module.exports = async (req, res) => {
  console.log('++skaxh');
  try {
    await web.chat.postMessage({
      channel: '#rm_user',
      text: 'Hi from SLASH_COMMAND email-realm!!!',
    });
    return res.send(req.body);
  } catch (error) {
    console.log(error);
  }
};
