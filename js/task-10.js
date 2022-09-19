function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');



const boxes = document.getElementById('boxes');
const div = document.createElement('div');

const onInputChange = (amount) => {
  input.setAttribute("count", Number(amount.currentTarget.value));
  console.log(Number(amount.currentTarget.value));
};
input.addEventListener('input', onInputChange);
let baseBoxSize = 30;

const createBoxes = () => {
 const amounts = Number(input.getAttribute('count'));
 for (let i=0; i <= amounts; i +=1) {
  baseBoxSize += 10;
  const div = document.createElement('div');
  div.style.background = getRandomHexColor();
  div.style.height = baseBoxSize + 'px';
  div.style.width = baseBoxSize + 'px';
  div.classList.add('added-boxes');
  div.style.display = 'flex';
  div.style.marginBottom ='5px';
  boxes.append(div);
 };
};

const destroyBoxes = () => {
  const allNewBoxes = document.querySelectorAll('.added-boxes');
 boxes.remove(allNewBoxes);
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

