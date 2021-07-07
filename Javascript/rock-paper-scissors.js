let playerSelect;
let computerSelect;
let playerWins = 0;
let computerWins = 0;
let round = 1;

//Chooses a random choice from an array as 
//the computer's choice. Stores it in computerSelect.
let computerPlay = () => {
    let choicesArr = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random()*3);
    computerSelect = choicesArr[index];
    return computerSelect;
};

//Prompts user. Uses choice to store in playerSelect.
//Changes the answer to fit the format, all lowercase
//and no special symbols.
let userPlay = () => {
    let option = prompt(`Hello! This is a five round game. 
    Whoever wins will be named supreme leader! Round ${round} 
    Rock, Paper, or Scissors? (May the odds be in your favor!)`, '');
    option = option.toLowerCase().replace(/[^\w\s]/gi, '');
    playerSelect = option;
    return playerSelect;
};

//Explanatory. Takes values of win counts to determine
//who will be declared (alerted) as winner.
let winnerDeclaration = () => {
    (playerWins == computerWins) ? alert('Wow, what are the odds! You\'ve tied!') :
    (playerWins > computerWins) ? alert(`You, player, are now named SUPREME LEADER, with a score of ${playerWins} rounds out of 5!`) : 
    alert(`The computer is now named SUPREME LEADER! Though it could actually care less. It won ${computerWins} rounds out of 5.`);
    playerWins = 0;
    computerWins = 0;
}

//Confirm display box used to prompt user to continue (true/OK button)
//or to not. (false/Cancel button)
let playAgain = () => {
    winnerDeclaration();
    if (confirm('Would you like to play again?')) {
        alert('Game on!');
        commenceDuel(); 
    } {
        alert('Good game!');
    }
        
};

let commenceDuel = () => {
    //Ends the game at the 5th round.
    while (round <= 5) {
        computerPlay(); //A choice must be set for the computer.
        userPlay(); //A choice must be set by the user.
        if (playerSelect == computerSelect) {
            alert('It\'s a tie! Good luck next time.'); 
            
        } else if (playerSelect == 'rock' && computerSelect == 'scissors' || playerSelect == 'paper' && computerSelect == 'rock' || playerSelect == 'scissors' && computerSelect == 'paper') {
            playerWins++; //Adds to playerWins.
            alert(`You are the victor! The computer chose ${computerSelect}`);
            
        } else if (playerSelect == 'scissors' && computerSelect == 'rock' || playerSelect == 'rock' && computerSelect == 'paper' || playerSelect == 'paper' && computerSelect == 'scissors') {
            computerWins++; //Adds to compWins
            alert(`You\'ve been trounced! The computer chose ${computerSelect}! Better luck next time.`);

        } else {
            alert('Okay, I\'m quite sure that isn\'t in the options...Computer wins because they actually read directions!');
            computerWins++;

        }
        round++; //Repeatedly adds on the next round.
    }
    console.log('Player: '+playerWins, 'Computer: '+computerWins);
    round = 1; //reset
    playAgain();
}

commenceDuel();
