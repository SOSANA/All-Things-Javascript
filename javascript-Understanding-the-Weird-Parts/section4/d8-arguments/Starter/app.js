/**
 * working with arguments
 */
function greet(firstname, lastname, language) {
  // set default value if its undefined
  language = language || 'en';
  // if the values are empty
  if (arguments.length === 0) {
    console.log('Missing parameters!');
    console.log('-------------');
    return;
  }
  
  console.log(firstname);
  console.log(lastname);
  console.log(language);
  // shows a list of all the values of the parameters you passed
  // arguments is array like, means it acts and looks like an 
  // array but isn't as it doesn't have all the features
  console.log(arguments);
  // give the first position of the first value
  console.log('arg 0: ' + arguments[0]);
  console.log('-------------');
}

greet();
greet('Jon');
greet('Jon', 'Doe');
greet('Jon', 'Doe', 'en');