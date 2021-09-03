const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const qs = selector => document.querySelector(selector);

const list = qs('#ingredients');
console.log(list);

ingredients.forEach(element => {
  let ingredientsElement = document.createElement('li');
  ingredientsElement.textContent = element;
  ingredientsElement.classList.add('item');
  list.append(ingredientsElement);
  console.log(ingredientsElement);
});
