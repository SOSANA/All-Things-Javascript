/**
 * Composability:
 *  - See functionNotes.js or composability.js for explanation
 *  - Helpful walk through
 *  	src: http://watchandcode.com/courses/eloquent-javascript-the-annotated-version/lectures/206821
 *
 * Great-great-great-great grandfather:
 *  - most ancient known ancestor is grandfather Philibert Haverbeke. By starting with him, you can
 *  	trace his lineage to find out whether the most ancient person in the data, Pauwels van Haverbeke,
 *  	is a direct ancestor of a given person. And if he is how much DNA does this person theoretically
 *  	share with him
 *  - This person shares half thier DNA with my Mom and half with thier Dad. This is given by the formula
 *  	1/2G, where G is the number of generations from this person. Their parents are one generation from
 *  	this person, so this person shares 1/2 1 = 1/2 of my DNA with each of them. Their grandparents are 2
 *  	generations away from them. That means that they share 1/2 G = 1/2 2 = 1/4 of my DNA with each of their
 *  	four grandparents. This pattern, 1/2G, keeps going with each generation
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

// To be able to go from a parent’s name to the actual object that represents this person,
// we first build up an object that associates names with people
var byName = {};

ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(byName['Philibert Haverbeke']);
console.log('---------------------');

// The general thing we’re doing in this problem is similar when we used reduce on an array to
// get the sum of all the numbers in the array, in that we’re going through a tree-like data
// structure (instead of an array) to produce a single value, which represents the amount of
// DNA a person in the ancestry array shares with Pauwels van Haverbeke (instead of a simple
// sum of the numbers in an array)
// The way we want to reduce this shape is by computing a value for a given person by combining
// values from their ancestors. This can be done recursively: if we are interested in person A,
// we have to compute the values for A’s parents, which in turn requires us to compute the value
// for A’s grandparents, and so on
// Given a person, a function to combine values from the two parents of a given person, and a
// default value, reduceAncestors condenses a value from a family tree
function reduceAncestors(person, f, defaultValue) {
  // handles a single person
  function valueFor(person) {
    if (person === undefined || null) {
      // defaultValue will be used for people who are not in the data. In this case, that value
      // is simply zero, on the assumption that people not in the list don’t share DNA with the
      // ancestor we are looking at
      return defaultValue;
    } else {
      return f(person, valueFor(byName[person.mother]),
                       valueFor(byName[person.father]));

    }
  }
  // Through the magic of recursion, it can simply call itself to handle the father and the mother
  // of this person. The results, along with the person object itself, are passed to f, which returns
  // the actual value for this person
  return valueFor(person);
}

// We can then use this to compute the amount of DNA thier grandfather shared with Pauwels van Haverbeke
// and divide that by four
function sharedDNA(person, fromMother, fromFather) {
  if (person.name === 'Pauwels van Haverbeke') {
    return 1;
  } else {
    return (fromMother + fromFather) / 2;
  }
}

var ph = byName['Philibert Haverbeke'];
console.log('Tracing DNA lineage shared between grandfather Philibert Haverbeke' + '\n' +
'and most ancient person in data, Pauwels van Haverbeke: ');
console.log(reduceAncestors(ph, sharedDNA, 0) / 4); // 0.00048828125
console.log('Approx. DNA lineage shared between grandfather Philibert Haverbeke'+ '\n' +
'and most ancient person in data, Pauwels van Haverbeke: ');
// this rounded it but is a string!!!
console.log(parseFloat(reduceAncestors(ph, sharedDNA, 0) / 4).toFixed(5)); // 0.00049
console.log('---------------------');


// seeing how much DNA I share with my 'Mom'
var byName2 = {};
var parents = [
  {
    name: 'Mom',
    sex: 'f',
    born: 1961,
    died: null,
    father: null,
    mother: null
  },
  {
    name: 'Dad',
    sex: 'm',
    born: 1962,
    died: null,
    father: null,
    mother: null
  },
  {
    name: 'Sosana',
    sex: 'm',
    born: 1982,
    died: null,
    father: 'Dad',
    mother: 'Mom'
  }
];

parents.forEach(function(person) {
  byName2[person.name] = person;
});

function reduceAncestors2(person, f, defaultValue) {
  function valueFor(person) {
    // first call tries to pass the 'me' argument and skips this as it does exist
    // it than steps into the 'sharedDNA2'
    // second call mom is defined return 1 so we move on to third call
    // on the third call for 'Dad' we get null for person as it it is not equal to 'Mom',
    // if the person argument is null, we return the defaultValue, which is 0
    if (person === undefined || null) {
      return defaultValue;
    } else {
      // it then recursively calls Me, Mom, and Dad from 'sharedDNA2'
      // = sharedDNA2(me, valueFor(Mom), valueFor(Dad));
      return f(person, valueFor(byName2[person.mother]),
                       valueFor(byName2[person.father]));

    }
  }

  return valueFor(person);
}

function sharedDNA2(person, fromMother, fromFather) {
  // When you step into 'sharedDNA' this time, 'Mom' name is in fact 'Mom', so the
  // function returns 1
  // = (valueFor(Mom) + valueFor(Dad)) / 2
  // This simplified tree doesn’t have people older than my parents so returns null
  // = sharedDNA2(Mom, valueFor(null), valueFor(null));
  // = (1 + valueFor(Dad)) / 2
  if (person.name === 'Mom') {
    return 1;
  } else {
    // 'Dad' name is not 'Mom' though, so we have to return the default 0 and same with
    // 'Mom' there is no people older so both come back null
    // = (valueFor(null) + valueFor(null)) / 2
    // = (0 + 0) / 2
    // = 0 / 2
    // = 0
    // so finally we get our value for on final recursive call
    // = (valueFor(Mom) + valueFor(Dad)) / 2
    // = (1 + 0) / 2 = 0.5
    return (fromMother + fromFather) / 2;
  }
}

var me = byName2['Sosana'];
console.log(me.name + ' shares about ' + reduceAncestors2(me, sharedDNA2, 0) + ' of his DNA with his Mom'); // 0.5
console.log('---------------------');


// the following code below finds the percentage of known ancestors, for a given person, who lived past 70
// countAncestors counts the number of ancestors for a given person by adding the number of ancestors
// for each of the person’s parents. It will also include person if thisOneCounts evaluates to true
function countAncestors(person, test) {

  function combine(person, fromMother, fromFather) {
    // don’t care how old they are, so the test function (the second parameter in the call below)
    // in 'longLivingPercentage' returns true on everything
    var thisOneCounts = test(person);
    return fromMother + fromFather + (thisOneCounts ? 1 : 0);
  }

  return reduceAncestors(person, combine, 0);
}

// longLivingPercentage counts all of the ancestors for person and saves this value to all. It then counts
// only the ancestors that lived 70 or more years and saves this to longLiving. It then returns the
// percentage of all ancestors that lived 70 or more years
function longLivingPercentage(person) {

  var all = countAncestors(person, function() {
    return true;
  });

  var longLiving = countAncestors(person, function(person) {
    return (person.died - person.born) >= 70;
  });

  return longLiving / all;
}

console.log(longLivingPercentage(byName['Emile Haverbeke'])); // 0.14545454545454545
// this rounded it but is a string!!!
console.log(parseFloat(longLivingPercentage(byName['Emile Haverbeke'])).toFixed(3)); // 0.145
console.log('---------------------');


// lets break down what is happening above in 'countAncestors' due to the complexity to figure out what
// is happening recursively, we will leave out 'longLivingPercentage'
var byName3 = {};
var ancestry3 = [
  {
    name: 'Mom',
    sex: 'f',
    born: 0,
    died: 80,
    father: null,
    mother: null
  },
  {
    name: 'John Doe',
    sex: 'm',
    born: 110,
    died: 200,
    father: null,
    mother: 'Mom'
  }
];

ancestry3.forEach(function(person) {
  byName3[person.name] = person;
});

// We want to use countAncestors on John Doe, so we’d make the call below. I want to count all
// of the ancestors. I don’t care how old they are, so the test function (the second parameter
// in the call below) returns true on everything
function countAncestors3(person, test) {
  // we don't have all the arguments yet so we skip combine and evaluate 'reduceAncestors2'
  // Now that we have all the arguments, we can step into combine. Once we’re inside, the thisOneCounts
  // variable is true because our test function returns true on everything. So combine returns:
  // = fromMother + fromFather + (thisOneCounts ? 1 : 0)
  // = 0 + 0 + (thisOneCounts ? 1 : 0)
  // = 0 + 0 + 1
  // = 1
  // What we just calculated was the second argument. So this line is now
  // combine(johnDoe, 1, valueFor(null))
  // this makes sense because Mom should count for exactly 1 ancestor
  // From the work we did before, we know that valueFor(null) returns the defaultValue, which is 0.
  // So now the highlighted line is
  // = combine(johnDoe, 1, 0)
  // So let’s step into the combine function. thisOneCounts is true like before. So the function returns
  // = fromMother + fromFather + (thisOneCounts ? 1 : 0)
  // = 1 + 0 + (thisOneCounts ? 1 : 0)
  // = 1 + 0 + 1
  // = 2
  function combine(person, fromMother, fromFather) {
    var thisOneCounts = test(person);
    return fromMother + fromFather + (thisOneCounts ? 1 : 0);
  }
  // steping into 'countAncestors' returns
  // = reduceAncestors(johnDoe, combine, 0);
  // now we have to step into 'reduceAncestors2'. We see that the last line in reduceAncestors returns
  // = valueFor(johnDoe)
  // So we have to step into the valueFor function, which returns the line below
  // = combine(johnDoe, valueFor(mom), valueFor(null))
  // Since Dad isn’t in the data, it’s null. Mom is in the data, so mom represents her person object.
  // Looking at this, you might guess that we have to step into the 'combine' function now, but we can’t
  // do that quite yet. We have to evaluate the second and third parameters first, so we can pass the
  // correct values to combine. That means we have to step into valueFor(mom), which returns
  // = combine(mom, valueFor(null), valueFor(null))
  // If you eye the valueFor function quickly, you’ll see that it returns defaultValue if person is
  // null. So that means the line above becomes
  // = combine(mom, 0, 0)
  // Now that we have all the arguments, we can step into 'combine' function
  return reduceAncestors2(person, combine, 0);
}

// Get the object for John Doe
var johnDoe = byName3['John Doe'];

// Count all the ancestors for John Doe
console.log(countAncestors3(johnDoe, function() {
  return true;
}));
