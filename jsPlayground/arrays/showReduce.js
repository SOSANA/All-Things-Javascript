/**
 * .reduce():
 *  - src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 *  - builds up a value by repeated calling the iterator, passing in previous values;
 * 		see the spec for the details; useful for summing the contents of an array and
 * 		many other things
 *  - The higher-order operation that represents this pattern is called reduce
 *  	(or sometimes fold). You can think of it as folding up the array, one element at a
 *  	time. When summing numbers, you’d start with the number zero and, for each element,
 *  	combine it with the current sum by adding the two.
 *  - The parameters to the reduce function are, apart from the array, a combining function
 *  	and a start value.
 *  - Remember the point of reduce is to turn an array of elements into a single value. For
 *  	example, you might want to use reduce to get the sum of all the elements in the array.
 *  - Another common pattern of computation on arrays is computing a single value from
 *  	them. Our recurring example, summing a collection of numbers, is an instance of
 *  	this. Another example would be finding the person with the earliest year of birth
 *  	in the data set
 *  - has an added convenience. If your array contains at least one element, you are allowed
 *  	to leave off the start argument. The method will take the first element of the array as
 *  	its start value and start reducing at the second element
 *  - Use the elements in a set to compute a single value. For example, we’ve taken an array
 *  	of numbers and used reduce to get the sum of all the numbers.
 *  	ex:
 *  	we went through all the people objects in the ancestry array to find the oldest person
 */

/* eslint-disable */
'use strict';

var ancestryArray = '[\n  ' + [
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
  '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
  '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
  '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
  '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
  '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
  '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
  '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
  '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
  '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
  '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
  '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
  '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
  '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
  '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
  '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
  '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
  '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
  '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
  '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
  '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
  '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
  '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
  '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
  '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
  '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
  '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
].join(',\n  ') + '\n]';

var ancestry = JSON.parse(ancestryArray);

// shows how reduce works internally
// Remember the point of reduce is to turn an array of elements into a single value
// For example, you might want to use reduce to get the sum of all the elements in the array.
// To do this, you need to keep a running total of the sum, which starts at 0. Then, as you go
// through each element in the array, you use combine to add each element to current,
// which is the running total
function showReduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++) {
    current = combine(current, array[i]);
  }
  return current;
}

var test = [1, 2, 3, 4];

// So in the parameters to the combine function below, a is current or the running total, and b
// is each element in the array
console.log(showReduce(test, function (a, b) {
  return a + b;
}, 0)); // 10
console.log('-----------------------');
// here is how the actual built-in reduce method works
// The first time the callback is called, previousValue and currentValue can be one of two
// values. If initialValue is provided in the call to reduce, then previousValue will be
// equal to initialValue and currentValue will be equal to the first value in the array. If
// no initialValue was provided, then previousValue will be equal to the first value in the
// array and currentValue will be equal to the second value
console.log([2, 4, 6, 8].reduce(function(previousValue, currentValue, currentIndex, array) {
  // previousValue will be equal to the first value in the
  // array and currentValue will be equal to the second value
  return previousValue + currentValue;
})); // 20
console.log('-----------------------');

// same as above but showing alternative way to pass around functions
var numbers = [65, 44, 12, 4];

function getSum(total, num) {
    return total + num;
}
function mySumFunction(array, sum) {
    console.log(array.reduce(sum));
    console.log('-----------------------');
}

mySumFunction(numbers, getSum); // 125

// find the most ancient known ancestor
console.log('most ancient known ancestor: ');
console.log(ancestry.reduce(function (prev, cur) {
  // previousValue will be equal to the first value in the
  // array and currentValue will be equal to the second value
  // iterate thru comparing second value less than the first value until we find lowest date born
  if (cur.born < prev.born) {
    return cur;
  } else {
    return prev;
  }
})); // {name: "Pauwels van Haverbeke", born: 1535, …}
console.log('-----------------------');

// showing how we could have found most ancient ancestor manually
function reduceManually() {
  var min = ancestry[0];
  for (var i = 1; i < ancestry.length; i++) {
    var cur = ancestry[i];
    if (cur.born < min.born) {
      min = cur;
    }
  }
  return min;
}
console.log('most ancient known ancestor reduced manually: ');
console.log(reduceManually());
