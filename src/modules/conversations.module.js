const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Conversation = db.define("conversations", {
    id: {
        type: DataTypes.INTEGER,
        autoincrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl:{
        type: DataTypes.STRING,
        field: 'image_url'
    },
    type: {
        type: DataTypes.ENUM('single', 'group'),
        defaultValue: 'single'
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'created_by'
    }
});

module.exports = Conversation;