/*---------Random Codes---------*/
//Function to generate combination of characters
function generateCode() {

}

//Function to generate combination of characters
function generateCode() {
    //Create variable to store generated codes and the types of characters we want to show as codes
    var code= ''; //Initialize to null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
}

//Generate characters multiple times using a loop
for (i =1; i <= 8; i++) {

 var char = Math.random() * str.length;
    code += str.charAt(char);
  }

  return code;


document.getElementById("codes").innerHTML = generateCode();

function disableButton(btnValue) {
    document.getElementById("submit").disabled = true;

}

//Disable button
function disableButton() {
    document.getElementById("submit").disabled = true;
}

//Activate function
disableButton();
