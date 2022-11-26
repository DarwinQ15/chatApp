const { Router } = require('express');
const { registerUser, getAllUsers } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');


const routerUser = Router();

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Register a new user into the app
 *     tags: [Users]
 *     requestBody: 
 *      description: To register a new user you need a firstname, lastname, email, phone and password
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/register'
 *     responses:
 *       201:
 *         description: CREATED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Users"
 *  
 */


routerUser.post('/users', registerUser);
routerUser.get('/users', getAllUsers)


module.exports = routerUser;