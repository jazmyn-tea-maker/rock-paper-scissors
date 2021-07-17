let playerSelect;
let computerSelect;
let playerWins = 0; //Connect to the counter.
let computerWins = 0; //Connect to the counter.
let round = 0;



//Chooses a random choice from an array as 
//the computer's choice. Stores it in computerSelect.
let computerPlay = () => {
    let choicesArr = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random()*3);
    computerSelect = choicesArr[index];
    return computerSelect;
};

//Function that takes the value of whichever div they clicked on and puts it
//in playerSelect.

//Explanatory. Takes values of win counts to determine
//who will be declared winner.
//Fix it to show certain animations: Winner robot with crown, loser robot disappointed.
//Also create a UI box that will pop up. Instead of using confirm.


// let winnerDeclaration = () => {
//     (playerWins == computerWins) ?
//     (playerWins > computerWins) ?  
//     playerWins = 0;
//     computerWins = 0;
// }

//Needs to be Good game in a text node if user clicks no on new UI box, and game on, with a 'Let's
//go!' button that can be clicked.

//This should open the custom dialog box. ^^^ and do that.
// let playAgain = () => {
//     winnerDeclaration();
//     if ();
//         commenceDuel(); 
//     } {
//         h2.innerHTML = 'Good game.';
//     }
        
// };

let commenceDuel = () => {
    //First to five wins, wins.
    round = 1;
    while (playerWins < 5 && computerWins < 5) {
        computerPlay(); //A choice must be set for the computer.
        userPlay(); //A choice must be clicked by the user.
        if (playerSelect == computerSelect) {
            //Run no animation for the robot.
            
        } else if (playerSelect == 'rock' && computerSelect == 'scissors' || playerSelect == 'paper' && computerSelect == 'rock' || playerSelect == 'scissors' && computerSelect == 'paper') {
            playerWins++; 
            //Run a trumped-bot anim.
            
        } else if (playerSelect == 'scissors' && computerSelect == 'rock' || playerSelect == 'rock' && computerSelect == 'paper' || playerSelect == 'paper' && computerSelect == 'scissors') {
            computerWins++;
            //Run a smug bot animation.

        }
        round++; //Repeatedly adds on the next round.
    }
    console.log('Player: '+playerWins, 'Computer: '+computerWins); // Kept for debugging.
    round = 0; //reset
    playAgain();
}

//commenceDuel();
