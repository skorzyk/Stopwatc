const btnStart = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const panel = document.querySelector(".time div");

let time = 0;
let idInt;
const timer = () => {
  if (btnStart.textContent == "Start") {
    btnStart.textContent = "Pauza";
    idInt = setInterval(start, 10);
  } else if (btnStart.textContent == "Pauza") {
    btnStart.textContent = "Start";
    clearInterval(idInt);
  }
};

const start = () => {
  time++;
  panel.textContent = (time / 100).toFixed(2);
};

const reset = () => {
  panel.textContent = "---";
  time = 0;
};

btnStart.addEventListener("click", timer);
btnReset.addEventListener("click", reset);
