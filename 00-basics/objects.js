// Object in JavaScript - { }, unordered collection, ways to store data, property name and value pair
// Object creation
// - Literal

// Primitive : String, Number, Boolean
// Reference : Objects, Arrays, Functions, Date


var myBooks = ["book1", "book2", "book3"]           // x0x98x7x6x

var box = {
 width : 4,
 height : 5,
 books : myBooks,                       // x0x98x7x6x
 addBook : function(newBook){
     this.books.push(newBook);
 }
}

box.volume = box.width * box.height;

box.addBook("book4");
console.log(box.books.length);          // 4
console.log(myBooks.length);          // 4

// console.log(box);   // { width, height, volume }


var userA = {
    name : "John"
}

var userB = userA;

userB.name = "Jenny";

console.log(userA.name);            // ?








// - Constructor

// function Person(fname, lname){
//     // var this = {}
//     this.firstName = fname;
//     this.lastName = lname;
//     // this.sayHello = function(){
//     //     return "Hello from " + this.firstName + " " + this.lastName;
//     // }
//     // return this;
// }

// Person.prototype.sayHello = function(){
//     return "Hello from " + this.firstName + " " + this.lastName;
// }

// var john = new Person("John","Doe");
// console.log(john.sayHello());
// var jenny = new Person("Jenny","Doe");
// console.log(jenny.sayHello());


// var str = "Some string";

// String.prototype.countCharacter = function(letter){
//     var count = 0;
//     for(var i = 0; i < this.length; i++){
//         if(this.charAt(i).toLowerCase() === letter.toLowerCase()){
//             count++
//         }
//     }
//     return count;
// }

// console.log("Number of characters : " ,str.countCharacter('s'))

// var str = new String();
// String.prototype.length = 101;
// console.log(str.length)         // 11

// var str = "String value";
// console.log(str.constructor)

// var num = 101;
// console.log(num.constructor);












// - Instance : inheritance in JavaScript

var Shoe = {
    size : 9,
    construcion : 'Sneaker'
}

var magicShoe = Object.create(Shoe)

magicShoe.construcion = "Slipper";
console.log(magicShoe.size);
console.log(magicShoe.construcion);

console.log(magicShoe.hasOwnProperty("size"))
console.log(Shoe.hasOwnProperty("size"))

console.log(Shoe.isPrototypeOf(magicShoe))
console.log(magicShoe.isPrototypeOf(Shoe))

console.log(Object.prototype.isPrototypeOf(Shoe))           // true
console.log(Object.prototype.isPrototypeOf(magicShoe))      // true