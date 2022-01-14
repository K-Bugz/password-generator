// Welcome to password generator 4001!
// The objective of this program is to create viable passwords of various lengths
// and include different parameters such as: letters, numbers, and special characters. 

// Global Variables
const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
let possibleList = [] // a blank list to pull from. 
const password = []; // populate this from the possiblelist
var passLength; // password length
// Below are the undefined bools set to false at the start
var confirmUpperCase = false;
var confirmlowerCase = false;
var confirmNums = false;
var confirmSpecialChars = false;
// Get references to the #generate element  
var generateBtn = document.querySelector("#generate"); // selects the generate button
var pword = document.querySelector("#password"); // selects the "Your Secure Password"

// Write password to the #password input
function writePassword() {
    // User input (parseInt allows use to store this as a integer instead of string)
    passLength = parseInt(prompt("Pick password length from 8 to 128"));
    // Conditionals to ensure password is an appropriate length. 
    if (!passLength) { // parseInt returns nothing or falesy if not an int 
        alert("Last chance! Pick a value that is a number")
    } else if (passLength < 8 || passLength > 128) {
        passLength = parseInt(prompt("Last chance! Pick password length from 8 to 128"));
    } else {
        // Parameter confirmation and pushes the arrays together. 
        confirmUpperCase = confirm("Do you want uppercase letters? (click OK for yes)");
        if (confirmUpperCase) {
            // possibleList.push(upperLetters)
            possibleList = possibleList.concat(upperLetters);
        }
        confirmlowerCase = confirm("Do you want lowercase letters? (click OK for yes)");
        if (confirmlowerCase) {
            // possibleList.push(lowerLetters)
            possibleList = possibleList.concat(lowerLetters);
        }
        confirmNums = confirm("Do you want numbers included? (click OK for yes)");
        if (confirmNums) {
            // possibleList.push(nums)
            possibleList = possibleList.concat(nums);
        }
        confirmSpecialChars = confirm("Do syou want special characters included? (click OK for yes)");
        if (confirmSpecialChars) {
            // possibleList.push(specialChars)
            possibleList = possibleList.concat(specialChars);
        }
        // Paramenters set, lets generate a password!
        for (var i = 0; i < passLength; i++) {
            password.push(possibleList[Math.floor(Math.random() * possibleList.length)]);
        }
        var ps = password.join("");
        pword.value = ps;
    };




}


// Add event listener to generate button that calls write password
generateBtn.addEventListener("click", writePassword);