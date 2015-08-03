/**
 * functional programming where we code and think in terms of functions, first class functions.
 * To minimize code and reuse, we put our code into functions. Below is a classic example of
 * using functional programming where you are using first class functions to our advantage to
 * segment your code in even cleaner and tighter ways. This lets you build really clean and
 * beautiful code
 */
function mapForEach(arr, fn) {

  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    );
  }

  return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

// reusing mapForEach to iterate through the loop and double every number in the array by 2
var arr2 = mapForEach(arr1, function(item) {
  return item * 2;
});
console.log(arr2);

// reusing mapForEach to show boolean for items greater than 2 by passing in a array and function
var arr3 = mapForEach(arr1, function(item) {
  return item > 2;
});
console.log(arr3);

// reusing mapForEach to output a boolean on each item in the array to true or false based on the
// limiter value you give it
var checkPastLimit = function(limiter, item) {
  return item > limiter;
};
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

// creating a function so we don't have to provide the bind method to every function just like
// we did above for variable arr4. This function isn't getting executing, its just creating an
// object by copying it with the bind method to set the first parameter
var checkPastLimitSimlified = function(limiter) {
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};
// now we set our limiter
var arr5 = mapForEach(arr1, checkPastLimitSimlified(1));
console.log(arr5);
