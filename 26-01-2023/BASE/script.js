const timerStop = () => {
  textTimerEl.style.textDecorationLine = "none";
  containerEl.style.backgroundColor = "red";
  textTimerEl.textContent = "STOP!";
  clearInterval(timeout);
};

const containerEl = document.querySelector(".container");
const timerEl = document.querySelector(".timer");
const textTimerEl = document.querySelector(".timer h1");
const stopEl = document.querySelector(".stop");
const stopBtnEl = document.querySelector(".stop__btn");
let timerCounter = 21;

const timeout = setInterval(() => {
  console.log(timerCounter);
  timerCounter--;
  textTimerEl.textContent = `00:${timerCounter}`;
  if (timerCounter <= 9) {
    textTimerEl.textContent = `00:0${timerCounter}`;
    if (timerCounter <= 5) {
      textTimerEl.style.textDecorationLine = "underline";
      if (timerCounter === 0) {
        timerStop();
        //   timerEl.style.display = "none";
        //decommentare la riga sopra per non visualizzare il testo del timer
      }
    }
  }
}, 1000);

stopBtnEl.addEventListener("click", timerStop);
