//global variables
let playerScore = 0;
let computerScore = 0;
let ties = 0;

//Add Event listener to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    let getbutton = button.textContent;
    button.addEventListener('click', function(){
        const playgame = playRound(getbutton, getComputerChoice());  
        result = playgame;
    });
});

//function to get a randomize value from computer
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

//function that plays the game: the heart of the game logic
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        ties++;
        const tietxt = document.querySelector(".ttxt");
        tietxt.classList.toggle('tietext');
        tietxt.textContent = `Ties: There are ${ties} tie(s)`;
    return "This is a tie!"
        }
    else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        //console.log("player wins!")
        playerScore++; 
        const player = document.querySelector(".playerscore");
        player.classList.toggle('player');
        player.textContent = `Player scores: ${playerScore} point(s)`;
        if (playerScore === 5 && playerScore > computerScore){
            const declareWinner = document.querySelector('.gamer-winner');
            declareWinner.classList.toggle('declareWinner');
            declareWinner.textContent = `Player won! with ${playerScore} points; computer has ${computerScore}`
            //console.log(`Player won! with ${playerScore} points; computer has ${computerScore}`);
        }
       // console.log(playerScore)
    return "Player wins"
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        //console.log("You lose!, Computer wins. Try again") 
        computerScore++;
        const comp = document.querySelector(".computerscore");
        comp.classList.toggle('comp');
        comp.textContent = `computer scores: ${computerScore} point(s)`;
        if (computerScore === 5 && playerScore < computerScore){
            const declareWinner = document.querySelector('.gamer-winner');
            declareWinner.classList.toggle('declareWinner');
            declareWinner.textContent = `Player lost! with ${playerScore} points; computer won the round with ${computerScore} points`
            //console.log(`Player lost! with ${playerScore} points; computer won the round with ${computerScore} points`);
        }       
        //console.log(computerScore)
    return "Computer wins"
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        //console.log("You lose!, Computer wins. Try again")
        computerScore++; 
        const comp = document.querySelector(".computerscore");
        comp.classList.toggle('comp');
        comp.textContent = `computer scores: ${computerScore} point(s)`;
        if (computerScore === 5 && playerScore < computerScore){
            const declareWinner = document.querySelector('.gamer-winner');
            declareWinner.classList.toggle('declareWinner');
            declareWinner.textContent = `Player lost! with ${playerScore} points; computer won the round with ${computerScore} points`
            //console.log(`Player lost! with ${playerScore} points; computer won the round with ${computerScore} points`);
        }
       // console.log(computerScore)
    return "Computer wins"
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        //console.log("You win!") 
        playerScore++;
        const player = document.querySelector(".playerscore");
        player.classList.toggle('player');
        player.textContent = `Player scores: ${playerScore} point(s)`;
        if (playerScore === 5 && playerScore > computerScore){
            const declareWinner = document.querySelector('.gamer-winner');
            declareWinner.classList.toggle('declareWinner');
            declareWinner.textContent = `Player won! with ${playerScore} points; computer has ${computerScore}`
            //console.log(`Player won! with ${playerScore} points; computer has ${computerScore}`);
        }
        //console.log(playerScore)
    return "Player wins"
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
        //console.log("You Won! again!") 
        playerScore++;
        const player = document.querySelector(".playerscore");
        player.classList.toggle('player');
        player.textContent = `Player scores: ${playerScore} point(s)`;
        if (playerScore === 5 && playerScore > computerScore){
            const declareWinner = document.querySelector('.gamer-winner');
            declareWinner.classList.toggle('declareWinner');
            declareWinner.textContent = `Player won! with ${playerScore} points; computer has ${computerScore}`
            //console.log(`Player won! with ${playerScore} points; computer has ${computerScore}`);
        } 
        //console.log(playerScore)
    return "Player wins"
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper"){
        //console.log("Computer won again!")
        computerScore++;
        const comp = document.querySelector(".computerscore");
        comp.classList.toggle('comp');
        comp.textContent = `computer scores: ${computerScore} point(s)`;
        if (computerScore === 5 && playerScore < computerScore){
            const declareWinner = document.querySelector('.gamer-winner');
            declareWinner.classList.toggle('declareWinner');
            declareWinner.textContent = `Player lost! with ${playerScore} points; computer won the round with ${computerScore} points`
            //console.log(`Player lost! with ${playerScore} points; computer won the round with ${computerScore} points`);
        }      
        // console.log(computerScore)
    return "Computer wins"
    }
    return;
}

