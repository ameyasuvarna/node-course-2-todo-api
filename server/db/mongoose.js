var mongoose = require('mongoose');

// const REMOTE_MONGO = 'mongodb://admin:General123*@ds125198.mlab.com:25198/udemy-todoapi';
// const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';
// const MONGO_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;
// mongoose.connect(MONGO_URI);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose
};
