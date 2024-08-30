 // Pobranie elementów input i span z DOM
  const inputEl = document.getElementById("name-input");
  const outputEl = document.getElementById("name-output");

  // Dodanie nasłuchiwania na zdarzenie 'input'
  inputEl.addEventListener("input", () => {
    // Pobranie i przycięcie wartości z inputa
    const trimmedValue = inputEl.value.trim();

    // Aktualizacja wartości w spanie lub ustawienie "Anonymous" gdy input jest pusty
    outputEl.textContent = trimmedValue ? trimmedValue : "Anonymous";
  });