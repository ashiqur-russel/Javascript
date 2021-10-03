const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color"); 

//Event listener when button clicked to generate color

btn.addEventListener("click",function(){
let hexColor = '#';
for(let i=0;i<6;i++){
    hexColor +=hex[getRandomNumber()]
}

color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});


// function for getting hexa number
function getHex(){
    const randcolor = Math.floor(Math.random()* 16777215).toString(16);
    return randcolor;
    
}

// Another function for getting hex color from array

function getRandomNumber(){
    let color = Math.floor(Math.random() * hex.length);
    return color;
 }

