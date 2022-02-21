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
// - Instance