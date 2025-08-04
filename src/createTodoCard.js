export default function createTodoCard(item, onRemove) {
  const card = document.createElement("div");
  card.classList.add("todo-card");

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "completedBox";
  checkBox.name = "completedBox";
  checkBox.checked = item.completed;

  const title = document.createElement("h2");
  title.textContent = item.title;

  const dueDate = document.createElement("span");
  dueDate.textContent = item.dueDate ? `Due: ${item.dueDate}` : "";
  dueDate.classList.add("due-date");
  const removeButton = document.createElement("button");
  removeButton.textContent = "✕";
  removeButton.classList.add("delete-card-btn");

  removeButton.addEventListener("click", () => {
    onRemove(item.id);
  });

  // Strikethrough logic
  if (item.completed) {
    cardInfo.classList.add("completed");
  }
  function setCompleted(val) {
    item.completed = val;
    checkBox.checked = val;
    cardInfo.classList.toggle("completed", val);
    if (window.projects) {
      localStorage.setItem("projects", JSON.stringify(window.projects));
    }
  }
  checkBox.addEventListener("change", (e) => {
    setCompleted(e.target.checked);
  });
  cardInfo.addEventListener("click", (e) => {
    // Prevent toggling when clicking the delete button or checkbox itself
    if (e.target === removeButton || e.target === checkBox) return;
    setCompleted(!item.completed);
  });

  cardInfo.append(checkBox, title, dueDate, removeButton);

  const description = document.createElement("div");
  description.classList.add("card-desc");
  const descText = document.createElement("p");
  descText.textContent = item.description;
  description.appendChild(descText);

  card.append(cardInfo, description);

  return card;
}
