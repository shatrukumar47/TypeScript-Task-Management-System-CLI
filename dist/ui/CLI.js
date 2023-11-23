"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const TaskManager_1 = __importDefault(require("../models/TaskManager"));
class CLI {
    constructor() {
        this.taskManager = new TaskManager_1.default();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }
    start() {
        console.log('Welcome to the Task Management System CLI!');
        this.showMenu();
    }
    showMenu() {
        console.log('\n===== Menu =====');
        console.log('1. Get All Tasks');
        console.log('2. Add Task');
        console.log('3. Update Task');
        console.log('4. Delete Task');
        console.log('5. Generate Reports');
        console.log('6. Exit');
        this.rl.question('Enter your choice: ', (choice) => {
            switch (choice) {
                case '1':
                    this.GetAllTasks();
                    break;
                case '2':
                    this.addTask();
                    break;
                case '3':
                    this.updateTask();
                    break;
                case '4':
                    this.deleteTask();
                    break;
                case '5':
                    this.generateReports();
                    break;
                case '6':
                    console.log('Exiting the Task Management System CLI. Goodbye!');
                    this.rl.close();
                    process.exit(0);
                default:
                    console.log('Invalid choice. Please try again.');
                    this.showMenu();
            }
        });
    }
    GetAllTasks() {
        console.log(this.taskManager.tasks);
        this.showMenu();
    }
    addTask() {
        console.log('\n===== Add Task =====');
        this.rl.question('Enter task title: ', (title) => {
            this.rl.question('Enter task description: ', (description) => {
                this.rl.question('Enter task due date (YYYY-MM-DD): ', (dueDate) => {
                    const newTask = this.taskManager.addTask({
                        title,
                        description,
                        dueDate: new Date(dueDate),
                        isCompleted: false,
                    });
                    console.log(`Task "${newTask.title}" added successfully!`);
                    this.showMenu();
                });
            });
        });
    }
    updateTask() {
        console.log('\n===== Update Task =====');
        this.rl.question('Enter the ID of the task to update: ', (taskId) => {
            const task = this.findTaskById(+taskId);
            if (task) {
                this.rl.question(`Enter new title for task "${task.title}": `, (newTitle) => {
                    this.rl.question(`Enter new description for task "${task.title}": `, (newDescription) => {
                        this.rl.question(`Enter new due date for task "${task.title}" (YYYY-MM-DD): `, (newDueDate) => {
                            this.taskManager.updateTask(task, {
                                title: newTitle,
                                description: newDescription,
                                dueDate: new Date(newDueDate),
                                isCompleted: task.isCompleted,
                            });
                            console.log(`Task "${task.title}" updated successfully!`);
                            this.showMenu();
                        });
                    });
                });
            }
            else {
                console.log(`Task with ID ${taskId} not found.`);
                this.showMenu();
            }
        });
    }
    deleteTask() {
        console.log('\n===== Delete Task =====');
        this.rl.question('Enter the ID of the task to delete: ', (taskId) => {
            const task = this.findTaskById(+taskId);
            if (task) {
                this.taskManager.deleteTask(task);
                console.log(`Task "${task.title}" deleted successfully!`);
            }
            else {
                console.log(`Task with ID ${taskId} not found.`);
            }
            this.showMenu();
        });
    }
    generateReports() {
        const reports = this.taskManager.generateTaskReports();
        console.log('\n===== Task Reports =====');
        console.log(`Completed Tasks: ${reports.completed}`);
        console.log(`Pending Tasks: ${reports.pending}`);
        console.log(`Tasks Due Today: ${reports.dueToday}`);
        console.log(`Overdue Tasks: ${reports.overdue}`);
        this.showMenu();
    }
    findTaskById(taskId) {
        return this.taskManager.tasks.find((task) => task.id === taskId);
    }
}
const cli = new CLI();
cli.start();
