const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/query/schema");
const rootValue = require("./graphql/resolvers/resolver");

const app = express();
const PORT = process.env.PORT || 9090;

app.get("/index", (_, res) => res.send({message : "Index Route"}))

app.use(graphqlHTTP({
    schema,
    rootValue,
    graphiql : true
}))

app.listen(PORT , () => console.log("Gateway Server started at PORT : ", PORT))