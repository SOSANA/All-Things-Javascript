/**
 * join()
 * 	- produces a string that is the result of adding together all items in array
 */


/* eslint-disable */
'use strict';

// chain other array methods using es6
var name = 'shane Osbourne';

// uppercasing the string
var upper = name.split(' ') // this creates [shane, osbourne]
    .map(x => x.charAt(0).toUpperCase() + x.slice(1)) // this creates [Shane, Osbourne]
    .join(' '); // this creates Shane Osbourne

console.log(upper);

/*
// chain other array methods using es5
var name = 'shane Osbourne';

// uppercasing the string
var upper = name.split(' ')
    .map(function(x) {
      return x.charAt(0).toUpperCase() + x.slice(1);
    }).join(' ');

console.log(upper);
*/

/*
// using in help command line with node arrayJoin.js help
var help = [
  'Usage',
  '   foo-app <input>'
];

if (process.argv[2] === 'help') {
  console.log(help.join('\n'));
}
*/

/*
// using join()
var names = ['Shane', 'Alan','Osbourne'];
// passing a string with an empty space

console.log(names.join(' '));
console.log('-----------');
// if no string with empty space provided, a comma will be added
console.log(names.join());
*/

/*
// without using join()
var names = ['Shane', 'Osbourne'];

// if you wanted to join this string without using join, but wouldn't work once
// the array changes ex var names = ['Shane', 'Allan','Osbourne'];
// this isn't scalable and is error prone
console.log(names[0] + ' ' + names[2]);
*/
