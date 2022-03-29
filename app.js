let moves = ['rock', 'paper', 'scissor'];
let roundWon = '';
let playerScore = 0; 
let computerScore = 0;

function computerPlay(){
    return moves[Math.floor(Math.random() * (2 + 1))];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        roundWon = 'tie';
        
    }
    else if((playerSelection === 'rock' && computerSelection === 'scissor') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissor' && computerSelection === 'paper'))
           {
               roundWon = 'player'
               playerScore ++;
           }
    else if((computerSelection === 'rock' && playerSelection === 'scissor')||
            (computerSelection === 'paper' && playerSelection === 'rock')|| 
            (computerSelection === 'scissor' && playerSelection === 'paper'))
        {

           roundWon = 'computer'
           computerScore++;
        }   
        updateMessage(roundWon, playerSelection, computerSelection);   
}   

function isGameOver(){
    if(playerScore === 3){
        console.log(`The game is over!! The player has won with a score of ${playerScore}`);
        return true;
    }
    else if(computerScore === 3){
        console.log(`The game is over!! The Computer has won with a score of ${computerScore}`);
        return true;
    }
    else{
        return false;
    }
}

function game(){
        while(!isGameOver()){
            let playerSelection = prompt("Type rock, paper, or scissor to play a round");
            let computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
        }
    }

function updateMessage(winner, playerSelection, computerSelection){
    if(winner === 'player'){
        console.log(`The ${winner} has won this round! ${playerSelection} beats ${computerSelection}!!`);
    }
    else if(winner === 'computer'){
        console.log(`The ${winner} has won this round! ${computerSelection} beats ${playerSelection}!!`);
    }
    else if(winner === 'tie'){
        console.log(`The round is a tie!! You both chose ${playerSelection}`);
    }
}

game();
