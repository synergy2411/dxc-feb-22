const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const PORT = process.env.PORT || 9090;

app.get("/index", (_, res) => res.send({message : "Index Route"}))

const schema = buildSchema(`
    type Query {
        hi : String
    }
`)

const rootValue = {
    hi : () => "Hi from GraphQL"
}

app.use(graphqlHTTP({
    schema,
    rootValue,
    graphiql : true
}))

app.listen(PORT , () => console.log("Gateway Server started at PORT : ", PORT))