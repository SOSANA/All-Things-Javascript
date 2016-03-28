// working with dates in javascript, src: https://www.youtube.com/watch?v=M3VEFVBRw-o&feature=youtu.be

// write the current Date and Time to the web page without any arguments
var d = new Date();
// creating a specific date object using a date string
var dateOfBirth = new Date("May 10, 1982 13:45:00");
// you can also create a specific date object using number
// for year, month, day, hours, minutes, seconds, milliseconds
// var dateOfBirth2 = new Date(year, month, day, hours, minutes, seconds, millise3conds);
var dateOfBirth2 = new Date(1982,4,10,14,20,0,0);

console.log(d);
console.log('-------------------------');
console.log(dateOfBirth);
console.log('-------------------------');
console.log(dateOfBirth2);
console.log('-------------------------');

/**
 * some useful Date object methods in Javascript:
 *  - getFullYear(): returns the full year (all the four digits)
 *  - getMonth(): returns the month number (from 0-11)
 *  - getDate(): returns the day of the month (from 1-31)
 *  - getDay(): returns the day number of the week (from 0-6). 0 is sunday, 1 is monday and so on
 *  - getHours(): returns the hour (from 0-23)
 *  - getMinutes: returns the minutes (from 0-59)
 *  - getSeconds(): returns the seconds (from 0-59)
 *  - getMilliseconds(): returns the milliseconds (from 0-999)
 */

// using the getMonth() method
// // this returns the month index number
var monthNumber = dateOfBirth.getMonth();
console.log(monthNumber);
console.log('-------------------------');

// returning name of month rather than array index number of month
function getMonthNameFromMonthNumber(monthNumber) {
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return monthNames[monthNumber];
}
console.log(getMonthNameFromMonthNumber(monthNumber));
console.log('-------------------------');

// using the getDay() method
// this returns the week day index number
var dayNumber = dateOfBirth.getDay();
console.log(dayNumber);
console.log('-------------------------');

// returning name of day rather than array index number of day in the week
function getDayOfWeekNameFromDayNumber(dayOfWeek) {
  var weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekDayNames[dayOfWeek];
}
console.log(getDayOfWeekNameFromDayNumber(dayNumber));
console.log('-------------------------');

// considered bad practice but good for development testing
// will log error in jslint document.write can be a form of eval.
/*
document.write(d);
document.write("<br> <br>");
document.write(dateOfBirth);
document.write("<br> <br>");
document.write(dateOfBirth2);
*/


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
