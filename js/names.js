// One list item per name, created and appended; nothing written as HTML text.
const NAMES = [
  "Alice", "Bob", "Charlie", "David", "Eve",
  "Frank", "Grace", "Isaac", "Jack", "Karen",
  "Liam", "Megan", "Noah", "Olivia", "Paul",
  "Rachel", "Steve", "Tina", "Victor", "Wendy",
];

const list = document.getElementById("names");

for (const name of NAMES) {
  const item = document.createElement("li");
  item.className = "list-inline-item badge bg-secondary bg-opacity-25 text-dark fw-normal fs-6";
  item.textContent = name;
  list.append(item);
}
