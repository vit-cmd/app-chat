const database = require('../database/models');
const bcrypt = require('bcrypt');

const User = database.User

class AuthController {

  // [GET] /auth/login
  login(req, res, next) {
    res.render('login', {
    })
  }

  // [GET] /auth/register
  register(req, res, next) {
    res.render('register', {
    })
  }

  // [POST] /auth/login
  async verifyUser(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({where: {
      username
    }});
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      await User.update({status: true}, {
        where: {
          username
        }
      });
      user.status = true;
      delete user.dataValues.password;
      req.session.user = user.dataValues;
      return res.redirect('/');
    } else {
      res.redirect('back');
    }
  }

  // [POST] /auth/add-user
  async addUser(req, res, next) {
    const user = new User(req.body);
    user.avatar = 'avatar1';
    user.password = await bcrypt.hash(user.password, 10);
    user.save()
      .then(() => {
        return res.redirect('back');
      })
      .catch((err) => {
        return res.json({'error': err});
      });
  }
}

module.exports = new AuthController;
