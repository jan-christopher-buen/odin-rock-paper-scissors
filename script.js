// getComputerChoice
// 1. Get a random number between 0 and 1
// 2. If it is less than 1/3, return "rock"
// 3. If it is less than 2/3, return "paper"
// 4. Otherwise, return "scissors"

function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

// getHumanChoice
// 1. Ask the player to type rock, paper, or scissors
// 2. Return what the player typed

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors:");
}

let humanScore = 0;
let computerScore = 0;

// playRound
// 1. Convert humanChoice to lowercase
// 2. If humanChoice is the same as computerChoice, log "It's a tie!"
// 3. Otherwise, if the player wins (rock vs scissors, paper vs rock,
//    or scissors vs paper), log a win message and add 1 to humanScore
// 4. Otherwise, log a lose message and add 1 to computerScore

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);

console.log("Human:", humanScore, "Computer:", computerScore);