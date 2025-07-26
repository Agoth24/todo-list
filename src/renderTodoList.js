import createTodoCard from "./createTodoCard";

export default function renderTodoList(toDoList, section, onRemove) {
  section.replaceChildren();

  toDoList.forEach((item) => {
    const card = createTodoCard(item, onRemove);
    section.appendChild(card);
  });
}
