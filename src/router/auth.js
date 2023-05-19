const express = require('express');
const authController = require('../controller/auth');

const authRouter = express.Router();

// authRouter.get('/login', authController.login);
// authRouter.get('/register', authController.register);
// authRouter.post('/register', authController.addUser);
// authRouter.post('/login', authController.verifyUser);

module.exports = authRouter;