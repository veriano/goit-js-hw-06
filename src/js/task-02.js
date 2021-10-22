const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const getLinkIngredients = document.querySelector('#ingredients');
const createLi1 = document.createElement('li');
createLi1.textContent = 'Potatoes';
createLi1.classList.add('item');

const createLi2 = document.createElement('li');
createLi2.textContent = 'Mushrooms';
createLi2.classList.add('item');

const createLi3 = document.createElement('li');
createLi3.textContent = 'Garlic';
createLi3.classList.add('item');

const createLi4 = document.createElement('li');
createLi4.textContent = 'Tomatos';
createLi4.classList.add('item');

const createLi5 = document.createElement('li');
createLi5.textContent = 'Herbs';
createLi5.classList.add('item');

const createLi6 = document.createElement('li');
createLi6.textContent = 'Condiments';
createLi6.classList.add('item');

getLinkIngredients.append(createLi1, createLi2, createLi3, createLi4, createLi5, createLi6);
console.log(getLinkIngredients);
