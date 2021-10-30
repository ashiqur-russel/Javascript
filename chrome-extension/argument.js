let Data = [0,3,5];
const showData = document.getElementById("show-el")
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")



saveBtn.addEventListener("click",function(){
    localStorage.setItem("Data",JSON.stringify(Data))   
    renderData() 
    console.log(localStorage.getItem("Data"))
    
})


function renderData(){



     // Assign it to an empty string to begin with
    let listItems = ""
    for (let i = 0; i < Data.length; i++) {
        listItems += `
            <li>
                    ${Data[i]}
            </li>
        `
    }
            ulEl.innerHTML = listItems  

    }
    



