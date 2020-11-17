




const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput;
    } else {
        return 'Error ! Invalid input ..!';
    }
}

const getComputerChoice = function () {
    let num = Math.floor(Math.random() * 3);

    switch (num) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;

        default:
            return 'Unknown';
            break;

    }

}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Tie';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer Won !';
        } else {
            return 'User Won !';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors' || computerChoice === 'rock') {
            return 'Computer Won !';
        } else {
            return 'User Won !';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock' || computerChoice === 'paper') {
            return 'Computer Won !';
        } else {
            return 'User Won !';
        }
    }
}

const playGame = function () {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();

    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    const winner = determineWinner(userChoice, computerChoice);
    console.log(winner);
}


playGame();

