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

//Generate password string
function generatePassword () {
  //Create arrays to draw characters from
  const numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperArray = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const symbolArray = ['@', '!', '$', '&'];
  //Create array of prompt question strings
  const questionArray = ['First, would you like to have lowercase letters in your password?', 'Thank you! \n Would you like to have UPPERCASE letters in your password?', 'Awesome 😎 \n Would you like to have numbers in your password?', 'Last question! \n Would you like to have symbols in your password? (@, !, $, &)'];
  //Create array of other arrays
  const bigArray = [lowerArray, upperArray, numArray, symbolArray];
  //initialize password variables
  let passArray = [];
  let pass = '';
  //recieve password string length from user
  var check = false;
  while (check === false){
    var len = parseInt(prompt('Please enter password length. (Between 8 - 128 characters)'));
    if (len >= 8 && len <= 128) {
      check = true;
    }
  }
  //console.log(len);
  //Ask each password preference and concat choices to main password array
  let i = 0;
  questionArray.forEach(el => {
    if(charPromp(el)) {
      passArray = passArray.concat(bigArray[i]);
    }
    i++;
  });
  //randomly select characters from character preference array then add to password string
  for(i=0; i < len; i++) {
    pass = pass.concat(passArray[Math.floor(Math.random() * passArray.length)]);
    //console.log('Password: ' + pass);
  }
  //return password string
  return pass;
  //console.log(passArray);
}

function charPromp (question) {
  if (window.confirm(question)) {
      return true;
  } else {
      return false;
  }
}