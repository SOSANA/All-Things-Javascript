/**
 * Another way to create objects not using function constructors(was introduced to mimic other languages similar to class objects)
 * This all about building objects with prototypes. These examples show pure prototypal inheritance
 */

// polyfill
// if we are using an older browser engine that does not have Object.create
// this whole statement will be skipped if the Object.create exists
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation' + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return 'Hi ' + this.firstname;
  }
};
// creates a empty object assigned to john with access to person properties and methods
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);
console.log(john.greet());
console.log(john.__proto__);
