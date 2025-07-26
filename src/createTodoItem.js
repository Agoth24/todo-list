// Factory function for creating to-do objects

export default function createToDoItem(
  title,
  description,
  dueDate,
  priority,
  completed = false
) {
  return {
    title,
    description,
    dueDate,
    priority,
    completed,
    toggle() {
      this.completed = !this.completed;
    },
  };
}
