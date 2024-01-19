const button_open_modal = require('../../ui-blocks/button_open_modal');
const checkboxes_default = require('../../ui-blocks/checkboxes_default');
const modal_email = require('../../ui-blocks/modal_email');
const {
  INPUT_EMAIL_BLOCK_ID,
  EMAIL_ACTION_ID,
  REALM_ACTION_ID,
  INPUT_REALM_BLOCK_ID,
} = require('../../ui-blocks/const/modal_id.const');
const web = require('../../utils/slackWebClient');
const updateChat = require('./slackChatUpdate');
const {
  BUTTON_OPEN_MODAL_ACTION_ID,
} = require('../../ui-blocks/const/button_open_modal.const');
const {
  CHECKBOX_BLOCK_ID,
  CHECKBOX_ACTION_ID,
} = require('../../ui-blocks/const/checkbox_default.const');
const checkboxes_keyloack = require('../../ui-blocks/checkboxes_keyloack');
const { CHANEL } = require('../../consts/slackScopes');

module.exports = async (req, res) => {
  try {
    const reqBody = JSON.parse(req.body.payload);
    let currentEmail;
    let currentRealm;
    if (reqBody.type === 'view_submission') {
      currentEmail =
        reqBody.view.state.values[INPUT_EMAIL_BLOCK_ID][EMAIL_ACTION_ID].value;
      currentRealm =
        reqBody.view.state.values[INPUT_REALM_BLOCK_ID][REALM_ACTION_ID].value;
      await web.chat.postMessage({
        channel: CHANEL,
        text: 'Hi from global EVENT+++',
        blocks: checkboxes_default(currentEmail, currentRealm),
      });
      return res.send({
        response_action: 'clear',
      });
    }
    if (reqBody.type === 'block_actions') {
      const ts = reqBody.message.ts;
      const action = reqBody.actions[0];
      if (action.action_id === BUTTON_OPEN_MODAL_ACTION_ID) {
        await web.views.open({
          trigger_id: reqBody.trigger_id,
          channel: reqBody.channel.id,
          ts: ts,
          text: 'changed',
          view: modal_email,
        });
      }
      if (action.action_id === CHECKBOX_ACTION_ID) {
        try {
          await web.chat.update({
            trigger_id: reqBody.trigger_id,
            channel: reqBody.channel.id,
            ts: ts,
            // text: 'changed',
            blocks: checkboxes_keyloack(currentEmail, currentRealm),
          });
        } catch (error) {
          console.log(error, 'eeeeeeeerrrrrrrrrrrrrrrrrrr');
        }
      }

      if (action.action_id === 'click_submit modal') {
        await updateChat({
          channelId: reqBody.channel.id,
          messageTimestamp: ts,
          actionType: action.type,
          actionId: action.action_id,
          buttonText: '++++++++++++',
        });
      }
    }
    return res.sendStatus(200);
    // return res.send(req.body);
  } catch (error) {
    console.log(error);
  }
};
