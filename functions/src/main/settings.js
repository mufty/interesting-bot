const _loadedSettings = require('../resources/settings.json');
const _loadedSecrets = require('../resources/secrets.json');

var _getSetting = function(path, json){
  if(!json)
    return null;

  var _splitPath = path.split(".");

  var _foundValue = null
  for(var _key in _splitPath){
    var _p = _splitPath[_key];
    if(!_foundValue)
      _foundValue = json[_p];
    else
      _foundValue = _foundValue[_p];
  }

  return _foundValue;
};

class Settings {
  /**
   * Example:
   * "get.my.setting"
   * returns: String of the value from settings or null when not found
   **/
  static get(path) {
    return _getSetting(path, _loadedSettings);
  }

  /**
   * Example:
   * "get.my.secret"
   * returns: String of the value from settings or null when not found
   **/
  static getSecret(path) {
    return _getSetting(path, _loadedSecrets);
  }
}

module.exports = Settings;
