const Settings = require('../settings');
const _ = require('lodash');
const Command = require('./command');

class CommanderCommand extends Command {

  constructor(msg) {
    super(msg);

    this._program = require('../../lib/commander');
    this._program = this._program.version('0.0.2')
      .usage('[options]');

    this._prefix = Settings.get('general.command_prefix');

    var _splitMsg = msg.content.split(' ');
    this._name = _splitMsg[0].replace(this._prefix, '');

    this._initProgram();
  }

  _initProgram() {
    var _commandSettings = Settings.get('general.commands.' + this._name);
    if(!_commandSettings) {
      console.log('There is no command in settings for: %s', this._name);
      return;
    }

    _.each(_commandSettings, o => this._program = this._program.option.apply(this._program, o));
  }

  resolve() {
    var args = this._msg.content.split(/('.*?'|".*?"|\S+)/);
    args.unshift('PLACE_HOLDER');

    //clean up arguments
    for(var i = 0; i < args.length; i++) {
      if (args[i] == '' || args[i] == ' ') {
        args.splice(i, 1);
        i--;
      }
    }

    this._program.on('--help', function() {
      this._msg.reply(this._program.helpInformation());
    }.bind(this));

    this._program.parse(args);

    var _options = "";
    var _allOptions = this._program.opts();
    for(var p in _allOptions){
      _options += p + "=" + _allOptions[p] + ' ';
    }

    this._msg.reply('Got command: ' + this._name + ' with arguments: ' + _options);
  }

}

module.exports = CommanderCommand;
