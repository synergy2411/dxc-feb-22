const express = require("express");
const getForecast = require("./utils/forecast");
const getLatLng = require("./utils/geocode");

const app = express();

app.get("/location", (req, res) => {
    const {address } = req.query;
    getLatLng(address)
        .then(({placeName, lat, lng}) => {
            getForecast({lat,lng})
                .then(({temperature, summary}) => {
                    return res.send({placeName, temperature, summary});
                }).catch(err => res.send(err))
        }).catch(err => {
            console.log(err)
            return res.send(err)
        })
})

app.get("/index", (_, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

app.listen(9001, () => console.log("Server started at PORT : 9001"))