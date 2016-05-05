/**
 * sort()
 * 	- sorts element in place and returns the same array
 * 	- sorting defaults to unicode when sorting numbers which converts numbers
 * 		to strings first
 */

/* eslint-disable */
'use strict';

var items = ['Shane', 'Sally', 'Thomas', 'Isaac', 'Alibaba', 'David'];
var items2 = [10, 30, 2, 20];
var items3 = [10, 30, 2, 20];
var items4 = ['Shane', 'Thomas', 'Daniela', 'Al', 'Eric'];
var items5 = ['Shane', 'Thomas', 'Daniela', 'Al', 'Eric'];

// sorting defaults strings alphabetically
items.sort();

// "Numeric sort", sorting in ascending order by calling the comparative function
items2.sort((a, b) => a - b);

/*
// works the same as above for ascending order but shows behind the scenes
// the comparative function only cares if you return either 0, or a value less
// than 0 or a value above 0
items2.sort((a, b) => {
  if (a - b === 0) {
    return 0;
  } else if (a - b < 0) {
    return -1;
    // this can be anything below 0 and still works
    return -9875403298759827435902375;
  } else if (a - b > 0) {
    return 1;
    // this can be anything above 0 and still works
    return 9875403298759827435902375;
  }
});
*/

// "Numeric sort", sorting in descending order by calling the comparative function
// you simply reverse the order of the parameters
items3.sort((a, b) => b - a);

// sorting a array based on the length of the strings in ascending order
items4.sort((a, b) => a.length - b.length);

// sorting a array based on the length of the strings in descending order
items5.sort((a, b) => b.length - a.length);

console.log(items);
console.log('---------------------');
console.log(items2);
console.log('---------------------');
console.log(items3);
console.log('---------------------');
console.log(items4);
console.log('---------------------');
console.log(items5);
console.log('---------------------');

// practical example
var lessons = [
  {
    title: 'Javascript Array methods in depth - concat',
    views: 1000,
  },
  {
    title: 'Javascript Array methods in depth - slice',
    views: 1050,
  },
  {
    title: 'Javascript Array methods in depth - join',
    views: 1025,
  },
];

// sort objects based on views in descending order, aka higher to lower views
var list = lessons
.sort((a, b) => b.views - a.views) // sorts each lesson based on views it has and gives us back same array but modifed
.map(x => `   <li>${x.title} (${x.views})</li>`) // call map and which calls each item in the array, which we access the title and the views and apply padding to offset list in output
.join('\n'); // we join this together with a new line character

var output = `<ul>\n${list}\n</ul>`;
console.log(output);
