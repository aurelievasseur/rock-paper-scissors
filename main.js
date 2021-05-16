// variable declaration
let result;
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;
const computer = document.querySelector(".computer");
const ui_score = document.querySelector(".insert-result");
const total_score = document.querySelector(".total_score")

// computerPlay return the computer choice as a string
function computerPlay() {
  let computerchoice = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  computer.textContent = choices[computerchoice];
  return choices[computerchoice];
}

// this function gives the winner based on the playerchoice (playerSelection) and the computer choice as computerSelection
function playRound(e, computerSelection) {
  if (e === computerSelection) {
    result = "tie";
  } else {
    switch (e) {
      case "rock":
        if (computerSelection === "paper") {
          result = "playerLose";
        } else result = "playerWin";

        break;

      case "paper":
        if (computerSelection === "rock") {
          result = "playerWin";
        } else {
          result = "playerLose";
        }
        break;

      case "scissors":
        if (computerSelection === "paper") {
          result = "playerWin";
        } else result = "playerLose";

        break;
    }
  }
}
// This keeps tracks of the total of each player
function keepTrack() {
  if (result === "playerWin") {
    playerScore += 1;
  } else if (result === "playerLose") {
    computerScore += 1;
  }
  total_score.textContent =
    "Round " +
    roundCount +
    " : The player has " +
    playerScore +
    " and the computer has " +
    computerScore;
  roundCount += 1;
}

// Display the current leading player
function winner() {
  if (playerScore > computerScore) {
    ui_score.textContent = "You are the current winner !";
  } else if (playerScore === computerScore) {
    ui_score.textContent = `It's a tie right now, no clear winner !`;
  } else ui_score.textContent = "The Computer is killing it !!!!";

}

const playerChoice = document.querySelectorAll(".btn-game");
playerChoice.forEach((element) => {
  element.addEventListener("click", function (e) {
    playRound(this.id, computerPlay());
    keepTrack();
    winner();
  });
});

function reset() {
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;
  result = "";
  computer.innerHTML = "";
  ui_score.innerHTML = "";
}
const resetGame = document.querySelector(".reset");
resetGame.addEventListener("click", reset);
