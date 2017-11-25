const Settings = require('../settings');

class DiscordCommand {

  constructor(msg) {
    this._prefix = Settings.get('general.command_prefix');

    var _splitMsg = msg.content.split(' ');
    this._name = _splitMsg[0].replace(this._prefix, '');
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

module.exports = DiscordCommand;
