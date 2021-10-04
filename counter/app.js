const btn_increase = document.getElementById("btn3");
const btn_reset = document.getElementById("btn2");
const btn_decrease = document.getElementById("btn1");

const value = document.querySelector(".value"); 


let counter = 0;

//Event listener for Increase Value
btn_increase.addEventListener("click",function(){
        counter++;   
        value.innerHTML = counter;    
})

//Event listener for Decrease Value
btn_decrease.addEventListener("click",function(){
    counter--;
    value.innerHTML = counter;
})
//Event listener for Reset Value
btn_reset.addEventListener("click",function(){
    counter = 0;
    value.innerHTML = counter;
})