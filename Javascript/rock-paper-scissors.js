let playerSelect;
let computerSelect;
let playerWins = 0; //Connect to the counter.
let computerWins = 0; //Connect to the counter.
let round = 1;
let compNum = document.getElementById('comp-num-score');
let userNum = document.getElementById('user-num-score');
let playBtn = document.getElementById('play-button');
let robotCover = document.getElementById('robo-cover-div');
let flag = document.getElementsByClassName('flag-svg').item(0);
let flag2 = document.getElementsByClassName('flag-svg').item(1);
let roundTitle = document.getElementsByClassName('round-title').item(0);
let roundTitle2 = document.getElementsByClassName('round-title').item(1);
let roundCount = document.getElementsByClassName('round').item(0);
let roundCount2 = document.getElementsByClassName('round').item(1);
let compTile1 = document.getElementById('comp-1-tile');
let compTile2 = document.getElementById('comp-2-tile');
let compTile3 = document.getElementById('comp-3-tile');
let userTile1 = document.getElementById('user-1-tile');
let userTile2 = document.getElementById('user-2-tile');
let userTile3 = document.getElementById('user-3-tile');

playBtn.setAttribute('weeWoo', '1');

playBtn.addEventListener('click', function (e) {
    roundCount.innerHTML = 1;
    roundCount2.innerHTML = 1;
    robotCover.style['animation-name'] = 'pull-up';
    let animArr = [flag, flag2, roundTitle, roundTitle2, roundCount, roundCount2];
    for (const element of animArr) {
        element.style['animation-name'] = 'rollDown';
    }
    compTile2.style['animation-name'] = 'score-reveal-comp';
    userTile2.style['animation-name'] = 'score-reveal-user';
    playBtn.removeAttribute('weeWoo');
    playBtn.classList.add('animate__bounceOut').style['animation-fill-mode'] = 'forwards';
})


let rollUpFlags = () => {
    if (true) {
        let animArr = [flag, flag2, roundTitle, roundTitle2, roundCount, roundCount2];
        for (const element of animArr) {
            element.style['animation-name'] = 'rollUp';
        }
    }
}

let rollDownFlags = () => {
    if (flag.style['animation-name'] == 'rollUp' && flag2.style['animation-name'] == 'rollUp') {
        let animArr = [flag, flag2, roundTitle, roundTitle2, roundCount, roundCount2];
        for (const element of animArr) {
            element.style['animation-name'] = 'rollDown';    
        }
    } else {

    }
}

let roundAdder = () => {
    round += 1;
    roundCount.innerHTML = round;
    roundCount2.innerHTML = round;
}

let nextRoundFlags = () => {
    rollUpFlags();
    setTimeout(roundAdder, 750);
    setTimeout(rollDownFlags, 1000);
}

let numBetween1And3 = () => {
    let num = Math.floor(Math.random() * 4);
    num == 0 ? num += 1 : num;
    return num;
};

//Connects tile number to a random number between 1
//and 3. Used to choose for the computer. Stored in 
//computerSelect.

let compTile2Up = () => {
    compTile2.style['animation-name'] = 'score-reveal-comp';
}

let computerPlay = () => {
    let choice = numBetween1And3();
    if (choice == 1) {
        compTile1.style['animation-name'] = 'comp-left-div-up';
        compTile2.style['animation-name'] = 'score-cover-comp';
    } else if (choice == 2) {
        compTile2.style['animation-name'] = 'score-cover-comp';
        setTimeout(compTile2Up, 500);
    } else {
        compTile3.style['animation-name'] = 'comp-right-div-up';
        compTile2.style['animation-name'] = 'score-cover-comp';
    }
    return choice;
};



let userPlay = () => {

}

//Function that takes the value of whichever div they clicked on and puts it
//in playerSelect.

//Explanatory. Takes values of win counts to determine
//who will be declared winner.
//Fix it to show certain animations: Winner robot with crown, loser robot disappointed.
//Also create a UI box that will pop up. Instead of using confirm.


let winnerDeclaration = () => {
    // (playerWins == computerWins) ?
    // (playerWins > computerWins) ? 
    playerWins = 0;
    computerWins = 0;
}

//Needs to be Good game in a text node if user clicks no on new UI box, and game on, with a 'Let's
//go!' button that can be clicked.

//This should open the custom dialog box. ^^^ and do that.
let playAgain = () => {
    winnerDeclaration();
    if (true) {

    }
        commenceDuel(); 

};

let commenceDuel = () => {
    //First to five wins, wins.
    while (playerWins < 5 && computerWins < 5) {
        computerPlay(); //A choice must be set for the computer.
        userPlay(); //A choice must be clicked by the user.
        if (playerSelect == computerSelect) {
            //Run no animation for the robot.

        } else if (playerSelect == 'rock' && computerSelect == 'scissors' || playerSelect == 'paper' && computerSelect == 'rock' || playerSelect == 'scissors' && computerSelect == 'paper') {
            playerWins++;
            //Run a trumped-bot anim.
            userNum.innerHTML = playerWins;

        } else if (playerSelect == 'scissors' && computerSelect == 'rock' || playerSelect == 'rock' && computerSelect == 'paper' || playerSelect == 'paper' && computerSelect == 'scissors') {
            computerWins++;
            //Run a smug bot animation.
            compNum.innerHTML = computerWins;
        }
        round++; //Repeatedly adds on the next round.
        
    }
    console.log('Player: ' + playerWins, 'Computer: ' + computerWins); // Kept for debugging.
    roundCount.innerHTML = 1; //reset
    roundCount2.innerHTML = 1; //reset
    playAgain();
}

