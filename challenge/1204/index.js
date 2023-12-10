const playBtn = document.querySelector(".num-reply button");

function generateNum() {
  event.preventDefault();
  const numRange = parseInt(document.querySelector(".num-range input").value);
  const replyNum = parseInt(document.querySelector(".num-reply input").value);
  const spanGameLog = document.querySelector("div span:first-child");
  const spanGameResult = document.querySelector("div span:last-child");
  if (numRange < 0 || replyNum < 0) {
    spanGameLog.innerText = "Please input a positive Number.";
    spanGameResult.innerText = "";
  } else if (numRange >= 0 && replyNum >= 0) {
    const machineChose = Math.floor(Math.random() * (numRange + 1));
    spanGameLog.innerText = `You chose: ${replyNum}, the machine chose: ${machineChose}`;
    if (replyNum === machineChose) {
      spanGameResult.innerText = "You won!";
    } else if (replyNum === machineChose + 1 || replyNum === machineChose - 1) {
      spanGameResult.innerText = "You lost! But it was so close.";
    } else {
      spanGameResult.innerText = "You lost!";
    }
  } else {
    spanGameLog.innerText = "Please Enter a Number.";
    spanGameResult.innerText = "";
  }
}

playBtn.addEventListener("click", generateNum);
