const messenger = require('../model/messenger');


module.exports = function(server){

    var io = require("socket.io").listen(server);

    io.sockets.on('connection', function(socket) {
        console.log('an user connected');

        socket.on('setSocketID', function (id) {
            socket.nick_name = id;
            socket.join(id);
        });

        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
        
        socket.on('initChatList', function (data) {
            messenger.getConversationList(data.id)
                .then(function (result) {
                    socket.emit('initChatList', result);
                })
        });

        socket.on('initChatRoom', function (data) {
            messenger.getMessageList(data.chatRoomID)
                .then(function (result) {
                    socket.emit('initChatRoom', result);
                })
        });

        socket.on('send_massage', function (data) {
            messenger.send(data.chatRoomID, data.currentUser.id, data.message)
                .then(function (result) {
                    socket.to(data.targetUserId).emit('receive_massage', result);
                    socket.emit('receive_massage', result);
                })
        })
    });

    return io;
};