// Arrow Function ()=>{} - one-liner functions; short syntax; with/out {}
// Does not have 'this' keyword
// Does not have 'arguments' keyword
// Can't be called with 'new' Operator


// var user = {
//     firstName : "John",
//     lastName : "Doe",
//     getFullName : function(){
//         // var that = this;
//         return () => this.firstName + " " + this.lastName
//     }
// }

// var nestedFn = user.getFullName();
// console.log("Full Name : ", nestedFn());            // ?

// console.log("Full Name : ", user.getFullName());


var numbers = [2,3,4,5,6];
var doubleValueArray = numbers.map(value => value * 2);
console.log(doubleValueArray); 


var users = [
    {email : "john@test.com", age : 32},
    {email : "jenny@test.com", age : 33},
    {email : "james@test.com", age : 34},
    {email : "alice@test.com", age : 35},
]

var foundUser = users.find(user => user.age === 33);
console.log(foundUser);

var position = users.findIndex(user => user.age === 34);
console.log("POSITION : ", position);
console.log("SPLICE : ", users.splice(position, 1));

var foundUsers = users.filter(user => user.age !== 33)
console.log(foundUsers);

users.forEach(user => console.log("User Email : ", user.email));

var flag = users.every(user => user.email.includes('j'))
console.log(flag);

var someFlag = users.some(user => user.email.includes('ali'))
console.log(someFlag);















// var sum = function(n1,n2){return n1 + n2;}
// var add = (n1,n2) => n1 + n2;
// var double = value => value * 2;

// console.log(add(2,4));
// console.log(double(10));

// function xyz(arguments){
//     console.log(arguments);
// }

// xyz(2,3,4,5)




