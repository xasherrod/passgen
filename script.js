// Different code variables
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbols = "!@#$%^&*";

var randomLC = lowercaseLetters.split("");
var randomUC = upercaseLetters.split("");
var randomNum = number.split("");
var randomSym = symbols.split("");

//Password Function
function generatePassword(){
  var pass = [];
  var allPass = "";
// Ask the user how long they want there password  
  var charLength = prompt('How many characters would you like your password to be?');
    if (charLength < 8 || charLength > 128) {
    alert("You must choose a number between 8 and 128.");
   }
   else {
// Asking the user if they want lowercase, uppercase, number, and/or symbols in their password      
     if(confirm("Would you like lowercase letters in your password?")){
       Array.prototype.push.apply(pass, randomLC);
        }
      if(confirm("Would you like uppercase letters in your password?")){
       Array.prototype.push.apply(pass, randomUC);
   }
      if(confirm("Would you like numbers in your password?")){
    Array.prototype.push.apply(pass, randomNum);
      }
      if(confirm("Would you like symbols in your password?")){
        Array.prototype.push.apply(pass, randomSym);
      }
      if(pass.length===0){
        alert("You must have at least one symbol in your password.");
    }
    else{
   //random generator
     for (var i = 0; i < charLength; i++) {
     var random = Math.floor(Math.random()*pass.length);
       allPass += pass[random];
     }
    }
   }
   //display results
    document.getElementById("password").innerHTML = allPass;

  }

  function writePassword() {
  var password = generatePassword();

 

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);