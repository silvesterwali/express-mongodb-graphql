const graphql = require("graphql")
const { GraphQLNonNull,GraphQLInt } = graphql
const UserData = require("../../mock-data/MOCK_DATA.json")

const UserType =require("../TypeDefs/UserType")
module.exports = {
            type: UserType,
            description:"Mengambil semua data user",
            args: {
                id: {
                    type:GraphQLNonNull(GraphQLInt)
                }
            },
            // will return the user  by id 
            async resolve(parent, args) {
                console.log(args)
                return await UserData.find((el) => el.id === args.id)
               
            }
        
}
