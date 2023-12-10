const colors = ["#2e8cd5", "#904ead", "#eebc12"];

const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.innerText = "Hello!";

body.appendChild(h1);
h1.style.color = "white";

function colorChanger() {
  if (window.innerWidth < 400) {
    body.style.backgroundColor = colors[0];
  } else if (window.innerWidth < 600 && window.innerWidth >= 400) {
    body.style.backgroundColor = colors[1];
  } else {
    body.style.backgroundColor = colors[2];
  }
}

colorChanger();
window.addEventListener("resize", colorChanger);

// I don't think this code is an optimized answer
// addEventListener() executes the function every time the window size changes, so I think it's a lot of unnecessary function execution.
// I asked chatGPT and it told me to delay the execution of the function so that it runs every 200ms.
// How can I be responsive and only run functions when needed?
// -Translated by DeepL-
