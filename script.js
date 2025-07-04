const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const todosList = document.getElementById("todos-lis");
const itemsleft = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");
const emptyState = document.querySelector(".empty-state");
const dateElement = document.getElementById("date");
const filters = document.querySelectorAll(".filter");


let todos = [];
let currentFilter = "all";

addTaskBtn.addEventListener("click", ()=> {
    addTodo(taskInput.value);
});

taskInput.addEventListener("keydown", (event) => {
    if(event.key = "Enter"){
        addTodo(taskInput.value);
    }
});

clearCompletedBtn.addEventListener("click", clearCompleted);

function addTodo(text){
    if (text.trim() === ""){
        return 
    }
    
    const todo = {
        id : Date.now(),
        text,
        completed : false
    }

    todos.push(todo);


    saveTodos()
    // renderTodos()
}


function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
    updateItemsCount();
    checkEmptyState();
}

function updateItemsCount(){
    const uncompletedTodos = todos.filter(todo => !todo.completed);
    itemsleft.textContent = `${uncompletedTodos.length} item${
        uncompletedTodos.length !== 1 ? "s" : ""
    }left`;
}

function checkEmptyState(){
    const filteredTodos = filterTodos(currentFilter);
}


function filterTodos(filter){
    switch(filter) {
        case"active" :
            return todos.filter(todo => !todo.completed)
        case"completed" :
        
    }
}


function clearCompleted(){

}

