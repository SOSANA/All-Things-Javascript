/**
 * Recursion:
 *  - good reference src: http://www.sitepoint.com/recursion-functional-javascript/
 *  - is an important programming technique, in which a function calls itself
 *  - is a technique for iterating over an operation by having a function call itself repeatedly until
 *  	it arrives at a result. Most loops can be rewritten in a recursive style, and in some functional
 *   	languages this approach to looping is the default. However, while JavaScript’s functional coding
 *   	style does support recursive functions, we need to be aware that most JavaScript compilers are not
 *   	currently optimized to support them safely
 *  - is best applied when you need to call the same function repeatedly with different parameters from
 *    within a loop. While it can be used in many situations, it is most effective for solving problems
 *    involving iterative branching, such as fractal math, sorting, or traversing the nodes of complex
 *    or non-linear data structures
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
function factorial(num) {
  // If the number is less than 0, reject it.
  if (num < 0) {
    return -1;
  }
  // If the number is 0, its factorial is 1.
  else if (num === 0) {
    return 1;
  }
  // Otherwise, call this recursive procedure again.
  else {
    // we will recursively call 8 times until we get to factorial of 1 and stop returning the value
    // = num * factorial(num - 1)
    // = 8 * factorial(8 - 1)
    // = 8 * 7
    // = 56

    // next call will look like this
    // = num * factorial(num - 1)
    // = 56 * factorial(7 - 1)
    // = 56 * 6
    // = 336

    // next call will look like this
    // = num * factorial(num - 1)
    // = 336 * factorial(6 - 1)
    // = 336 * 5
    // = 1680

    // next call will look like this
    // = num * factorial(num - 1)
    // = 1680 * factorial(5 - 1)
    // = 1680 * 4
    // = 6720

    // next call will look like this
    // = num * factorial(num - 1)
    // = 6720 * factorial(4 - 1)
    // = 6720 * 3
    // = 20160

    // next call will look like this
    // = num * factorial(num - 1)
    // = 20160 * factorial(3 - 1)
    // = 20160 * 2
    // = 40320

    // are recurisive call finally gets to 1 and stops, return the value
    // = num * factorial(num - 1)
    // = 40320 * factorial(2- 1)
    // = 40320 * 1
    // = 40320
    // console.log(num);
    return (num * factorial(num - 1));
  }
}

var result = factorial(8);
console.log('I am the factorial of 3: ' + factorial(3));
console.log('I am the factorial of 6: ' + factorial(6));
console.log('I am the factorial of 8: ' + result); // 40320
console.log('-----------------------');

// not using recursion
var factor = function(number) {
  var result = 1;
  var count;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return result;
};

console.log('I am the factorial of 3: ' + factor(3)); // 6
console.log('I am the factorial of 6: ' + factor(6)); // 720
console.log('I am the factorial of 8: ' + factor(8)); // 40320
