// write the current Date and Time to the web page without any arguments
var d = new Date();

// creating a specific date object using a date string
var dateOfBirth = new Date("May 10, 1982 13:45:00");

// you can also create a specific date object using number
// for year, month, day, hours, minutes, seconds, milliseconds
// var dateOfBirth2 = new Date(year, month, day, hours, minutes, seconds, millise3conds);
var dateOfBirth2 = new Date(1982,4,10,14,20,0,0);

// considered bad practice but good for development testing
// will log error in jslint document.write can be a form of eval.
document.write(d);
document.write("<br> <br>");
document.write(dateOfBirth);
document.write("<br> <br>");
document.write(dateOfBirth2);




/*
// should use the following for better practice
document.getElementById("test").innerHTML = d;

document.getElementById("demo").innerHTML = dateOfBirth;
*/

/*
function findDay(myDate) {
    // Return day for date myDate(MM/DD/YYYY)
    // Note that myDate contains the date in string format
}

*/
