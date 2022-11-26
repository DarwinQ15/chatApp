const { Conversations, Users, Messages, Participants} = require('../modules');

class ConversationsServices {
    static async getByUser(id, offset, limit){
        try {
            const conversations = await Users.findAll({
                where: {id},
                attributes: ['id'],
                include: {
                    model: Conversations,
                    attributes: ['id', 'title', 'imageUrl'],
                },
                offset, 
                limit,
                subQuery: false
            });
            return conversations
        } catch (error) {
            throw error
        }
    }
    
    static async getWithMessages(id, offset, limit) {
        try {
          const conversationData = await Conversations.findAndCountAll({
            attributes: ['title', 'imageUrl', 'type'],
            where: { id },
            include: [
              {
                model: Messages,
                required: true,
                as: "messages",
                // attributes: [],
              },
              {
                model: Users,
                attributes: ['firstname']
              },
            ],
            offset,
            limit,
            subQuery: false
          });
          return conversationData;
        } catch (error) {
          throw error;
        }
      }

      static async createMessage(data){
        try {
          // const {senderId, conversationId, message} = data;
          const result = await Messages.create(data)
          return result
        } catch (error) {
          throw error
        }
      }

      static async create(data){
        try {
          const {createdBy, title, participants} = data;
          const conversation = await Conversations.create({title, createdBy});
          //nesecito agregar a los participantes a esa conversacion;
          const conversationId = conversation.id;
          const conversacionParticipants = participants.map((userId)=> {return {conversationId, userId}});
          conversacionParticipants.forEach(async (participant) => await Participants.create(participant));
        } catch (error) {
          throw error
        }
      }

    static async getMessages (conversationId, offset, limit) {
      try {
        const result = await Messages.findAndCountAll({
          where: conversationId, offset, limit
        });
        return result
      } catch (error) {
        throw error
      }
    }
}

module.exports = ConversationsServices;


