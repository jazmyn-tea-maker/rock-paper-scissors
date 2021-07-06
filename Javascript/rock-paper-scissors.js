let playerSelect;
let computerSelect;
let playerWins = 0;
let computerWins = 0;
let round = 1;

let computerPlay = () => {
    let choicesArr = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random()*3);
    computerSelect = choicesArr[index];
    return computerSelect;
};

let userPlay = () => {
    let option = prompt(`Hello! This is a five round game. Whoever wins will be named supreme leader! Round ${round} Rock, Paper, or Scissors? (May the odds be in your favor!)`, '');
    option = option.toLowerCase().replace(/[^\w\s]/gi, '');
    playerSelect = option;
    return playerSelect;
};

let winnerDeclaration = () => {
    (playerWins == computerWins) ? alert('Wow, what are the odds! You\'ve tied!') :
    (playerWins > computerWins) ? alert(`You, player, are now named SUPREME LEADER, with a score of ${playerWins} rounds out of 5!`) : 
    alert(`The computer is now named SUPREME LEADER! Though it could actually care less. It won ${computerWins} rounds out of 5.`);
}

let playAgain = () => {
    winnerDeclaration();
    if (confirm('Would you like to play again?')) {
        alert('Game on!');
        computerPlay();
        userPlay();
        commenceDuel(playerSelect, computerSelect);
    } {
        alert('Good game!');
    }
        
};

let commenceDuel = () => {
    
    while (round <= 5) {
        computerPlay();
        userPlay();
        if (playerSelect == computerSelect) {
            alert('It\'s a tie! Good luck next time.'); 
            
        } else if (playerSelect == 'rock' && computerSelect == 'scissors' || playerSelect == 'paper' && computerSelect == 'rock' || playerSelect == 'scissors' && computerSelect == 'paper') {
            playerWins++;
            alert(`You are the victor! The computer chose ${computerSelect}`);
            
        } else if (playerSelect == 'scissors' && computerSelect == 'rock' || playerSelect == 'rock' && computerSelect == 'paper' || playerSelect == 'paper' && computerSelect == 'scissors') {
            computerWins++;
            alert(`You\'ve been trounced! The computer chose ${computerSelect}! Better luck next time.`);

        } else {
            alert('Okay, I\'m quite sure that isn\'t in the options...Computer wins because they actually read directions!');
            computerWins++;

        }
        round++;
    }
    console.log('Player: '+playerWins, 'Computer: '+computerWins);
    playAgain();
}

commenceDuel();
playerWins = 0;
computerWins = 0;