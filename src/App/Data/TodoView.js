// TodoView (UI Layer / DOM Manipulation)

// Responsible for all DOM manipulation and event handling. The view listens for user actions like clicking "Add Todo" or "Remove Todo" and passes these events to the controller. The view does not contain any business logic—it purely handles displaying information and collecting user inputs.

import { TodoItem } from "./Logic/TodoProject/TodoItem/TodoItem.js";
export class TodoView {
  constructor() {
    this.projectsList = document.querySelector("#projects-list");
    this.todoContainer = document.querySelector("#todo-container");
  }
  static renderTodos() {
    return TodoItem.getAllTodos();
  }
}
