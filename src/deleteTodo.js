export default function deleteTodoById(id, toDoList ) {
    const index = toDoList.findIndex((todo) => todo.id == id)
    if (index !== -1) {
        toDoList.splice(index, 1)
    }
}