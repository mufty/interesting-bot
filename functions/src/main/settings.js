const _ = require('lodash/object');
const _loadedSettings = require('../resources/settings.json');
const _loadedSecrets = require('../resources/secrets.json');

var _getSetting = function(path, json){
  if(!json)
    return null;

  return _.get(json, path, null);
};

/**
 * Setting handler to retrieve values
 */
class Settings {
  /**
   * @static get - finds value from settings.json
   *
   * @param  {string} path can be dot convention string
   * @return {object}      found value or null
   */
  static get(path) {
    return _getSetting(path, _loadedSettings);
  }

  /**
   * @static getSecret - finds value from secrets.json
   *
   * @param  {string} path can be dot convention string
   * @return {object}      found value or null
   */
  static getSecret(path) {
    return _getSetting(path, _loadedSecrets);
  }
}

module.exports = Settings;
