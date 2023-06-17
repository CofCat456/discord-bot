const { SlashCommandBuilder } = require('discord.js');

const { chDeathDay } = require('../../config/personal.js');

module.exports = {
  data: new SlashCommandBuilder().setName('我的忌日').setDescription('阿勳哪一天走的'),
  async execute(interaction) {
    await interaction.reply({
      content: `我的忌日是 ${chDeathDay} 忘了捏蛋蛋自殺`,
      ephemeral: true,
    });
  },
};
