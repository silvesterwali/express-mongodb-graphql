const graphql = require("graphql")
const UserType=require("../TypeDefs/UserType")
const { GraphQLList } = graphql
const userData=require("../../mock-data/MOCK_DATA.json")
module.exports = {
    type: new GraphQLList(UserType),
    description: "Mengambil semua data user",
     resolve() {
            return userData
        }
}