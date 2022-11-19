const db = require('../utils/database');
const {Users, Participants, Messages, Conversations} = require('../modules');
const initModels = require('../modules/initModels');

initModels();

const users = [
    {
        firstname: 'Darwin',
        lastname: 'Quintero',
        email: 'darwin@gmail.com',
        password: '1234',
        phone: '3046104293',
        country: 'Colombia'
    },
    {
        firstname: 'charith',
        lastname: 'patiño',
        email: 'charith@gmail.com',
        password: '12345',
        phone: '3046104293',
        country: 'Venezuela'
    }
];

const conversations = [
    {
        title: 'Con el compa',
        createdBy: '2'
    },
    {
        title: 'con los compas',
        type: 'group',
        createdBy: '1'
    },
    {
        title: 'Con el compa',
        createdBy: '2'
    }
];

const participants = [
    { conversationId: 1, userId: 2 },
    { conversationId: 1, userId: 1 },
    { conversationId: 2, userId: 2 }
];

const messages = [
    {senderId: 2, conversationId: 1, message: 'hola'},
    {senderId: 1, conversationId: 1, message: '¿Quien eres?'},
    {senderId: 2, conversationId: 1, message: 'no lo se dime tu'},
    {senderId: 2, conversationId: 2, message: 'salimos o que?'},
    {senderId: 1, conversationId: 2, message: 'de una papa'}
]

db.sync({force: true})
    .then(()=> {
        console.log('sincronizado')
        users.forEach(async(user)=> await Users.create(user));
        setTimeout(()=> {
            conversations.forEach(async(conversation)=> await Conversations.create(conversation));
        }, 1000);

        setTimeout(()=> {
            participants.forEach(async(participant)=> await Participants.create(participant));
        }, 2000);

        setTimeout(()=> {
            messages.forEach(async(message)=> await Messages.create(message));
        }, 3000)
    })