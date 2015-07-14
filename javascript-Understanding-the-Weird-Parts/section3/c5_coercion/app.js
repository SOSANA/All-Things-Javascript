/**
 * the first value or parameter is coerced by the javascript engine into a string.
 * In the computer memory the number 1 and the string 2 look nothing alike. When the
 * javascript engine runs it trys to figure out what you are trying to do under
 * the hood by coercing the function automatically. javascript is dynamically typed so
 * it tries to convert the value you want because your not explicitly.
 */ 

// you would understand that 1 + '2' is 12 because this is a string and
// a number and its being coerced.
var a = 1 + '2';
console.log(a); // 12

// here is another example
var b = 1, c = '2';
console.log(b+c); // 12
