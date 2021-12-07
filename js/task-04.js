const counter = {
decrementBtn: document.querySelector('[data-action="decrement"]'),
incrementBtn: document.querySelector('[data-action="increment"]'),
}

let counterValue = 0;

counter.decrementBtn.addEventListener('click', onDecrementBtnClick);
counter.incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick(click) {
counterValue -= 1;
document.getElementById('value').textContent = counterValue;
};

function onIncrementBtnClick(click) {
counterValue += 1;
document.getElementById('value').textContent = counterValue;
}