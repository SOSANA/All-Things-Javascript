/**
 * filter()
 * 	- creates a new array, it does this by calling a function that you provide
 * 		as the argument with each item in the source array, then it looks at the
 * 		return value from that function call. If it's a truthy value such as a
 * 		number, string, boolean then the current item we are looking at will make
 * 		it into the filtered array. How ever if the function call returns a
 * 		falsey value then the item is discarded
 *  - remember that you only need to return a truthy or a falsey value to then
 *  	function that gets called to each item
 */


/* eslint-disable */
'use strict';

var items = [1, 2, 3, 4, 5];

// filters out numbers 3 or less
var filtered = items.filter(x => x > 3);

console.log(items); // shows orginal array
console.log('---------------------');
console.log(filtered); // shows filtered array
console.log('---------------------');

// practical example
var people = [
  {
    name: 'Shane',
    pets: ['cat', 'dog'],
  },
  {
    name: 'Simon',
    pets: ['horse'],
  },
  {
    name: 'Ben',
    pets: [],
  },
];

var people2 = [
  {
    name: 'Shane',
    pets: ['cat', 'dog'],
  },
  {
    name: 'Simon',
    pets: ['horse'],
  },
  {
    name: 'Ben',
  },
];

// creating a new array that only contains people that has pets, provide a
// function that checks the length of that pets array
var filteredPeople = people.filter(x => x.pets.length);

// this will return any object that contains the pet property in the event not
// all objects have this property
var filteredPeople2 = people2.filter(x => x.pets);

// if no pets property exists on some of the objects than this will cause an error
// var filteredPeople2 = people2.filter(x => x.pets.length);

console.log(filteredPeople);
console.log('---------------------');
console.log(filteredPeople2);
console.log('---------------------');

// this is were the real power comes, by chaining methods together
var lessons = [
  {
    title: 'Javascript Array methods in depth - join',
    views: 960,
    tags: ['array', 'join'],
  },
  {
    title: 'Javascript Array methods in depth - concat',
    views: 1050,
    tags: ['array', 'concat'],
  },
  {
    title: 'Javascript Array methods in depth - slice',
    views: 2503,
    tags: ['array', 'slice'],
  },
  {
    title: 'Javascript Array methods in depth - bind',
    views: 2500,
    tags: ['functions', 'bind'],
  },
];

// fitler this lesson by the tags that were given and also filter by popular
// videos. We only show videos that have over a 1000 views
var minViews = 1000;
var searchTerm = 'array';

var filteredLessons = lessons
  .filter(x => {
    return x.tags.indexOf(searchTerm) > -1 &&
    x.views > minViews;
  })
  .sort((a, b) => b.views - a.views) // sorting the views by descending order
  .map(x => `   <li>${x.title}</li>`) // providing template string
  .join('\n'); // join it together with a new line character

var filteredLessons2 = lessons
  .filter(x => x.tags.indexOf(searchTerm) > -1) // filter out objects that do not include the array tag
  .filter(x => x.views > minViews) // filter out objects that have views less than 1000 views
  .sort((a, b) => b.views - a.views) // sorting the views by descending order
  .map(x => `   <li>${x.title}</li>`) // providing template string
  .join('\n'); // join it together with a new line character

console.log(lessons);
console.log('---------------------');
console.log(`<ul>
${filteredLessons}
</ul>`);
console.log('---------------------');
console.log(`<ul>
${filteredLessons2}
</ul>`);
