const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let arrayEl = [];
let itemEl;
const ulEl = document.querySelector('ul#ingredients');

ingredients.forEach(element => {
  itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = element;
  arrayEl.push(itemEl);
}
)
ulEl.append(...arrayEl);

/* console.dir(arrayEl); */




