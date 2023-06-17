module.exports = {
  replyMessage: '這邊先冷靜一下',
  errorMessage: ({ status, statusText }) =>
    `對不起，我發生 **${status} - ${statusText}** 錯誤，所以沒有辦法回覆你。`,
  sendMaxLengthMessage: '字太長了 回不了',
};
