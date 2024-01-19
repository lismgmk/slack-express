const { BUTTON_OPEN_MODAL_ACTION_ID } = require('./const/button_open_modal.const');

const button_open_modal = [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'Нажмите кнопку ниже, чтобы начать удаление',
    },
  },
  {
    type: 'actions',
    elements: [
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Начать',
        },
        action_id: BUTTON_OPEN_MODAL_ACTION_ID,
      },
    ],
  },
];

module.exports = button_open_modal;
