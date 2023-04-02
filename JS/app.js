// Ask the user to confirm if he wants to skip the welcoming message.
// Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms if the user is female, and if the gender input is not correct alert the welcoming message without the title, according to the confirmation.
// Continue working on the styling of the project.


"use strict";

console.log("hi");
prompt("Enter your name:");

var gender = prompt("Enter your gender (Male/Female):");

if (gender !== "male" || gender !== "female" ) {

  alert("Invalid input. Please try again!");
}


var age = prompt("Enter your age:");

if (age <= 0 ) {

  alert(" Your age is not valid!");
}


