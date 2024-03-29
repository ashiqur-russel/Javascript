//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);


//Functions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check Mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class=" fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //check Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class=" fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append Todo List
    todoList.appendChild(todoDiv);

    //Clear Input Value
    todoInput.value="";
}

function deleteCheck(e){

    const item = e.target;
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
    //Check Mark
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");

    }
}


