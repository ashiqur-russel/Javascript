let firstCard = 10;
let secondCard= 12;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageShow = document.getElementById("message-el");


function startGame(){
    console.log("Game starts");
    if(sum<=20){
        message = "Do you want to draw a new card again? ";
        
    }else if(sum === 21){
        message = "Winner!";
        let hasBlackJack = true;
    }else{
        message = " You are out of the game!";
        isAlive = false;
    }
    messageShow.textContent = message;

}




function newCard(){
    console.log("New Game starts");
}