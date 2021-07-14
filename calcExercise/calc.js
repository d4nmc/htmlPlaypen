`use strict`

// <button type="submit" id="btn" name="submit">Submit</button>

//* <h1>Calculator</h1>

//<form action="" method="POST">
//   <input type="number1" id="num1" placeholder="Enter Number" /> <br><br>
//   <input type="number2" id="num2" placeholder="Enter Number" />
//   </form> */}

// creating calculator functions
// Document.querySelector("#num1");
// Document.querySelector("#num2");

// get the div with the heading in from the html doc to use as a base example
//let divAddToMe = document.querySelector("#heading");

//divAddToMe.appendChild(newHeading);

// addition(3,4);

/* <form action="" method="POST">
<input type="number1" id="num1" placeholder="Enter Number" /> 
<input type="number2" id="num2" placeholder="Enter Number" />
</form> */

//0. trying to get the fucking heading to work- jeeeeeezus man

// let newHeading = document.createElement("h1");
// let text = document.createTextNode("I am a calculator");
// newHeading.appendChild(text);
// let divNumbers = document.querySelector("numbers")

// 1. CRUD stuff using one line arrow function
// references to user input a+b will come from htmlfile and need changing i think

// const addition = (a,b) => console.log(a+b);
// const subtraction = (a,b) => console.log(a-b);
// const multiply = (a,b) => console.log(a*b);
// const divide = (a,b) => console.log(a/b);

//2. communication with html doc buttons

let number1 = document.querySelector("#num1");
let number2 = document.querySelector("#num2");
let submitButton = document.querySelector("#btn");

const formSubmission = () => {

}

submitButton.addEventListener('click',formSubmission);