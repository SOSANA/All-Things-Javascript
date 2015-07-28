// IIFE
var firstname = 'John';

(function(global, name) {
    
    var greeting = 'Hello';
    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);
    
}(window, firstname)); // IIFE

console.log(greeting);






















