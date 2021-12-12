const userInput = document.querySelector("#validation-input");
const length = userInput.dataset.length;

const onInputBlur = event => {
  if (event.currentTarget.value.trim().length === Number(length)) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
};

userInput.addEventListener("blur", onInputBlur);