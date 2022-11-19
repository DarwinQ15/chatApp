const { Router } = require('express');
const { registerUser, getAllUsers } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');


const routerUser = Router();

routerUser.post('/users', registerUser);
routerUser.get('/users', authenticate, getAllUsers)


module.exports = routerUser;