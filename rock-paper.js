function game (){
    let computerscore = 0;
    let playerscore = 0;
    let ties = 0;
    for (let i = 0; i < 5; i++){
        let userinput = prompt("enter rock, scissors, or paper");
        let gameoutput = playRound(userinput, getComputerChoice());
        if (gameoutput === "Player wins"){
            playerscore++;
            //return playerscore
        console.log(playerscore)
        }
        else if (gameoutput === "Computer wins"){
            computerscore++;
            //return computerscore
        console.log(computerscore)
        } 
        else{ 
            ties++;
        console.log(ties)
        }
    }
 //declear winner line
    if ( playerscore === computerscore){
        console.log(`Tie: player have ${playerscore}, computer have ${computerscore} point`)
    }

    else if (playerscore > computerscore){
        console.log(`Player won the round with ${playerscore} points; computer has ${computerscore}; ties are ${ties}`);
    }
    else if (playerscore < computerscore){
        console.log(`Player lost the round to computer: computer won with ${computerscore} points while player has ${playerscore} point.`);
    }
    
    //return gameoutput
    //if (gameoutput === "Player wins"){
      //  playerScore = +1;
        //console.log(playerScore)
    //}
    //else if (gameoutput === "Computer wins"){
      //  ComputerScore = +1;
        //console.log(ComputerScore)
   // }

}
function getComputerChoice(){
    let randomize = Math.floor(Math.random() * 3);
    if (randomize === 1){
        return "Rock";
    }
    else if (randomize === 2){
        return "Paper"
    } 
    else { return "Scissors"}
    return randomize
    //console.log(randomize)
}
console.log(getComputerChoice())

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){

    return "This is a tie!"
        }
    else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        console.log("player wins!") 
    return "Player wins"
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        console.log("You lose!, Computer wins. Try again") 
    return "Computer wins"
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        console.log("You lose!, Computer wins. Try again") 
    return "Computer wins"
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        console.log("You win!") 
    return "Player wins"
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
        console.log("You Won! again!") 
    return "Player wins"
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper"){
        console.log("Computer won again!")
    return "Computer wins"
    }
    
    //else {
    //return "This is a tie!"
    //}
}


   
console.log(game())
//console.log(playRound("Scissors", getComputerChoice())