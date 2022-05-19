// Assignment Code
let generateBtn = document.querySelector("#generate");

// Variables containing the four types of characters to be used for the password generator
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeric = "0123456789";
let specialChars = " \"!#$%&'()*+,-./:;<=>?@[]^_`{|}\\~";

// generate password function
let generatePassword = () => {
  // Asks user for password length
  let passwordLength = Number(window.prompt("How many characters would you like to have in your password? Please enter a number between 8 and 128:"));

  // If the user doesn't enter anything, or if user selects cancel, function exits
  if (!passwordLength) {
    return "";
  // If the user doesn't enter a value between 8 and 128, they're prompted to enter a value in the range, and function starts again from the beginning
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a password length between 8 and 128 characters.");
    generatePassword();
  };

  // Each of the next 4 sections asks the user if they want to include a certain character type, and confirms their decision
  let passwordLower = window.confirm("Would you like your password to include lowercase characters? Click OK for yes, and cancel for no.");

  if (passwordLower) {
    window.alert("Your password will include lowercase characters.")
  } else {
    window.alert("Your password will not include lowercase characters.")
  };

  let passwordUpper = window.confirm("Would you like your password to include uppercase characters? Click OK for yes, and cancel for no.");

  if (passwordUpper) {
    window.alert("Your password will include uppercase characters.")
  } else {
    window.alert("Your password will not include uppercase characters.")
  };

  let passwordNumeric = window.confirm("Would you like your password to include numeric characters? Click OK for yes, and cancel for no.");

  if (passwordNumeric) {
    window.alert("Your password will include numeric characters.")
  } else {
    window.alert("Your password will not include numeric characters.")
  };

  let passwordSpecial = window.confirm("Would you like your password to include special characters? Click OK for yes, and cancel for no.");

  if (passwordSpecial) {
    window.alert("Your password will include special characters.")
  } else {
    window.alert("Your password will not include special characters.")
  };

  // If the user said no to all of the four character types, they are alerted to answer yes to at least one character type
  // They are then asked if they want to go through the process again. If no, the function cancels. If yes, the function begins again
  if (!passwordLower && !passwordUpper && !passwordNumeric && !passwordSpecial) {
    window.alert("Please select at least one type of character to include in your password.");
    let tryAgain = window.confirm("Would you like to try again? Click OK for yes, and cancel for no.");

    if (!tryAgain) {
      return "";
    };
    generatePassword();
  };

  // Variable declarations for the password generation part of the function
  // Will include all of the characters of the character types that the user said yes to
  let includedChars = "";
  // A counter used to keep track of the number of different types of characters the user said yes to
  let mustIncludeCount = 0;
  // The password
  let generatedPass = "";

  // Each of the next four if statements queries whether or not the user said yes to a certain type of character to be included in the password.
  // If yes, then the character type (declared in lines 5-8) is added to the includedChars variable
  // To ensure at least one character of a certain type is included if the user said yes to that type of character, one character of that type is
  // added to the password variable. the mustIncludeCount counter also increases by one when a character type has been confirmed by the user
  if (passwordLower) {
    includedChars += lowerCase;
    generatedPass += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    mustIncludeCount++;
  };

  if (passwordUpper) {
    includedChars += upperCase;
    generatedPass += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    mustIncludeCount++;
  };

  if (passwordNumeric) {
    includedChars += numeric;
    generatedPass += numeric.charAt(Math.floor(Math.random() * numeric.length));
    mustIncludeCount++;
  };

  if (passwordSpecial) {
    includedChars += specialChars;
    generatedPass += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    mustIncludeCount++;
  };

  // This loop randomly takes a character from the includedChars variable which now contains all of the possible characters of each character type the user selected
  // to be included in the password, and will loop a number of times equal to the user's desired password length, subtracted by the mustIncludeCounter.
  // This is because a character of each type is added according to the user's selection(s) to ensure that the password has at least one of the selected
  // character types. Thus, the number of times that the loop loops must account for that.
  for (i = 0; i < (passwordLength - mustIncludeCount); i++) {
    generatedPass += includedChars.charAt(Math.floor(Math.random() * includedChars.length));
  };

  // The final generated password is returned
  return generatedPass;
};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
