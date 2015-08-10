/**
 * working with initialization
 * clean and useful way to initialize data and also nice for
 * prototyping for UI and testing prior to implementing the 
 * full software and database etc
 */
var people = [
  { 
    // the 'john' object
    firstname: 'Johnny',
    lastname: 'Doedoe',
    address: [
      '111 Main St.',
      '222 Third St.'
    ]
  },
  { 
    // the 'jane' object
    firstname: 'Janes',
    lastname: 'Addiction',
    address: [
      '333 Main St.',
      '444 Fifth St.'
    ],
    greet: function() {
      return 'Hello, ' + this.firstname + ' ' + this.lastname + ' !';
    }
  }
]

console.log(people);
console.log(people[0]);
console.log(people[1]);
console.log(people[0].firstname);
console.log(people[1].greet());