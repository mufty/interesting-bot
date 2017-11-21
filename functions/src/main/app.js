const _ = require('lodash');
const Settings = require('./settings');

const adapters = {
  DiscordAdapter: require('./adapter/discordAdapter')
};

var _adapterInstances = {};

class App {

  static run() {
    //init all adapters
    _.forEach(Settings.get('adapters'), (value, name) => {
      var _instance = new adapters[value.type](name);
      if(!_adapterInstances[name])
        _adapterInstances[name] = _instance;
      else
        throw "Adapter with name " + name + " already exists! To fix this try to keep the names unique.";
    });
  }

  static getAdapter(name) {
    return _adapterInstances[name];
  }

}

module.exports = App;
