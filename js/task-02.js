const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const qs = (selector) => document.querySelector(selector);

const list = qs("#ingredients");
console.log(list);

 ingredients.forEach((n,i) => {
  let ingredientsElement = document.createElement("li");
  ingredientsElement.textContent = `${ingredients[i]}`;
  ingredientsElement.classList.add('item');
  console.log(ingredientsElement);
  list.after(ingredientsElement);
})







