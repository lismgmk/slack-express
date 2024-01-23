require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const slackInstallHandler = require('./routers/init/slackInstallHandler');
const slackEventsHandler = require('./routers/events/slackEventsHandler');
const shortCutHandler = require('./routers/shortcats/shortCutHandler');
const slackOAuthRedirectHandler = require('./routers/init/slackOAuthRedirectHandler');
const slashEmailRealmHandler = require('./routers/slash/slashEmailRealmHandler');
const slashRemoveClientDataHandler = require('./routers/slash/slashRemoveClientDataHandler');
const slashSetAdminHandler = require('./routers/slash/slashSetAdminHandler');

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
app.post('/slash/set-admin', slashSetAdminHandler);
app.post('/slash/remove-client-data', slashRemoveClientDataHandler);
app.get('/slack/install', slackInstallHandler);
app.get('/', (req, res) => res.send('go to /slack/install'));
app.get('/slack/oauth_redirect', slackOAuthRedirectHandler);

app.listen(port, () =>
  console.log(
    `Example app listening on port ${port}! Go to http://localhost:3000/slack/install to initiate oauth flow`
  )
);

