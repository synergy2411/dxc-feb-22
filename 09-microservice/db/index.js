const express = require("express");

const app = express();

app.get("/todos", (_, res) => {
    if(config.hasData){
        return res.send([{label : "grocery", status : false}])
    }else{
        process.exit(1)
    }
})

app.listen(4040, () => {console.log("DB Server started at PORT : 4040")})


// const getData = () => {
//     const config = {};

//     if(config.hasData){     // undefined
//         return [{label : "grocery", status : false}]
//     }else{
//         // throw new Error("Can't connet to Database");
//         process.exit(1);
//     }
// }

// module.exports = getData;