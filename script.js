console.log('Welcome to the Game')


   
let humanScore = 0
let computerScore = 0

let roundCount= 0


const roundResult = document.getElementById("round-result");
const scoreDisplay = document.getElementById("score");
const finalResult = document.getElementById("final-score");


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



function playRound(humanSelection, computerChoice) {

    if (roundCount >= 5) return; 

    let resultMessage = "";

    if(humanSelection === "rock" && computerChoice === "scissors" || 
        humanSelection === "paper" && computerChoice === "rock" ||
        humanSelection === "scissors" && computerChoice === "paper" ) { 
           humanScore++; 
           resultMessage = `You win! ${humanSelection} beats ${computerChoice}`;}
        else if (humanSelection === computerChoice) {
            resultMessage = `It's a tie! You both chose ${humanSelection}`;
        } 
   else {  
     computerScore++;  
    resultMessage = `You lose! ${computerChoice} beats ${humanSelection}`;
   }

    roundResult.textContent = resultMessage;
  scoreDisplay.textContent = `You: ${humanScore} - Computer: ${computerScore}`;
  
  roundCount++;


roundResult.textContent = resultMessage;
scoreDisplay.textContent = `You: ${humanScore} - Computer: ${computerScore} (Round ${roundCount}/5)`;
  
if (roundCount === 5) {
    endGame();
}
}
  

  

 document.getElementById("Rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });
  
  document.getElementById("Paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });
  
  document.getElementById("Scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });

  function endGame() {
    let winner = "";

    if (humanScore > computerScore) {
        winner = "🎉 You win the game!";
    } else if (humanScore < computerScore) {
        winner = "💀 Computer wins the game!";
    } else {
        winner = "🤝 It's a tie game!";
    }

    finalResult.textContent = winner;

    // Disable buttons
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
}

