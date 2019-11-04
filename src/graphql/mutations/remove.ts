var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var UserType = require('../types/user.ts');
var UserModel = require('../../models/user.ts');

exports.remove = {
  type: UserType.userType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root='', params=new UserType) {
    const removeduser = UserModel.findByIdAndRemove(params.id).exec();
    if (!removeduser) {
      throw new Error('Error')
    }
    return removeduser;
  }
}
