let firstCard = 10;
let secondCard= 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageShow = document.getElementById("message-el");
let sumShow = document.querySelector("#sum-el");
let cardShow = document.querySelector("#cards-el");


function renderGame(){

    sumShow.textContent = "Sum : "+sum;
    cardShow.textContent = "Cards: "+cards[0]+" "+cards[1];

    console.log("Game starts");
    if(sum<=20){
        message = "Do you want to draw a new card again? ";
        
    }else if(sum === 21){
        message = "You have got BlackJack!";
        let hasBlackJack = true;
    }else{
        message = " You are out of the game!";
        isAlive = false;
    }
    messageShow.textContent = message;

}


function newCard(){
    console.log("Drew a new card from the deck!");
    let card = 7;
    sum +=card;

    renderGame();

}

function startGame(){
    renderGame();
}