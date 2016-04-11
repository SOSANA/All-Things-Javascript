 /* eslint-disable */

// adding entries
var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
  //console.log(journal);
  //console.log('-------------');
}

addEntry(["carrot","exercise","weekend"], false);
addEntry(["cauliflower","ice cream","brushed teeth","cycling","work"], false);
addEntry(["spaghetti","peanuts","computer","weekend"], true);
console.log(journal);
console.log('-------------');

// creating a 4x4 table to find out the correlations using phi formula
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
console.log(phi([76,9,4,1]));
console.log('-------------');


import { JOURNAL } from './jacques_journal';

// check to see if event exists
function hasEvent(event, entry) {
  return entry.events.indexOf(event) !== -1;
}

/**
 * The table is trying to record all the different possible outcomes from the if statements.
 *  - You get 0 if there's no event, and there's no squirrel.
 *  - You get 1 if there's an event but no squirrel.
 *  - You get 2 if there's no event, but there is a squirrel.
 *  - you get 3 if there is an event, and a squirrel.
 * You then increment one of four different positions in the table variable index based results.
 * You can basically think of index as keeping track of all possible states.
 * Since you're iterating over a journal with i, you're trying to keep track of what's happening.
 */
function tableFor(event, journal) {
  var table = [0, 0, 0, 0];

  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i];
    // You get index 0 if there's no event, and there's no squirrel.
    var index = 0;
    // You get index 1 if there's an event but no squirrel.
    if (hasEvent(event, entry)) {
      index += 1
    }

    if (entry.squirrel) {
      index += 2
    }

    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));
console.log('-------------');


function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations);
console.log('-------------');



/*
for (var i = 0; i < JOURNAL.length; i++) {
  var entry = JOURNAL[i];
  if (hasEvent("peanuts", entry) &&
     !hasEvent("brushed teeth", entry))
    entry.events.push("peanut teeth");
}
*/

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
