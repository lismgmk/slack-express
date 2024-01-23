const { CHANEL } = require('../../consts/slackScopes');
const web = require('../../utils/slackWebClient');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const token = 'xoxb-2676790586435-6105802342995-AoLTGijAUl9LWNWeKFGDeCaC';
    const adminUsers = [];
    await fetch('https://slack.com/api/users.list', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.members.forEach((member) => {
          if (req.body.text === member.profile.display_name){
            adminUsers.push(member.id)
          }
            console.log(`ID: ${member.id}, Name: ${member.name}`);

        });
      })
      .catch((error) => console.error(error));

    

    await web.chat.postMessage({
      channel: CHANEL,
      text: 'user added',
    });
    return res.send(req.body);
  } catch (error) {
    console.log(error);
  }
};
