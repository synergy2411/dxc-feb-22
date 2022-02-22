
const {sum, mul} = require("./maths")
const getFortune = require("./fortune")
// import { sum, mul } from './maths.mjs';

console.log("My Lucky Number Today : ", getFortune());
console.log("This Sum is: ", sum(2,4));
console.log("This Mulitple is: ", mul(2,4));

