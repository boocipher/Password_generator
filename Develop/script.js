// Assignment Code
var generateBtn = document.querySelector("#generate");

//Main function
function generatePassword() {
  var length = promptPWlength();
  console.log("promptPWlength vurna:" + length);
  // lowerCase();
  // upperCase();
  // numeric();
  // spChar();

  var pass = "1234";
  // generate password
  return pass;
}

//Prompt user to define PW length
//show prompt until result is >= 8 or <=128 w/ while loop
function promptPWlength() {
  var length;
  while (isNaN(length) || length < 8 || length > 128) {
    var pwLength = prompt("Please choose a number between 8 and 128 for the password length");
    length = parseInt(pwLength);
    console.log(length);
  } 
  return length;
}

//Prompt user for lowercase
function lowerCase() {
  var lowerCase = confirm("Do you want to include lower case characters? Press OK for Yes, otherwise press Cancel");
  console.log(lowerCase);
}

//Prompt user for uppercase
function upperCase() {
  var upperCase = confirm("Do you want to include upper case characters? Press OK for Yes, otherwise press Cancel");
  console.log(upperCase);
}

//Prompt user for numeric
function numeric() {
  var num = confirm("Do you want to include numbers? Press OK for Yes, otherwise press Cancel");
  console.log(num);
}

function spChar() {
  //Prompt user for special chars
  var spChar = confirm("Do you want to include special characters? Press OK for Yes, otherwise press Cancel");
  console.log(spChar);
}

//Validate if at least one char type is selected (input validation); 
//if not -return

//for each selected char type, concat in an array

//choose randomly the number of char selected, from the array created based on user choices



// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
