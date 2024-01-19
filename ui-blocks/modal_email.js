const {
  INPUT_EMAIL_BLOCK_ID,
  EMAIL_ACTION_ID,
  INPUT_REALM_BLOCK_ID,
  REALM_ACTION_ID,
} = require('./const/modal_id.const');

const modal_email = {
  title: {
    type: 'plain_text',
    text: 'Введите email и realm',
  },
  submit: {
    type: 'plain_text',
    text: 'Submit',
  },
  blocks: [
    {
      type: 'input',
      block_id: INPUT_EMAIL_BLOCK_ID,
      element: {
        type: 'plain_text_input',
        action_id: EMAIL_ACTION_ID,
        placeholder: {
          type: 'plain_text',
          text: 'example@mail.com',
        },
      },
      label: {
        type: 'plain_text',
        text: 'email',
      },
      hint: {
        type: 'plain_text',
        text: 'введите email',
      },
    },
    {
      type: 'input',
      block_id: INPUT_REALM_BLOCK_ID,
      element: {
        type: 'plain_text_input',
        action_id: REALM_ACTION_ID,
        placeholder: {
          type: 'plain_text',
          text: 'name',
        },
      },
      label: {
        type: 'plain_text',
        text: 'Realm',
      },
      hint: {
        type: 'plain_text',
        text: 'Введите realm',
      },
    },
  ],
  type: 'modal',
};

module.exports = modal_email;
