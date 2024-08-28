const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');
console.log('Number fo categories:', categoryItems.length);

categoryItems.forEach(category => {
  const categoryHeader = category.querySelector('h2');

  const categoryItems = category.querySelectorAll('li');

  console.log(`Category: ${categoryHeader.textContent}`);
  console.log(`Number of items in category: ${categoryItems.length}`);
});