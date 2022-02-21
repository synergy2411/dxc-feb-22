// Function are syntax as well as value

// Anonymous functions - does not have their name
// Function Expression
// Nested Functions
// Function Hoisting
// Callback Function / Higher Order Function (HOF)
// IIFE - immediately invoked function expression



// Lexical Environment - defined the outer scope based upon function placement
// Scope chaining -> inner -> outer -> global

// (function(){
//     var x = 101;
// }())

// (function(){
//     console.log(x);     // "undefined"
// })()

// function a(){
//     // var x =201;
//     function b(){
//         // var x = 301;
//         console.log(x);             // 101
//     }
//     b()
// }

// a();

// Closure - binding the outer scope variable with inner function
// function test(){
//     var x = 4;
//     return function(){
//         return ++x;
//     }
// }

// var nestedFn = test();
// console.log(nestedFn());        // 5
// console.log(nestedFn());        // 6
// console.log(nestedFn());        // 7
// console.log(test());




function buildTicket(transport){
    var numOfPass = 0;
    return function(name){
        return "Hello "+name+"\n You are going via "+transport+
            "\nYour Ticket ID #"+(++numOfPass);
    }
}

var ship = buildTicket("Ship");
console.log(ship("John"));      // ?
console.log(ship("Jenny"));      // ?

var car = buildTicket("Car");
console.log(car("James"));          // ?





















// (function(){
//     console.log("IIFE Called")
// })();







// setTimeout(function(){
//     console.log("Timer");
// }, 3000)









// JavaScript Engine - two Phases
// - Creational Phase : Memory is allocated to variables/functions
// - Executional Phase : start executing the program

// function mystry(){
//     var chooseNumber = function (){                // xxxxxwhdd8893 - "undefined"
//         return 7;
//     }
//     return chooseNumber;
//     var chooseNumber = function (){
//         return 12;
//     }
// }

// var nestedFn = mystry()
// console.log(nestedFn());            // 7 | error | 12






// var addition = function (n1, n2){
//     return n1 + n2;
// }

// console.log(addition(4,5));          // ?

// console.log("Addition : " , add(2,4))