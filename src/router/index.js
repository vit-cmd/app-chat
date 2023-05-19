const authRouter = require('./auth');
const chatRoute = require('./chat');

function router(app) {
  app.use('/', chatRoute);
  app.use('/auth', authRouter);
}

module.exports = router;
