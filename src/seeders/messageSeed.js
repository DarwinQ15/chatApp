const db = require('../utils/database');
const { Messages } = require('../modules');
const initModels = require('../modules/initModels');

initModels();
const moreMessages = [];

for (let i = 0; i < 100; i++) {
  moreMessages.push({
    senderId: 2,
    conversationId: 1,
    message: `mensaje ${i}`,
  });
}

db.sync().then(() => {
  moreMessages.forEach(async (message) => await Messages.create(message));
});