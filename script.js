
//My pseudocode:
//1. prompt("Choose a password length between 8 and 128.");
//2. if.... var userLength = true, console.log user length input, else...alert ("Incorrect length!")
//4. confirm ("Would you like letters?") if.... var confirmLetters then console.log "yes" , else... console.log "null"
//5. confirm ("Would you like numbers?") if... var confirmNum then console.log "yes", else... console.log "null"
//6. confirm ("Would you like special characters?") if... var confirmChar then console.log "yes", else... console.log "null"
//7. function generate () called with var userInput? or var confirm"""'s? parameters.  
//8. Results (var password ) logged to console and displayed in text area.

//declaring an object containing 3 user choices:

/*function generatePassword() {

    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ'";
    var passwordLength = 8;
    var specialSymbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


    var generate = document.getElementById("button");
    var password = document.getElementById("display");
    var yourPassword = " ";

    var passwordLength = prompt("Choose a password length beween 8 and 128 characters long");
    if (passwordLength > 7.9 && passwordLength < 128.1) {
        passwordLength = Math.round(passwordLength);
        alert(passwordLength + " is your new password character length")
    ;
    if (passwordLength = null[console.log("no user length input")]) alert("Must choose a password length")
    /*else {
               alert("Invalid entry your new password will be set to 10 characters long");
               passwordLength = 10;
           }*/

   /* var upperCase = confirm("Would you like your password to contain upper case letters?");
    if (upperCase.confirm [console.log("Include upper case letters")])

        var specialSymbols = confirm("Would you like special characters included in password?");
    if (specialSymbols.confirm = true(console.log("Include special characters.")));


}

}*/




//generate random password function
function generatePassword() {
    var length = Number(prompt("How many characters would you like your password be? Please enter a digit between 8 and 128"));
    length = parseInt(length);
    if (length < 8 || length > 128 || !length) { // !length (is length falsey)
      alert("Please choose a correct number length!!");
      generatePassword();
      return
      // exits function
    }
    // use confirm statements to eval true or false 
    var upperCase = confirm("Do you want your password to include have uppercase letters?");
    var lowerCase = confirm("Do you want your password to include lowercase letters?");
    var numbers = confirm("Do you want your password to include numeric characters?");
    var specialChar = confirm("Do you want your password to include special characters?");
    //create characterType and set character set based on user input = characterSet
    var userChoice = "";
    // use "if" statements and confirm w/boolean
    if (lowerCase === true) {
      userChoice = userChoice + "abcdefghijklmnopqrstuvwxyz";
    }
    if (upperCase === true) {
      userChoice = userChoice + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers === true) {
      userChoice = userChoice + "0123456789";
    }
    if (specialChar === true) {
      userChoice = userChoice + " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    //return value
    var passWord = "";
    for (var i = 0; i < length; i++) {
      //picks characters within characterSet at index of random number
      passWord += userChoice.charAt(Math.floor(Math.random() * userChoice.length));
    }
    var button = document.getElementById("btn btn-primary btn-lg");
    document.getElementById("display").value = passWord;
  }
