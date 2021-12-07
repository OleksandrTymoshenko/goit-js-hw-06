function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyElement = document.querySelector("body");
const buttonElement = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
console.log(bodyElement);
buttonElement.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyElement.setAttribute("style", `background-color:${randomColor}`);
  textColor.textContent = randomColor;
});