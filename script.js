
    //function picking random for com
    function computerPlay() {
        let options = ["rock", "paper", "scissors"],
            comPick = options[Math.floor(Math.random() * options.length)];
        return comPick
    }
    
    //function asking player for input
    function playerPlay() {
                playerPick = window.prompt("Choose your weapon: rock, paper, scissors", "rock")
            return playerPick;
    }

    const playerSelection = playerPlay(["rock", "paper", "scissors"]).toLowerCase();


    function playRound(playerSelection, computerSelection) {
    


    //begin rock if statements
    if (playerSelection === "rock" && computerSelection === "paper") {
        return alert("Paper is super effective against rock! You lose, better luck next time!")
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        return alert("Rock is ineffective against Rock, its a draw!")
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return alert("Rock is super effective against Scissors! You win this round!")
    }

    //begin paper if statements
    if (playerSelection === "paper" && computerSelection === "paper") {
        return alert("Paper is ineffective against Paper, its a draw!")
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return alert("Paper is super effective against Rock! You win this round!")
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return alert("Scissors is super effective against Paper! You lose, better luck next time!")
    }
   
    //begin scissors if statements
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return alert("Scissors is super effective against Paper! You win this round!")
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return alert("Rock is super effective against Scissors! You lose, better luck next time!")
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return alert("Scissors is ineffective against Scissors! Its a draw!")
    }
    // if player selects nothing or improper
    else (playerSelection === null || undefined) 
    alert("Please choose your weapon: Rock, Paper or Scissors")
}

    //variable declarations
    const computerSelection = computerPlay(["rock", "paper", "scissors"]).toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    
    


 