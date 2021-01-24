const UserType=require("../TypeDefs/UserType")
const graphql = require("graphql")
const { GraphQLNonNull, GraphQLString } = graphql

const UserData=require("../../mock-data/MOCK_DATA.json")
module.exports = {
    type: UserType,
    description: "Menambah user baru",
    args: {
        first_name: {
            type:GraphQLNonNull(GraphQLString)
        },
        last_name: {
            type:GraphQLNonNull(GraphQLString)
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
    resolve(_, args) {
        UserData.push({
            id: UserData.length + 1,
            ...args
        })
        return args
    }
}