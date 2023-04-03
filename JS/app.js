



"use strict";

console.log("hi");
var username = prompt("Enter your name:");

var gender = prompt("Enter your gender (Male/Female):");

if (gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female" ) {

  alert("Invalid input!");
}


var age = prompt("Enter your age:");

if (age <= 0 ) {

  alert(" Your age is not valid!");
}


let message = confirm("Do you want to skip the welcoming message? ");

if(message === false){

    if (gender.toLowerCase() === "female") {
    alert("Welcome, Ms."  +username+" !");
}else if(gender.toLowerCase() =="male"){
    alert("Welcome, Mr. " +username+" !");
}else{
    alert("Welcome, " + username + "!");
}

}





