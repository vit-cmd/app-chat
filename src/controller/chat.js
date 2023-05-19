const database = require('../database/models');

const User = database.User

class ChatController {

  index(req, res, next) {
    // const user = req.session.user;
    // if (!user) return res.redirect('/auth/login');
    return res.render('home', {
    });
  }
  
}

module.exports = new ChatController;
