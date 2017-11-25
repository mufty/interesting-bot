const functions = require('firebase-functions');

const App = require('./src/main/app');

App.run();

exports.botStatus = functions.https.onRequest((request, response) => {
  var _adapter = App.getAdapter('discordAdapter1');

  var _state = "disconnected";
  if(_adapter.connected)
    _state = "connected";

  response.send("Current discord bot status is: " + _state);
});
