const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5a8916972e79bf54db6710c9').then((todo) => {
  console.log(todo);
});
