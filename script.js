function computerPlay() {
    // randomly select a number between 0 and 100
    let num = Math.floor(Math.random()*100);

    // if between 0-33, return "Rock"
    // if between 34-67, return "Paper"
    // if between 68-100, return "Scissors"
    if (num <= 33) {
        return "Rock";
    } else if (num <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    };
};

let playerScore = 0;
let computerScore = 0;
let inputAlert = "Please input \"Rock,\" \"Paper,\" or \"Scissors.\"";

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection === "Rock") {
            return "It's a tie! Rock and Rock. Try again.";
        } else if (computerSelection === "Paper") {
            computerScore ++;
            console.log(computerScore)
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
    } else if (playerSelection === "") {
        alert(inputAlert);
    } else {
        alert(inputAlert);
    }
};

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(prompt("It's your turn! please provide your choice."), computerPlay());
        console.log(`The score is: Player - ${playerScore}, Computer - ${computerScore}`);
    }
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
