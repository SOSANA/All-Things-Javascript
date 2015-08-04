/**
 * function constructors, working with various accepted ways to create objects
 * remember that function constructors are just functions
 */ 

// in most cases with function constructors you are passing default values or 
// set values, to set as apart of the object
function Person(firstname, lastname) {
  // what the 'this' keyword is, its a empty object
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  //testing to see if 'new' invokes this function
  console.log('This function is invoked.');

}
// when use 'new', a empty object is created and invokes/calls the function and 
// changes where the 'this' variable points too, to an empty object in memory that 
// this new operator created
var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);