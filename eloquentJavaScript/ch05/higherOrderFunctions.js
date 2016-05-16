/**
 * Higher-order functions:
 * 	- Functions that operate on other functions, either by taking them as arguments or by returning them
 * 	- If you have already accepted the fact that functions are regular values, there is nothing
 * 		particularly remarkable about the fact that such functions exist. The term comes from mathematics,
 * 		where the distinction between functions and other values is taken more seriously.
 *  - Higher-order functions allow us to abstract over actions, not just values. They come in several forms
 *  - ex:
 *  	- you can have functions that change other functions
 *  	- You can even write functions that provide new types of control flow
 *  	- Passing along arguments, which wraps its argument in another function
 */

/* eslint-disable */
'use strict';

// Higher-order functions allow us to abstract over actions, not just values. They come in several forms.
// ex: you can have functions that create new functions
function greaterThan(n) {
  return function(m) {
    return m > n;
  };
}

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(12)); // true
console.log(greaterThan(5)(3)); //  false
console.log('-------------------');


// you can have functions that change other functions
function noisy(f) {
  return function(arg) {
    console.log('calling with', arg);

    // Since f is Boolean, val is equal to Boolean(arg)
    var val = f(arg);

    // That's why when you call noisy(Boolean)(0), it's similar to just calling Boolean(0), except
    // you have the console.log statements that are added by the noisy function
    console.log('called with', arg, '- got', val);
    return val;
  };
}

noisy(Boolean)(0);
// calling with 0
// called with 0 - got false
noisy(Boolean)('Hello there mate!');
// calling with Hello there mate!
// called with Hello there mate! - got true
console.log('-------------------');


// You can even write functions that provide new types of control flow
function unless(test, then) {
  // The program will print to the console if (!test) is true. In other words, it will print
  // to the console if test is false because (!false) evaluates to true. Test in this example
  // is n % 2, which will be 0 only if n is even. Boolean(0) evaluates to false, so when this
  // happens, (!test) is true and the number is printed to the console
  //
  if (!test) {
    then();
  }
}

// The repeat function is called with two arguments, 3 (which is assigned to the variable times)
// and a function, which is passed as an argument
function repeat(times, body) {
  // Since the first argument given to repeat is 3, the loop in the repeat function will run 3 times
  // The first time, i is 0: 0 is even, so “0 is even” is printed to the console
  // The second time, i is 1: 1 is odd, so nothing happens.
  // The third (and last) time, i is 2: 2 is even, so “2 is even” is printed to the console
  for (var i = 0; i < times; i++) {
    body(i);
  }
}

repeat(3, function(n) {
  unless(n % 2, function() {
    console.log(n, 'is even');
  });
});
// 0 is even
// 2 is even
console.log('-------------------');
repeat(6, function(n) {
  unless(n % 2, function() {
    console.log(n, 'is even');
  });
});
// 0 is even
// 2 is even
// 4 is even
