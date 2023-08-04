let computerCount = 0;
let playerCount = 0;


const finalResult = document.querySelector('#finalResult');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const list = document.querySelector('#choices');


function getComputerChoice () {
    const choicesArray = ["Rock", "Paper", "Scissors"];

    let index = Math.floor(Math.random() * choicesArray.length);

    let choice = choicesArray[index];

    return choice;
}

function playRound (playerSelection, computerSelection) {

    let listElement = document.createElement('li');
    listElement.innerText = `Computer chose ${computerSelection} and you chose ${playerSelection}`;
    list.appendChild(listElement);

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

function keepScore () {
    if ((computerCount === 1) || (playerCount === 1) || (computerCount === 0)) {
        finalResult.innerText = "";
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
    
}

function game () {

    let buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            while(list.firstChild) {
                list.removeChild(list.firstChild);
            }

            playerChoice = button.innerText;
            let play = playRound(playerChoice, getComputerChoice());

            if (play === "computer") {
                result.innerText = "Computer wins this round";
                computerCount++;
            } else if (play === "player") {
                result.innerText = "You win this round";
                playerCount++;
            } else {
                result.innerText = "It's a tie";
            }

            keepScore();
        })
    });
}

game();