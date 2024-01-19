const {
  CHECKBOX_BLOCK_ID,
  CHECKBOX_VALUE_KEYCLOAK,
  CHECKBOX_VALUE_AFALIATE,
  CHECKBOX_VALUE_OTHERS,
  CHECKBOX_ACTION_ID,
} = require('./const/checkbox_default.const');
const {
  CHECKBOX_CHECK_KEYLOACK_BLOCK_ID,
} = require('./const/checkbox_keyloack.const');

const checkboxes_keyloack = (email = '', realm = '') => [
  {
    type: 'section',
    block_id: CHECKBOX_CHECK_KEYLOACK_BLOCK_ID,
    text: {
      type: 'mrkdwn',
      text: `*Start keycloak deleting for ${email} realm ${realm}*\n:hourglass_flowing_sand: *Процесс запущен*`,
    },
  },
  {
    type: 'actions',
    block_id: CHECKBOX_BLOCK_ID,
    elements: [
      {
        type: 'checkboxes',
        options: [
          {
            text: {
              type: 'mrkdwn',
              text: `Start Afaliate deleting for ${email} realm ${realm}`,
            },
            description: {
              type: 'mrkdwn',
              text: 'отметить для запуска',
            },
            value: CHECKBOX_VALUE_AFALIATE,
          },
          {
            text: {
              type: 'mrkdwn',
              text: `Start others for ${email} realm ${realm}`,
            },
            description: {
              type: 'mrkdwn',
              text: 'отметить для запуска',
            },
            value: CHECKBOX_VALUE_OTHERS,
          },
        ],
        action_id: CHECKBOX_ACTION_ID,
      },
    ],
  },
];

module.exports = checkboxes_keyloack;
