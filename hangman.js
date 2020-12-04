var password = "DLA CHCĄCEGO NIC TRUDNEGO";
var board = document.querySelector(".board");
var lettersNumber = password.length;
var hiddenPassword = "";
var letters = document.querySelectorAll(".letter")
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

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
      var hit;
      for (i=0; i<lettersNumber; i++) {
         if(password.charAt(i) === event.target.innerText) {
            hiddenPassword = hiddenPassword.showTheLetter(i,event.target.innerText);
            hit = true;
            showPassword();
         }
      }

      if(hit===true) {
         yes.play();
         event.target.classList.add("letter-true");
      } else {
         no.play();
         event.target.classList.add("letter-false");
      }
   })
});