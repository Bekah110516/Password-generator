



function generate() {

    var passwordValues = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    //prompt("Choose a password length between 8 and 128.");
    //if statement here?
    var password = "";
    for (var i = 8; i <= 128; i++) {
        //var userPass = Math.floor((Math.random() * passwordValues.length) + 0);
        password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length - 1)));
    }

    console.log(password);
    document.getElementById("display").innerHTML = password;


}

