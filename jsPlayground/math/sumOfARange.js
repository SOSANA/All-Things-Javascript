/**
 * To compute the sum of a range of numbers: console.log(sum(range(1, 10)));
 * Write a range function that takes two arguments, start and end, and returns an array containing all
 * the numbers from start up to (and including) end.
 * Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run
 * the previous program and see whether it does indeed return 55.
 * As a bonus assignment, modify your range function to take an optional third argument that indicates
 * the “step” value used to build up the array. If no step is given, the array elements go up by increments
 * of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
 * Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */

/* eslint-disable */
'use strict';

function range(start, end, step){
  // If no optional step, set step to 1
  if (step === undefined) {
    step = 1;
  }

  // Initialize the array that will eventually be returned
  var output = [];

  // If the range is increasing, continue pushing 'i' to the array and incrementing 'i' by step until 'i' is greater
  // than end, then stop
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      output.push(i);
    }
  } else {
    // If the range is decreasing, continue pushing 'j' to the array until 'j' is less than end, then stop. Remember
    // 'j' will get smaller because step is negative.
    for (var j = start; j >= end; j += step) {
      output.push(j);
    }
  }

  // Return the result
  return output;
}

function sum(input) {
  // Set total to start at 0
  var total = 0;

  // Go through each item in the array and add it to result
  for (var i = 0; i < input.length; i++) {
    var value = input[i];
    total += value;
  }

  // Return result
  return total;
}

console.log(sum(range(1, 10))); // 55
console.log(range(2, 10, 2)); // [2, 4, 6, 8, 10]
console.log(range(20, 3, -3)); // [20, 17, 14, 11, 8, 5]
console.log(sum(range(5, 10))); // 45
console.log(range(50, 1, -5)); // [50, 45, 40, 35, 30, 25, 20, 15, 10, 5]
