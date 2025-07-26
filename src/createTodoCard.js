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

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-card-btn");

  removeButton.addEventListener("click", () => {
    onRemove(item.id);
  });

  cardInfo.append(checkBox, title, removeButton);

  const description = document.createElement("div");
  const descText = document.createElement("p");
  descText.textContent = item.description;
  description.appendChild(descText);

  card.append(cardInfo, description);

  return card;
}
