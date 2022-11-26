const {Router} = require('express');
const { 
    getUserConversations,
    getConversationMessages,
    createMessageInConversation, 
    createConversation,
    getMessages

 } = require('../controllers');

const authenticate = require('../middlewares/auth.middleware')

/**
 * @openapi
 * /api/v1/conversations/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Get conversations from users
 *    tags: [conversations]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema: 
 *          type: integer
 *          minimum: 1
 *        description: user Id
 *    response:
 *      200:
 *        description: OK
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: OK
 *                data: 
 *                  type: array
 *                  items: {}
 */

const router = Router();

//me obtiene todas las observaciones de un usuario
//agregar un campo para el parametro de la peticion
//userId
//es poder enviar el token en la peticion
router.get('/conversations/:id', authenticate, getUserConversations);

router.get('/conversations/:conversationId/messages', authenticate, getConversationMessages);

router.post('/conversations/:conversationId/messages',authenticate, createMessageInConversation);

router.post('/conversations', authenticate, createConversation);

router.get('/conversations/messages/:conversationId', getMessages);

module.exports = router;