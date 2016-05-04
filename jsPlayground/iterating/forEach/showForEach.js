/**
 * ForEach:
 *  - available as a standard method on arrays. Since the array is already provided as the thing the method
 *  	acts on, forEach takes only one required argument: the function to be executed for each element
 *  - useful if you want to do something to every item in the array
 *  - runs asynchronously
 *  - accepts a closure and invokes that closure for every item in the array and passes
 *   in that item as an argument to the closure
 * - really convenient if you want to do something to every item in an array
 */

/* eslint-disable */
// shows how a forEach Works
function showForEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

showForEach(['Wampeter', 'Foma', 'Granfalloon'], console.log);
// Wampeter
// Foma
// Granfalloon
console.log('---------------------------');


var names = ['Zach', 'Sosana'];

function printName(name) {
  console.log(name);
}

function showForEach2(name, fn) {
  for (var i = 0; i < name.length; i++)
    fn(name[i]);
}

showForEach2(names, printName);
console.log('---------------------------');

function showForEach3(names, printName) {
  for (var i = 0; i < names.length; i++)
    printName(name[i]);
}

showForEach3();
console.log('---------------------------');


var numbers = [1, 2, 3, 4, 5];
var sum = 0;

showForEach(numbers, function(number) {
  // add all the numbers in the array
  sum += number;
});
console.log(sum);
