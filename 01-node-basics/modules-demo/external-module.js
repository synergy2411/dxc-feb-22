// const yargs = require("yargs");
// require("colors");
const axios = require("axios").default;

axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        console.log(response.data)
    }).catch(err => console.log(err))

// console.log("Success Message".green)
// console.log("Error Message".red);
// console.log("Warning Message".rainbow);

// console.log("Process Arguments : ", process.argv);
// console.log("Yargs Arguments : ", yargs.argv);