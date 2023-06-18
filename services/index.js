const { DISCORD_MODE, DISCORD_CHANNEL_ID } = require('../config');

const channelMessage = require('./channels');

function botMessages(message) {
  console.log(`「${message.channel.name}」${message.author.username}：${message.content} `);

  if (DISCORD_MODE === 'all') {
    if (message.channel.id === DISCORD_CHANNEL_ID) {
      channelMessage(message);
    }
  }
}

module.exports = {
  botMessages,
};
