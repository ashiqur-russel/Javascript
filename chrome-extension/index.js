

// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field


let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
        // Push the value from the inputEl into the myLeads array 
        myLeads.push(inputEl.value)
        renderLeads()

})

function renderLeads() {
    // Assign it to an empty string to begin with
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems  
}
