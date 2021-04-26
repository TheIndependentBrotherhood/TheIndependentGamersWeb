// Require

const express = require('express');
const router = express.Router();

// Controller

const messagesCtrl = require('../controllers/message');

// Middleware

const auth = require('../middleware/auth');

// Routes

router.post('/messages', auth.userRequest, messagesCtrl.createMessage);
router.get('/messages', messagesCtrl.findMessageList);
router.get('/messages/post/:id', messagesCtrl.findMessagesFromPost);
router.get('/messages/:id', messagesCtrl.findMessage);
router.put('/messages/:id', auth.adminRequest, messagesCtrl.updateMessage);
router.delete('/messages/:id', auth.adminRequest, messagesCtrl.deleteMessage);

module.exports = router;