const routerUser  = require('./users.routes');
const authRoute  = require('./auth.route');
const conversationRouter = require('./conversations.route');
const messageRouter = require('./message.routes')

module.exports = {
    routerUser,
    authRoute,
    conversationRouter,
    messageRouter
}