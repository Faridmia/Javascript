let parent3 = document.querySelector(".item").closest('.container').classList.add('faridmia');

let parent = document.querySelector(".item").nextElementSibling;
let parent2 = parent.previousElementSibling;

parent2.style.color = "red";
console.log(parent2);


const createEle = document.createElement('div');

createEle.className = "red";

createEle.setAttribute('id','red');

createEle.setAttribute('title','red div');

const container = document.querySelector('.todo-list');
const containerh2 = container.querySelector('h2');

container.insertBefore(createEle,containerh2);

console.log(containerh2)



let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

let createTask = function(task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = "checkbox";
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}


let addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);

    newTask = '';

    bindInCompleteItems( listItem,completeTask );
}

form.addEventListener('submit', addTask);


let bindInCompleteItems = function( listItem,checkboxClick ) {
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}


let completeTask = function() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerText = 'delete';
    listItem.appendChild(deleteBtn);
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}


let bindCompleteItems =  function( taskItem, deleteButtonClick ) {
    let deleteBtn = taskItem.querySelector('.delete');
    deleteBtn.onclick = deleteButtonClick;
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem)

}

for (let i = 0; i<todoUl.children.length;i++) {
    bindInCompleteItems( todoUl.children[i],completeTask );
}



for(let i=0; i< completeUl.children.length; i++ ) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}
