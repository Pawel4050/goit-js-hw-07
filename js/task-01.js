//const categoriesList = document.querySelector('#categories');
//const categoryItems = categoriesList.querySelectorAll('.item');
//console.log('Number fo categories:', categoryItems.length);

//categoryItems.forEach(category => {
//const categoryHeader = category.querySelector('h2');
//const innerItems = category.querySelectorAll('li');
//console.log(`Category: ${categoryHeader.textContent}`);
//console.log(`Number of items in category: ${innerItems.length}`);
//});


// Wybieramy listę kategorii na podstawie jej ID
const categoriesList = document.querySelector('#categories');

// Wybieramy wszystkie elementy li.item
const categoryItems = categoriesList.querySelectorAll('.item');

// Wypisujemy liczbę kategorii
console.log('Number of categories:', categoryItems.length);

// Iterujemy przez każdą kategorię
categoryItems.forEach(category => {
  // Znajdujemy nagłówek <h2> dla danej kategorii
  const categoryHeader = category.querySelector('h2');
  
  // Znajdujemy wszystkie elementy <li> wewnątrz danej kategorii
  const innerItems = category.querySelectorAll('ul li');
  
  // Wypisujemy nazwę kategorii (tekst nagłówka <h2>)
  console.log(`Category: ${categoryHeader.textContent}`);
  
  // Wypisujemy liczbę elementów w kategorii
  console.log(`Number of items in category: ${innerItems.length}`);
});
