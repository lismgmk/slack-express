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
        action_id: 'button_open_modal',
      },
    ],
  },
];

module.exports = button_open_modal;
