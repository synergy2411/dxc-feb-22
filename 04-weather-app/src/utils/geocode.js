const axios = require("axios").default;

const getLatLng = address => {
    return new Promise ((resolve, reject) => {
    const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ`
    axios.get(URL)
        .then(response => {
            const {place_name : placeName, center : [lat, lng] } = response.data.features[0]
            resolve({placeName, lat, lng})      
        }).catch(err => reject(err))
    })
}

module.exports = getLatLng;