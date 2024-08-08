let guessNumber = document.getElementById("guessNum");
let guessButton = document.getElementById("btnGuess");
let resetButton = document.getElementById("btnReset");
let count = 0;
let isCorrect = false;
resetButton.disabled = true;
resetButton.onclick = function () {
  count = 0;
  isCorrect = false;
  document.getElementById("resultWon").textContent = "";
  document.getElementById("resultFail").textContent = "";
  guessNumber.disabled = false;
  guessNumber.value = "";
};

guessButton.onclick = function () {
  if (count < 3 && !isCorrect) {
    let systemGuess = Math.floor(Math.random() * 10) + 1;
    let userGuess = guessNumber.value;
    if (systemGuess == userGuess) {
      isCorrect = true;
      document.getElementById("resultWon").textContent =
        "Congratulations! You are the Winner!";
    } else {
      document.getElementById("resultFail").textContent =
        "Sorry, System Guess is " + systemGuess;
    }
    count++;
  } else {
    document.getElementById("resultFail").textContent =
      "Sorry, System is the Winner";
    guessNumber.disabled = true;
    resetButton.disabled = false;
  }
};
