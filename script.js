// global variable
var passwordLength;
var availableCharacters = ``;



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword() {
  var password = ``;

  // 1.Create a box that asks the user for input. prompt()?
  //  Ideal password length, numbers, uppercase, lowercase, special characters. confirm()? true or false
  getParameters();

  // 2. Generate password from available info.
  // for loop
  // add random character

  for (let i = 0; i < passwordLength; i++) {
    //add random character to password
    password += availableCharacters.charAt(Math.floor(Math.random()*availableCharacters.length));

  }

  return password;
}



function getParameters() {

  availableCharacters = ``
  // prompt -> input box -> set password length 
  passwordLength = prompt(`Please enter desired password length`)
  if (!passwordLength) {
    return ``;
  } else if (passwordLength<8) {
    alert(`minimum 8 characters required`);
    return getParameters();
  } else if (passwordLength>128) {
    alert(`use 128 characters or fewer for your password`);
    return getParameters();
  } ;

  // // confirm -> yes/no -> add characters to availableCharacters
  var possNum = `1234567890`
  var possLower = `qwertyuiopasdfghjklzxcvbnm`
  var possUpper = `MNBVCXZLKJHGFDSAPOIUYTREWQ`
  var possSpecial = `!\"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~`
  if (confirm(`click ok to include numbers`) == true) {
    availableCharacters = availableCharacters.concat(possNum)
  }  
  if (confirm(`click ok to include lowercase letter`) == true) {
    availableCharacters = availableCharacters.concat(possLower)
  } 
  if (confirm(`click ok to include uppercase letters`) == true) {
    availableCharacters = availableCharacters.concat(possUpper)
  }  
  if (confirm(`click ok to include special characters`) == true) {
    availableCharacters = availableCharacters.concat(possSpecial)
  } 
  if (availableCharacters == false) {
    alert(`minimum one option required`)
    return;
  }

}