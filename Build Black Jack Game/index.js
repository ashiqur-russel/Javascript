let allCard = [1,2,3,4,5,6,7,8,9,10,11];

let cards = [];
let sum = 0;
let message = "";

let messageShow = document.getElementById("message-el");
let sumShow = document.querySelector("#sum-el");
let cardShow = document.querySelector("#cards-el");

//Start Game
function startGame(){

    // If sum is = only button will function
    if(cards.length === 0){
        var firstCard = allCard[Math.floor(Math.random()*allCard.length)];
        var secondCard = allCard[Math.floor(Math.random()*allCard.length)];
        cards.push(firstCard);
        cards.push(secondCard);
        sum = firstCard + secondCard;
        renderGame();
    }


}
function renderGame(){
    for( let i = 0; i<cards.length;i++){
        cardShow.textContent = "Cards :"+cards+" ";
    }

    sumShow.textContent = "Sum : "+sum;
    if(sum<=20){
        message = "Do you want to draw a new card again? ";   
    }else if(sum === 21){
        message = "You have got BlackJack!";
        return;
    }else{
        message = " You are out of the game!";
        return;
    }
    messageShow.textContent = message;

}


function newCard(){
    // If sum is = only button will function
        if(cards.length === 0){
        message = "Please Start Game first!"; 
        messageShow.textContent = message;
        return;
    }

    var randomItem = allCard[Math.floor(Math.random()*allCard.length)];
   // console.log(randomCard);
    cards.push(randomItem);
    console.log(cards);
    sum +=randomItem;
    if( sum >21){
        message = "You are over 21 point ! Please start again";   
            messageShow.textContent = message;

        return;
    }else{
    renderGame();
    } 
    for( let i = 0; i<cards.length;i++){
        cardShow.textContent = "Cards :"+cards+" ";
    }

    

}

