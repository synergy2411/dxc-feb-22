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

// var numbers = [2,3,4,5,6];
// var doubleValueArray = numbers.map(value => value * 2);
// console.log(doubleValueArray);

// var users = [
//     {email : "john@test.com", age : 32},
//     {email : "jenny@test.com", age : 33},
//     {email : "james@test.com", age : 34},
//     {email : "alice@test.com", age : 35},
// ]

// var foundUser = users.find(user => user.age === 33);
// console.log(foundUser);

// var position = users.findIndex(user => user.age === 34);
// console.log("POSITION : ", position);
// console.log("SPLICE : ", users.splice(position, 1));

// var foundUsers = users.filter(user => user.age !== 33)
// console.log(foundUsers);

// users.forEach(user => console.log("User Email : ", user.email));

// var flag = users.every(user => user.email.includes('j'))
// console.log(flag);

// var someFlag = users.some(user => user.email.includes('ali'))
// console.log(someFlag);

// var sum = function(n1,n2){return n1 + n2;}
// var add = (n1,n2) => n1 + n2;
// var double = value => value * 2;

// console.log(add(2,4));
// console.log(double(10));

// function xyz(){
//     console.log(arguments[1]);
// }

// xyz(2,3,4,5)

// Block Scope Variables : restrict the scope of variable to the nearest block
// - let : for other type variables
// - const : for creating constants

// const fruits = ["apple", "banana", "guava"];
// fruits.push("kiwi");

// fruits = ["apple", "banana", "guava", "kiwi"]
// console.log(fruits);

// const user = {
//     name : "John"
// }

// user = {
//     name : "James"
// }
// user.name = "Jenny"

// console.log(user);          // ?

// const USERNAME = "John Doe";

// USERNAME = "James Doe";

// function display(arr){
//     if(arr.length > 2){
//         let LOAD = "LOADING"
//         console.log(FLASH);             // "undefined"
//     }else{
//         let FLASH = "FLASHING"
//     }
// }

// display([1,2,3,4])

// Destructuring - "unpacking" the collection - [Array] / {Object}

// let fruits = ["apple", "banana", "kiwi"];

// let [f1, f2, f3] = fruits;

// fruits[1] = "oranges";
// f3 = "guava";
// console.log(fruits);

// console.log(f3, f2, f1);

// let ninja = {
//     name : "John",
//     belt : "Black",
//     age : 34
// }

// let { name : ninjaName, age : ninjaAge, belt : ninjaBelt } = ninja;

// console.log("BELT : ", ninjaBelt)

// let user = {
//     firstName : "John",
//     lastName : "Doe",
//     address : {
//         city : "Bengaluru",
//         street : "201 Main Road, Marathahalli"
//     },
//     friends : ["Jenny", "Alice"]
// }

// let {
//     firstName,
//     lastName,
//     address : {
//         city, street
//     },
//     friends : [f1, f2]
// } = user;

// console.log(firstName, lastName, city, street, f1, f2);

// let  [state, setState] = useState()

// REST/SPREAD OPERATOR (...)
// REST - Creating the array from individual items : function argument list : must be last argument
// SPREAD - Spliting the collection (object/array) into individual items

// let product = {
//     name : "Carpet",
//     price : 199
// }

// let cart = {
//     ...product,
//     description : "The awesome product",
//     price: 299
// }

// console.log(cart);



// const numbers = [3, 4, 5];
// const newArr = [1, 2, ...numbers, 6, 7, 8];
// console.log(newArr); // [3,4,5] || 3






// const display = (email, ...args) => {
//     console.log(args[0]);           // ?
// }

// display("test@test.com")
// display("test@test.com", 32)
// display("test@test.com", 32, true)





// TEMPLATE LITERALS - " " || ' ' || ` ` (back-tick)
// - Multiline string without (\n)
// - Embed the variable within string without (+)

// let name = "John Doe";
// let age = 32;

// let helloString = `
// Hello from ${name},
// I am ${age} years old!
// ` 
// console.log(helloString);



// CLASS
// class Animal{
//     constructor(species, legs){
//         this.species = species;
//         this.legs = legs;
//     }
//     getDetails(){
//         return `${this.species} is having ${this.legs} legs!!`;
//     }
// }

// class Tiger extends Animal{
//     constructor(species, legs, type){
//         super(species, legs);
//         this.type = type;
//     }
//     getDetails(){
//         return `${this.species} is type ${this.type} - ${super.getDetails()}`
//     }
// }

// let kitty = new Tiger("Tiger", 4, "Small");
// console.log(kitty.getDetails())

// let bunny = new Animal("Rabbit", 4);
// console.log(bunny.getDetails());



// MAP

// const user = { "name" : "John Doe"}

// const map = new Map();
// map.set("name", "John Doe");
// map.set(121, "Code numbers");
// map.set(true, "isAdmin");
// map.set(user, "10001");

// console.log(map.get(true))

// for(let key of map.keys()){
//     console.log(key)
// }
// for(let value of map.values()){
//     console.log(value)
// }




// SET

let set = new Set()

set.add("101")
set.add("102")
set.add("103")
set.add("101")
set.add("103")
set.add("106")


console.log(set.size);          // 4