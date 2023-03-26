const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let itemEl;
const ulEl = document.querySelector('ul#ingredients');

ingredients.forEach(element => {
  itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = element;
  ulEl.append(itemEl);
}
)


console.dir(ulEl.children);




