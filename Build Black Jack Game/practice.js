// Array

/*
let cards = [7,3,9];


cards.push(6);

console.log(cards);

let message = [
    "Hey, how is it going?",
    "Great ! Thank you .",
    "All good.Been working on portfolio lately"
];

let newMessage = "Same here!"

// add one item to last of array 
message.push(newMessage);

console.log(message);
// remove last item from array list
let lastItem = message.pop();
console.log(lastItem);

// show All message using loop

for( let i in message){
    console.log(message[i]);
}



*/

let cards = [];
console.log("Cards :"+cards);
let sum = 0;
let allCard = [1,2,3,4,5,6,7,8,9,10,11];
console.log("All Cards :"+allCard);
var firstCard = allCard[Math.floor(Math.random()*allCard.length)];
var secondCard = allCard[Math.floor(Math.random()*allCard.length)];
console.log("First Card :"+firstCard)
console.log("Second Card :"+secondCard)

cards.push(firstCard);
cards.push(secondCard);


var randomItem = allCard[Math.floor(Math.random()*allCard.length)];


var firstCard = allCard[Math.floor(Math.random()*allCard.length)];
