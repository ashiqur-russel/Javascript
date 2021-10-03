const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){  
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});


// Function for Getting  Random  number

function getRandomNumber(){
    let color = Math.floor(Math.random() * colors.length);
   // console.log(color);
    return color;
 }


 