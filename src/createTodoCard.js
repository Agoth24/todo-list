export default function createTodoCard(item, onRemove) {
  const card = document.createElement("div");
  card.classList.add("todo-card");

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "completedBox";
  checkBox.name = "completedBox";

  const title = document.createElement("h2");
  title.textContent = item.title;

  const dueDate = document.createElement("span");
  dueDate.textContent = item.dueDate ? `Due: ${item.dueDate}` : "";
  dueDate.classList.add("due-date");
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-card-btn");

  removeButton.addEventListener("click", () => {
    onRemove(item.id);
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
