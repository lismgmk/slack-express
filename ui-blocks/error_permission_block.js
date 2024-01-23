

const error_permission_block = (param) => [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: param,
    },
  },
];

module.exports = error_permission_block;
