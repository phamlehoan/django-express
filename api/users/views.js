const models = require(require('path').resolve('./') + '/models');
const serializers = require('./serializers');

exports.index = async (req, res, next) => {
  const users = await models.user.findMany();
  const usersSerializer = serializers.UserSerializer(users, many=true);

  res.json(usersSerializer);
}
