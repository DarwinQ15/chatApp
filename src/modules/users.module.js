const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const bcrytp = require('bcrypt');

/**
 * @openapi
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         firstname:
 *           type: string
 *           example: Darwin
 *         lastname:
 *           type: string
 *           example: Quintero
 *         email:
 *           type: string
 *           example: darwin@gmail.com
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJDYW5kZWxhcmlhIiwibGFzdG5hbWUiOiJDYWJyZXJhIiwiZW1haWwiOiJjYW5kZUBnbWFpbC5jb20iLCJpZCI6OCwicGhvbmUiOiIxMjMxMjMyODEiLCJpYXQiOjE2Njg3NDQyNTMsImV4cCI6MTY2ODc2MjI1M30.-qY1Phx6CyQemuK7kg1MJW6_0Di-BW3_dhbuS1LMhpt5HKJANXw8RrSciYsrbvStBwyrzuXSM57JwwMUz5ABm
 *     register:
 *       type: object
 *       properties:
 *        firstname:
 *         type: string
 *         example: Darwin
 *        lastname:
 *          type: string
 *          example: Quintero
 *        email:
 *          type: string
 *          example: darwin@gmail.com
 *        phone:
 *          type: string
 *          example: 3023224533
 *        password:
 *          type: string
 *          example: 1234
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */



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
     
});

module.exports = Users;