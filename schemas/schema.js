const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } = require('graphql');
const { getAllUsers, getUserById, getUserByUsername } = require('../resolvers/user-resolver');

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        username: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    }
})


const RootQueries = new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            resolve: () => {
                return getAllUsers();
            }
        },
        getUserById: {
            type: UserType,
            args: {
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

module.exports = new GraphQLSchema({
    query: RootQueries
})