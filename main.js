const lensIn = document.getElementById("lensIn");
const containerTxtUp = document.getElementById("containerTxtUp");
const containerTxtDown = document.getElementById("containerTxtDown");
const enterButton = document.getElementById("enterButton");

lensIn.addEventListener("click", () => {
  containerTxtUp.classList.add("fade_in");
  containerTxtDown.classList.add("fade_in");
  enterButton.classList.add("buttonActive");
});
