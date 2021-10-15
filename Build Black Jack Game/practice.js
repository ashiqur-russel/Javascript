// Array

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

