const express = require("express");
const getLatLng = require("./utils/geocode");

const app = express();

app.get("/location", (req, res) => {
    const {address } = req.query;
    getLatLng(address)
        .then(response => {
            return res.send(response);
        }).catch(err => {
            console.log(err)
            return res.send(err)
        })
})

app.get("/index", (_, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

app.listen(9001, () => console.log("Server started at PORT : 9001"))