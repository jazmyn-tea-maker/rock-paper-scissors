let playerSelect = 0;
let computerSelect = 0;
let playerWins = 0; //Connect to the counter.
let computerWins = 0; //Connect to the counter.
let playerTotalGamesWon = 0;
let compTotalGamesWon = 0;
let round = 1;
let compNum = document.getElementById('comp-num-score');
let userNum = document.getElementById('user-num-score');
let playBtn = document.getElementById('play-button');
let playAgainBtn = document.getElementById('play-again-button');
let robotCover = document.getElementById('robo-cover-div');
let flag = document.getElementsByClassName('flag-svg').item(0); //.item used to grab from HTML Collection.
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
playAgainBtn.setAttribute('weeWoo2', '1');


let rollUpFlags = () => {
    let animArr = [flag, flag2, roundTitle, roundTitle2, roundCount, roundCount2];
    for (const element of animArr) {
        element.style['animation-name'] = 'rollUp';
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
    round++;
    roundCount.innerHTML = round;
    roundCount2.innerHTML = round;
}

let nextRoundFlags = () => {
    rollUpFlags();
    setTimeout(rollDownFlags, 800);
    setTimeout(roundAdder, 600);
    
}

let nextFlagNeededExecution = () => {
    if (playerSelect == 0) {
        playerSelect;
    } else {
        setTimeout(nextRoundFlags, 100);
        setTimeout(settlingBetweenRoundUser, 100);
        setTimeout(settlingBetweenRoundComp, 100);
    }
}

let numBetween1And3 = () => {
    let num = Math.floor(Math.random() * 3) + 1;
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

let settleEndGameAnim = () => {
    if (compTile1.style['animation-name'] == 'comp-left-div-up') {
        compTile1.style['animation-name'] = 'comp-left-div-down';
    }
    if (compTile3.style['animation-name'] == 'comp-right-div-up') {
        compTile3.style['animation-name'] = 'comp-right-div-down';
    }
    if (true) {
        compTile2.style['animation-name'] = 'score-cover-comp';
    }
    
    if (userTile1.style['animation-name'] == 'user-left-div-up') {
        userTile1.style['animation-name'] = 'user-left-div-down';
    }
    if (userTile3.style['animation-name'] == 'user-right-div-up') {
        userTile3.style['animation-name'] = 'user-right-div-down';
    }

    if (true) {
        userTile2.style['animation-name'] = 'score-cover-user';
    }
}

let resetFunc = () => {
    userNum.innerHTML = 0;
    compNum.innerHTML = 0;
    playerWins = 0;
    computerWins = 0;
    round = 1;
    roundCount.innerHTML = round; //flag reset
    roundCount2.innerHTML = round; //flag reset
}

let gameEndAnim = () => {
    robotCover.style['animation-name'] = 'drop-down';
    userTile2.style['animation-name'] = 'score-cover-user';
    compTile2.style['animation-name'] = 'score-cover-comp';
    let animArr = [flag, flag2, roundTitle, roundTitle2, roundCount, roundCount2];
    for (const element of animArr) {
        element.style['animation-name'] = 'rollUp';
    }
    playAgainBtn.style.display = 'block'; //Show PlayAgain Btn
    playAgainBtn.classList.remove('animate__bounceOut');
    settleEndGameAnim();   
    console.log(`User: ${playerTotalGamesWon} Comp: ${compTotalGamesWon}`);
}

//Playing animations/Actual Game:


//Connects tile number to a random number between 1
//and 3. Used to choose for the computer. Stored in 
//computerSelect.
let computerPlay = () => {
    computerSelect = numBetween1And3();
    if (computerSelect == 1) {
        compTile1.style['animation-name'] = 'comp-left-div-up';
        compTile2.style['animation-name'] = 'score-cover-comp';
    } else if (computerSelect == 2) {
        compTile2.style['animation-name'] = 'score-cover-comp';
        setTimeout(compTile2Up, 200);
    } else {
        compTile3.style['animation-name'] = 'comp-right-div-up';
        compTile2.style['animation-name'] = 'score-cover-comp';
    }
    return computerSelect;
};

//Match begins!

let match1 = () => {
    playerSelect = 1;
    userTile1.style['animation-name'] = 'user-left-div-up';
    userTile2.style['animation-name'] = 'score-cover-user';
    computerPlay();
    if (computerSelect == 2) {
        computerWins++;
        compNum.innerHTML = computerWins;
    } else if (computerSelect == 3) {
        playerWins++;
        userNum.innerHTML = playerWins;
    }
    if (playerWins == 5 || computerWins == 5) {
        winnerDeclaration();
        return;
    }
    setTimeout(nextFlagNeededExecution, 1000);
}

let match2 = () => {
    playerSelect = 2;
    computerPlay();
    if (computerSelect == 3) {
        computerWins++;
        compNum.innerHTML = computerWins;
    } else if (computerSelect == 1) {
        playerWins++;
        userNum.innerHTML = playerWins;
    }
    if (playerWins == 5 || computerWins == 5) {
        winnerDeclaration();
        return;
    }
    //Nothing, it's already paper.
    setTimeout(nextFlagNeededExecution, 1000);
}

let match3 = () => {
    playerSelect = 3;
    userTile3.style['animation-name'] = 'user-right-div-up';
    userTile2.style['animation-name'] = 'score-cover-user';
    computerPlay(); 
    if (computerSelect == 1) {
        computerWins++;
        compNum.innerHTML = computerWins;
    } else if (computerSelect == 2) {
        playerWins++;
        userNum.innerHTML = playerWins;
    }
    if (playerWins == 5 || computerWins == 5) {
        winnerDeclaration();
        return;
    }
    setTimeout(nextFlagNeededExecution, 1000);
}

let duel = () => {
    userTile1.addEventListener('click', match1);

    userTile2.addEventListener('click', match2);

    userTile3.addEventListener('click', match3);
}

let winnerDeclaration = () => {
    if (playerWins == 5) {
        playerTotalGamesWon++;
        setTimeout(gameEndAnim, 800);
        resetFunc();
        userTile1.removeEventListener('click', match1); //So the tiles aren't clickable between games.
        userTile2.removeEventListener('click', match2);
        userTile3.removeEventListener('click', match3);
        alert(`For this session... User: ${playerTotalGamesWon} Comp: ${compTotalGamesWon}`);
        setTimeout(endGameResetter, 1000);
        return;
    } else if (computerWins == 5) {
        compTotalGamesWon++;
        setTimeout(gameEndAnim, 800);
        resetFunc();
        userTile1.removeEventListener('click', match1);
        userTile2.removeEventListener('click', match2);
        userTile3.removeEventListener('click', match3);
        alert(`For this session... User: ${playerTotalGamesWon} Comp: ${compTotalGamesWon}`);
        setTimeout(endGameResetter, 1000);//Bug squasher.
        return;
    }
    
};


let playBtnAnim = () => {
    playBtn.removeAttribute('weeWoo');
    playBtn.classList.add('animate__bounceOut')
    playBtn.style['animation-fill-mode'] = 'forwards';
}

let playAgainBtnAnim = () => {
    playAgainBtn.removeAttribute('weeWoo2'); //Removes hovering animation, so that the button disappears.
    playAgainBtn.classList.add('animate__bounceOut')
    playAgainBtn.style['animation-fill-mode'] = 'forwards';
}

playAgainBtn.addEventListener('click', function() {
    robotCover.style['animation-name'] = 'pull-up';
    let animArr = [flag, flag2, roundTitle, roundTitle2, roundCount, roundCount2];
    for (const element of animArr) {
        element.style['animation-name'] = 'rollDown';
    }
    compTile2.style['animation-name'] = 'score-reveal-comp';
    userTile2.style['animation-name'] = 'score-reveal-user';
    playAgainBtnAnim();
    duel();
})

playBtn.addEventListener('click', function () {
    robotCover.style['animation-name'] = 'pull-up';
    let animArr = [flag, flag2, roundTitle, roundTitle2, roundCount, roundCount2];
    for (const element of animArr) {
        element.style['animation-name'] = 'rollDown';
    }
    compTile2.style['animation-name'] = 'score-reveal-comp';
    userTile2.style['animation-name'] = 'score-reveal-user';
    playBtnAnim();
    duel();
})

//Just in case there are any bugs at the end...Like animations that didn't have time to finish.
let endGameResetter = () => {
    let animArr = [flag, flag2, roundTitle, roundTitle2, roundCount, roundCount2];
    for (const element of animArr) {
        element.style['animation-name'] = 'rollUp';
    }
    round = 1;
    roundCount.innerHTML = round; //reset
    roundCount2.innerHTML = round; //reset
    compTile2.style['animation-name'] = 'score-cover-comp';
    userTile2.style['animation-name'] = 'score-cover-user';
}
