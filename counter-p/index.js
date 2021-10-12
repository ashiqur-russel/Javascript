//document.getElementById("res").innerText= 6;

let counter = 0;


const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

const value = document.getElementById("res");

increase.addEventListener("click",function(){
    counter++;
    value.innerText= counter;
})


decrease.addEventListener("click",function(){
    counter--;
    value.innerText= counter;
})



