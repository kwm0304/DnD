const { Character, User, Group } = require('../models')

const resolvers = {
    Query: {
        //finds the users of a group
        group: async (parent, args) => {
            return await Group.findById(args.groupname).populate('users').populate({
                path: 'users',
                populate: 'group'
            });
        },
        //finds the users associated character?
        users: async (parent, args) => {
            return await User.findById(args.username).populate('character');
        },

    }
}
module.exports = resolvers;