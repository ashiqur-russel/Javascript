let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageShow = document.getElementById("message-el");
let sumShow = document.querySelector("#sum-el");
let cardShow = document.querySelector("#cards-el");

// Add player
let playerShow = document.querySelector(".player-name");
let player = {
    name: "John",
    chips : 145,
}

// function for getting player after win blackjack
function getPlayerName(){
    let PlayerName = player.name;
    let playerChips = player.chips;
    playerShow.textContent = PlayerName + " : $"+playerChips;
    console.log(PlayerName);

}

//Start Game
function startGame(){

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
        renderGame();
    
}

function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

// Function fro the render game
function renderGame(){

    cardShow.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardShow.textContent += cards[i] + " "
    } 
    sumShow.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        if(hasBlackJack) {
            getPlayerName();
        } 
    } else {
        message = "You're out of the game!"
        isAlive = false   
    }
    messageShow.textContent = message
}       

function newCard(){
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive === true && hasBlackJack === false){
            let card = getRandomCard()
            sum += card
            cards.push(card)
            renderGame()  
    }
    
}
