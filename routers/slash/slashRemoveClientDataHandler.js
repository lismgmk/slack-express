const { CHANEL } = require('../../consts/slackScopes');
const button_open_modal = require('../../ui-blocks/button_open_modal');
const error_permission_block = require('../../ui-blocks/error_permission_block');
const wrong_slash_command = require('../../ui-blocks/wrong_slach_command');
const web = require('../../utils/slackWebClient');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const adminUsers = ['U06DM7V9VBL'];

    let response_text;

    let email = req.body.text;

    // Regular expression for email validation
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    switch (true) {
      case email === '':
        response_text = 'Email is an empty string.';
        break;
      case !emailRegex.test(email):
        response_text = 'It is not email';
        break;
      case !adminUsers.includes(req.body.user_id):
        response_text = "' You don't have permissions to perform this action.";
        break;
      case adminUsers.includes(email):
        response_text = 'Email is in the adminUsers array.';
        break;
      default:
        response_text = 'Unexpected case.';
    }
    if (response_text !== 'Email is in the adminUsers array.') {
      await web.chat.postMessage({
        channel: CHANEL,
        blocks: error_permission_block(response_block),
      });
       return res.send(req.body);
    }
   


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
