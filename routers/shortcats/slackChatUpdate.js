const web = require('../../utils/slackWebClient');

const updateChat = async ({
  channelId,
  messageTimestamp,
  actionType,
  actionId,
  buttonText,
}) => {
  await web.chat.update({
    channel: channelId,
    ts: messageTimestamp,
    text: 'changed',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*Block with updated button*',
        },
      },
      {
        type: 'actions',
        elements: [
          {
            type: actionType,
            text: {
              type: 'plain_text',
              text: buttonText,
              emoji: true,
            },
            action_id: actionId,
            value: 'new_button_value',
          },
        ],
      },
    ],
  });
};

module.exports = updateChat;
