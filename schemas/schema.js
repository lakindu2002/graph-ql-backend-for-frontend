const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');
const { getAllUsers, getUserById, getUserByUsername } = require('../resolvers/user-resolver');
const UserType = require('../types/user');

// declare the queries with the resolvers
const RootQueries = new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType), // return type
            resolve: () => {
                return getAllUsers();
            }
        },
        getUserById: {
            type: UserType,
            args: { // input args
                userId: {
                    type: GraphQLString
                }
            },
            resolve: (_Îsource, args) => {
                const { userId } = args;
                return getUserById(userId);
            }
        },
        getUserByUsername: {
            type: UserType,
            args: {
                username: {
                    type: GraphQLString
                },
            },
            resolve: (_source, args) => {
                const { username } = args;
                return getUserByUsername(username);
            }
        }
    }
})

const schema = new GraphQLSchema({
    query: RootQueries,
    types: [
        UserType
    ]
})

module.exports = schema;