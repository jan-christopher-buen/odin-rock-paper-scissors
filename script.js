// getComputerChoice
// 1. Get a random number between 0 and 1
// 2. If it is less than 1/3, return "rock"
// 3. If it is less than 2/3, return "paper"
// 4. Otherwise, return "scissors"

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1/3) {
    return "rock";
  } else if (randomNumber < 2/3) {
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

