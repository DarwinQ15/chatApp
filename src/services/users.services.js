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
    static async getAll() {
        try {
            const result = await Users.findAll()
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = {userServices}