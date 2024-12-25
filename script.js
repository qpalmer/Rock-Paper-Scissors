

function getComputerChoice(){
    const randomNum = 
    Math.floor( Math.random() * 3)
    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    }else {
        return "Scissors";
    }
   
} 

console.log(getComputerChoice)

function getHumanChoice(){
    console.log("Choice?")
    const choice = prompt();
    if (choice === "Rock" ){
        return `You chose ${choice}`;
    }else if (choice === "Paper"){
        return `You chose ${choice}`;
    }else if (choice === "Scissors")
        return `You chose ${choice}`;
        else {
            return "invalid"; 
        }

    
   
} 

console.log(getHumanChoice)

let humanScore = 0
let computerScore = 0

function playRound(getHumanChoice, getComputerChoice){
    humanChoice.toLowerCase()
    if (humanChoice ===  Rock && computerScore === Rock ){
        return "It's a tie"
    }else if (humanChoice ===  Paper && computerScore === Paper ){
            return "It's a tie"
    }else if (humanChoice ===  Scissors && computerScore === Scissors ){
                return "It's a tie"
    }else if (humanChoice ===  Rock && computerScore === Scissors ){
        return "You Win, Mortal." + humanScore++
    }else if (humanChoice ===  Rock && computerScore === Paper ){
        return "Death awaits you." + computerScore++
    }else if (humanChoice ===  Paper && computerScore === Scissors ){
        return "Death awaits you." + humanScore++
    }else if (humanChoice ===  Paper && computerScore === Rock ){
        return "You Win, Mortal." + humanScore++
    }else if (humanChoice ===  Scissors && computerScore === Rock ){
        return "Death awaits you." + humanScore++
    }else if (humanChoice ===  Scissors && computerScore === Scissors ){
        return "You Win, Mortal." + humanScore++
}
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);