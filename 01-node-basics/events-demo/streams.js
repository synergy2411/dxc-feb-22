const stream = require("stream");
const EventEmitter = require("events").EventEmitter;
const fs = require("fs");
const gzip = require("zlib").createGzip();

const readable =  fs.createReadStream("./events.js")
const writable = fs.createWriteStream('./events.txt.gz')

// readable.on("data", (chunk) => {
//     console.log(chunk);
//     writable.write(chunk)
// })

// REQUEST - READABLE - request.pipe(writable) - Upload server
// RESPONSE - WRITABLE - readable.pipe(response) - Download Server

readable.pipe(gzip).pipe(writable);


// console.log(new stream.Stream() instanceof EventEmitter);

// console.log(new stream.Readable() instanceof stream.Stream);
// console.log(new stream.Writable() instanceof stream.Stream);
// console.log(new stream.Transform() instanceof stream.Stream);
// console.log(new stream.Duplex() instanceof stream.Stream);