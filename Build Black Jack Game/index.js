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

// Function fro the ener game
function renderGame(){
        sumShow.textContent = "Sum : "+sum;
    for( let i = 0; i<cards.length;i++){
        cardShow.textContent = "Cards :"+cards+" ";
    }
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

// function for the drawong new card

function newCard(){
    // Check draw card button work before start gane or not
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

    // check if point is over 21 then return
    if( sum >21){
        message = " You are out of the game!";
        messageShow.textContent = message;
        sumShow.textContent = "Sum : "+sum;
        return;       
    }else{
    renderGame();
    } 

    // loop for showing all the card sshowing from card array 
    for( let i = 0; i<cards.length;i++){
        cardShow.textContent = "Cards :"+cards+" ";
    }

    

}

