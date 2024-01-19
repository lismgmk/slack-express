// slashEmailRealmHandler.js

const { CHANEL } = require('../../consts/slackScopes');
const button_open_modal = require('../../ui-blocks/button_open_modal');
const wrong_slash_command = require('../../ui-blocks/wrong_slach_command');
const web = require('../../utils/slackWebClient');

module.exports = async (req, res) => {
  try {
    let response_block;

    req.body.text === 'run'
      ? (response_block = button_open_modal)
      : (response_block = wrong_slash_command);
    await web.chat.postMessage({
      channel: CHANEL,
      // text: 'Start process',
      blocks: response_block,
    });
    return res.send(req.body);
  } catch (error) {
    console.log(error);
  }
};
