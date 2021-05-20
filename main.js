// variable declaration
let result;
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

const computer = document.querySelector("#computer-btn");
const ui_score = document.querySelector(".insert-result");
const total_score = document.querySelector(".total_score")
const human_score = document.querySelector('#human-score')
const computer_score = document.querySelector('#computer-score')
const currentRound = document.querySelector('#round')

// computerPlay return the computer choice as a string
function computerPlay() {
  let computerchoice = Math.floor(Math.random() * 3);
  let choices = ["Rock", "Paper", "Scissors"];
  computer.textContent = choices[computerchoice];
  return choices[computerchoice];
}

// this function gives the winner based on the playerchoice (playerSelection) and the computer choice as computerSelection
function playRound(e, computerSelection) {
  if (e === computerSelection) {
    result = "tie";
  } else {
    switch (e) {
      case "Rock":
        if (computerSelection === "Paper") {
          result = "playerLose";
        } else result = "playerWin";

        break;

      case "Paper":
        if (computerSelection === "Rock") {
          result = "playerWin";
        } else {
          result = "playerLose";
        }
        break;

      case "Scissors":
        if (computerSelection === "Paper") {
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
  human_score.textContent = playerScore;
  currentRound.textContent = roundCount;
  computer_score.textContent = computerScore;
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
  computer_score.innerHTML = "";
  human_score.innerHTML = "";
  currentRound.innerHTML = "";
}
const resetGame = document.querySelector(".reset");
resetGame.addEventListener("click", reset);
