# rock_paper_scissors
Create a Rock Paper Scissors Game
1. First create the computer's move and return it
  1. Use math.random and if the move falls within certain constraints it will return
    a move
      ex: math.random < 1/3, then return 'rock'
          math.random < 2/3, then return 'paper
          else return 'scissors
|||||||    
2. Get the user input, aka rock,paper or scissors

3. Store computer and human scores in two variables.

4. A function playRound, which updates scores and returns the result of the game

5. A function playGame, which boots the game up.
  //Note this function only plays the game 5 times, can be further modified to play infintely, maybe with eventListeners 