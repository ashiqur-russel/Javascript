//document.getElementById("res").innerText= 6;

let counter = 0;


const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const save     = document.getElementById("save-btn");
const value    = document.getElementById("res");
const value1    = document.getElementById("save");


//Increase button functionality 
increase.addEventListener("click",function(){
    counter++;
    value.textContent= counter;
})

//Decrease button functionality 
decrease.addEventListener("click",function(){
    counter--;
    value.textContent= counter;
})
// Save button functionality
save.addEventListener("click",function(){

    let countStr = counter + " : ";
    console.log(countStr);
    value1.textContent += countStr;
    value.textContent = 0;
    counter = 0;
})





