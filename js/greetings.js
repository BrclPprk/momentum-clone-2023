const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Welcome ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

// 여기서부터 gpt의 도움을 받은 코드
const loginInput1st = document.querySelector("#login-form input:first-child");
let isManuallyClicked = false;

function focusAnimation(progress) {
  loginInput1st.style.background = `radial-gradient(
    circle at -10%,
    #ffffff00,
    #ffffff00 ${progress / 1.5}%,
    #ffffff ${progress}%,
    #ffffff00 ${progress}.1%)`;
}

function eventListen() {
  if (isManuallyClicked) {
    let progress = 0;

    function animate() {
      if (progress <= 150) {
        progress += 1;
        focusAnimation(progress);
        setTimeout(animate, 4); // 자기 자신을 다시 실행 (while을 썼더니 시간 딜레이가 적용되지 않아 이런 방식으로 구현)
      }
    }
    animate();
  }
}

loginInput1st.addEventListener("mousedown", () => {
  isManuallyClicked = true;
});
loginInput1st.addEventListener("mouseup", () => {
  isManuallyClicked = false;
}); // input에 focus된 상태로 다른탭에 갔다오면 focus이벤트가 다시 실행되는 것을 방지
loginInput1st.addEventListener("focus", eventListen);
