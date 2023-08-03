function getComputerChoice () {
    const choicesArray = ["Rock", "Paper", "Scissors"];

    let index = Math.floor(Math.random() * choicesArray.length);

    let choice = choicesArray[index];

    return choice;
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "tie";
    }

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "computer";
        } else if (computerSelection === "Scissors") {
            return "player";
        }
    }

    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "player";
        } else if (computerSelection === "Scissors") {
            return "computer";
        }
    }

    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "computer";
        } else if (computerSelection === "Paper") {
            return "player";
        }
    }

}

function game () {
    let computerCount = 0;
    let playerCount = 0;
    let player;

    let rock = document.querySelector('#rock');
    let paper = document.querySelector('#paper');
    let scissors = document.querySelector('#scissors');
    let result = document.querySelector('#result');
    let finalResult = document.querySelector('#finalResult');
    let score = document.querySelector('#score');

    rock.addEventListener('click', () => {
         player = "Rock";

        /*let play = playRound(player, getComputerChoice());

        if (play === "compute") {
            result.innerText = "Computer wins this round";
            computerCount++;
        } else if (play === "player") {
            result.innerText = "You win this round";
            playerCount++;
        } else {
            result.innerText = "It's a tie";
        }

        if (computerCount === 5) {
            computerCount = 0;
            playerCount = 0;
            finalResult.innerText = "Computer wins!";
        } else if (playerCount === 5) {
            finalResult.innerText = "You win!";
            computerCount = 0;
            playerCount = 0;
        }

        score.innerText = "Computer score: " + computerCount + "    Player score: " + playerCount;*/
    });

    console.log(player);

    let play = playRound(player, getComputerChoice());

        if (play === "compute") {
            result.innerText = "Computer wins this round";
            computerCount++;
        } else if (play === "player") {
            result.innerText = "You win this round";
            playerCount++;
        } else {
            result.innerText = "It's a tie";
        }

        if (computerCount === 5) {
            computerCount = 0;
            playerCount = 0;
            finalResult.innerText = "Computer wins!";
        } else if (playerCount === 5) {
            finalResult.innerText = "You win!";
            computerCount = 0;
            playerCount = 0;
        }

        score.innerText = "Computer score: " + computerCount + "    Player score: " + playerCount;

    paper.addEventListener('click', () => {

        let play = playRound("Rock", getComputerChoice());

        if (play === "computer") {
            result.innerText = "Computer wins this round";
            computerCount++;
        } else if (play === "player") {
            result.innerText = "You win this round";
            playerCount++;
        } else {
            result.innerText = "It's a tie";
        }

        if (computerCount === 5) {
            computerCount = 0;
            playerCount = 0;
            finalResult.innerText = "Computer wins!";
        } else if (playerCount === 5) {
            computerCount = 0;
            playerCount = 0;
            finalResult.innerText = "You win!";
        }

        score.innerText = "Computer score: " + computerCount + "    Player score: " + playerCount;
    });

    scissors.addEventListener('click', () => {

        let play = playRound("Rock", getComputerChoice());

        if (play === "computer") {
            result.innerText = "Computer wins this round";
            computerCount++;
        } else if (play === "player") {
            result.innerText = "You win this round";
        } else {
            result.innerText = "It's a tie";
            playerCount++;
        }

        if (computerCount === 5) {
            computerCount = 0;
            playerCount = 0;
            finalResult.innerText = "Computer wins!";
        } else if (playerCount === 5) {
            computerCount = 0;
            playerCount = 0;
            finalResult.innerText = "You win!";
        }

        score.innerText = "Computer score: " + computerCount + "    Player score: " + playerCount;
    });

}

game();