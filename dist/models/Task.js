"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Task {
    constructor(title, description, dueDate) {
        this.id = Math.floor(Math.random() * 1000);
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.isCompleted = false;
    }
    updateTaskDetails(newTitle, newDescription, newDueDate) {
        this.title = newTitle;
        this.description = newDescription;
        this.dueDate = newDueDate;
    }
    markAsComplete() {
        this.isCompleted = true;
    }
}
exports.default = Task;
