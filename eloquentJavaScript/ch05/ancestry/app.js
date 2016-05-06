/**
 * add notes here
 */

/* jshint ignore:start */

import { ancestryArray } from './ancestry';

const ancestry = JSON.parse(ancestryArray);
console.log(ancestry.length); // eslint-disable-line
console.log('-----------------------'); // eslint-disable-line

// shows how a filter Works internally
function showFilter(array, test) {
  const passed = [];
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) {
      passed.push(array[i]);
    }
  }
  return passed;
}

console.log(showFilter(ancestry, function (person) { // eslint-disable-line
  return person.born > 1900 && person.born < 1925;
}));
console.log('-----------------------'); // eslint-disable-line
console.log(ancestry.filter(function (person) { // eslint-disable-line
  return person.father === 'Carel Haverbeke';
}));


/* jshint ignore:end */
