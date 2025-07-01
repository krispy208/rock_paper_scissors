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



function playRound(humanChoiceUnAltered, computerChoice) {
  let humanChoice = humanChoiceUnAltered.toLowerCase();
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



let humanScore = 0;
let computerScore = 0;




buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = document.querySelector(".result");
    const score = document.querySelector(".score");
    const winner = document.querySelector(".winner");
    result.textContent = playRound(button.textContent, getComputerChoice());
    score.textContent = `User score: ${humanScore} : Computer score: ${computerScore}`;
    if (humanScore === 5) {
      winner.textContent = 'Human won!';
     

    }
    else if (computerScore === 5) {
      winner.textContent = 'Computer won!';
     
    }
  })

})




