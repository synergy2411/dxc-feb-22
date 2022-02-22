// const os = require("os");

// console.log("Total Memory :", os.totalmem())
// console.log("Free Memory :", os.freemem())
// console.log("Architecture :", os.arch());
// console.log("Platform : ", os.platform());


// const path = require("path");

// const url = "http://www.your-doamin.com/public/index.html";

// console.log("File Name : ", path.basename(url));
// console.log("Directory : ", path.dirname(url));
// console.log("Extension : ", path.extname(url));



const fs = require("fs")

// SYNC 
// console.log("START");
// const buffer = fs.readFileSync("./fortune.js");
// console.log(buffer.toString());
// console.log("END");

// START -> buffered Content -> End

// ASYNC
// console.log("START")
// fs.readFile("./fortune.js", (err, result) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(result.toString());
// })
// console.log("END")

// START -> END - buffer content


const http = require("http");

const requestListener = (request, response) => {
    console.log("URL : ", request.url);
    console.log("Method : ", request.method);
    console.log("Headers : ", request.headers);
    response.write("Hello Client!!");
    response.end();
}

const server = http.createServer(requestListener)

server.listen(9090, () => console.log("Server started at PORT : 9090"))