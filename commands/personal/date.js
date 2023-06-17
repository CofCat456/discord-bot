const { SlashCommandBuilder } = require('discord.js');

const { deathDay } = require('../../config/personal.js');

module.exports = {
  data: new SlashCommandBuilder().setName('我不在的日子').setDescription('阿勳已經過世了多久'),
  async execute(interaction) {
    const currentDate = new Date();
    const targetDate = new Date(deathDay);

    const timeDiff = currentDate.getTime() - targetDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    await interaction.reply(`我已經離開了你們 **${daysDiff}天** 但我心永遠與你們同在`);
  },
};
