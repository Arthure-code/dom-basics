// Every checkbox inside the group, found at click time: a box added to the
// form later is checked too, without touching this script.
const gameOptions = document.getElementById("gameOptions");

document.getElementById("btnCheckAll").addEventListener("click", () => {
  for (const box of gameOptions.querySelectorAll("input[type=checkbox]")) {
    box.checked = true;
  }
});
