
// Select value and buttons
const btns = document.querySelectorAll(".btn")
const value = document.querySelector(".value"); 

// Set initial counert
let counter = 0;


//Callback function for each button click together in foreach loop
btns.forEach(function (btn){

    //callback function 
    btn.addEventListener("click",function(e){
 
        const styles = e.target.classList;

        if(styles.contains("decrease")){
            counter--;
        }
        if(styles.contains("increase")){
            counter++;
        }
        if(styles.contains("reset")){
            counter=0;
        }
        value.textContent = counter;
});
});


/*

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

*/