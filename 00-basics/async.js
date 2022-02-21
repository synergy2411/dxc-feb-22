console.log(x);

// var flag = false;
// function longRunningOp(){
//     setTimeout(function(){
//         console.log("Running the operation")
//     }, 0)
//     Promise.resolve("Promise API")
//         .then(function(result){
//             console.log(result)
//             flag = true
//         })
// }

// function webRequest(req){
//     console.log("Start")
//     longRunningOp()
//     if(flag){
//         console.log("End")
//     }
// }

// webRequest({id : 1})

// Start -> End -> Promise API -> Running the operation
// Start -> Promise API -> Running the operation -> End




// CALLBACK FUNCTION
// function longRunningOp(cb){
//     setTimeout(function(){
//         console.log("Timer API");
//         cb(afterEndProgram);
//     }, 3000)
// }

// function afterEndProgram(){
//     console.log("After program ends")
// }

// function endProgram(cb){
//     console.log("End");
//     cb();
// }

// function webRequest(){
//     console.log("Start");
//     longRunningOp(endProgram)   
// }

// webRequest()






// PROMISE API

function longRunningOp(){
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({message : "SUCCESS"})
        }, 3000)
    })
    return promise;
}


// USING ASYNC...AWAIT
async function webRequest(){
    console.log("START")
    var result = await longRunningOp()
    console.log(result);
    console.log("END")
}

// USING THEN() STATEMENT
// function webRequest(){
//     console.log("Start")
//     longRunningOp()
//         .then(function(response){
//             console.log(response);
//             console.log("END")
//         })
//         .then(function(){
//             console.log("After program ends")
//         })
// }

webRequest();