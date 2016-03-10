
function sortLibrary(library) {
    // var library is defined, use it in your code
    // use console.log(library) to output the sorted library data
  library.sort(function(obj1, obj2) {
	 return obj1.title > obj2.title;
  });
  console.log(library);
}

// tail starts here
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

sortLibrary(library);
