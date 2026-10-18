let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("#buttons button");
const results = document.querySelector("#results");
const score = document.querySelector("#score");

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        results.textContent = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    if (humanScore === 5) {
        results.textContent = "You win the game!";
    } else {
        results.textContent = "The computer wins the game!";
    }

    buttons.forEach((button) => {
        button.disabled = true;
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});