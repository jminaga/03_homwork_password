// ? Refactored code
// My first attempt was not working
// Reworked the code so that it functions properly

// Assignment Code
var generateBtn = document.querySelector("#generate");

let possibleCharacters = [];
let result = [];

const specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const upperArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// possibleCharacters.push(...specialArr, ...upperArr, ...lowerArr, ...numArr);
// console.log(possibleCharacters)

// variables

// Get Input
// parseInt turns string into number

const passwordLength = parseInt(
  prompt(
    "How many characters would you like? Please select between 8 and 128 characters"
  )
);

if (passwordLength >= 8 && passwordLength <= 128) {
} else {
  alert("Please make a valid input");
  const passwordLength = parseInt(
    prompt(
      "How many characters would you like? Please select between 8 and 128 characters"
    )
  );
}
const specialCharacters = confirm(
  "Would you like to include special characters?"
);
const upperCase = confirm("Would you like to include Upper Case characters?");
const lowerCase = confirm("Would you like to include Lower Case characters?");
const numerical = confirm("Would you like to include numbers?");

const inputs = {
  length: passwordLength,
  special: specialCharacters,
  upper: upperCase,
  lower: lowerCase,
  num: numerical,
};

const generatePassword = () => {
  if (inputs.special) {
    possibleCharacters.push(...specialArr);
  }
  if (inputs.upper) {
    possibleCharacters.push(...upperArr);
  }
  if (inputs.lower) {
    possibleCharacters.push(...lowerArr);
  }
  if (inputs.num) {
    possibleCharacters.push(...numArr);
  }

  for (var i = 0; i < inputs.length; i++) {
    let choices =
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    result.push(...choices);
  }

  return result.join("");
};

console.log(result);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ! My first attempt at this project

// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// const num = ['0','1','2','3','4','5','6','7','8','9'];
// const special = ['!','@','#','$','%','^','&','*','(',')'];
// let possibleChar = [];
// let result = [];
// //Write a function that generate a password

// function generatePassword(){
// // get and save user preferences
// const input = {};
// const fullInput = input.input.passWrodLength.length;
// const passwordLength = parseInt(prompt(`Select number of characters between 8 and 128`));
// const specialCharacters = confirm(`Do you wan special characters?`);
// const upperCase = confirm(`Do you want upper case letters?`);
// const lowerCase = confirm(`Do you want lower case letters?`);
// const numerical = confirm(`Do you want to include a number?`);
// input.passwordLength = passwordLength;
// input.specialCharacters = specialCharacters;
// input.upperCase = upperCase;
// input.lowerCase = lowerCase;
// input.numerical = numerical;
// console.log(fullInput);

// // create some conditionals based on user input

// if (specialCharacters === true) {
//     // if they want special character then we are going to push the special char into possibleChar

//     possibleChar = possibleChar.concat(special);
//     console.log(possibleChar);
// }
// if (upperCase === true) {

//   possibleChar = possibleChar.concat(upper);
//   console.log(possibleChar);
// }
//     if (lowerCase === true) {

//         possibleChar = possibleChar.concat(lower);
//         console.log(possibleChar);
// }
// if (numerical === true) {

//   possibleChar = possibleChar.concat(num);
//   console.log(possibleChar);
// }
// // write a for loop that loops over possible characters for as long as length of password

// for (var i = 0; i < passwordLength; i++ ){
// // get a random character from possiblecharacter array and push into result array. Math.floor and Math.random
//   let choices = possibleChar[Math.floor(Math.random() * possibleChar.length)];
//   result.push(choices);

//   let ps = result.join("");
//   UserInput(ps);
//   return ps;
// } // all of this is a part of the function generatePassword This is the closing bracket.
//  function UserInput(ps) {
//    document.getElementById("password").textContent = ps;
//  }
// }

// // Write password to the #password input
// function writePassword(){
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
