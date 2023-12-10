/*
 * Filename: sophisticated_code.js
 * 
 * Description: This code demonstrates a complex implementation of a task management system
 *              using object-oriented programming principles in JavaScript.
 */

// Define the Task class
class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
  }

  completeTask() {
    this.completed = true;
  }
}

// Define the TaskManager class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description, dueDate) {
    const task = new Task(title, description, dueDate);
    this.tasks.push(task);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  getTaskByTitle(title) {
    return this.tasks.find((task) => task.title === title);
  }

  getTasksByDueDate(date) {
    return this.tasks.filter((task) => task.dueDate === date);
  }

  completeTask(title) {
    const task = this.getTaskByTitle(title);
    if (task) {
      task.completeTask();
      console.log(`Task '${title}' completed!`);
    } else {
      console.log(`Task '${title}' not found.`);
    }
  }
}

// Create a new instance of TaskManager
const taskManager = new TaskManager();

// Add tasks to the task manager
taskManager.addTask("Write code", "Implement a solution for a complex problem", "2022-01-01");
taskManager.addTask("Test application", "Perform functional and unit tests", "2022-02-15");
taskManager.addTask("Deploy application", "Release the application to production", "2022-03-31");

// Complete a task
taskManager.completeTask("Write code");

// Display all tasks
console.log("All tasks:");
console.log(taskManager.tasks);

// Display tasks due on a specific date
const tasksDueOnDate = taskManager.getTasksByDueDate("2022-02-15");
console.log("Tasks due on 2022-02-15:");
console.log(tasksDueOnDate);

// Delete a task
taskManager.deleteTask(0);

// Display tasks after deletion
console.log("Tasks after deletion:");
console.log(taskManager.tasks);

// Console output:
// Task 'Write code' completed!
// All tasks:
// [Task {
//     title: 'Write code',
//     description: 'Implement a solution for a complex problem',
//     dueDate: '2022-01-01',
//     completed: true
//   },
//   Task {
//     title: 'Test application',
//     description: 'Perform functional and unit tests',
//     dueDate: '2022-02-15',
//     completed: false
//   },
//   Task {
//     title: 'Deploy application',
//     description: 'Release the application to production',
//     dueDate: '2022-03-31',
//     completed: false
//   }]
// Tasks due on 2022-02-15:
// [Task {
//     title: 'Test application',
//     description: 'Perform functional and unit tests',
//     dueDate: '2022-02-15',
//     completed: false
//   }]
// Tasks after deletion:
// [Task {
//     title: 'Test application',
//     description: 'Perform functional and unit tests',
//     dueDate: '2022-02-15',
//     completed: false
//   },
//   Task {
//     title: 'Deploy application',
//     description: 'Release the application to production',
//     dueDate: '2022-03-31',
//     completed: false
//   }]
//