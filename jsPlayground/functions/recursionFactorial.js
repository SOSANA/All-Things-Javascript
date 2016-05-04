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
 *  - The factorial of a number n is calculated by multiplying 1 * 2 * 3 *...n
 *  -  you can simply call factorial again, passing in the next lowest value.
 *  - The recursion stops when the value is 1
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
    console.log(num);
    return (num * factorial(num - 1));
  }
}

var result = factorial(8);
console.log(result);
console.log(8 * 0);
