// While the mouse is over the picture, a warning goes to the console and to
// the line under it; it clears when the mouse leaves.
const prettyPicture = document.getElementById("prettyPicture");
const hoverMessage = document.getElementById("hoverMessage");
const WARNING = "Hey! Move the cursor back, please.";

prettyPicture.addEventListener("mouseover", () => {
  console.log(WARNING);
  hoverMessage.textContent = WARNING;
});

prettyPicture.addEventListener("mouseout", () => {
  hoverMessage.textContent = "\u00a0";
});
