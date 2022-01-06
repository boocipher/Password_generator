// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of options
// TODO - add array values
var lowerOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// function below by askBCS
var upperOptions = lowerOptions.map(change => change.toUpperCase());
console.log(upperOptions);
var numOptions = ["0","1","2","3","4","5","6","7","8","9"];
var charOptions = "!@#$%^&*()_+~`|}{[]\:;?><,./-=".split('');
console.log(charOptions);


//Main function
function generatePassword() {
  var length = promptPWlength();
  console.log("promptPWlength is:" + length);
  lowerCase();
  upperCase();
  numeric();
  spChar();
  validate();

  var pass = "1234";
  // generate password
  return pass;

}



//Prompt user to define PW length
//show prompt until result is >= 8 or <=128 w/ while loop
function promptPWlength() {
  var length;
  var pwLength = prompt("Please choose a number between 8 and 128 for the password length");
  length = parseInt(pwLength);
  if (!pwLength) {
    return;
  }
  while (isNaN(length) || length < 8 || length > 128) {
    pwLength = prompt("Please choose a number between 8 and 128 for the password length");
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
function validate() {
  if (lowerCase || upperCase || numeric || spChar) {
    console.log("Char selection OK");
  } else {
    alert("Choose at least one character type!");
    generatePassword();
  }
}


//for each selected char type, concat in a new array

//choose randomly based on the number of char selected, from the array created based on user choices



// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
