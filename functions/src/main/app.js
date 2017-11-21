const _ = require('lodash');
const Settings = require('./settings');

const adapters = {
  DiscordAdapter: require('./adapter/discordAdapter')
};

var _adapterInstances = {};

/**
 * Main class to init the whole thing
 */
class App {

  /**
   * @static run - intialize all adapters
   *
   * @throws exception - when trying to initialize two adapters with the same name
   */
  static run() {
    //init all adapters
    _.forEach(Settings.get('adapters'), (value, name) => {
      if(!_adapterInstances[name]) {
        var _instance = new adapters[value.type](name);

        _adapterInstances[name] = _instance;
      } else {
        throw "Adapter with name " + name + " already exists! To fix this try to keep the names unique.";
      }
    });
  }

  /**
   * @static getAdapter - return adapter instance
   *
   * @param  {type} name name of the adapter
   * @return {object}    adapter instance
   */
  static getAdapter(name) {
    return _adapterInstances[name];
  }

}

module.exports = App;
