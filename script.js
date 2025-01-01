

function getComputerChoice(){
    let computerChoice = 
    Math.floor( Math.random() * 3 + 1);
    if (computerChoice === 1) {
        return computerChoice = "rock";
    } else if (computerChoice === 2) {
        return computerChoice = "paper";
    }else {
        return computerChoice ="scissors";
    }
   
} 




function getHumanChoice(){
    while (true){
    let humanChoice = prompt('Choose your tool...Rock,Paper or Scissors?');
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors"){
    return humanChoice;}
    else{
        continue;
    }
}
}


console.log('Welcome to the Game')
   
let humanScore = 0
let computerScore = 0




function playRound(humanChoice, computerChoice) {
    if(humanSelection === "rock" && computerSelection === "scissors" || 
        humanSelection === "paper" && computerSelection === "rock" ||
        humanSelection === "scissors" && computerSelection === "paper" ) { 
           humanScore++; 
           console.log( 'you chose:' + humanSelection + ' '+ 'computer chose:' + computerSelection) 
           console.log(`You win, ${humanSelection} beats ${computerSelection}`)
        }
        else if (humanChoice === computerChoice) {
            console.log('Try again'); 
        } 
   else {  
     computerScore++;  
     console.log( 'you chose:' + humanSelection + ' '+ 'computer chose:' + computerSelection) 
     console.log(`You lose, ${computerSelection} beats ${humanSelection}`)
   } 
 console.log( `you: ${humanScore} - computer: ${computerScore}`)  
  }
  
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  function playGame(){
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
  }


  
  playGame();

