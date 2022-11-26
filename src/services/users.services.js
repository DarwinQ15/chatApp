const {Users} = require('../modules');

class userServices {
    static async create (newUser) {
        try {
            const result = await Users.create(newUser)
            return result
        } catch (error) {
            throw error
        }
    }
    static async getAll(offset, limit) {
        try {
            const result = await Users.findAll({ //solo funciona con findAll y findAllCountd
                offset,
                limit,
            })
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = {userServices}