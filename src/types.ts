import Task from "./models/Task";

export type TaskProperties = {
  title: string;
  description: string;
  dueDate: Date;
  isCompleted: boolean;
};

export type TaskMethods = {
  updateDetails: (
    newTitle: string,
    newDescription: string,
    newDueDate: Date
  ) => void;
  markAsComplete: () => void;
};

export type TaskManagerMethods = {
  addTask: (taskProperties: TaskProperties) => Task;
  updateTask: (task: Task, taskProperties: TaskProperties) => void;
  deleteTask: (task: Task) => void;
  filterTasksByCompletionStatus: (isCompleted: boolean) => Task[];
};
