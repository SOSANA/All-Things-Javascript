/**
 * An arrow function expression has a shorter syntax compared to function
 * expressions and lexically binds the this value.
 *
 * Parentheses around the single argument are optional, so it is up to you
 * whether you want to enforce it or not. Some see it as a bad practice, others
 * think it's fine.
 */

 // ES6
 [1, 2, 3].map(n => n * 2); // [2, 4, 6]

 // ES5
 [1, 2, 3].map(function(n) { return n * 2; }); // [2, 4, 6]
