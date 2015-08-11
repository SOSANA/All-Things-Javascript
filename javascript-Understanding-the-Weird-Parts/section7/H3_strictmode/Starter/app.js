/**
 * working with "strict mode" tells the js engine to be stricter and implement some 
 * extra rules when it parses your code or executes it. Refer to link @MDN in notes
 */

function logNewPerson() {
  "use strict";
  
  var person2 = {};
  console.log(persom2);
}

var person;
// purposely miss typing person object which without using "use strict" creates an object but when we
// use "use strict" it throws an error
persom = {};
console.log(persom);
logNewPerson();