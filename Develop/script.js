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
// check nesting variables within the F
function generatePassword() {
  var length = promptPWlength();
  console.log("promptPWlength is:" + length);
  var lowerChoice = lowerCase(); 
  var upperChoice = upperCase();
  var numChoice = numeric();
  var specChoice = spChar();

  // validate(lowerChoice, upperChoice, numChoice, specChoice);
  if (lowerChoice || upperChoice || numChoice || specChoice) {
    console.log("Char selection OK");
  } else {
    alert("Choose at least one character type!");
    return generatePassword();
  }

  var pass = "";

  // generate password
    //for each selected char type, concat choices in a new array
    //choose randomly based on the number of char selected, from the array created based on user choices
      // const arr1 = ["Cecilie", "Lone"];
      // const arr2 = ["Emil", "Tobias", "Linus"];
      // const children = arr1.concat(arr2);
  var userArray = [];
  if (lowerChoice) {
      userArray = userArray.concat(lowerOptions);
  }
  if (upperChoice) {
    userArray = userArray.concat(upperOptions);
  }
  if (numChoice) {
    userArray = userArray.concat(numOptions);
  }
  if (specChoice) {
    userArray = userArray.concat(charOptions);
  }
  console.log("This is the user array", userArray);

  for (i=0; i<length; i++) {
    var randomChar = userArray[Math.floor(Math.random() * userArray.length)];
    pass = pass.concat(randomChar);
    //pass = pass + randomChar;
    // pass += randomChar;
  }
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
  var lowerChoice = confirm("Do you want to include lower case characters? Press OK for Yes, otherwise press Cancel");
  console.log(lowerChoice);
  return lowerChoice;
}

//Prompt user for uppercase
function upperCase() {
  var upperCase = confirm("Do you want to include upper case characters? Press OK for Yes, otherwise press Cancel");
  console.log(upperCase);
  return upperCase;
}

//Prompt user for numeric
function numeric() {
  var num = confirm("Do you want to include numbers? Press OK for Yes, otherwise press Cancel");
  console.log(num);
  return num;
}

function spChar() {
  //Prompt user for special chars
  var spChar = confirm("Do you want to include special characters? Press OK for Yes, otherwise press Cancel");
  console.log(spChar);
  return spChar;
}

//Validate if at least one char type is selected (input validation); 
//if not -return
function validate(lowerChoice, upperCase, numeric, spChar) {
  // console.log(lowerChoice);
  if (lowerChoice || upperCase || numeric || spChar) {
    console.log("Char selection OK");
  } else {
    alert("Choose at least one character type!");
    generatePassword();
  }
}

//randomly choose chars from the new array
// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
