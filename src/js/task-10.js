function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const getDiv = document.querySelector('#controls');
const getInput = getDiv.querySelector('input');
const getButtonCreate = getDiv.querySelector('button[data-create]');
const getButtonDestroy = getDiv.querySelector('button[data-destroy]');

const getInputLog = () => {
  console.log()
}

getButtonCreate.addEventListener('click', () => {
  getInput.addEventListener('input', )
  console.log(getInput.value);
});
getButtonDestroy.addEventListener('click', () => {
  getInput.removeEventListener('input', )
  console.log(getInput.innerHTML = '');
});
