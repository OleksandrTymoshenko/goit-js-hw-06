const inputForm = document.querySelector(".login-form");
const inputField = inputForm.querySelectorAll("input");

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email !== "" && password !== "") {
    let dataForm = {
      email,
      password,
    };
    console.log(dataForm);
  } else {
    alert("Заполните все поля");
  }
  inputForm.reset();
});