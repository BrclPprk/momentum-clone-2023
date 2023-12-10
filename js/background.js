const images = [
  "pexels-ann-h-1762851.jpg",
  "pexels-pixabay-268533.jpg",
  "pexels-pixabay-531880.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgimage");
bgImage.classList.add("fadeout");

document.body.appendChild(bgImage);
