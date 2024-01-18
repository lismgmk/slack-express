const modal_email = require('../../ui-blocks/modal_email');
const web = require('../../utils/slackWebClient');
const updateChat = require('./slackChatUpdate');

module.exports = async (req, res) => {
  console.log('++CHORTCAT', req.body);
  try {
    const reqBody = JSON.parse(req.body.payload);
    const action = reqBody.actions[0];
    const ts = reqBody.message.ts;
    console.log(reqBody.channel.name, '++++++++');

    if (action.action_id === 'button_open_modal') {
      await web.views.open({
        channel: reqBody.channel.id,
        ts: ts,
        text: 'changed',
        view: modal_email,
      });
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
    return res.send(req.body);
  } catch (error) {
    console.log(error);
  }
};
