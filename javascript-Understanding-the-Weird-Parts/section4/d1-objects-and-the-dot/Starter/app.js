/**
 * there are better ways to create objects but we will use the new Object() syntax 
 * that will sit in memory. We'll add property and methods
 */
var person = new Object();
// adding properties, The [] on person[] is called the computed member access operator
// this is one way to set properties
person["firstname"] = "Jon";
person["lastname"] = "Doe";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);
// using the dot operator, the dot is a function and it takes two parameters
console.log(person.firstname);
console.log(person.lastname);
// creating a new method on person
person.address = new Object();
// creating a property street
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
// this is doing the same thing as the dot operator
console.log(person["address"]["state"]);