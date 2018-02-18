var mongoose = require('mongoose');

const REMOTE_MONGO = 'mongodb://admin:General123*@ds125198.mlab.com:25198/udemy-todoapi';
const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';
const MONGO_URL = process.env.PORT || REMOTE_MONGO ? LOCAL_MONGO;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);

module.exports = {
  mongoose
};
