"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(require("./Task"));
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    // Methods
    addTask(taskProperties) {
        const newTask = new Task_1.default(taskProperties.title, taskProperties.description, taskProperties.dueDate);
        console.log("TaskManagre---", newTask);
        this.tasks.push(newTask);
        return newTask;
    }
    updateTask(task, taskProperties) {
        task.updateTaskDetails(taskProperties.title, taskProperties.description, taskProperties.dueDate);
    }
    deleteTask(task) {
        const taskIndex = this.tasks.indexOf(task);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
        }
    }
    filterTasksByCompletionStatus(isCompleted) {
        return this.tasks.filter((task) => task.isCompleted === isCompleted);
    }
    generateTaskReports() {
        const today = new Date();
        const completedTasks = this.filterTasksByCompletionStatus(true);
        const pendingTasks = this.filterTasksByCompletionStatus(false);
        const dueTodayTasks = this.tasks.filter((task) => task.dueDate.toDateString() === today.toDateString());
        const overdueTasks = this.tasks.filter((task) => !task.isCompleted && task.dueDate < today);
        return {
            completed: completedTasks.length,
            pending: pendingTasks.length,
            dueToday: dueTodayTasks.length,
            overdue: overdueTasks.length,
        };
    }
}
exports.default = TaskManager;
