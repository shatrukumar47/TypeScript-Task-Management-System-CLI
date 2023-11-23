"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskReports = void 0;
class TaskReports {
    constructor(taskManager) {
        this.taskManager = taskManager;
    }
    generateTaskReport() {
        const totalTasks = this.taskManager.tasks.length;
        const completedTasks = this.taskManager.filterTasksByCompletionStatus(true).length;
        const pendingTasks = this.taskManager.filterTasksByCompletionStatus(false).length;
        // Implement logic for tasks due today and overdue tasks (based on the current date)
        // ...
        return `
      Task Report:
      Total Tasks: ${totalTasks}
      Completed Tasks: ${completedTasks}
      Pending Tasks: ${pendingTasks}
      // Add more details as needed
    `;
    }
}
exports.TaskReports = TaskReports;
