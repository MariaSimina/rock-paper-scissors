function getComputerChoice () {
    const choicesArray = ["Rock", "Paper", "Scissors"];

    let index = Math.floor(Math.random() * choicesArray.length);

    let choice = choicesArray[index];

    return choice;
}

function playRound (playerSelection, computerSelection) {
    let selection = playerSelection.toLowerCase();
    playerSelection = selection.charAt(0).toUpperCase() + selection.substring(1);

    if (playerSelection === computerSelection) {
        return "It's a tie";
    }

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock.";
        } else if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors.";
        }
    }

    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock.";
        } else if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper.";
        }
    }

    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors.";
        } else if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper.";
        }
    }

}