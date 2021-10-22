let counterValue = 0;
const getBtn1 = document.querySelector('[data-action="decrement"]');
const getBtn2 = document.querySelector('[data-action="increment"]');
let getValue = document.querySelector('#value');

const onDecrementClick = () => {
    counterValue = counterValue - 1;
    getValue.textContent = counterValue;
};

getBtn1.addEventListener('click', onDecrementClick);

const onIncrementClick = () => {
    counterValue = counterValue + 1;
    getValue.textContent = counterValue;
};

getBtn2.addEventListener('click', onIncrementClick);