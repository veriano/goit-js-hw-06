const list = document.querySelector('#categories');
const allCategories = list.querySelectorAll('h2');
console.log(`Number of categories: ${allCategories.length}`);

const allLi = list.querySelectorAll('.item');
allLi.forEach(el => {
    const getTitle = el.querySelector('h2');
    console.log(`Category: ${getTitle.textContent}`)

    const getItemList = el.querySelector('ul');
    const getLi = getItemList.querySelectorAll('li');
    console.log(`Elements: ${getLi.length}`)
});