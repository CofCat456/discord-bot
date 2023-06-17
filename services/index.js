const { DISCORD_MODE, DISCORD_CHANNEL_ID } = require('../config');

const channelMessage = require('./channels');

function botMessages(message) {
  console.log(`「${message.channel.name}」${message.author.username}：${message.content} `);

  console.log(DISCORD_MODE);

  if (DISCORD_MODE === 'all') {
    console.log(message.channel.id);
    console.log(DISCORD_CHANNEL_ID);
    if (message.channel.id === DISCORD_CHANNEL_ID) {
      channelMessage(message);
    }
  }
}

module.exports = {
  botMessages,
};
