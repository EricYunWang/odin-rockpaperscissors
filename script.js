function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if (num === 0){
        return "Rock";
    }
    else if (num === 1){
        return "Paper";
    }
    else return "Scissors";
}

function getHumanChoice(){
    let userInput = prompt("What is your choice? Please type Rock, Paper, or Scissors.");
    return userInput;
}

let humChoice = getHumanChoice();
console.log(humChoice);

let comChoice = getComputerChoice();
console.log(comChoice);