const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Conversation = require('./conversations.module');
const Users = require('./users.module');

const Participants = db.define('participants', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
            model: Users,
            key: 'id'
        }
    },
    conversationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'conversation_id',
        references: {
            model: Conversation,
            key: 'id'
        }
    }
});

module.exports = Participants;