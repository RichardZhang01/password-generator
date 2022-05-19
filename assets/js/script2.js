// Assignment Code
let generateBtn = document.querySelector("#generate");

// Assigns data inputs from user on webpage to variables
let inputLength = document.querySelector("#pass-length");
let inputLower = document.querySelector("#lower-case");
let inputUpper = document.querySelector("#upper-case");
let inputNumeric = document.querySelector("#numeric");
let inputSpecial = document.querySelector("#special");

// Variables containing the four types of characters to be used for the password generator
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeric = "0123456789";
let specialChars = " \"!#$%&'()*+,-./:;<=>?@[]^_`{|}\\~";



// generate password function
let generatePassword = () => {
    
    // Alerts the user to indicate a value between 8 and 128 characters if they selected an incorrect length
    if (inputLength.value < 8 || inputLength.value > 128) {
        window.alert("Please indicate a value between 8 and 128 for the length of your password.");
        return "";
    }

    // Alerts the user to select at least one option if none of the options are checked
    if (!inputLower.checked && !inputUpper.checked && !inputNumeric.checked && !inputSpecial.checked) {
        window.alert("Please select at least one type of character to include in your password.");
        return "";
    };

    // Variable declarations for the password generation part of the function
    // Will include all of the characters of the character types that the user said yes to
    let includedChars = "";
    // A counter used to keep track of the number of different types of characters the user said yes to
    let mustIncludeCount = 0;
    // The password
    let generatedPass = "";

    // Each of the next four if statements queries whether or not the user said yes to a certain type 
    // of character to be included in the password. If yes, then the character type (declared in lines 5-8) 
    // is added to the includedChars variable. To ensure at least one character of a certain type is 
    // included if the user said yes to that type of character, one character of that type is added to the 
    // password variable. the mustIncludeCount counter also increases by one when a character type has been 
    // confirmed by the user
    if (inputLower.checked) {
        includedChars += lowerCase;
        generatedPass += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
        mustIncludeCount++;
    };

    if (inputUpper.checked) {
        includedChars += upperCase;
        generatedPass += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        mustIncludeCount++;
    };

    if (inputNumeric.checked) {
        includedChars += numeric;
        generatedPass += numeric.charAt(Math.floor(Math.random() * numeric.length));
        mustIncludeCount++;
    };

    if (inputSpecial.checked) {
        includedChars += specialChars;
        generatedPass += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
        mustIncludeCount++;
    };

    // This loop randomly takes a character from the includedChars variable which now contains all of the 
    // possible characters of each character type the user selected to be included in the password, and 
    // will loop a number of times equal to the user's desired password length, subtracted by the mustIncludeCounter.
    // This is because a character of each type is added according to the user's selection(s) to ensure that the password 
    // has at least one of the selected character types. Thus, the number of times that the loop loops must account for that.
    for (i = 0; i < (inputLength.value - mustIncludeCount); i++) {
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
