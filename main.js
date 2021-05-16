// variable declaration
let result;
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;
const computer = document.querySelector(".computer");
const ui_score = document.querySelector(".insert-result");

// computerPlay return the computer choice as a string
function computerPlay() {
  let computerchoice = Math.floor(Math.random() * 3);
  let choices = ["Rock", "Paper", "Scissors"];
  const showChoice = document.createElement("p");
  showChoice.textContent = choices[computerchoice];
  computer.appendChild(showChoice);
  return choices[computerchoice];
}

// this function gives the winner based on the playerchoice (playerSelection) and the computer choice as computerSelection
function playRound(e, computerSelection) {
  if (e === computerSelection) {
    result = "tie";
  } else {
    switch (e) {
      case "rock":
        if (computerSelection === "Paper") {
          result = "playerLose";
        } else result = "playerWin";

        break;

      case "paper":
        if (computerSelection === "Rock") {
          result = "playerWin";
        } else {
          result = "playerLose";
        }
        break;

      case "scissors":
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
  const showResult = document.createElement("p");
  showResult.textContent =
    "Round " +
    roundCount +
    " : The player has " +
    playerScore +
    " and the computer has " +
    computerScore;
  ui_score.appendChild(showResult);
  roundCount += 1;
}

// Display the current leading player
function winner() {
  const showOutcome = document.createElement("h3");
  if (playerScore > computerScore) {
    showOutcome.textContent = "You are the current winner !";
  } else if (playerScore === computerScore) {
    showOutcome.textContent = `It's a tie right now, no clear winner !`;
  } else showOutcome.textContent = "The Computer is killing it !!!!";

  ui_score.appendChild(showOutcome);
}

const playerChoice = document.querySelectorAll(".btn-game");
playerChoice.forEach((element) => {
  element.addEventListener("click", function (e) {
    computer.innerHTML = "";
    ui_score.innerHTML = "";
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
