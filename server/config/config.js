var env = process.env.NODE_ENV || 'development';
console.log('env *****', env);

if (env === 'development' || env === 'test') {
    var config = require('./config.json');
    var envConfig = config[env]; //Grab the value as per enviornment

    Object.keys(envConfig).forEach((key) => {
      process.env[key] = envConfig[key]; //Set the value as per key i.e. [ 'PORT', 'MONGODB_URI' ]
    });
}

// if (env === 'development') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp'
// } else if (env === 'test') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest'
// } else if (env === 'production') {
//   process.env.MONGODB_URI = 'mongodb://admin:General123*@ds125198.mlab.com:25198/udemy-todoapi'
// }
