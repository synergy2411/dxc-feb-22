const express = require("express");

const app = express();

app.use(express.json());

app.post("/user/login", (req, res) => {
    console.log(req.body);
    res.send({message : "SUCCESS"});
})

app.get("/api/protected", (req, res) => {
    res.send({message : "Protected API"})
})

app.listen(9091, () => console.log("Server started at PORT : 9091"));