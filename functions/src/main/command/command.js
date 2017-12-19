const Settings = require('../settings');
const _ = require('lodash');

class Command {

  /**
   * constructor
   *
   * @param  {type} msg message object
   * @return {type}     instance
   */
  constructor(msg) {
    this._msg = msg;
  }

  get msg () { return this._msg }
  get name () { return this._name }
  get prefix () { return this._prefix }
  set prefix (v) { this._prefix = v }

  /**
   * @static isCommand - determine if message is a command
   *
   * @param  {type} msg message object
   * @return {type}     boolean
   */
  static isCommand(msg) {
    var prefix = Settings.get('general.command_prefix');
    if(msg.content[0] == prefix)
      return true;

    return false;
  }

}

module.exports = Command;
