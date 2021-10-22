const getInput = document.querySelector('#name-input');
const getSpan = document.querySelector('#name-output');
const getTextContentOfSpan = getSpan.textContent;

const checkInputValue = (event) => {
    getSpan.textContent = event.target.value;

    if (event.target.value === '') {
        getSpan.textContent = 'Anonymous';
    }
};
getInput.addEventListener('input', checkInputValue);