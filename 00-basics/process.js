const os = require("os")

console.log("Number of Processors available : " , os.cpus().length)

process.env.THREAD_POOL_SIZE = 2;

// for(based on number of CPU){
//     process.fork();
// }