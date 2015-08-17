/**
 * using IIFE to apply structure around the code your about to write and
 * is now safe inside of your function to be used by anybody
 */
// adding semicolon before IIFE is a trick used in case there is a script before it that doesn't
// quite finish its semicolon properly
;(function(global, $){
  // a function that creates an object
  var Greetr = function(firstName, lastName, language) {
    // return new empty object
    return new Greetr.init(firstName, lastName, language);
  }
  
  // thanks to closures we will have access to its lexical environment inside this
  // memory space function
  var supportedLangs = ['en', 'es'];
  
  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };
  
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };
  
  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion'
  };
  
  // here is were we'll put any methods that we want to use inside our object that 
  // is returned from Greetr
  Greetr.prototype = {
    
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },
    
    validate: function() {
      // looking in the supportedLangs array to see if it supports given lang 
      if (supportedLangs.indexOf(this.language) === -1) {
        // simple way to throw an error
        throw "Invalid language";
      }
    },
    
    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },
    
    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },
    
    // chaining methods
    greet: function(formal) {
      var msg;
      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }
      
      if (console) {
        console.log(msg);
      }
      
      // returning the 'this' variable so they are chainable
      return this;
    },
    
    // when you want to manually log
    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }
      // returning the 'this' variable so they are chainable
      return this;
    },
    
    setLang: function(lang) {
      // here you update your object
      this.language = lang;
      // here you call validate to make sure its valid
      this.validate();
      // returning the 'this' variable so they are chainable
      return this;
    }
  };
  
  // a function constructor that builds properties sets its value if you pass 
  // something into your object otherwise set some defaults
  Greetr.init = function(firstName, lastName, language) {
    // setting the this variable to self so it points to the empty object created by
    // the "new" operator on line 9
    var self = this;
    // setting up properties with defaults
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  }
  // this sets up where objects that are created are pointing at
  // we want all objects created with the Greetr.init = function(...) {..} to be pointed 
  // to Greetr.prototype = {};
  // any objects created with this function "Greetr.init.prototype" should point here
  // "Greetr.prototype"
  // now we can cleanly put methods in our Greetr.prototype above
  Greetr.init.prototype = Greetr.prototype;
  // now we want to expose your Greetr to the outside world, we want to attach it to our
  // global object so we can call this function from anywhere. We also want to use alias
  // $ sign. on the global object global.Greetr and global.G$ will point to our function
  // Greetr above
    global.Greetr = global.G$ = Greetr;
  // passing in your global and jQuery object
}(window, jQuery))