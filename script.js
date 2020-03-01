
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
    //confirm statements to eval true or false 
    var upperCase = confirm("Do you want your password to include have uppercase letters?");
    var lowerCase = confirm("Do you want your password to include lowercase letters?");
    var numbers = confirm("Do you want your password to include numeric characters?");
    var specialChar = confirm("Do you want your password to include special characters?");
    //create userChoice and set character set based on user input = passWord
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
      //picks characters within userChoice at index of random number
      passWord += userChoice.charAt(Math.floor(Math.random() * userChoice.length));
    }
    var button = document.getElementById("btn btn-primary btn-lg");
    document.getElementById("display").value = passWord;
  }
