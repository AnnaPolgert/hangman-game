var password = "DLA CHCĄCEGO NIC TRUDNEGO";
var board = document.querySelector(".board");
var lettersNumber = password.length;
var hiddenPassword = "";
var letters = document.querySelectorAll(".letter")
var hangmanImg = document.querySelector(".hangman");
var failure = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

reset = function() {
   document.querySelector(".reset").addEventListener("click", function() {
      location.reload()
   })
}

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
         failure++;
         var image = "img/s" + failure + ".jpg";
         hangmanImg.innerHTML = '<img src="' + image + '" alt="hangman"/>';
      }

      if(failure==9) {
         document.querySelector(".alphabet").innerHTML = '<div class="result">Przegrana! <br> Prawidłowe hasło to: <br>'+ password + ' <br><br> <span class="reset">Jeszcze raz?</span></div>';
         reset();
      }

      if(hiddenPassword === password) {
         document.querySelector(".alphabet").innerHTML = '<div class="result">Wygrana! <br> Podano prawidłowe hasło! <br><br> <span class="reset">Jeszcze raz?</span></div>';
         reset();
      }
   })
});