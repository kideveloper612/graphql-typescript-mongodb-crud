var addUser = require('./add.ts').add;
var removeUser = require('./remove.ts').remove;
var updateUser = require('./update.ts').update;

module.exports = {
  addUser,
  removeUser,
  updateUser
}