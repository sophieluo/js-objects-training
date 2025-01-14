/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// function birthdayReminder (arr) {
//   var currentDate= "7/1/2013"
//   arr.forEach()
//   console.log("arr")
// }

function daysUntilDate(dob) {
var today =Date.now()
var birthday= Date.parse(dob)
return 365-Math.round(((today-birthday)/(1000*60*60*24))%365)
}

function birthdayReminder(arr) {
  arr.forEach(function(element) {
    console.log(element.name+'s birthday is in '+daysUntilDate(element.dob)+" days")
})
}
