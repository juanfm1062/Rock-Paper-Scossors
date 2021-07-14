function computerPlay()
{
    let picks = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * picks.length)
    let compPick = picks[random];
    return compPick;
}

function playRound(playerSelection, computerSelection)
{
    let result;
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors")
    {
        result = "Winner";
        console.log(result);
        return result;
    } 
    else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper")
    {
        result = "Winner";
        return result;
    }
    else if((playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock"))
    {
        result = "Winner";
        return result;
    }
    else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock")
    {
        result = "Loser";
        return result;
    }
    else if((playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors"))
    {
        result = "Loser";
        return result;
    }
    else if((playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper"))
    {
        result = "Loser";
        return result;
    }
    else if (playerSelection.toUpperCase() === computerSelection.toUpperCase())
    {
        result = "Draw";
        return result;
    }
}

function game()
{
    let computerSelection = computerPlay();
    let playerSelection = prompt("Choose Rock, Paper, or Scissors");

    console.log("Computer picked: " + computerSelection); 
    console.log(playRound(playerSelection, computerSelection));

    computerSelection = computerPlay();
    playerSelection = prompt("Choose Rock, Paper, or Scissors");
    console.log("Computer picked: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    computerSelection = computerPlay();
    playerSelection = prompt("Choose Rock, Paper, or Scissors");
    console.log("Computer picked: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    computerSelection = computerPlay();
    playerSelection = prompt("Choose Rock, Paper, or Scissors");
    console.log("Computer picked: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    computerSelection = computerPlay();
    playerSelection = prompt("Choose Rock, Paper, or Scissors");
    console.log("Computer picked: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

game();