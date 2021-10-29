

// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = [];

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")

const ulEl = document.getElementById("ul-el")

// Get the input data from local storage & store it a variable
const dataFromStorage = JSON.parse(localStorage.getItem("myLeads"));

if(dataFromStorage){                                                 // if there is data fetch and show
    myLeads = dataFromStorage
    render()
}

inputBtn.addEventListener("click", function() {
        myLeads.push(inputEl.value)                                  // Push the value from the inputEl into the myLeads array 
        inputEl.value = ""
        localStorage.setItem("myLeads",JSON.stringify(myLeads));     // save the myLeads array to local storage and turn string
        render()                                                //clear the input
        console.log(localStorage.getItem("myLeads"))
})

deleteBtn.addEventListener("click",function(){
    localStorage.clear();
    myLeads =[];
    render();
})

function render() {
    // Assign it to an empty string to begin with
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
