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

function range(start, end, step){
  if (step === undefined) {
    step = 1;
  }

  var output = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      output.push(i);
    }
  } else {
    for (var j = start; j >= end; j += step) {
      output.push(j);
    }
  }

  return output;
}

function sum(input) {
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    var value = input[i];
    total += value;
  }
  return total;
}

console.log(sum(range(1, 10))); // 55
console.log(range(2, 10, 2)); // [2, 4, 6, 8, 10]
console.log(range(20, 3, -3)); // [20, 17, 14, 11, 8, 5]
console.log(sum(range(5, 10))); // 45
console.log(range(50, 1, -5)); // [50, 45, 40, 35, 30, 25, 20, 15, 10, 5]
