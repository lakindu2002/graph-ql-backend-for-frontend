const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// define the schema (provide information about the fields the query can return)
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

module.exports = UserType;