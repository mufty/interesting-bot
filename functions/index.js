const functions = require('firebase-functions');
const i18next = require('i18next');

const _en = require('./src/resources/locale/en.json');

const App = require('./src/main/app');

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: _en
    }
  }
}, function() {
  App.run();
});

exports.botStatus = functions.https.onRequest((request, response) => {
  var _adapter = App.getAdapter('discordAdapter1');

  var _state = "disconnected";
  if(_adapter.connected)
    _state = "connected";

  response.send("Current discord bot status is: " + _state);
});
