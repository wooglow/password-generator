var allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var allLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var allNums = ["1","2","3","4","5","6","7","8","9","0"]
var allSpec = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","_","{","|","}","~"]



function generatePassword() {
  var passPool = [];
  var passLength = window.prompt("Please Type length of your wanted password (8 ~ 128)");
  if (passLength < 8 || passLength > 128) {
    window.alert("!Password Length must be between 8 and 128!")
    return;}
  var useUpper = window.confirm("Do you want Uppercase on your password?");
  if (useUpper) {var passPool = passPool.concat(allUpper);}
  var useLower = window.confirm("Do you want Lowercase on your password?");
  if (useLower) {var passPool = passPool.concat(allLower);}
  var useNum = window.confirm("Do you want numbers on your password?");
  if (useNum) {var passPool = passPool.concat(allNums);}
  var useSpec = window.confirm("Do you want Special letters on your password?");
  if (useSpec) {var passPool = passPool.concat(allSpec);}
  if (!useUpper && !useLower && !useNum && !useSpec) {
    window.alert("At least one of letters must be included!")
    return;} else {
  var passMade = [];
  for (var i = 0, n = passPool.length; i < passLength; ++i) { 
    passMade += passPool[Math.floor(Math.random() * n)];
  }
  return passMade
  // var passMade = Math.floor(Math.random() * passLength.length);
    // choose "passlength" letters from the pool one by one.
    console.log("This is your new password " + passMade)
    console.log(passPool);
  
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

