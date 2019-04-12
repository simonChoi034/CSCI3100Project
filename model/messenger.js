const { db, TABLES } = require('../config/database');

module.exports.getConversationList = (user_id) => {
    return db
        .select(
            TABLES.USER_ACCOUNT.concat('.id as user_id'),
            TABLES.USER_ACCOUNT.concat('.username'),
            TABLES.USER_ACCOUNT.concat('.email'),
            TABLES.CONVERSATION.concat('.c_id')
        )
        .from(db.raw('user_account, conversation'))
        .where(
            db.raw(' (case ' +
                'when conversation.user_one = ? then conversation.user_two = user_account.id ' +
                'when conversation.user_two = ? then conversation.user_one = user_account.id ' +
                'end) ', [user_id, user_id])
        )
        .where(function () {
            this.where('conversation.user_one', user_id).orWhere('conversation.user_two', user_id)
        })
        .orderBy('conversation.time', 'desc')
        .returning('*')
};

module.exports.getMessageList = (chatRoomID) => {
    return db(TABLES.CONVERSATION_REPLY)
        .select(
            'cr_id as id',
            'message',
            'user_id as author',
            'time as timestamp'
        )
        .where('c_id', chatRoomID)
};

module.exports.send = (chatRoomID, userID, message) => {
    return db(TABLES.CONVERSATION_REPLY)
        .insert([{
            message: message,
            user_id: userID,
            c_id: chatRoomID
        }])
        .returning('*')
        .then(function (id) {
            return db(TABLES.CONVERSATION_REPLY)
                .select(
                    'cr_id as id',
                    'message',
                    'user_id as author',
                    'time as timestamp'
                )
                .where('cr_id', id[0])
                .first()
        })
};

module.exports.createConversation = (user1ID, user2ID) => {
    return db(TABLES.CONVERSATION)
        .insert([{
            user_one: user1ID,
            user_two: user2ID
        }])
}