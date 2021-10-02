


function promptAge(){
    let birtYear = prompt( "Enter your Birth Year :");
    let ageindays =  (2021-birtYear);

    let h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ageindays+  '  days old');
    h1.setAttribute('id','agindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

    
}



