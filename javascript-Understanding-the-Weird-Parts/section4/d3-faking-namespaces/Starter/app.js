/**
 * creating fake namespaces by placing the same greet in different objects as namespace containers
 * so we don't over write variables and have namespace collisions.
 * you will see this alot in librares and frameworks
 * These are refer'd to as "container objects" for namespacing and avoiding global namespacing 
 * collisions that someone else might have written
 **/
var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet);

// using these objects as containers so we don't collide with other things in the global namespace
var english = {
  greetings: {
      basic: 'Hello!'
  }
};

var spanish = {};
spanish.greet = 'Hola!';

console.log(english);
console.log(english.greetings.basic);

