function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if (num === 0){
        return "rock";
    }
    else if (num === 1){
        return "paper";
    }
    else return "scissors";
}

function getHumanChoice(){
    let userInput = prompt("What is your choice? Please type Rock, Paper, or Scissors.");
    return userInput;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        console.log("Tie");
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") || 
             (humanChoice === "paper" && computerChoice === "scissors") ||
             (humanChoice === "scissors" && computerChoice === "rock")){
        console.log("You lose, " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    else {
        console.log("You win, " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }

}

let humanScore = 0;
let computerScore = 0;

let humChoice = getHumanChoice();
console.log(humChoice);

let comChoice = getComputerChoice();
console.log(comChoice);

playRound(humChoice, comChoice);