/**
 * working with es6 and classes, a new way to set prototype objects
 * Using Babel.JS src: https://babeljs.io/docs/usage/cli/
 * Using npm you can install Babel globally, making it available from the command line.
 * 	$ npm install --global babel
 * Compile Files
 * Compile the file script.js and output to stdout.
 * 	$ babel script.js
 * 	# output...
 * If you would like to output to a file you may use --out-file or -o.
 * 	$ babel preapp.js --out-file app.js
 * To compile a file every time that you change it, use the --watch or -w option:
 * 	$ babel preapp.js --watch --out-file app.js
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
