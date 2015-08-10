/**
 * working with utilities such as typeof, instanceof, and figuring out what 
 * something is
 */

// what typeof (an operator which is a function) that takes a parameter
// and the variable you are checking, returns a value (a primitive type) in this case a 
// number
var a = 3;
console.log(typeof a);
console.log("----------");

// returns a value (a primitive type) in this case a string
var b = "Hello";
console.log(typeof b);
console.log("----------");

// returns a value (a primitive type) in this case a string called object
var c = {};
console.log(typeof c);
console.log("----------");

// arrays are objects and returns a value (a primitive type) in this case a string called 
// object, which is not very useful
var d = [];
console.log(typeof d); // weird!

// using .call to invoke this function but tell it what the 'this' variable should point too
// since toString uses this variable to output its value, we are saying take this array and
// call 'this' toString on it deeper down in the prototype chain which returns a string 
// array object called [Object Array] and this little trick can tell it's an array this way
console.log(Object.prototype.toString.call(d)); // better!
console.log("----------");

// here we have a person function constructor
function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
// returns a value (a primitive type) in this case a string called object
console.log(typeof e);

// instanceof tells you any object down the prototype chain to find if this object is a instance 
// of another project which returns a boolean
console.log(e instanceof Person);
console.log("----------");

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...
console.log("----------");

// seeing if a variable is a function
var z = function() { };
console.log(typeof z);

