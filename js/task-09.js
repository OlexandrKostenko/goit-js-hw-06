function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const colorDescription = document.querySelector('.color');

button.addEventListener('click', onChangeColor);

function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorDescription.textContent = getRandomHexColor();
};
