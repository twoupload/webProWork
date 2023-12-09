const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 1초마다 getClock() 함수를 호출하여 시간 업데이트
setInterval(getClock, 1000);

// 초기에 시계 표시를 위해 한 번 호출
getClock();