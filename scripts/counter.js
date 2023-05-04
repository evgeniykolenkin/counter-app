const colorToggleBtn = "btn__clicked";
const btnPlus = document.querySelector(".counter__btn-plus");
const btnReset = document.querySelector(".counter__btn-reset");
const counterText = document.querySelector(".counter__data");
const counterTextExtra = document.querySelector(".counter__data-extra");

let counter = 0;

function ResetCount() {
  counter = 0;
  btnReset.setAttribute("disabled", true);

  counterText.innerText = "Передохни!";
  counterTextExtra.innerText = "Иначе никуда не поедем";
}

function toggleColor() {
  btnPlus.classList.toggle(colorToggleBtn);
}

const countLoops = () => {
  ++counter;
  toggleColor();

  counterText.innerText = counter;
  counterTextExtra.innerText = "Начало положено!";

  if (counter > 0) {
    btnReset.removeAttribute("disabled");
  }
  if (counter >= 5 && counter < 10) {
    counterTextExtra.innerText = "Продолжай!";
  }
  if (counter >= 10 && counter < 15) {
    counterTextExtra.innerText = "Неплохо!";
  }
  if (counter >= 15 && counter < 20) {
    counterTextExtra.innerText = "Силы ещё есть?";
  }
  if (counter >= 20 && counter < 25) {
    counterTextExtra.innerText = "Машина!";
  }
  if (counter >= 25 && counter < 30) {
    counterTextExtra.innerText = "Завязывай!";
  }
  if (counter >= 30 && counter < 35) {
    counterTextExtra.innerText = "Я серьёзно!";
  }
  if (counter >= 35 && counter < 40) {
    counterTextExtra.innerText = "Ты так умрёшь скоро!";
  }
  if (counter >= 40 && counter < 45) {
    counterTextExtra.innerText = "Кони столько не бегают!";
  }
  if (counter >= 45 && counter < 50) {
    counterTextExtra.innerText = "Скорее всего ты ползёшь!";
  }
  if (counter >= 50 && counter < 55) {
    counterTextExtra.innerText = "Хватит!";
  }
  if (counter >= 55 && counter < 56) {
    ResetCount();
  }
};

const resetLoops = () => {
  counter = 0;
  btnReset.setAttribute("disabled", true);

  counterText.innerText = "Погнали заново!";
  counterTextExtra.innerText = "Мы на пути к Олимпиаде!";
};

btnPlus.addEventListener("click", countLoops);
btnReset.addEventListener("click", resetLoops);
