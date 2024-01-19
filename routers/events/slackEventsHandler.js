const web = require('../../utils/slackWebClient');
const button_open_modal = require('../../ui-blocks/button_open_modal');

module.exports = async (req, res) => {
  console.log(' 777777777777777777777777EVENTS ', req.body);
  if (req.body.challenge) {
    const challenge = req.body.challenge;

    return res.send(challenge);
  } else {
    // console.log('++++++', button_open_modal);
    // await web.chat.postMessage({
    //   channel: '#rm_user',
    //   text: 'Hi from global EVENT+++',
    //   blocks: button_open_modal,
    // });
    return res.sendStatus(200);
  }
};
