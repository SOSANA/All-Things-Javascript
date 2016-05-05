/**
 * indexOf()
 * 	- is used to search an array for a particular value
 * 	- has second parameter which is the start position of the search
 * 	- careful on mutating array and passing in second parameter as it might not
 * 		work as expected
 */

/* eslint-disable */
'use strict';

var family = ['Shane', 'Sally', 'Isaac', 'Kittie'];
console.log(family);
console.log(family.indexOf('Kittie')); // 3
console.log(family.indexOf('joe')); // -1
console.log('---------------------');

// reg expression based on whether or not Kittie exists
var kittieExists = family.indexOf('Kittie') > -1;
console.log(kittieExists); // true
console.log('---------------------');

// passing in second parameter to see if the index position of Kittie
console.log(family.indexOf('Kittie', 2)); // -1
console.log('---------------------');

var hamsterExists = family.indexOf('hamster') > -1;

// if hamster does not exist push to end of array
if (!hamsterExists) {
  family.push('hamster');
}

console.log(family);
console.log('---------------------');

// seeing if an object exists
var dog = {
  name: 'Lulu',
};

var cat = {
  name: 'Wiskers',
};

var horse = {
  name: 'Juliet',
};

var familyPets = [dog, cat];

// searching for our object
console.log(familyPets);
console.log('---------------------');
console.log(familyPets.indexOf(horse)); // -1
console.log('---------------------');

// if object does not exist push to end of array
var horseExists = familyPets.indexOf(horse) > -1;
if (!horseExists) {
  familyPets.push(horse);
}

console.log(familyPets);
console.log('---------------------');

// creating a filter of an array to see if any of these events
// match our white list of file extentions
var whiteList = ['.css', '.js'];

var events = [
  {
    file: 'css/core.css',
  },
  {
    file: 'js/app.js',
  },
  {
    file: 'index.html',
  },
];

var filtered = events.filter(event => {
  var ext = require('path').extname(event.file);
  return whiteList.indexOf(ext) > -1;
});

console.log(filtered);
