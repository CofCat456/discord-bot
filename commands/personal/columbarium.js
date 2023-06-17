const { SlashCommandBuilder } = require('discord.js');

const { columbarium } = require('../../config/personal.js');

module.exports = {
  data: new SlashCommandBuilder().setName('我在哪').setDescription('阿勳骨灰罈位置'),
  async execute(interaction) {
    await interaction.reply({
      content: `兄弟我人在 **${columbarium}** 有空來看我`,
      ephemeral: true,
    });
  },
};
