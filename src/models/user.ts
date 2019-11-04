var mongooseModel = require('mongoose');
var Schema = mongooseModel.Schema;

var userSchemaModel = new Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    required: true
  }
});
var Model = mongooseModel.model('User', userSchemaModel);
module.exports = Model;
