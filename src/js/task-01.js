const list = document.querySelector('#categories')
const totalItem = document.querySelectorAll('.item').length;

console.log(`Number of categories: ${totalItem}`);

const allTitles = document.querySelectorAll('h2');
console.log(`Category: ${allTitles[0].textContent}`);

const getItem1 = document.querySelector('.item');
const getElements1 = getItem1.querySelectorAll('li').length;

console.log(`Elements: ${getElements1}`);

const getItems = document.querySelectorAll('.item');
const getItem2 = getItems[1];
const getElements2 = getItem2.querySelectorAll('li').length;

console.log(`Category: ${allTitles[1].textContent}`);
console.log(`Elements: ${getElements2}`)

const getItems3 = getItems[2];
const getElements3 = getItems3.querySelectorAll('li').length;

console.log(`Category: ${allTitles[2].textContent}`);
console.log(`Elements: ${getElements3}`);