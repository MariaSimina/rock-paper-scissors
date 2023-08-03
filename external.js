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

    let rock = document.querySelector('#rock');
    let paper = document.querySelector('#paper');
    let scissors = document.querySelector('#scissors');
    let result = document.querySelector('#result');
    let finalResult = document.querySelector('#finalResult');

    rock.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = rock.innerText;
        
        const play = playRound(playerSelection, computerSelection);
        if (play === "Computer wins!") {
            computerCount++;
            result.innerText = "Computer wins this game";
        } else if (play === "You win!") {
            playerCount++;
            result.innerText = "You win this game";
        } else {
            result.innerText = "This game is a tie";
        }

        if (computerCount === 5) {
            finalResult.innerText = "Computer wins!";
        } else if (playerCount === 5) {
            finalResult.innerText = "You win!";
        }
    });

    paper.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = paper.innerText;

        const play = playRound(playerSelection, computerSelection);
        if (play === "Computer wins!") {
            computerCount++;
            console.log(`Player paper computer wins ` + computerCount);
            result.innerText = "Computer wins this game";
        } else if (play === "You win!") {
            playerCount++;
            result.innerText = "You win this game";
        } else {
            result.innerText = "This game is a tie";
        }

        if (computerCount === 5) {
            finalResult.innerText = "Computer wins!";
        } else if (playerCount === 5) {
            finalResult.innerText = "You win!";
        }
    });

    scissors.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = scissors.innerText;

        const play = playRound(playerSelection, computerSelection);
        if (play === "Computer wins!") {
            computerCount++;
            result.innerText = "Computer wins this game";
        } else if (play === "You win!") {
            playerCount++;
            result.innerText = "You win this game";
        } else {
            result.innerText = "This game is a tie";
        }

        if (computerCount === 5) {
            finalResult.innerText = "Computer wins!";
        } else if (playerCount === 5) {
            finalResult.innerText = "You win!";
        }
    });

}

game();