/**
 * working with es6 and classes, a new way to set prototype objects
 *
 */
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return 'Hi ' + this.firstname;
  }

}

var john = new Person('John', 'Doe');

console.log(john.greet());

//setting the prototype
class InformalPerson extends Person {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }

  greet() {
    return 'yo ' + firstname;
  }
}
