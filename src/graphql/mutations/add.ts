
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var UserType = require('../types/user.ts');
var UserModel = require('../../models/user.ts');

exports.add = {
  type: UserType.userType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    role: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve(root='', params=new UserType) {
    const uModel = new UserModel(params);
    const newUser = uModel.save();
    if (!newUser) {
      throw new Error('Error');
    }
    return newUser
  }
}