const userData=require("../mock-data/MOCK_DATA.json")
var graphql = require("graphql")
const { GraphQLObjectType, GraphQLSchema, GraphQLString,GraphQLNonNull } = graphql

const UserType =require("./TypeDefs/UserType")

const getAllUser = require("./Query/getAllUser")
const getUser=require("./Query/getUser")


const createUser=require("./Mutations/createNewUser")

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    description:"Root query for all enpoint you need",
    fields: {
        // query to select all user data
        getAllUser,
        // mengabmil user berdasarkan id
        getUser
    }

})
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    description:"mutation for all your data to database",
    fields: {
        createUser
    }
})

module.exports=new GraphQLSchema({query:RootQuery,mutation:Mutation})