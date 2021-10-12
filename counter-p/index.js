//document.getElementById("res").innerText= 6;

let counter = 0;


const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const save     = document.getElementById("save-btn");
const value    = document.getElementById("res");
const value1    = document.getElementById("save");




increase.addEventListener("click",function(){
    counter++;
    value.innerText= counter;
})


decrease.addEventListener("click",function(){
    counter--;
    value.innerText= counter;
})

save.addEventListener("click",function(){

    let countStr = counter + " - ";
    console.log(countStr);
    value1.innerHTML = countStr;






})




