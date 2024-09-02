// Funkcja generująca losowy kolor w formacie hex
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.getElementById("boxes");

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxes.push(box);
  }

  boxesEl.append(...boxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = parseInt(inputEl.value.trim());

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  destroyBoxes();
  createBoxes(amount);

  inputEl.value = "";
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
