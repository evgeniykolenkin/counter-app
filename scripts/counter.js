const btnPlus = document.querySelector(".counter__btn-plus");
const btnReset = document.querySelector(".counter__btn-reset");
const counterText = document.querySelector(".counter__data");
const counterTextExtra = document.querySelector(".counter__data-extra");

let counter = 0;

function ResetLoops() {
  counter = 0;

  counterText.innerText = "Передохни!";
  counterTextExtra.innerText = "Иначе никуда не поедем";
}

btnPlus.addEventListener("click", function () {
  counter = counter + 1;

  counterText.innerText = counter;
  counterTextExtra.innerText = "Начало положено!";

  if (counter >= 5) {
    counterTextExtra.innerText = "Продолжай!";
  }
  if (counter >= 10) {
    counterTextExtra.innerText = "Неплохо!";
  }
  if (counter >= 15) {
    counterTextExtra.innerText = "Силы еще есть?";
  }
  if (counter >= 20) {
    counterTextExtra.innerText = "Машина!";
  }
  if (counter >= 25) {
    counterTextExtra.innerText = "Завязывай!";
  }
  if (counter >= 30) {
    counterTextExtra.innerText = "Я серьёзно!";
  }
  if (counter >= 35) {
    counterTextExtra.innerText = "Ты так умрёшь скоро!";
  }
  if (counter >= 40) {
    counterTextExtra.innerText = "Даже кони столько не бегают!";
  }
  if (counter >= 50) {
    counterTextExtra.innerText = "Скорее всего ты ползёшь!";
  }
  if (counter >= 55) {
    counterTextExtra.innerText = "Хватит!";
  }
  if (counter >= 60) {
    ResetLoops();
  }
});

btnReset.addEventListener("click", function () {
  counter = 0;

  counterText.innerText = "Погнали заново!";
  counterTextExtra.innerText = "Мы на пути к Олимпиаде!";
});
