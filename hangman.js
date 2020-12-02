var password = "DLA CHCĄCEGO NIC TRUDNEGO";
var board = document.querySelector(".board");
var lettersNumber = password.length;
var hiddenPassword = "";
var letters = document.querySelectorAll(".letter")

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

String.prototype.showTheLetter = function(position, character) {
	if (position > this.length - 1) {
      return this.toString();
   } else {
      return this.substr(0, position) + character + this.substr(position + 1);
   }
};

letters.forEach(function(btn) {
   btn.addEventListener("click", function(event) {
      for (i=0; i<lettersNumber; i++) {
         if(password.charAt(i) === event.target.innerText) {
            console.log(hiddenPassword.showTheLetter(i,event.target.innerText));
            hiddenPassword = hiddenPassword.showTheLetter(i,event.target.innerText)
            showPassword();
         }
      }   
   })
});