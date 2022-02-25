const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Query {
    hi : String
    age : Int
    post : Post
    posts : [Post]
}
type Post {
    title : String
    body : String
    published : Boolean
}
`)