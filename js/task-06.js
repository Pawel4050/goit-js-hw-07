// Funkcja generująca losowy kolor w formacie hex
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Referencje do elementów HTML
const inputEl = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.getElementById("boxes");

// Funkcja do tworzenia kolekcji elementów
function createBoxes(amount) {
  const boxes = [];
  let size = 30; // Początkowy rozmiar kwadratu

  // Tworzenie divów na podstawie podanej liczby
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10; // Każdy kolejny div jest większy o 10px
    boxes.push(box);
  }

  // Dodanie wszystkich divów do DOM w jednej operacji
  boxesEl.append(...boxes);
}

// Funkcja do usuwania wszystkich elementów
function destroyBoxes() {
  boxesEl.innerHTML = "";
}

// Obsługa przycisku Create
createBtn.addEventListener("click", () => {
  const amount = parseInt(inputEl.value.trim());

  // Walidacja wartości input
  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  // Usunięcie istniejących elementów przed dodaniem nowych
  destroyBoxes();
  createBoxes(amount);

  // Czyszczenie wartości input
  inputEl.value = "";
});

// Obsługa przycisku Destroy
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
