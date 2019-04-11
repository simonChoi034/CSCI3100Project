var express = require('express');
var router = express.Router();

const messenger = require('../model/messenger');
const withAuth = require('../helper/authentication');

router.post('/get_conversation_list', withAuth, function (req, res) {
    const userID = req.id;
    messenger.getConversationList(userID)
        .then(function (result) {
            res.status(200).json(result)
        })
});

router.post('/get_messages', withAuth, function (req, res) {
    const chatRoomID = req.body.chatRoomID;

    messenger.getMessageList(chatRoomID)
        .then(function (result) {
            res.status(200).json(result);
        })
});

router.post('/send_message', withAuth, function (req, res) {
    const { chatRoomID, message } = req.body;
    const userID = req.id;

    messenger.send(chatRoomID, userID, message)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            console.log(err);
            res.sendStatus(500);
        })

});

module.exports = router;