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

/**
 * Setting handler to retrieve values
 */
class Settings {
  /**
   * @static get - finds value from settings.json
   *
   * @param  {string} path can be dot convention string
   * @return {string}      found value or null
   */
  static get(path) {
    return _getSetting(path, _loadedSettings);
  }

  /**
   * @static getSecret - finds value from secrets.json
   *
   * @param  {type} path can be dot convention string
   * @return {type}      found value or null
   */
  static getSecret(path) {
    return _getSetting(path, _loadedSecrets);
  }
}

module.exports = Settings;
