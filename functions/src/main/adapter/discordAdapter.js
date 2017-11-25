const BaseAdapter = require('./baseAdapter');
const Settings = require('../settings');
const Discord = require('discord.js');

/**
 * Discord specific adapter
 */
class DiscordAdapter extends BaseAdapter {

  /**
   * constructor - initialize instance, loads settings and login to the discord
   * using token from the settings, adds event listeners
   *
   * @param  {string} name unique name
   * @return {object}      instance
   */
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

  /**
   * _onReady - event listener
   */
  _onReady() {
    this.connected = true;
  }

  /**
   * _onMessage - event listener
   *
   * @param  {Message} msg incomming message from discord.js
   */
  _onMessage(msg) {
    //TODO proper message handling
    //ping pong for testing
    if(msg.content === "ping") {
      msg.reply('Pong!');
    }
  }

}

module.exports = DiscordAdapter;
