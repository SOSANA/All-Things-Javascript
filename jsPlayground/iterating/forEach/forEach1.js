function displayInformation(library) {
  library.forEach(function(obj){
    if (obj.readingStatus === false) {
      console.log('You still need to read ' + "'" + obj.title + "'" + ' by ' + obj.author + '.');
    } else {
      console.log('Already read '  + "'" + obj.title+ "'" + ' by ' + obj.author + '.');
    }
  });

  /*
  // using for loop
  var i = 0, len = library.length;
  for (; i < len; i++) {
    if (library[i].readingStatus === false) {
      console.log('You still need to read ' + "'" + library[i].title + "'" + ' by ' + library[i].author + '.');
    } else {
      console.log('Already read ' + "'" + library[i].title  + "'" + ' by ' + library[i].author + '.');
    }
  }
  */
}

// tail starts here
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation(library);
