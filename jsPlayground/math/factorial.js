/**
 * Calculation of factorials:
 *  - The factorial of a number n is calculated by multiplying
 *  -  you can simply call factorial again, passing in the next lowest value.
 *  - The recursion stops when the value is 1
 *  - The classic example of a function where recursion can be applied is the factorial. This is a
 *  	function that returns the value of multiplying a number again and again by each preceding integer,
 *  	all the way down to one.
 *  - ex:
 *  	The factorial of three is: 3 × 2 × 1 = 6
 *  	The factorial of six is: 6 × 5 × 4 × 3 × 2 × 1 = 720
 *  	The factorial of eight is: 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 40320
 *
 */

/* eslint-disable */
var factor = function(number) {
  var result = 1;
  var count;
  // iterating backwards from 8 to 1, stoping once we hit 1
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return result;
};

console.log('I am the factorial of 3: ' + factor(3)); // 6
console.log('I am the factorial of 6: ' + factor(6)); // 720
console.log('I am the factorial of 8: ' + factor(8)); // 40320
