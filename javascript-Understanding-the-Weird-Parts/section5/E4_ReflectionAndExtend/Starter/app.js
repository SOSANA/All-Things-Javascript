var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;  
  }
}

var john = {
  firstname: 'John',
  lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

// an example of reflection
// the "for in" loop reached out and grabbed every property and method, not just on the object 
// but also on the object's prototype 
for (var prop in john) {
  console.log(prop + ': ' + john[prop]);
}

// reflecting on the john object, look at its properties, and meta data of its properties
for (var prop in john) {
  // checking the prop string is actually on the john object
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ': ' + john[prop]);
  }
}

var jane = {
  address: '111 Maint St.',
  getFormalFullName: function() {
    return this.lastname + ', ' + this.firstname;
  }
}
console.log(jane);
var jim = {
  getFirstName: function() {
    return firstname;
  }
}

// using underscore library
// extends only adds methods and properties to the first argument 'john' and assigns all other arguments
// methods and properties from the other arguments passed in
// this composes or combines these objects, takes all these properties and methods of these other objects
// and adds them directly to john for you
// this is using reflection and setting jane and jim properties and methods to john, has it loops through 
_.extend(john, jane, jim);
// john now contains all of jane and jim's properties and methods
console.log(john);
console.log(jane);
console.log(jim);





