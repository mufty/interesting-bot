const Settings = require('../settings');
const _ = require('lodash');

class Command {

  constructor(msg) {
    this._msg = msg;
  }

  get name () { return this._name }
  get prefix () { return this._prefix }
  set prefix (v) { this._prefix = v }

  static isCommand(msg) {
    var prefix = Settings.get('general.command_prefix');
    if(msg.content[0] == prefix)
      return true;

    return false;
  }

}

module.exports = Command;
