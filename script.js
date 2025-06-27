function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return 'rock';
  }
  else if (randomNumber < 2 / 3) {
    return 'paper';
  }
  else {
    return 'scissors';
  }
}

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors: ").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  let result = '';
  console.log(`User chose ${humanChoice} and computer chose ${computerChoice}`);
  if (humanChoice === computerChoice) {
    result = 'You tied!';
  }
  else if (humanChoice === 'rock') {
    if (computerChoice === 'paper') {
      result = 'You lost!';
    }
    else {
      result = 'You won!';
    }
  }
  else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      result = 'You won!';
    }
    else {
      result = 'You lost!';
    }
  }
  else {
    if (computerChoice === 'rock') {
      result = 'You lost!';
    }
    else {
      result = 'You won!';
    }
  }
  if (result === 'You won!') {
    humanScore += 1;
  }
  else if (result === 'You lost!') {
    computerScore += 1;
  }
  return result;
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
  }
}

let humanScore = 0;
let computerScore = 0;


playGame();

