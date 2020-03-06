// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passLength;
var useNumeric;
var useUppercase;
var useLowercase;
var useSpecial;
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var letters = "abcdefghijklmnopqrstuvwxyz";
var numericCharacters = "1234567890";

function generatePassword() {
  var randomPassword = "";
  var availableCharacters = "";

  passLength = prompt("How long do you want your password to be? (8-128)");
  if (passLength >= 8 && passLength <= 128) {
    useNumeric = confirm("Do you want to use numeric characters?");
    useUppercase = confirm("Do you want to use uppercase letters characters?");
    useLowercase = confirm("Do you want to use lowercase letters? characters?");
    useSpecial = confirm("Do you want to use special characters?");

    if (useNumeric === true) {
      availableCharacters += numericCharacters;
    }
    if (useUppercase === true) {
      availableCharacters += letters.toUpperCase();
    }
    if (useLowercase === true) {
      availableCharacters += letters;
    }
    if (useSpecial === true) {
      availableCharacters += specialCharacters;
    }

    if (
      useNumeric === true ||
      useLowercase === true ||
      useUppercase === true ||
      useSpecial === true
    ) {
      for (var i = 1; i <= passLength; i++) {
        randomPassword +=
          availableCharacters[
            Math.floor(Math.random() * availableCharacters.length)
          ];
      }
    } else {
      alert("You need atleast one type of character for your password!")
    }
  } else {
    alert("Invalid input. Password needs to be 8-128 characters!");
  }

  console.log(randomPassword.length);

  return randomPassword;
}
