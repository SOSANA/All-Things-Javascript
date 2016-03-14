var myArray = [ 2, 3, 6, 6, 5 ];

function processData(myArray) {
  var arr = [];

  for (var i in myArray) {
       if (arr.indexOf(myArray[i]) === -1) {
         arr.push(myArray[i]);
       }
  }


    /*
  // will grab highest first number
  var largest = myArray.sort(function(a,b){return a - b;})[myArray.length-1];
  console.log(largest);
  console.log(secondLargest);

  // will grab second number regardless of duplicates
  var secondLargest = myArray.sort(function(a,b){return a - b;})[myArray.length -2];
  console.log(secondLargest);

  myArray.forEach(function(item){
    if (arr.indexOf(myArray[item]) !== -1) {
      arr.push(myArray[item]);
    }
  });
*/
  var sorted = arr.sort(function(a, b) {
    return b - a;
  });

  console.log(sorted[1]);
}

processData(myArray);
