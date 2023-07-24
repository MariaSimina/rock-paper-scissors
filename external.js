function getComputerChoice () {
    const choicesArray = ["Rock", "Paper", "Scissors"];

    let index = Math.floor(Math.random() * choicesArray.length);

    let choice = choicesArray[index];

    return console.log(choice);
    
}

getComputerChoice()

//function playRound (playerSelection, computerSelection) {

//}