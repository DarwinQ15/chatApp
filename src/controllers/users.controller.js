const { userServices } = require('../services')

const registerUser = async(req, res, next) => {
    try {
        const newUser = req.body;
        const result =  await userServices.create(newUser)
        res.status(201).json(result)
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