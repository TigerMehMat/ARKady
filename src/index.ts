import * as Discord from 'discord.js';
import * as config from './config.json';
import StartBot from "./StartBot";

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  StartBot(client);
});

client
    .login(config.discordToken)
    .catch(console.error);
