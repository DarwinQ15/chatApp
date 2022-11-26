const {registerUser, getAllUsers} = require('./users.controller');
const {userLogin} = require('./auth.controller');
const { getUserConversations, getConversationMessages, createMessageInConversation, createConversation, getMessages } = require('./conversations.controllers');


module.exports = {
    registerUser,
    getAllUsers,
    userLogin, 
    getUserConversations,
    getConversationMessages,
    createMessageInConversation,
    createConversation,
    getMessages
    
}