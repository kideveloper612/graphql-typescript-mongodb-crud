var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var UserType = require('../types/user.ts');
var UserModel = require('../../models/user.ts');

exports.update = {
  type: UserType.userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    role: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve(root='', params = new UserType) {
    return UserModel.findByIdAndUpdate(
      params.id,
      { $set: { name: params.name, role: params.role } },
      { new: true }
    )
      .catch();
  }
}

