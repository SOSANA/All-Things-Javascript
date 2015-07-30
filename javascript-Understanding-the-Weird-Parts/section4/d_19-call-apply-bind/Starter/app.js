var person = {
  firstname: 'Jon',
  lastname: 'Doe',
  getFullname: function() {
    
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
    
  }
}

/**
 * working with bind method which creates a copy of a function and binds the 'this' varable to what 
 * ever you pass to the parameter
 */
var logName = function(lang1, lang2) {
  
  console.log('Logged: ' + this.getFullname());
  console.log('Arugments: ' + lang1 + ' ' + lang2);
  console.log('-----------');
// another way to apply bind method to a funciton expression
}.bind(person);

logName();

// bind method returns a new function and makes a copy of the logName function. The bind method sets up this 
// new copy so that when its execution context is created, the js engine sees that it was created with  the 
// this bind method and and sets up some things in the background so when it see's what is the 'this' variable, 
// it says it must be referencing what ever it was passed to the bind method
// so when the js engine see's 'this' it will be the person object
var logPersonName = logName.bind(person);

logPersonName('en');

// the call method also lets you decide what the 'this' variable will be and
// lets you control what the 'this' variable will be
logName.call(person);