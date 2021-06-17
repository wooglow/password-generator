var allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var allLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var allNums = ["1","2","3","4","5","6","7","8","9","0"]
var allSpec = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","_","{","|","}","~"]



function generatePassword() {
  var passPool = [];
  var passMade = "";
  var passLength = window.prompt("Please Type length of your wanted password (8 ~ 128)");
  if (passLength < 8 || passLength > 128) {
    window.alert("!Password Length must be between 8 and 128!")
    return;}
  var useUpper = window.confirm("Do you want Uppercase on your password?");
  if (useUpper) {
    passPool = passPool.concat(allUpper);
    passMade += allUpper[Math.floor(Math.random() * allUpper.length)];
  }
  var useLower = window.confirm("Do you want Lowercase on your password?");
  if (useLower) {
    passPool = passPool.concat(allLower);
    passMade += allLower[Math.floor(Math.random() * allLower.length)];
  }
  var useNum = window.confirm("Do you want Numbers on your password?");
  if (useNum) {
    passPool = passPool.concat(allNums);
    passMade += allNums[Math.floor(Math.random() * allNums.length)];
  }
  var useSpec = window.confirm("Do you want Special letters on your password?");
  if (useSpec) {
    passPool = passPool.concat(allSpec);
    passMade += allSpec[Math.floor(Math.random() * allSpec.length)];
  }
  if (!useUpper && !useLower && !useNum && !useSpec) {
    window.alert("At least one of letters must be included!")
    return;} else {
  
  while (passMade.length < passLength) { 
    passMade += passPool[Math.floor(Math.random() * passPool.length)];
  }
  return passMade;
  
  } }


// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

