const BaseAdapter = require('./baseAdapter');
const Settings = require('../settings');
const Discord = require('discord.js');

class DiscordAdapter extends BaseAdapter {

  constructor(name) {
    super(name);
    this.botToken = Settings.getSecret(this.setting.botTokenPath);
  }

}

module.exports = DiscordAdapter;
