import Task from "./Task";
import { TaskProperties, TaskMethods, TaskManagerMethods } from "../types";

class TaskManager {
  tasks: Task[] = [];

  // Methods
  addTask(taskProperties: TaskProperties): Task {
    const newTask = new Task(
      taskProperties.title,
      taskProperties.description,
      taskProperties.dueDate
    );
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(task: Task, taskProperties: TaskProperties): void {
    task.updateTaskDetails(
      taskProperties.title,
      taskProperties.description,
      taskProperties.dueDate
    );
  }

  deleteTask(task: Task): void {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }

  filterTasksByCompletionStatus(isCompleted: boolean): Task[] {
    return this.tasks.filter((task) => task.isCompleted === isCompleted);
  }

  generateTaskReports(): {
    completed: number;
    pending: number;
    dueToday: number;
    overdue: number;
  } {
    const today = new Date();
    const completedTasks = this.filterTasksByCompletionStatus(true);
    const pendingTasks = this.filterTasksByCompletionStatus(false);
    const dueTodayTasks = this.tasks.filter(
      (task) => task.dueDate.toDateString() === today.toDateString()
    );
    const overdueTasks = this.tasks.filter(
      (task) => !task.isCompleted && task.dueDate < today
    );

    return {
      completed: completedTasks.length,
      pending: pendingTasks.length,
      dueToday: dueTodayTasks.length,
      overdue: overdueTasks.length,
    };
  }
}

export default TaskManager;
