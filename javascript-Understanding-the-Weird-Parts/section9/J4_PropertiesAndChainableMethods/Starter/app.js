var g = G$('John', 'Doe');
// chaining some methods
g.greet().greet(true);
console.log('-----------');
// chaining some methods
g.greet().setLang('es').greet(true);
console.log('-----------');
g.setLang('fr').greet(true); // should show error as french is not supported language