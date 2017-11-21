const BaseAdapter = require('./baseAdapter');
const Settings = require('../settings');
const Discord = require('discord.js');

class DiscordAdapter extends BaseAdapter {

  constructor(name) {
    super(name);
    this.botToken = Settings.getSecret(this.setting.botTokenPath);
    this.connected = false;

    this.client = new Discord.Client();
    //add event listeners
    this.client.on('ready', this._onReady);
    this.client.on('message', this._onMessage);
    //login
    this.client.login(this.botToken);
  }

  _onReady() {
    this.connected = true;
  }

  _onMessage(msg) {
    //TODO proper message handling
    //ping pong for testing
    if(msg.content === "ping") {
      msg.reply('Pong!');
    }
  }

}

module.exports = DiscordAdapter;
