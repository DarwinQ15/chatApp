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
        const users = await userServices.getAll()
        res.json(users)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    registerUser,
    getAllUsers
}