const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const bcrytp = require('bcrypt');

const Users = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    profileImage: {
        type: DataTypes.STRING,
        field: 'profile_image'
    },
    password: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING
    }
}, {
    hooks: {
        beforeCreate: (user, options) => {
            const {password} = user;
            const hash = bcrytp.hashSync(password, 8);
            user.password = hash;
        }
    }
},{
    timestamps: false
});

module.exports = Users;