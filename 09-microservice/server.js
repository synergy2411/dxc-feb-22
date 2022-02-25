const express = require("express");
const axios = require("axios").default;

// const getData = require("./db");

const app = express();

app.get("/index", (_, res) => res.send({message : "Index API"}))

app.get("/different-route", (_, res) => {

    axios.get("http://localhost:4040/todos")
        .then(response => {
            return res.send(response.data)
        }).catch(err => res.send({err}))

})

app.listen(9090, () => console.log("Server started at PORT : 9090"))