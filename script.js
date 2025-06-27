function getComputerChoice() {
  randomNumber = Math.random();
  console.log(randomNumber);
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

