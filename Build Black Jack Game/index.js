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

//Start Game
function startGame(){
renderGame();
}
function renderGame(){

    cardShow.textContent = "Card : "+cards[0]+" "+cards[1];

    sumShow.textContent = "Sum : "+sum;
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
    let randomCard = [6,4,7];
    var randomItem = randomCard[Math.floor(Math.random()*randomCard.length)];
   // console.log(randomCard);
    console.log(randomItem);
    cards.push(randomItem);
    console.log(cards);
    sum +=randomItem;
    renderGame();
    cardShow.textContent = "Cards : "+cards[0]+" "+cards[1]+" "+randomItem;
}

