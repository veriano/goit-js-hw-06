const getInput = document.querySelector('#font-size-control');
const getSpan = document.querySelector('#text');

getInput.addEventListener('change', () => {
    getSpan.style.fontSize = `${getInput.value}px`;
});