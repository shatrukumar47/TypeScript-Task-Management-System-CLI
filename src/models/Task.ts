class Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  isCompleted: boolean;
  constructor(title: string, description: string, dueDate: Date) {
    this.id = Math.floor(Math.random()*1000)
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isCompleted = false;
  }
  updateTaskDetails(
    newTitle: string,
    newDescription: string,
    newDueDate: Date
  ): void {
    this.title = newTitle;
    this.description = newDescription;
    this.dueDate = newDueDate;
  }
  markAsComplete(): void {
    this.isCompleted = true;
  }
}

export default Task;
