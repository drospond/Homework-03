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
var useNumeric = false;
var useUppercase = false;
var useLowercase = false;
var useSpecial = false;
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var letters = "abcdefghijklmnopqrstuvwxyz";

function generatePassword(){
  var randomPassword = "Place Holder";
  passLength = prompt("How long do you want your password to be? (8-128)");
  numeric = confirm("Do you want to use numeric characters?");
  uppercase = confirm("Do you want to use uppercase letters characters?");
  lowercase = confirm("Do you want to use lowercase letters? characters?");
  special = confirm("Do you want to use special characters?");

  for(var i = 1; i <= passLength; i++){
    var charType = Math.floor(Math.random() * 4);
    console.log(charType);
  }

  console.log(specialCharacters);
  return randomPassword;
}
