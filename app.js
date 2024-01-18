require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const slackInstallHandler = require('./routers/init/slackInstallHandler');
const slackEventsHandler = require('./routers/events/slackEventsHandler');
const shortCutHandler = require('./routers/shortcats/shortCutHandler');
const slackOAuthRedirectHandler = require('./routers/init/slackOAuthRedirectHandler');
const slashEmailRealmHandler = require('./routers/slash/slashEmailRealmHandler');

const app = express();
const port = 3000;

// const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET, {
//   includeBody: true,
// });
// app.use('/slack/events', slackEvents.requestListener());
app.use(express.json());
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.post('/slack/events', slackEventsHandler);
app.post('/slack/shortcat', shortCutHandler);
app.post('/slash/email-realm', slashEmailRealmHandler);
app.get('/slack/install', slackInstallHandler);
app.get('/', (req, res) => res.send('go to /slack/install'));
app.get('/slack/oauth_redirect', slackOAuthRedirectHandler);

app.listen(port, () =>
  console.log(
    `Example app listening on port ${port}! Go to http://localhost:3000/slack/install to initiate oauth flow`
  )
);

// async (req, res) => {
//   // req.body.event.blocks.forEach((block) => {
//   //   if (block.elements) {
//   //     block.elements.forEach((element) => {
//   //       console.log(element);
//   //     });
//   //   }
//   // });
//   console.log(' 777777777777777777777777EVENTS ', req.body);
//   if (req.body.challenge) {
//     const challenge = req.body.challenge;

//     return res.send(challenge);
//   } else {
//     console.log('++++++', button_open_modal);
//     const web = new WebClient(token);
//     await web.chat.postMessage({
//       channel: '#rm_user',
//       text: 'Hi from global EVENT+++',
//       blocks: button_open_modal,
//     });
//     return res.send(req.body);
//   }
// });

// async (req, res) => {
//   console.log('++CHORTCAT', req.body);
//   const web = new WebClient(token);
//   try {
//     console.log(JSON.parse(req.body.payload), '+++++++++++++');
//     const reqBody = JSON.parse(req.body.payload);
//     const action = reqBody.actions[0];
//     const ts = reqBody.message.ts;
//     console.log(reqBody.channel.name, '++++++++');
//     if (action.action_id === 'button_open_modal') {
//       await web.views.open({
//         channel: reqBody.channel.id,
//         ts: ts,
//         text: 'changed',
//         view: modal_email,
//       });
//     }
//     if (action.action_id === 'click_submit modal') {
//       await web.chat.update({
//         channel: reqBody.channel.id,
//         ts: ts,
//         text: 'changed',
//         blocks: [
//           {
//             type: 'section',
//             text: {
//               type: 'mrkdwn',
//               text: '*Block with updated button*',
//             },
//           },
//           {
//             type: 'actions',
//             elements: [
//               {
//                 type: action.type,
//                 text: {
//                   type: 'plain_text',
//                   text: '------------------', // Your button's text here
//                   emoji: true,
//                 },
//                 action_id: action.action_id,
//                 value: 'new_button_value', // add this if you have any value (optional)
//                 // disabled: true,
//               },
//             ],
//           },
//         ],
//       });
//     }

//     await web.chat.update({
//       channel: reqBody.channel.id,
//       ts: ts,
//       text: 'changed',
//       blocks: [
//         {
//           type: 'section',
//           text: {
//             type: 'mrkdwn',
//             text: '*Block with updated button*',
//           },
//         },
//         {
//           type: 'actions',
//           elements: [
//             {
//               type: action.type,
//               text: {
//                 type: 'plain_text',
//                 text: '++++++++++++', // Your button's text here
//                 emoji: true,
//               },
//               action_id: action.action_id,
//               value: 'new_button_value', // add this if you have any value (optional)
//               // disabled: true,
//             },
//           ],
//         },
//       ],
//     });
//     return res.send(req.body);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.post('/slack/shortcat', async (req, res) => {
//   console.log('++CHORTCAT', req.body);
//   const web = new WebClient(token);
//   try {
//     console.log(JSON.parse(req.body.payload), '+++++++++++++');
//     const reqBody = JSON.parse(req.body.payload);
//     const action = reqBody.actions[0];
//     const ts = reqBody.message.ts;
//     console.log(reqBody.channel.name, '++++++++');
//     await web.chat.update({
//       channel: reqBody.channel.id,
//       ts: ts,
//       text: 'changed',
//       blocks: [
//         {
//           type: 'section',
//           text: {
//             type: 'mrkdwn',
//             text: '*Block with updated button*',
//           },
//         },
//         {
//           type: 'actions',
//           elements: [
//             {
//               type: action.type,
//               text: {
//                 type: 'plain_text',
//                 text: '------------------', // Your button's text here
//                 emoji: true,
//               },
//               action_id: action.action_id,
//               value: 'new_button_value', // add this if you have any value (optional)
//               // disabled: true,
//             },
//           ],
//         },
//       ],
//     });
//     await web.chat.update({
//       channel: reqBody.channel.id,
//       ts: ts,
//       text: 'changed',
//       blocks: [
//         {
//           type: 'section',
//           text: {
//             type: 'mrkdwn',
//             text: '*Block with updated button*',
//           },
//         },
//         {
//           type: 'actions',
//           elements: [
//             {
//               type: action.type,
//               text: {
//                 type: 'plain_text',
//                 text: '++++++++++++', // Your button's text here
//                 emoji: true,
//               },
//               action_id: action.action_id,
//               value: 'new_button_value', // add this if you have any value (optional)
//               // disabled: true,
//             },
//           ],
//         },
//       ],
//     });
//     return res.send(req.body);
//   } catch (error) {
//     console.log(error);
//   }
// });

// This works since @slack/oauth@2.5.0 or newer
/*
app.get('/slack/install', async (req, res) => {
  await installer.handleInstallPath(req, res, {
    scopes,
    userScopes,
    metadata: 'some_metadata',
  });
});
*/

// app.get('/slack/install', async (req, res, next) => {
//   await installer.handleInstallPath(
//     req,
//     res,
//     {},
//     {
//       scopes,
//       userScopes,
//       metadata: 'some_metadata',
//     }
//   );
// });

// const scopes = [
//   'app_mentions:read',
//   'channels:read',
//   'groups:read',
//   'channels:manage',
//   'chat:write',
//   'incoming-webhook',
// ];
// const userScopes = ['chat:write'];

// const installer = new InstallProvider({
//   clientId: process.env.SLACK_CLIENT_ID,
//   clientSecret: process.env.SLACK_CLIENT_SECRET,
//   authVersion: 'v2',
//   stateSecret: 'my-state-secret',
//   scopes,
//   userScopes,
//   installationStore: new FileInstallationStore(),
//   logLevel: LogLevel.DEBUG,
// });

// example 1
// use default success and failure handlers

// slackEvents.on('app_mention', async (event, body) => {
//   let DBInstallData;
//   if (
//     body.authorizations !== undefined &&
//     body.authorizations[0].is_enterprise_install
//   ) {
//     //org wide installation
//     DBInstallData = await installer.authorize({
//       enterpriseId: body.enterprise_id,
//       userId: event.user,
//       isEnterpriseInstall: true,
//     });
//   } else {
//     // non org wide installation
//     DBInstallData = await installer.authorize({
//       enterpriseId: body.enterprise_id,
//       teamId: body.team_id,
//       userId: event.user,
//       isEnterpriseInstall: false,
//     });
//   }
//   const web = new WebClient(DBInstallData.botToken);
// });

// slackEvents.on('button_click', async (event, body) => {
//   console.log(event, '55555555555555555555555555');
//   const token = process.env.SLACK_TOKEN;

//   const web = new WebClient(token);

//   try {
//     await web.chat.postMessage({
//       channel: '#second-test',
//       text: 'butttonn clockeddd!!!!!!!!!!!',
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// When a user navigates to the app home, grab the token from our database and publish a view
// slackEvents.on('app_home_opened', async (event, body) => {
//   console.log(event);
//   try {
//     if (event.tab === 'home') {
//       let DBInstallData;
//       if (
//         body.authorizations !== undefined &&
//         body.authorizations[0].is_enterprise_install
//       ) {
//         //org wide installation
//         DBInstallData = await installer.authorize({
//           enterpriseId: body.enterprise_id,
//           userId: event.user,
//           isEnterpriseInstall: true,
//         });
//       } else {
//         // non org wide installation
//         DBInstallData = await installer.authorize({
//           enterpriseId: body.enterprise_id,
//           teamId: body.team_id,
//           userId: event.user,
//           isEnterpriseInstall: false,
//         });
//       }
//       const web = new WebClient(DBInstallData.botToken);
//       await web.views.publish({
//         user_id: event.user,
//         view: {
//           type: 'home',
//           blocks: [
//             {
//               type: 'section',
//               block_id: 'section678',
//               text: {
//                 type: 'mrkdwn',
//                 text: 'Welcome to the App Home!',
//               },
//             },
//           ],
//         },
//       });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });
