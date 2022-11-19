const {registerUser, getAllUsers} = require('./users.controller');
const {userLogin} = require('./auth.controller');


module.exports = {
    registerUser,
    getAllUsers,
    userLogin
}