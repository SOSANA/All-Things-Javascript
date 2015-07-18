/**
 * This is object literals. Using the short hand way called an object. Its just curly braces. Its
 * the same as using new Object() as we did in .../d1-objects-and-the-dot. This is not an operator.
 */
var person = { 
  firstname: 'Jon',
  lastname: 'Doe',
  address: {
    street: '111 Main St.',
    city: 'New York',
    state: 'NY'
  }
};

function greet(people) {
  console.log('Hi ' + people.firstname);
}

greet(person);

greet({ 
  firstname: 'Mary', 
  lastname: 'Doe' 
});

person.address2 = {
  street: '333 Second St.'
}

console.log(person);