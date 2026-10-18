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

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors:");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Defined inside playGame so it can update the scores above
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

