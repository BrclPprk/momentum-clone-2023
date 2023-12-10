// const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// const toDoList = document.getElementById("todo-list");
// toDoForm, toDoList is already used on greetings.js
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteList() {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
function deleteListIconClick() {
  const li = event.target.parentElement.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";
  button.appendChild(icon);
  button.addEventListener("click", deleteList);
  icon.addEventListener("click", deleteListIconClick);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObject = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObject);
  paintToDo(newToDoObject);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

if (savedUsername != null) {
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
}

// scroll bar style
const SCROLLBAR_CLASSNAME = "on-scrollbar";
let timer = null;

const handleScroll = () => {
  if (timer !== null) {
    clearTimeout(timer);
  }

  if (toDoList.classList.contains(SCROLLBAR_CLASSNAME) === false) {
    toDoList.classList.add(SCROLLBAR_CLASSNAME);
  }

  timer = setTimeout(() => {
    toDoList.classList.remove(SCROLLBAR_CLASSNAME);
  }, 800);
};

toDoList.addEventListener("scroll", handleScroll);
