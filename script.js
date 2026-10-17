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

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());