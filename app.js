let moves = ['rock', 'paper', 'scissor'];
let roundWon = '';
let playerScore = 0; 
let computerScore = 0;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const displayPlayerScore = document.querySelector(".playerScore");
const displayComputerScore = document.querySelector(".computerScore");
const winner = document.querySelector(".winner");
const roundDisplay = document.querySelector(".roundDisplay");
const resetBtn = document.createElement("button");
 resetBtn.innerHTML = 'reset game'

 resetBtn.addEventListener("click", function(){
    reset();
 });

rockBtn.addEventListener("click", function(){
    playRound('rock');
});
paperBtn.addEventListener("click", function(){
    playRound('paper');
});
scissorsBtn.addEventListener("click", function(){
    playRound('scissor');
});

function computerPlay(){
    return moves[Math.floor(Math.random() * (2 + 1))];
}

function playRound(playerSelection){
    let computerSelection = computerPlay();
    if(playerSelection === computerSelection){
        roundWon = 'tie';
        
    }
    else if((playerSelection === 'rock' && computerSelection === 'scissor') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissor' && computerSelection === 'paper'))
           {
               roundWon = 'player'
               playerScore ++;
               displayPlayerScore.innerHTML = ` Player: ${playerScore}`;
               isGameOver();
           }
    else if((computerSelection === 'rock' && playerSelection === 'scissor')||
            (computerSelection === 'paper' && playerSelection === 'rock')|| 
            (computerSelection === 'scissor' && playerSelection === 'paper'))
        {

           roundWon = 'computer'
           computerScore++;
           displayComputerScore.innerHTML = `Computer: ${computerScore}`;
           isGameOver();
        }   
        updateMessage(roundWon, playerSelection, computerSelection);   
}   

function isGameOver(){
    if(playerScore === 3){
        winner.innerHTML = `YOU WIN! GAME OVER!!`
        document.body.appendChild(resetBtn);
        toggleButton(true);
                return true;
    }
    else if(computerScore === 3){
        winner.innerHTML = `THE COMPUTER IS THE WINNER! GAME OVER!!`
        document.body.appendChild(resetBtn);
        toggleButton(true);
        return true;
    }
    else{
        return false;
    }
}


function updateMessage(winner, playerSelection, computerSelection){
    if(winner === 'player'){
        roundDisplay.innerHTML = `The ${winner} has won this round! ${playerSelection} beats ${computerSelection}!!`
    }
    else if(winner === 'computer'){
        roundDisplay.innerHTML = `The ${winner} has won this round! ${computerSelection} beats ${playerSelection}!!`
    }
    else if(winner === 'tie'){
        roundDisplay.innerHTML = `The round is a tie!! You both chose ${playerSelection}`
    }
}

function toggleButton(logic){
    rockBtn.disabled = logic;
    paperBtn.disabled = logic;
    scissorsBtn.disabled = logic;
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    displayPlayerScore.innerHTML = ` Player: 0`;
    displayComputerScore.innerHTML = `Computer: 0`;
    roundDisplay.innerHTML = '';
    winner.innerHTML = '';
    resetBtn.remove();
    toggleButton(false);
}
