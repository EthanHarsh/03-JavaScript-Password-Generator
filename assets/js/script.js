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


function generatePassword () {
  const numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperArray = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const symbolArray = ['@', '!', '$', '&'];
  
  const questionArray = ['First, would you like to have lowercase letters in your password?', 'Thank you! \n Would you like to have UPPERCASE letters in your password?', 'Awesome 😎 \n Would you like to have numbers in your password?', 'Last question! \n Would you like to have symbols in your password? (@, !, $, &)'];
  const bigArray = [lowerArray, upperArray, numArray, symbolArray];

  let passArray = [];
  let pass = '';

  var check = false;
  while (check === false){
    var len = parseInt(prompt('Please enter password length. (Between 8 - 128 characters)'));
    if (len >= 8 && len <= 128) {
      check = true;
    }
  }
  //console.log(len);
  
  let i = 0;
  questionArray.forEach(el => {
    if(charPromp(el)) {
      passArray = passArray.concat(bigArray[i]);
    }
    i++;
  });

  for(i=0; i < len; i++) {
    pass = pass.concat(passArray[Math.floor(Math.random() * passArray.length)]);
    console.log('Password: ' + pass);
  }

  //console.log(passArray);
}

function charPromp (question) {
  if (window.confirm(question)) {
      return true;
  } else {
      return false;
  }
}