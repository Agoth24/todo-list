import createTodoCard from "./createTodoCard";

export default function renderTodoList(todos, section, onRemove) {
  section.replaceChildren();

  todos.forEach((item) => {
    const card = createTodoCard(item, onRemove);
    section.appendChild(card);
  });
}
