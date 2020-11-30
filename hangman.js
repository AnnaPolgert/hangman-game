var password = "Dla chcącego nic trudnego";
var board = document.querySelector(".board");
var lettersNumber = password.length;
var hiddenPassword = "";

for (i=0; i<lettersNumber; i++) {
   if(password.charAt(i) === " ") {
      hiddenPassword = hiddenPassword + " ";
   } else {
      hiddenPassword = hiddenPassword + "-"
   }
}

var showPassword = function() {
   board.innerHTML = hiddenPassword;
}

showPassword();