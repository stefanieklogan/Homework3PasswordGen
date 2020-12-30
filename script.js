// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// VARIABLES ==========================================================================

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!", "#", "$", "%", "&", "@", "^", "*", "(", ")", "_", "+", "~", "|", "}", "{", "[", "]"];
var passwordConcat = [];

// PASSWORD LENGTH & VALIDATION =======================================================
//Prompts user for desired length & variable is stored as a number for indexing later

// CONFIRMS & BOOLEAN & VALIDATION =======================================================

function generatePassword() {
// FUNCTIONS ============================================================================

  var userLength = prompt("A good password is between 8 - 128 characters. \nHow many characters do you want your password to be?");
  var userLengthNumber = parseInt(userLength);

  if (userLengthNumber < 8 || userLengthNumber > 128) {
    alert("Your password must be between 8 - 128 characters. \nClick Generate Password button again.");
    window.location.reload();
  }
else {
  var upperCaseConfirm = confirm("Do you want your password to have uppercase letters?");
  var lowerCaseConfirm = confirm("Do you want your password to have lowercase letters?");
  var numbersConfirm = confirm("Do you want your password to have numbers?");
  var symbolsConfirm = confirm("Do you want your password to have symbols?");
  
  //Conditional to check the passwordLength meets min/max requirements.
  
  // //Conditional to check the passwordLength is not null.
  // if (isNaN(userLengthNumber) === true) {
  //     alert("Invalid entry. Click OK for password length process again.");
  //   }

// if (upperCaseConfirm === false && lowerCaseConfirm === false && numbersConfirm === false && symbolsConfirm === false) {
//   alert("Your password must consist of at least one type of character. \nClick OK for selection process again.")
// }

function concat(array) {
  for (var i = 0; i < array.length; i++) {
  passwordConcat.push(array[i]);
}
}

// CALL FOR FUNCTION =====================================================================
if (upperCaseConfirm) {concat(upperCase);}
if (lowerCaseConfirm) {concat(lowerCase);}
if (numbersConfirm) {concat(numbers);}
if (symbolsConfirm) {concat(symbols);}

var finishedPassword = "";

for (var i = 0; i < userLengthNumber; i++) {
  var randomNumber = Math.floor(Math.random() * passwordConcat.length);
  finishedPassword += passwordConcat[randomNumber];
  }

  passwordConcat = [];
  return finishedPassword;
}
}