const getInput = document.querySelector('#validation-input');
const getDataValue = getInput.dataset.length;
console.log(typeof getDataValue);
console.log(getDataValue)
const changeDataValue = Number(getDataValue);
console.log(typeof changeDataValue);
console.log(changeDataValue);

getInput.addEventListener('blur', () => {
    if (getInput.value.length < changeDataValue || getInput.value.length > changeDataValue) {
        getInput.classList.add('invalid');
    }if (getInput.value.length === changeDataValue) {
        getInput.classList.replace('invalid', 'valid');
    }
});