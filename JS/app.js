



"use strict";

console.log("hi");
var username = prompt("Enter your name:");

var gender = prompt("Enter your gender (Male/Female):");

if (gender !== "Male" && gender !== "Female" ) {

  alert("Invalid input!");
}


var age = prompt("Enter your age:");

if (age <= 0 ) {

  alert(" Your age is not valid!");
}


let message = confirm("Do you want to skip the welcoming message? ");

if(message === false){

    if (gender === "Female") {
    alert("Welcome, Ms."  +username+" !");
}else if(gender =="Male"){
    alert("Welcome, Mr. " +username+" !");
}

}


