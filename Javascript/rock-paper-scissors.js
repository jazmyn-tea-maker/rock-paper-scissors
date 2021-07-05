let playerSelect;
let computerPlay = () => {
    let choicesArr = ['Rock!', 'Paper!', 'Scissors!'];
    let index = Math.floor(Math.random()*3);
    console.log(choicesArr[index]);
    return choicesArr[index];
};

let userPlay = () => {
    let option = prompt('Rock, Paper, or Scissors? (May the odds be in your favor!)', '');
    option = option.toLowerCase().replace(/[^\w\s]/gi, '');
    console.log(option);
};

userPlay();