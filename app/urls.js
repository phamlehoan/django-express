const httpRouter = require('../http/urls');
const apiRouter = require('../api/urls');

exports.urlpatterns = (app) => {
  app.use('/', httpRouter);
  app.use('/api', apiRouter);
}
