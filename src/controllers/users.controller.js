const { userServices } = require('../services');
const welcomeTemplate = require('../templates/welcome');
const transporter = require('../utils/mailer');

const registerUser = async(req, res, next) => {
    try {
        const newUser = req.body;
        const result =  await userServices.create(newUser)
        res.status(201).json(result);
        //ya se registro el usuario ahora le mandaremos un correo.
        transporter.sendMail({
            from: "<qdarwin463@gmail.com>",
            to: result.email,
            subject: 'Bienvenido a Chat app',
            text: `Hola ${result.firstname} ${result.lastname} Binvenido a la aplicacion de mensajeria que jamas antes veras`,
            html: welcomeTemplate(result.firstname, result.lastname),
        });
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Faltan datos.'
        })
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const offset = req.query.offset ?? 0; // cuando req.query sea null me traera 0. igual aya abajo
        const limit = req.query.limit ?? 3;
        const users = await userServices.getAll(offset, limit)
        res.json(users)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'error en el token'
        })
    }
}

module.exports = {
    registerUser,
    getAllUsers
}