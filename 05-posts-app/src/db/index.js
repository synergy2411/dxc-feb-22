const { connect } = require("mongoose")

const MONGO_URI = "mongodb://localhost:27017/dxc-feb-22";

connect(MONGO_URI)
    .then(conn => {
        console.log("Mongo Connected...")
    }).catch(err => {
        console.log(err);
        process.exit(1);
    })