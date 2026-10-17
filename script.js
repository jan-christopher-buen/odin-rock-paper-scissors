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

// playGame
// 1. Set humanScore and computerScore to 0
// 2. Define playRound inside playGame so it can update the scores
// 3. Play 5 rounds, getting new choices from both players each round
// 4. After 5 rounds, compare the scores and log the overall winner

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log("Final score - Human:", humanScore, "Computer:", computerScore);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("The computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();

