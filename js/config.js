// open config window
const configIcon = document.querySelector(".config i");
const configWindow = document.querySelector(".config__list");

function openConfig() {
  if (configWindow.classList.contains("hidden")) {
    configWindow.classList.add("fadein");
    configWindow.classList.remove("hidden");
  } else {
    configWindow.classList.toggle("fadein");
    configWindow.classList.toggle("fadein-quit");
  }
}

configIcon.addEventListener("click", openConfig);

// config switch toggle
const switchBgnAni = document.querySelector("#switch__bgn-animation");
const switchRqstLoc = document.querySelector("#switch__req-location");
const centerElements = document.querySelector(".center-elements");
const config = document.querySelector(".config");

const BGN_ANI_KEY = "beginningAnimation";
const RQST_LOC_KEY = "requestLocation";

function setBgnAniStatus() {
  if (switchBgnAni.checked === true) {
    localStorage.setItem(BGN_ANI_KEY, true);
  } else {
    localStorage.setItem(BGN_ANI_KEY, false);
  }
}
function setRqstLocStatus() {
  if (switchRqstLoc.checked === true) {
    localStorage.setItem(RQST_LOC_KEY, true);
  } else {
    localStorage.setItem(RQST_LOC_KEY, false);
  }
}

switchBgnAni.addEventListener("change", setBgnAniStatus);
switchRqstLoc.addEventListener("change", setRqstLocStatus);

if (localStorage.getItem(BGN_ANI_KEY) === "false") {
  switchBgnAni.checked = false;
  bgImage.classList.remove("fadeout");
  centerElements.classList.remove("welcome-animation");
  config.classList.remove("welcome-animation");
}

if (localStorage.getItem(RQST_LOC_KEY) === "false") {
  switchRqstLoc.checked = false;
  onGeoErr();
} else {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
}
