// Factory function for creating to-do objects

export default function createToDoItem(data) {
  return {
    title: data.title.trim(),
    description: data.description.trim(),
    dueDate: data.dueDate,
    priority: data.priority,
    completed: false,
    toggle() {
      this.completed = !this.completed;
    },
    id: crypto.randomUUID(),
  };
}
