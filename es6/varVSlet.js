/**
 * The only difference between the two is that var is scoped to the nearest
 * function block and let is scoped to the nearest enclosing block - which could
 * be a function, a for-loop or an if-statement block.
 *
 * Basically, let is block scoped, var is function scoped.
 *
 * ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

 var a = 5;
 var b = 10;

 if (a === 5) {
   let a = 4; // The scope is inside the if-block
   var b = 1; // The scope is inside the function

   console.log(a);  // 4
   console.log(b);  // 1
 }

 console.log(a); // 5
 console.log(b); // 1
