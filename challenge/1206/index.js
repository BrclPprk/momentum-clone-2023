const clockTitle = document.querySelector(".js-clock");

function updateClock() {
  const nowTime = new Date();
  let christmas;
  if (nowTime.getMonth() === 11 && nowTime.getDate() >= 25) {
    christmas = new Date(nowTime.getFullYear() + 1, 11, 25, 0, 0, 0);
  } else {
    christmas = new Date(nowTime.getFullYear(), 11, 25, 0, 0, 0);
  }
  const RemainTime = christmas - nowTime;

  const timeSetByMillisecond = {
    second: 1000,
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
  };

  const calTime = {
    days: Math.floor(RemainTime / timeSetByMillisecond.day),
    hours: Math.floor((RemainTime / timeSetByMillisecond.hour) % 24),
    minutes: Math.floor((RemainTime / timeSetByMillisecond.minute) % 60),
    seconds: Math.floor((RemainTime / timeSetByMillisecond.second) % 60),
  };

  function padStr(value) {
    return value.toString().padStart(2, "0");
  }

  clockTitle.innerText = `${calTime.days}일 ${padStr(
    calTime.hours
  )}시간 ${padStr(calTime.minutes)}분 ${padStr(calTime.seconds)}초`;
}

updateClock();
setInterval(updateClock, 1000);
