const Settings = require('../settings');

var settings = Settings.get('router');

/**
 * Router handles command transport
 */
class Router {

  /**
   * @static route commands based on the settings to an adapter
   *
   * @param  {type} command to route
   */
  static route(command) {
    const App = require('../app');

    if(!command.name) {
      console.log("Missing command name.");
      return;
    }

    var _route = settings[command.name];

    var _adapter = App.getAdapter(_route.adapter);
    _adapter.resolve(command, _route.options);
  }

}

module.exports = Router;
