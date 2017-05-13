function loginValidation() {
    var pinVal, errorMsg;

    // collect values of the PIN and the error message element
    pinVal = document.getElementById("gamePin").value;
    errorMsg = document.getElementById('errorMessage');

    // checks pin range
    if (pinVal <= 999 || pinVal >= 10000) {

        errorMsg.innerHTML = "PIN should be 4 digits"
        errorMsg.className = "show";
        setTimeout(function(){ errorMsg.className = errorMsg.className.replace("show", ""); }, 3000);

    } 
    // TODO: sample message that shows when the PIN meets pin criteria, but is not found
    else if (pinVal == 9999) {

        errorMsg.innerHTML = "PIN not found. Please confirm your PIN and try again"
        errorMsg.className = "show";
        setTimeout(function(){ errorMsg.className = errorMsg.className.replace("show", ""); }, 3000);

    } 
    // TODO: if they can login, that goes in the 'else' caluse
    else {
        
        errorMsg.className = "";

    }

}