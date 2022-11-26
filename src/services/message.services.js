const { Conversations, Messages } = require("../modules");


class MessageServices {
    static async getMessages(id){
        try {
            const messages = await Conversations.findAll({
                where: {id}, 
                attributes: ['id', 'title', 'imageUrl'],
                include: {
                    model: Messages,
                    attributes: ['senderId', 'message']
                }
            })
        } catch (error) {
           throw error 
        }
    }      
}

module.exports = MessageServices;