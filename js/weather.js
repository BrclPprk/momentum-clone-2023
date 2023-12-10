const API_KEY = "feddbb76c036fabd888a52f623f08d65";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
      city.innerText = data.name;
    });
}

function onGeoErr() {
  // alert("Can't find you. No weater for you.");
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");
  weather.innerText = "No weather information";
  city.innerHTML = `But it's gonna be a <a href="https://www.youtube.com/watch?v=RV5jJrv2kjY">Good Day</a>`;
}
// navigator.geolocation run in config.js
// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
