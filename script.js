

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