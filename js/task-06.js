const input = document.getElementById('validation-input');
const maxLength = input.dataset.length;
input.addEventListener('blur', onInputBlur);
function onInputBlur(action) {
  if (action.currentTarget.value.length == maxLength) {
    action.currentTarget.classList.remove('invalid');
    action.currentTarget.classList.add('valid');
  } else {
    action.currentTarget.classList.remove('valid');
    action.currentTarget.classList.add('invalid');
  };
};