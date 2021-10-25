const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const getListIngredients = document.querySelector('#ingredients');
const liItems = [];

for (const ingredient of ingredients) {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');

  liItems.push(item);
};

getListIngredients.append(...liItems);



