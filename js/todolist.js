const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  li.appendChild(span);
  span.innerText = newToDo;
  li.appendChild(button);
  button.addEventListener("click",handleListRemove);
  toDoList.appendChild(li);
}

function handleListRemove(event){
  const li = event.target.parentElement;
  li.remove();
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = ""; 
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);
