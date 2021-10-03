

// Function for Click me button for prompting age
function promptAge(){
    let birtYear = prompt( "Enter your Birth Year :");
    let ageindays =  (2021-birtYear)*365;

    let h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ageindays+  '  days old');
    h1.setAttribute('id','agindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

    
}

//Function for reset the Result
function reset(){
    document.getElementById('agindays').remove();
}
