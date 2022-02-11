const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  hourHand.style.transform = `rotate(${hours * 30}deg)`;
  minsHand.style.transform = `rotate(${minutes * 6} deg)`;
  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
}

setInterval(setTime, 1000);

setTime();
