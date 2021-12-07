const area = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

area.input.addEventListener('input', onInputPresskey);

function onInputPresskey(press) {
  press.preventDefault();
  if (press.currentTarget.value === '') {
    area.output.textContent = 'Anonymous';
  } else {
  area.output.textContent = press.currentTarget.value;
  };
  return area.output.textContent;
};