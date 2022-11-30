const {AuthServices} = require('../services')

const userLogin = async(req, res, next) => {
    try {
        const credencials = req.body;
        const result = await AuthServices.authenticate(credencials)
        if (result) {
            const {firstname, lastname, email, id, phone} = result.result;
            const user = {firstname, lastname, email, id, phone};
            const token = AuthServices.genToken(user);
            user.token = token;
            res.json({...user})
        }else {
            res.status(400).json({message: 'informacion invalida'})
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'contraseña invalida'
        })
    }
}

module.exports = {userLogin};