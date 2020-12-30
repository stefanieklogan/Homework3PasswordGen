// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function copyFunction() {
  /* Get the text field */
  var copyText = document.getElementById("password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Password copied! Store it somewhere safe.");
}

// VARIABLES ==========================================================================

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!", "#", "$", "%", "&", "@", "^", "*", "(", ")", "_", "+", "~", "|", "}", "{", "[", "]"];
var passwordConcat = [];

function generatePassword() {

// PASSWORD LENGTH & VALIDATION =======================================================
//Prompts user for desired length & variable is stored as a number var
  var userLength = prompt("A good password is between 8 - 128 characters. \nHow many characters do you want your password to be?");
  var userLengthNumber = parseInt(userLength);

//Validates password length
  if (userLengthNumber < 8 || userLengthNumber > 128) {
    alert("Your password must be between 8 - 128 characters. \nClick OK to start over.");
    window.location.reload();
  }

else {
  var upperCaseConfirm = confirm("Do you want your password to have uppercase letters?");
  var lowerCaseConfirm = confirm("Do you want your password to have lowercase letters?");
  var numbersConfirm = confirm("Do you want your password to have numbers?");
  var symbolsConfirm = confirm("Do you want your password to have symbols?");
  
//Validates password length is not null
  if (isNaN(userLengthNumber) === true) {
  alert("Invalid entry. Password length must be value between 8 - 128. \nClick OK to start over.");
    window.location.reload();
}  

//Validates boolean is not false for all variables 
if (upperCaseConfirm === false && lowerCaseConfirm === false && numbersConfirm === false && symbolsConfirm === false) {
alert("You did not make a selection. \nYour password must consist of at least one type of character. \nClick OK for selection process again.")
  window.location.reload();
}

//Function defined as concatenate specific array into passwordConcat array defined at top of code
function concat(array) {
  for (var i = 0; i < array.length; i++) {
  passwordConcat.push(array[i]);
}}

// CALL FOR FUNCTION =====================================================================
if (upperCaseConfirm) {concat(upperCase);}
if (lowerCaseConfirm) {concat(lowerCase);}
if (numbersConfirm) {concat(numbers);}
if (symbolsConfirm) {concat(symbols);}

//Create variable string to hold finished password being created next
var finishedPassword = "";

//For loop runs the num of * user wants their password to be in length. 
//Loop performs random (whole) numb selection and uses to pluck from passwordConcat index.
//Index's element is stored in finishedPassword variable.
for (var i = 0; i < userLengthNumber; i++) {
  var randomNumber = Math.floor(Math.random() * passwordConcat.length);
  finishedPassword += passwordConcat[randomNumber];
  }

//Clear array to ensure boolean logic if user generates more than one password
  passwordConcat = [];

//Display password on webpage
  return finishedPassword;
}
}