function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.getElementById("boxes");

const inputElement = document.querySelector('[type = "number"]');

const createBtn = document.querySelectorAll("button");

createBtn[0].addEventListener("click", () => {
  createBoxes(inputElement.value);
});
createBtn[1].addEventListener("click", () => {
  const amountBlock = document.getElementById("boxes");
  amountBlock.innerHTML = "";
});

function createBoxes(amount) {
  let height = 0;
  let width = 0;
  for (let i = 1; i <= amount; i += 1) {
    height += 30;
    width += 30;
    const div = document.createElement("div");
    boxes.append(div);
    div.setAttribute(
      "style",
      `background-color:${getRandomHexColor()}; width:${width}px; height:${height}px;  `
    );
  }
}