const buttons = document.querySelectorAll("button");
const results = document.querySelector("div");
const score = document.querySelector("#score");
const roundsWin = document.querySelector("#roundScore");
let humanScore = 0;
let computerScore = 0;
let humanRoundsWin = 0;
let computerRoundsWin = 0;
updateScore();

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

function updateScore(){
    score.textContent = "Your current round score: " + humanScore + " Opponent current round score: " + computerScore;
    if(humanScore === 5){
        score.textContent = "You won the game!"
        humanRoundsWin++;
        roundsWin.textContent = "Your rounds won: " + humanRoundsWin + " Opponent rounds won: " + computerRoundsWin;
        humanScore = 0;
        computerScore = 0;
        
    }
    else if (computerScore === 5){
        score.textContent = "You lost the game!"
        computerRoundsWin++;
        roundsWin.textContent = "Your rounds won: " + humanRoundsWin + " Opponent rounds won: " + computerRoundsWin;
        humanScore = 0;
        computerScore = 0;

    }

}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    listItem.appendChild(listText);
    results.appendChild(listItem);
    if(humanChoice === computerChoice){
        listText.textContent = "Tie";
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") || 
             (humanChoice === "paper" && computerChoice === "scissors") ||
             (humanChoice === "scissors" && computerChoice === "rock")){
        listText.textContent = "You lose, " + computerChoice + " beats " + humanChoice;
        computerScore++;
        updateScore();
    }
    else {
        listText.textContent = "You win, " + humanChoice + " beats " + computerChoice;
        humanScore++;
        updateScore();
    }

}

buttons.forEach((button)=> {
    button.addEventListener("click", ()=> {
        let humanChoice = button.id;
        let comChoice = getComputerChoice();
        playRound(humanChoice, comChoice);

    });
});
