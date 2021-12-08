function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberRef = document.querySelector('input');
const renderBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

renderBtnRef.addEventListener('click', onRenderBtnRefClick);
destroyBtnRef.addEventListener('click', destroyBoxes);

function onRenderBtnRefClick() {
  const amount = inputNumberRef.value;
  createBoxes(amount);
};

function createBoxes(amount) {
  let size = 30;
  let result = [];
  if (boxesRef.lastChild) {
    size = parseInt(boxesRef.lastChild.style.width)+10;
  };
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.background = `${getRandomHexColor()}`;
    result.push(box);
    size += 10;
  };
  boxesRef.append(...result);
};
function destroyBoxes() {
  boxesRef.innerHTML = '';
}