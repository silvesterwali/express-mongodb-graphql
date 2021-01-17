const graphql = require("graphql")
const {GraphQLObjectType,GraphQLInt,GraphQLString}=graphql
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLInt },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: {type: GraphQLString},
        ip_address: {type:GraphQLString}
    })
})

module.exports=UserType