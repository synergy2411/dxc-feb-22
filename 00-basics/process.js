const os = require("os")
const { sum }= require("sk-utils-module/maths")


console.log("Number of Processors available : " , os.cpus().length)

process.env.THREAD_POOL_SIZE = 2;

// for(based on number of CPU){
//     process.fork();
// }