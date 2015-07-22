/**
 * array is a collection, we can mix and match the types in any array (boolean, objects, numbers, strings)
 */

// one way to use an array
/*
var arr = new Array();
// grabing an element
arr[];
*/

// another way to use array
var arr = [
  1, 
  false, 
  {
    name: 'Jon',
    address: '111 Main St.'
  },
  function(name) {
    var greeting = 'hello ';
    console.log(greeting + name);
  },
  'hello'
];

console.log(arr);
// invoking the array and passing
arr[3](arr[2].name);