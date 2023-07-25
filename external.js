function getComputerChoice () {
    const choicesArray = ["Rock", "Paper", "Scissors"];

    let index = Math.floor(Math.random() * choicesArray.length);

    let choice = choicesArray[index];

    return choice;
}

function playRound (playerSelection, computerSelection) {
    
    const selection = playerSelection.toLowerCase();
    playerSelection = selection.charAt(0).toUpperCase() + selection.substring(1);

    if (playerSelection === computerSelection) {
        return "It's a tie";
    }

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "Computer wins!";
        } else if (computerSelection === "Scissors") {
            return "You win!";
        }
    }

    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You win!";
        } else if (computerSelection === "Scissors") {
            return "Computer wins!";
        }
    }

    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "Computer wins!";
        } else if (computerSelection === "Paper") {
            return "You win!";
        }
    }

}

function game () {
    let computerCount = 0;
    let playerCount = 0;
    
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Chose one: Rock, Paper, or Scissors");
        if (playerSelection === null) {
            return console.log("You have canceled the game. If you want to play, please restart the page.");
        } else if (playerSelection === "") {
            return console.log("You have entered un invalid option. Please restart the game.");
        }

        const play = playRound(playerSelection, computerSelection);

        if (play === "Computer wins!") {
            computerCount++;
            console.log ("Computer wins this game");
        } else if (play === "You win!") {
            playerCount++;
            console.log("You win this game");
        } else {
            console.log("This game is a tie");
        }
    }

    if (computerCount === playerCount) {
        return console.log("Final result: It's a tie!");
    } else if (computerCount > playerCount) {
        return console.log("Final result: Computer wins!");
    } else if (playerCount > computerCount) {
        return console.log("Final result: You win!");
    }
}

game();