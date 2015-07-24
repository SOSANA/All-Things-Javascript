function getPerson() {
  // because of the syntax parser automatic adds semicolon insertion we 
  // need to put a curly brace on the same line, if its not we get a undefined
  // after return and it closes the funciton. Its not always necessary but we 
  // put one curly brace on the same line to avoid this problem
  return {
    firstname: 'Joey'
  }
}

console.log(getPerson());