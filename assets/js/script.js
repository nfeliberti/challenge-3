// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var length = 12;
  var letters = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  var num = '0123456789';
  var spec = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var password = "";
  var character = "";
  while( password.length<length ) {
      pass1 = Math.ceil(letters.length * Math.random()*Math.random());
      pass2 = Math.ceil(num.length * Math.random()*Math.random());
      pass3 = Math.ceil(spec.length * Math.random()*Math.random());
      hold = letters.charAt( pass1 );
      hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
      character += hold;
      character += num.charAt( pass2 );
      character += spec.charAt( pass3 );
      password = character;
  }
  password=password.split('').sort(function(){
    return 0.5-Math.random()}).join('');
  return password.substr(0,length);
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
generatePassword();
