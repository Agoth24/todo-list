export default function deleteTodoById(id, todos) {
  const index = todos.findIndex((todo) => todo.id == id);
  if (index !== -1) {
    todos.splice(index, 1);
  }
}