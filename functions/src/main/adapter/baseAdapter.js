const Settings = require('../settings');

/**
 * Base class for adapters initialize all settings
 */
class BaseAdapter {

  /**
   * constructor - loads settings for the correct adapter
   *
   * @param  {string} name unique name of the adapter
   * @return {object}      instance
   */
  constructor(name) {
    this.name = name;
    this.setting = Settings.get('adapters.' + name);
  }

}

module.exports = BaseAdapter;
