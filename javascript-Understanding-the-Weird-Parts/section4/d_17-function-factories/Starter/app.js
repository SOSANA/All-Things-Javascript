/**
 * working with function factory, that returns or makes other things for you
 */

// makeGreeting is acting as a function factory
function makeGreeting(language) {
  // here we are taking advantage of closures to set the parameter value that
  // is then used inside the function that is returned
  return function (firstname, lastname) {
    // default to english
    language = language || 'en';
  
    if (language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }
  
    if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }
        
  }
}

// closure inside makeGreeting('en'); wrapped up and closure points to language
var greetEnglish = makeGreeting('en');
// closure inside makeGreeting('es'); wrapped up
var greetSpanish = makeGreeting('es');

greetEnglish('Jon', 'Doe');
greetSpanish('Billy', 'Jean');