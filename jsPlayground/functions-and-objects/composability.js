/**
 * Composability:
 *  - known as "composition" refers to function composition (not to be confused
 *  	with object composition) is an act or mechanism to combine simple functions
 *  	to build more complicated ones. Like the usual composition of functions in
 *  	mathematics, the result of each function is passed as the argument of the
 *  	next, and the result of the last one is the result of the whole.
 *  - Higher-order functions start to shine when you need to compose functions.
 *  	ex: code that finds the average age for men and for women in the data set
 *  - Putting bits and pieces togather, so that a meaning can be made out of it
 *  - comes at at cost due to 'inefficiency'.
 *    - Function calls in JavaScript are costly compared to simple loop bodies.
 *    - Abstractions add layers between the raw things the computer is doing and
 *    	the concepts we are working with and thus cause the machine to perform
 *    	more work.
 *    - This is not an iron law—there are programming languages that have better
 *    	support for building abstractions without adding inefficiencies, and even
 *    	in JavaScript, an experienced programmer can find ways to write abstract
 *    	code that is still fast. But it is a problem that comes up a lot
 *    - Fortunately, most computers are insanely fast. If you are processing a
 *    	modest set of data or doing something that has to happen only on a human
 *    	time scale (say, every time the user clicks a button), then it does not
 *    	matter whether you wrote a pretty solution that takes half a millisecond
 *    	or a super-optimized solution that takes a tenth of a millisecon
 *    - It is helpful to roughly keep track of how often a piece of your program
 *    	is going to run. If you have a loop inside a loop (either directly or
 *    	through the outer loop calling a function that ends up performing the
 *    	inner loop), the code inside the inner loop will end up running N×M times,
 *    	where N is the number of times the outer loop repeats and M is the number
 *    	of times the inner loop repeats within each iteration of the outer loop.
 *    	If that inner loop contains another loop that makes P rounds, its body
 *    	will run M×N×P times, and so on. This can add up to large numbers, and
 *    	when a program is slow, the problem can often be traced to only a small
 *    	part of the code, which sits inside an inner loop
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

// Function that computes the average for all the numbers in an array
function average(array) {
  // Plus is the combine function that computes the sum of all numbers in the array
  // It’s a bit silly that we have to define plus as a function, but operators in
  // JavaScript, unlike functions, are not values, so you can’t pass them as arguments
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}


// Maps an object p, that represents a person to an age by using p’s born and died properties
function age(p) {
  return p.died - p.born;
}

// Filter function used to return male family members
function male(p) {
  return p.sex === 'm';
}

// Filter function used to return female family members
function female(p) {
  return p.sex === 'f';
}

// Find the average age for males in the ancestry array
console.log('average age for males: ' + average(ancestry.filter(male).map(age))); // 61.666666666666664
// Find the average age for females in the ancestry array
console.log('average age for females: ' + average(ancestry.filter(female).map(age))); // 54.55555555555556
console.log('---------------------');

// using parseFloat() and toFixed() to round 2 decimal points
var fixed = parseFloat(average(ancestry.filter(male).map(age)).toFixed(2));
var fixed2 = parseFloat(average(ancestry.filter(female).map(age)).toFixed(2));

// testing to make sure its a number and not a string as toFixed() if not inside
// parseFloat() will cause number to turn to a string
console.log('is fixed and fixed2 a number?: ');
console.log(typeof fixed === 'number'); // true
console.log(typeof fixed2 === 'number'); // true
console.log('---------------------');
console.log('average age for males rounded 2 DP: ' + fixed); // 61.7
console.log('average age for females rounded 2 DP: ' + fixed2); // 54.56
console.log('---------------------');
