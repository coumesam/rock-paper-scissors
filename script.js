function computerPlay() {
    // randomly select a number between 0 and 100
    let num = Math.floor(Math.random()*100);
    // if between 0-33, return "Rock"
    if (num <= 33) {
        return "Rock";
    // if between 34-67, return "Paper"
    } else if (num <= 66) {
        return "Paper";
    // if between 68-100, return "Scissors"
    } else {
        return "Scissors";
    };
};

let playerScore = 0;
let computerScore = 0;
let winningPlayer = '';
let inputAlert = "Please input \"Rock,\" \"Paper,\" or \"Scissors.\"";

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection === "Rock") {
            return "It's a tie! Rock and Rock. Try again.";
        } else if (computerSelection === "Paper") {
            computerScore ++;
            return "You lose! Paper covers Rock.";
        } else {
            playerScore ++;
            return "You win! Rock beats Scissors.";
        };
    } else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection === "Rock") {
            playerScore ++;
            return "You win! Paper covers Rock.";
        } else if (computerSelection === "Paper") {
            return "It's a tie! Paper and Paper. Try again.";
        } else {
            computerScore ++;
            return "You lose! Scissors cut Paper.";
        };
    } else if (playerSelection.toUpperCase() === "SCISSORS") { 
        if (computerSelection === "Rock") {
            computerScore ++;
            return "You lose! Rock beats Scissors.";
        } else if (computerSelection === "Paper") {
            playerScore ++;
            return "You win! Scissors cut Paper.";
        } else {
            return "It's a tie! Scissors and Scissors. Try again.";
        };
    };
};


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const score = document.getElementById('score');
const remark = document.getElementById('remark');

function showScore() {
    score.textContent = `The score is: Player  ${playerScore}, Computer  ${computerScore}`;
}

if (playerScore > computerScore) {
    winningPlayer = 'you';
} else {
    winningPlayer = 'the computer';
}

function selection() {
    if (playerScore != 5 && computerScore != 5) {
        remark.textContent = `${playRound(this.textContent, computerPlay())}`;
    } else {
        remark.textContent = `The winner is ${winningPlayer}!`;
    };
    showScore();
}

if (playerScore != 5 && computerScore != 5) {
    rock.addEventListener('click', selection);
    paper.addEventListener('click', selection);
    scissors.addEventListener('click', selection);
};

// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound(prompt("It's your turn! please provide your choice."), computerPlay());
//         console.log(`The score is: Player - ${playerScore}, Computer - ${computerScore}`);
//     }
// }
