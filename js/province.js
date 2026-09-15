// On change, the paragraph shows the chosen value and turns green.
const provinceSelect = document.getElementById("provinceSelect");
const provinceValue = document.getElementById("provinceValue");

provinceSelect.addEventListener("change", showProvince);

function showProvince() {
  provinceValue.textContent = provinceSelect.value;
  provinceValue.classList.add("text-success", "fw-bold");
}
