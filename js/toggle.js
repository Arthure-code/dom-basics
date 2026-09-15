// The box is yellow or red; each click swaps the two classes and the button
// announces the other colour.
const colourBox = document.getElementById("colourBox");
const btnColour = document.getElementById("btnColour");

btnColour.addEventListener("click", () => {
  const isRed = colourBox.classList.toggle("bg-danger");
  colourBox.classList.toggle("bg-warning", !isRed);
  btnColour.textContent = isRed ? "Make it yellow" : "Make it red";
});
