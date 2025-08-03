import "./styles/index.css";
import "./styles/modal.css";
import createToDoItem from "./createTodoItem";
import renderTodoList from "./renderTodoList";
import deleteTodoById from "./deleteTodo";
import renderProjects from "./renderProjects";

// Initialize project list and event listeners
const projects = [];
const projectSection = document.querySelector(".project-section");
const projectList = document.querySelector(".project-list");
const projectNameInput = document.querySelector("#project-name");

projectNameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const projectName = projectNameInput.value.trim();
    if (!projectName) return; // Prevent empty projects
    const newProject = {
      name: projectName,
      id: crypto.randomUUID(),
    };
    projects.push(newProject);
    renderProjects(projects, projectList);
    projectNameInput.value = ""; // Clear input
  }
});

renderProjects(projects, projectList);

const toDoList = [];

// Modal and form handling
const modal = document.querySelector("#popup-form");

const addItemBtn = document.querySelector(".add-item");
addItemBtn.addEventListener("click", toggleModal);

const formCloseBtn = document.querySelector(".modal-back-btn");
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
  form.reset();
});

function toggleModal() {
  const titleInput = document.querySelector("#title");
  modal.classList.toggle("visible");

  if (modal.classList.contains("visible")) {
    titleInput.focus();
  }
}
// End of modal and form handling

function handleDelete(id) {
  deleteTodoById(id, toDoList);
  renderTodoList(toDoList, toDoSection, handleDelete);
}
