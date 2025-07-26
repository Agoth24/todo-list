import "./index.css";
import "./modal.css";
import createToDoItem from "./createTodoItem";

const modal = document.querySelector("#popup-form");

const addItemBtn = document.querySelector(".add-item");
addItemBtn.addEventListener("click", toggleModal);

const formCloseBtn = document.querySelector(".modal-back-btn");
closeBtn.addEventListener("click", toggleModal);

const formSubmitBtn = document.querySelector(".form-submit-btn")
function toggleModal() {
  modal.classList.toggle("visible");
}
