//sirve para import y export 

const Users = require('./users.module');
const Conversations = require('./conversations.module');
const Messages = require('./messages.modules');
const Participants = require('./participants.module');

module.exports = {
    Users, 
    Conversations,
    Messages,
    Participants,
}