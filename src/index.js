import "./styles/index.css";
import "./styles/modal.css";
import createToDoItem from "./createTodoItem";
import renderTodoList from "./renderTodoList";
import deleteTodoById from "./deleteTodo";

const toDoList = [];
const modal = document.querySelector("#popup-form");

const addItemBtn = document.querySelector(".add-item");
addItemBtn.addEventListener("click", toggleModal);

const formCloseBtn = document.querySelector(".modal-back-btn");
formCloseBtn.addEventListener("click", toggleModal);

const toDoSection = document.querySelector(".todo-section");

const form = document.querySelector("#todo-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const dataObject = Object.fromEntries(formData.entries());
  const todoItem = createToDoItem(dataObject);

  toDoList.push(todoItem);
  renderTodoList(toDoList, toDoSection, handleDelete);
  toggleModal();
});

function toggleModal() {
  const titleInput = document.querySelector("#title");
  modal.classList.toggle("visible");

  if (modal.classList.contains("visible")) {
    titleInput.focus()
  }
}

function handleDelete(id) {
  deleteTodoById(id, toDoList);
  renderTodoList(toDoList, toDoSection, handleDelete);
}
