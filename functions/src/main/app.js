const _ = require('lodash');
const Settings = require('./settings');

const adapters = {
  DiscordAdapter: require('./adapter/discordAdapter')
};

var _adapterInstances = {};

class App {

  static run() {
    //init all adapters
    _.forEach(Settings.get('adapters'), function(value, name){
      var _instance = new adapters[value.type](name);
      _adapterInstances[name] = _instance;
    });
  }

}

module.exports = App;
