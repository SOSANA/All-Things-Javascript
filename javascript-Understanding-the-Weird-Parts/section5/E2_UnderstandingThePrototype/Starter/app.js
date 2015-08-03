var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
      return this.firstname + ' ' + this.lastname;
  }
}

var jon = {
  firstname: 'Jon',
  lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!!
jon.__proto__ = person;
console.log(jon.getFullName());
console.log(jon.firstname);

var jane = {
  firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());

// try in brower console with a.__proto__. to see list of methods and properties
var a = {}; // object {}
var b = function() { }; // function anonymous()
var c = []; // []