const Settings = require('../settings');

class BaseAdapter {

  constructor(name) {
    this.name = name;
    this.setting = Settings.get('adapters.' + name);
  }

}

module.exports = BaseAdapter;
