import "./styles/index.css";
import "./styles/modal.css";
import createToDoItem from "./createTodoItem";
import renderTodoList from "./renderTodoList";
import deleteTodoById from "./deleteTodo";
import renderProjects from "./renderProjects";

// Initialize project list and event listeners
const projects = [];
// Load projects from localStorage
const savedProjects = localStorage.getItem("projects");
if (savedProjects) {
  try {
    const parsed = JSON.parse(savedProjects);
    if (Array.isArray(parsed)) {
      projects.push(...parsed);
    }
  } catch (e) {
    // Ignore parse errors
  }
}
let selectedProject = null;
const projectList = document.querySelector(".project-list");
const projectNameInput = document.querySelector("#project-name");

// Handle project deletion
window.handleProjectDelete = function(projectToDelete) {
  const idx = projects.findIndex(p => p.id === projectToDelete.id);
  if (idx !== -1) {
    projects.splice(idx, 1);
    localStorage.setItem("projects", JSON.stringify(projects));
    if (selectedProject && selectedProject.id === projectToDelete.id) {
      selectedProject = null;
      renderTodoList([], toDoSection, handleDelete);
    }
    renderProjects(projects, projectList, handleProjectSelect, selectedProject);
  }
}

projectNameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const projectName = projectNameInput.value.trim();
    if (!projectName) return; // Prevent empty projects
    const newProject = {
      name: projectName,
      id: crypto.randomUUID(),
      todos: [], // Initialize with an empty todos array
    };
    projects.push(newProject);
    localStorage.setItem("projects", JSON.stringify(projects));
    renderProjects(projects, projectList, handleProjectSelect, selectedProject);
    if (selectedProject) {
      handleProjectSelect(selectedProject);
    } else {
      handleProjectSelect(newProject);
    }
    projectNameInput.value = ""; // Clear input
  }
});

renderProjects(projects, projectList, handleProjectSelect, selectedProject);

// Modal and form handling
const modal = document.querySelector("#popup-form");

const addItemBtn = document.querySelector(".add-item");
addItemBtn.addEventListener("click", () => {
  if (!selectedProject) return;
  toggleModal()});

const formCloseBtn = document.querySelector(".modal-back-btn");
const toDoSection = document.querySelector(".todo-section");

const form = document.querySelector("#todo-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const dataObject = Object.fromEntries(formData.entries());
  const todoItem = createToDoItem(dataObject);

  selectedProject.todos.push(todoItem);
  localStorage.setItem("projects", JSON.stringify(projects));
  renderTodoList(selectedProject.todos, toDoSection, handleDelete);
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
  if (!selectedProject) return;
  deleteTodoById(id, selectedProject.todos);
  localStorage.setItem("projects", JSON.stringify(projects));
  renderTodoList(selectedProject.todos, toDoSection, handleDelete);
}

function handleProjectSelect(project) {
  selectedProject = project;
  renderTodoList(project ? project.todos : [], toDoSection, handleDelete);
}
