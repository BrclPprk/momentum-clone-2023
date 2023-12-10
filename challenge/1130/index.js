const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const text = document.querySelector("body h2");

const superEventHandler = {
  hover: () => {
    text.innerText = "The mouse is here!";
    text.style.color = "#1abc9c";
  },
  leave: () => {
    text.innerText = "The mouse is gone!";
    text.style.color = "#3498db";
  },
  resize: () => {
    text.innerText = "You just resized!";
    text.style.color = "#9b59b6";
  },
  rightClick: () => {
    text.innerText = "That was a right click!";
    text.style.color = "#f39c12";
  },
};

text.addEventListener("mouseenter", superEventHandler.hover);
text.addEventListener("mouseleave", superEventHandler.leave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rightClick);
