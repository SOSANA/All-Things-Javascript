/**
 * concat()
 * 	- is a method you call on an existing array and returns back to you a
 *  	new array that has the orignal array plus any parameters you pass in. It
 *  	does not limit the amount of arrguments you pass in
 *  - can flatten arrays
 *  - cannot do nested arrays
 */
var people = [
  {
    name: 'Shane',
  },
  {
    name: 'Sally',
  },
];

var people2 = [
  {
    name: 'Simon',
  },
  {
    name: 'Ben',
  },
];

// adds a copy of people plus any arguments and adds it to a new array
people
.concat(people2)
.forEach(function(person) {
  console.log(person.name);
});

 /*
 var items = [1, 2];
 // cannot do nested arrays and will not flatten array
 var newItems = items.concat([3,4], [5,6,7, [8,9,10]]);

 console.log(newItems);
 */

/*
var items = [1, 2];
// no limit to the amount of arguments and will flatten array
var newItems = items.concat([3,4], [5,6,7]);

console.log(newItems);
*/
