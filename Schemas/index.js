const userData=require("../mock-data/MOCK_DATA.json")
var graphql = require("graphql")
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql

const UserType =require("./TypeDefs/UserType")


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        // query to select all user data
        getAllUser: {
            type: new GraphQLList(UserType),
            args: { id: { type: GraphQLInt,required:true } },
            resolve(parent, args) {
                return userData
            }
        },
        // mengabmil user berdasarkan id
        getUser: {
            type: new GraphQLList(UserType),
            args: {
                id: {
                    type:GraphQLInt
                }
            },
            // will return the user  by id 
            async resolve(parent, args) {
                console.log(args)
                return await userData.filter((el) => el.id === args.id)
               
            }
        }
    }

})
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                first_name: {
                    type:GraphQLString
                },
                 last_name: {
                    type:GraphQLString
                 },
                  email: {
                    type:GraphQLString
                  },
                   gender: {
                    type:GraphQLString
                },
                    ip_address: {
                    type:GraphQLString
                }
            },
            resolve(parant, args) {
                // query to data base example insert into bla bla
                userData.push({
                    id: userData.length + 1,
                    first_name: args.first_name,
                    last_name: args.last_name,
                    email: args.email,
                    gender: args.gender,
                    ip_address:args.ip_address
                })
                // return all after save
                return args
            }
        }
    }
})

module.exports=new GraphQLSchema({query:RootQuery,mutation:Mutation})