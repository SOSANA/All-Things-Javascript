/**
 * we are creating a function
 * when the function gets created, in this case on the global object, the function object
 * gets put into memory on the global object
 * the two special properties are name which is greet and code property which contains the
 * code your wrote or the body of your function which invokes your code console.log('hi');
 * to run.
 */
function greet() {
  console.log('hi');
}
// this just a property of the greet function
greet.language = 'english';
console.log(greet.language);
