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
      element: {
        type: 'plain_text_input',
        action_id: 'sl_input',
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
      element: {
        type: 'plain_text_input',
        action_id: 'ml_input',
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
