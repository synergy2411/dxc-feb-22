
const {sum, mul} = require("./maths")
const getFortune = require("./fortune")
const getLuckyQuote = require("./utils");
// import { sum, mul } from './maths.mjs';

console.log("My Lucky Number Today : ", getFortune());
console.log("Lucky Quote : ", getLuckyQuote());
console.log("This Sum is: ", sum(2,4));
console.log("This Mulitple is: ", mul(2,4));

