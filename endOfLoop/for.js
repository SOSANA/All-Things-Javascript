// using the for loop method

function getStockSymbols(stocks) {
  var symbols = [], // empty array that is going to store our symbols
      counter, // keeps track of the current index in the array
      stock; // keeps track of the current stock in the array
      
  // three parts
  // first part is what we want to get executed, initializing the counter which will point to the first index in the array
  // second part is the condition that we want to be true as long as we want the for loop to continue, in this case we want
  // the for loop to continue as like as the counter is smaller than the length of the stocks 
  // the third part is what we want to execute at the bottom of each iteration thru the loop, and in this case we want to 
  // increment counter
  for(counter = 0; counter < stocks.length; counter++){
    // assigning stock at the index of the counter
    // were looping through each item in the stocks array and assigning it to variable stock
    stock = stocks[counter];
    // we are adding to the symbols array and pull out the symbol from the stock and add it to the symbols array
    symbols.push(stock.symbol);
  }
  
  return symbols;
}

var symbols = getStockSymbols([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbols));