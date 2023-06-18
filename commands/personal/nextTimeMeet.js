const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('來看我').setDescription('下一次看阿勳的時間'),
  async execute(interaction) {
    const currentYear = new Date().getFullYear();
    const targetDate = new Date(`${currentYear + 1}-04-30`);

    const currentDate = new Date(); // 获取当前日期
    const timeDiff = targetDate.getTime() - currentDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    await interaction.reply(`下一次看我的時間還有 **${daysDiff}天** 記得帶包藍莫`);
  },
};
