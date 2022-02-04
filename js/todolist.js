const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "todos";
let toDos = [];

function saveToDos(){
  localStorage.setItem(TODO_KEY,JSON.stringify(toDos));
}

function paintToDo(newToDo){
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click",handleListRemove);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleListRemove(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const todoObj = {
    text : newToDo,
    id : Date.now()
  };
  toDos.push(todoObj); 
  paintToDo(todoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}