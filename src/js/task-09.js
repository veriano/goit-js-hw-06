const getBody = document.querySelector('body');
const getDiv = document.querySelector('.widget');
const getButton = document.querySelector('.change-color');
const getParagraph = getDiv.querySelector('p');
const getSpan = getParagraph.querySelector('.color');

function getRandomHexColor() {
  getBody.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  let getColor = getBody.style.backgroundColor;
 
  getSpan.textContent = getColor;

}
getButton.addEventListener('click', getRandomHexColor);

