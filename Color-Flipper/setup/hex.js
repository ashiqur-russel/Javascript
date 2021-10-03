const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNumber = getHex();
    document.body.style.backgroundColor = hex[randomNumber];
    color.textContent = hex[randomNumber];

});

function getHex(){
    const randcolor = Math.floor(Math.random()* 16777215);
    console.log(randcolor);
}