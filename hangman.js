var passwordsBank = [
   "Bez pracy nie ma kołaczy", "Fortuna kołem się toczy", "Nie chwal dnia przed zachodem", "Apetyt rośnie w miarę jedzenia", "Co ma wisieć nie utonie", "Dzieci i ryby głosu nie mają", "Baba z wozu koniom lżej", "Cel uświęca środki", "Człowiek człowiekowi wilkiem", "Czas to pieniądz", "Co za dużo to niezdrowo", "Co się stało to się nie odstanie", "Co kraj to obyczaj", "Co nagle to po diable", "Co dwie głowy to nie jedna", "Ciekawość pierwszy stopień do piekła", "Ciągnie swój do swego", "Do trzech razy sztuka", "Dzieci i ryby głosu nie mają", "Fortuna często rozumowi przeczy", "Gdy kota nie ma myszy harcują", "Głodnemu chleb na myśli", "Głodny głodnemu wypomni", "Głuchemu próżne słowa", "I króla robaki zjedzą", "Idzie luty podkuj buty", "Jajko mądrzejsze od kury", "Jak cię widzą, tak cię piszą", "Jedna jaskółka nie czyni wiosny", "Krowa która dużo ryczy mało mleka daje", "Kto sieje wiatr ten zbiera burzę", "Lekko przyszło lekko poszło", "Lepiej zapobiegać niż leczyć", "Nic po chlebie kiedy brak zębów", "Nie wszystko złoto co się świeci", "Od przybytku głowa nie boli", "Przyszła kryska na matyska", "Śmiałym szczęście sprzyja", "Wyjątek potwierdza regułę", "Wyszło szydło z worka", "Z dużej chmury mały deszcz", "Dla chcącego nic trudnego"
];
var randomNumber = Math.floor(Math.random() * (passwordsBank.length));
var password = passwordsBank[randomNumber];
var password = password.toUpperCase();
var board = document.querySelector(".board");
var lettersNumber = password.length;
var hiddenPassword = "";
var letters = document.querySelectorAll(".letter")
var hangmanImg = document.querySelector(".hangman");
var failure = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var playButton = document.querySelector(".play");
var input = document.querySelector(".input-name");
var name = "";
var popUpName = document.querySelector(".window-name");

input.addEventListener("change", function() {
   name = input.value;
 });

playButton.addEventListener("click", function(event) {
   popUpName.style.display = "none";
})

reset = function() {
   document.querySelector(".reset").addEventListener("click", function() {
      location.reload();
   })
};

for (i=0; i<lettersNumber; i++) {
   if(password.charAt(i) === " ") {
      hiddenPassword = hiddenPassword + " ";
   } else {
      hiddenPassword = hiddenPassword + "-"
   }
};

var showPassword = function() {
   board.innerHTML = hiddenPassword;
};

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
         document.querySelector(".alphabet").innerHTML = '<div class="result">' + name + '! <br> Przegrana! <br> Prawidłowe hasło to: <br>'+ password + ' <br><br> <span class="reset">Jeszcze raz?</span></div>';
         reset();
      }

      if(hiddenPassword === password) {
         document.querySelector(".alphabet").innerHTML = '<div class="result">' + name + '! <br> Wygrana! <br> Podano prawidłowe hasło! <br><br> <span class="reset">Jeszcze raz?</span></div>';
         reset();
      }
   })
});