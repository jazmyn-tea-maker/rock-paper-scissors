let playerSelect = 0;
let computerSelect = 0;
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

playBtn.setAttribute('weeWoo', '1'); //Adds hovering animation.




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
    setTimeout(rollDownFlags, 1000);
    setTimeout(roundAdder, 700);
    
}

let nextFlagNeededExecution = () => {
    if (playerSelect == 0) {
        playerSelect;
    } else {
        setTimeout(nextRoundFlags, 200);
        settlingBetweenRoundUser();
        settlingBetweenRoundComp();
    }
}

let numBetween1And3 = () => {
    let num = Math.floor(Math.random() * 4);
    num == 0 ? num += 1 : num;
    return num;
};



let compTile2Up = () => {
    compTile2.style['animation-name'] = 'score-reveal-comp';
}

let settlingBetweenRoundComp = () => {
    if (compTile1.style['animation-name'] == 'comp-left-div-up') {
        compTile1.style['animation-name'] = 'comp-left-div-down';
    }
    if (compTile3.style['animation-name'] == 'comp-right-div-up') {
        compTile3.style['animation-name'] = 'comp-right-div-down';
    }
    if(compTile2.style['animation-name'] == 'score-cover-comp') {
        compTile2.style['animation-name'] = 'score-reveal-comp';
    }
};

let settlingBetweenRoundUser = () => {
    if (userTile1.style['animation-name'] == 'user-left-div-up') {
        userTile1.style['animation-name'] = 'user-left-div-down';
    }
    if (userTile3.style['animation-name'] == 'user-right-div-up') {
        userTile3.style['animation-name'] = 'user-right-div-down';
    }
    if(userTile2.style['animation-name'] == 'score-cover-user') {
        userTile2.style['animation-name'] = 'score-reveal-user';
    }
};

//Playing animations:


//Connects tile number to a random number between 1
//and 3. Used to choose for the computer. Stored in 
//computerSelect.
let computerPlay = () => {
    computerSelect = numBetween1And3();
    if (computerSelect == 1) {
        console.log(1)
        compTile1.style['animation-name'] = 'comp-left-div-up';
        compTile2.style['animation-name'] = 'score-cover-comp';
    } else if (computerSelect == 2) {
        console.log(2)
        compTile2.style['animation-name'] = 'score-cover-comp';
        setTimeout(compTile2Up, 500);
    } else {
        console.log(3)
        compTile3.style['animation-name'] = 'comp-right-div-up';
        compTile2.style['animation-name'] = 'score-cover-comp';
    }
    return computerSelect;
};

//Similar to computerPlay() but with click events.

let userPlay = () => {
    userTile1.addEventListener('click', function () {
        playerSelect = 1;
        userTile1.style['animation-name'] = 'user-left-div-up';
        userTile2.style['animation-name'] = 'score-cover-user';
        computerPlay();
        if (computerSelect == 2) {
            alert('Computer Wins!');
            computerWins++;
            compNum.innerHTML = computerWins;
        } else if (computerSelect == 3) {
            alert('Player Wins!');
            playerWins++;
            userNum.innerHTML = playerWins;
        } else {
            alert('Tie!');
        }
        nextFlagNeededExecution();
    })

    userTile2.addEventListener('click', function () {
        playerSelect = 2;
        computerPlay();
        if (computerSelect == 3) {
            alert('Computer Wins!');
            computerWins++;
            compNum.innerHTML = computerWins;
        } else if (computerSelect == 1) {
            alert('Player Wins!');
            playerWins++;
            userNum.innerHTML = playerWins;
        } else {
            alert('Tie!');
        }
        //Nothing, it's already paper.
        nextFlagNeededExecution();
    })

    userTile3.addEventListener('click', function () {
        playerSelect = 3;
        userTile3.style['animation-name'] = 'user-right-div-up';
        userTile2.style['animation-name'] = 'score-cover-user';
        computerPlay(); 
        if (computerSelect == 1) {
            alert('Computer Wins!');
            computerWins++;
            compNum.innerHTML = computerWins;
        } else if (computerSelect == 2) {
            alert('Player Wins!');
            playerWins++;
            userNum.innerHTML = playerWins;
        } else {
            alert('Tie!');
        }
        nextFlagNeededExecution();
    })

    
}



let winnerDeclaration = () => {
    if (playerWins == 5) {
        alert('Human player Wins!')
    } else {
        alert('Robot Wins!')
    }
};

//Needs to be Good game in a text node if user clicks no on new UI box, and game on, with a 'Let's
//go!' button that can be clicked.

//This should open the custom dialog box. ^^^ and do that.
let playAgain = () => {
    winnerDeclaration();
    if (true) {

    }

};

    // robotCover.style['animation-name'] = 'drop-down';
    // userTile2.style['animation-name'] = 'score-cover-user';
    // compTile2.style['animation-name'] = 'score-cover-comp';
    // rollUpFlags();
    // roundCount.innerHTML = 1; //reset
    // roundCount2.innerHTML = 1; //reset

let playBtnAnim = () => {
    playBtn.removeAttribute('weeWoo'); //Removes hovering animation, so that the button disappears.
    playBtn.classList.add('animate__bounceOut')
    playBtn.style['animation-fill-mode'] = 'forwards';
}


playBtn.addEventListener('click', function (e) {
    robotCover.style['animation-name'] = 'pull-up';
    let animArr = [flag, flag2, roundTitle, roundTitle2, roundCount, roundCount2];
    for (const element of animArr) {
        element.style['animation-name'] = 'rollDown';
    }
    compTile2.style['animation-name'] = 'score-reveal-comp';
    userTile2.style['animation-name'] = 'score-reveal-user';
    playBtnAnim();
    userPlay();
})

console.log(`User: ${playerSelect} Comp: ${computerSelect}`);