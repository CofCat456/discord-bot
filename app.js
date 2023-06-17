const express = require('express');

const { PORT, DISCORD_BOT_TOKEN } = require('./config');

const { discord } = require('./connection');
const { botMessages } = require('./services');

discord.login(DISCORD_BOT_TOKEN);

discord.once('ready', (c) => {});

discord.on('messageCreate', async (message) => {
  if (message.author?.bot) return;

  botMessages(message);
});

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
