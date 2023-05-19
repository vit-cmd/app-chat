const express = require('express');
const chatController = require('../controller/chat');

const chatRouter = express.Router();

chatRouter.get('/', chatController.index);

module.exports = chatRouter;