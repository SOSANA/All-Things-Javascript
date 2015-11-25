/**
 * An arrow function expression has a shorter syntax compared to function
 * expressions and lexically binds the this value.
 *
 * Parentheses around the single argument are optional, so it is up to you
 * whether you want to enforce it or not. Some see it as a bad practice, others
 * think it's fine.
 */

 // ES6
 [1, 2, 3].map(n => n * 2); // [2, 4, 6]

 // ES5
 [1, 2, 3].map(function(n) { return n * 2; }); // [2, 4, 6]

 /**
  * Every function expression above creates its own this scope. Without binding
  * this we would not be able to call this.setState in the example above, because
  * this would have been undefined.
  *
  * Alternatively, we could have assigned this to a variable, e.g. var self = this
  * and then used self.setState instead of this.setState inside the closures to
  * get around this classic JavaScript problem.
  */

  // ES5
  $.ajax({ type: 'POST', url: '/api/characters', data: { name: name, gender: gender } })
   .done(function(data) {
     this.setState({ helpBlock: data.message });
   }.bind(this))
   .fail(function(jqXhr) {
     this.setState({ helpBlock: jqXhr.responseJSON.message });
   }.bind(this))
   .always(function() {
     this.setState({ name: '', gender: '' });
   }.bind(this));

   /**
    * n equivalent ES6 code using fat arrow functions which preserve the original
    * this value:
    */

   // ES6
    $.ajax({ type: 'POST', url: '/api/characters', data: { name: name, gender: gender } })
      .done((data) => {
        this.setState({ helpBlock: data.message });
      })
      .fail((jqXhr) => {
        this.setState({ helpBlock: jqXhr.responseJSON.message });
      })
      .always(() => {
        this.setState({ name: '', gender: '' });
      });
