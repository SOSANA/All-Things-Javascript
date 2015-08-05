/**
 * all functions have a property called prototype that starts its life as an empty object
 * and is always there
 */
// function constructor
function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
}

// prototype property is used only by the "new" operator
var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

// adding a prototype on the fly later
Person.prototype.getFormalFullname = function() {
  return this.lastname + ' ' + this.firstname;
}
// finds it down the protoype chain
console.log(john.getFormalFullname());