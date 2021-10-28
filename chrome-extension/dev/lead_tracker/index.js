

// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = [];

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// Get the input data from local storage & store it a variable
let dataFromStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(dataFromStorage)
 

inputBtn.addEventListener("click", function() {
        // Push the value from the inputEl into the myLeads array 
        myLeads.push(inputEl.value)
        inputEl.value = ""
        // save the myLeads array to local storage and turn string
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        //clear the input
        renderLeads()
        console.log(localStorage.getItem("myLeads"))

})

function renderLeads() {
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
