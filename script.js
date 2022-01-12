// Welcome to password generator 4001!
// The objective of this program is to create viable passwords of various lengths
// and include different parameters such as: letters, numbers, and special characters. 

// Global Variables
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var passLength;
// Below are the undefined bools that will return false
var confirmUpperCase;
var confirmlowerCase;
var confirmNums;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    // User input (parseInt allows use to store this as a integer instead of string)
    passLength = parseInt(prompt("Pick password length from 8 to 128"));
    if (!passLength) { // parseInt returns nothing or falesy if not an int 
        alert("Last chance! Pick a value that is a number")
    } else if (passLength <= 8 || passLength >= 128) {
        passLength = parseInt(prompt("Last chance! Pick password length from 8 to 128"));
    } else {
        // Parameter confirmation
        confirmUpperCase = confirm("Do you want uppercase letters? (click OK for yes)");
        confirmlowerCase = confirm("Do you want lowercase letters? (click OK for yes)");
        confirmNums = confirm("Do you want numbers included? (click OK for yes)");
        confirmSpecialChars = confirm("Do you want special characters included? (click OK for yes)");
    };

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


    // Paramenters set, lets generate a password! (fix)
    for (var i = 0; i < passLength; i++) {
        var passwordOptions = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);