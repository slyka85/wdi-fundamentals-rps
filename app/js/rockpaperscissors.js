////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


// this function asks a player to type his/her move
function getPlayerMove(move) 
{
    return move = move || getInput();
}
// this function creates a computer's move by random
function getComputerMove(move) 
{
    return move = move || randomPlay();
}
// comparing player's move with the computer's move to see a winner
function getWinner(playerMove,computerMove) 
{
var winner;
    if (playerMove === computerMove)
    { 
        winner = "tie";
        console.log("\nThis is a TIE. No one wins.");
     }
    else if
    (
        (playerMove === "rock" && computerMove === "scissors") || 
        (playerMove === "paper" && computerMove === "rock") ||
        (playerMove === "scissors" && computerMove === "paper")
    )
       { 
            winner = "player";
            console.log("\nLucky you! YOU are the WINNER this time");
       }
     else  
        {
            winner = "computer"; 
            console.log("\nNo luck, my friend... The winner is COMPUTER");
        }
return winner;
}

// function that lets users play intill one of them wins 5 times
function playToFive()
{
    console.log("OK, let's play ROCK, PAPER, SCISSORS \nWhoever wins 5 games gets a cookie! READY?");
    var playerWins = 0;
    var computerWins = 0;
    
    while(playerWins < 5 && computerWins < 5)
    {
    var playerResult = getInput();
        if (playerResult === "rock" || playerResult === "scissors" || playerResult === "paper")
        {
            var computerResult = getComputerMove();
            console.log("\nYOU chose " + playerResult.toUpperCase() + " and the COMPUTER chose " + computerResult.toUpperCase());
            var gameResult = getWinner(playerResult,computerResult);
            if (gameResult === "computer")
            {
                computerWins ++;
            }
            else if(gameResult === "player")
            {
                playerWins ++;
            }
            console.log("\nSo far: \nYOU Won " + playerWins + " times out of 5");
            console.log("COMPUTER Won " + computerWins + " times out of 5");
        }
        else
        {
            console.log("\nDude, seriously?! Read the instructions:");
        }
    }
    return [playerWins, computerWins];
}
// function that starts the game or repeats the game procedure if a user wants to play again
function playGame()
{
    var choice;
    do
    {
        var result = playToFive();
        if (result[0] > result[1])
        {
        console.log("\nAlrighty, you're getting a cookie! YOU won against COMPUTER!");
        }
        else
        {
        console.log("\nAnd the winner is COMPUTER! Today is not your day, my friend... :(");
        }
        console.log("\nBut hey! Would you like to play again? Press 'y' for yes or any other key to exit")
        choice = prompt();
    }
    while(choice==="y");
    
    console.log("Thanks for playing and come back tomorrow!");
}
//starting a game
playGame();

