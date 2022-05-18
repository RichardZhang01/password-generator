// Assignment Code
let generateBtn = document.querySelector("#generate");
let upperCase = "abcdefghijklmnopqrstuvwxyz";
let lowerCase =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeric = "0123456789";
let specialChars = " \"!#$%&'()*+,-./:;<=>?@[]^_`{|}\\~";

let generatePassword = () => {
  let passwordLength = Number(window.prompt("How many characters would you like to have in your password? Please enter a number between 8 and 128:"));

  if (!passwordLength) {
    return "";
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a password length between 8 and 128 characters.");
    generatePassword();
  }

  let passwordLower = window.confirm("Would you like your password to include lowercase characters? Click OK for yes, and cancel for no.");

  // if (passwordLower) {
  //   window.alert("Your password will include lowercase characters.")
  // } else {
  //   window.alert("Your password will not include lowercase characters.")
  // }

  let passwordUpper = window.confirm("Would you like your password to include uppercase characters? Click OK for yes, and cancel for no.");

  // if (passwordLower) {
  //   window.alert("Your password will include uppercase characters.")
  // } else {
  //   window.alert("Your password will not include uppercase characters.")
  // }

  let passwordNumeric = window.confirm("Would you like your password to include numeric characters? Click OK for yes, and cancel for no.");

  // if (passwordLower) {
  //   window.alert("Your password will include numeric characters.")
  // } else {
  //   window.alert("Your password will not include numeric characters.")
  // }

  let passwordSpecial = window.confirm("Would you like your password to include special characters? Click OK for yes, and cancel for no.");

  // if (passwordLower) {
  //   window.alert("Your password will include special characters.")
  // } else {
  //   window.alert("Your password will not include special characters.")
  // }

  if (!passwordLower && !passwordUpper && !passwordNumeric && !passwordSpecial) {
    window.alert("Please select at least one type of character to include in your password.");
    let tryAgain = window.confirm("Would you like to try again?");

    if (!tryAgain) {
      return "";
    }
    generatePassword();
  }

  let generatedPass = "";

  if (passwordLower) {
    generatedPass += lowerCase;
  }

  if (passwordUpper) {
    generatedPass += upperCase;
  }

  if (passwordNumeric) {
    generatedPass += numeric;
  }

  if (passwordSpecial) {
    generatedPass += specialChars;
  }

  return generatedPass;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
