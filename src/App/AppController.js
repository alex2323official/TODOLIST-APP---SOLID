// TodoAppController (Central Coordinator)

import { TodoItem } from "./Data/Logic/TodoProject/TodoItem/TodoItem.js";
import { TodoRepository } from "./Data/Storage/TodoRepository.js";
import { TodoView } from "./Data/TodoView.js";

//     The controller coordinates the actions between the view and the logic layer. It listens to UI events from TodoView and interacts with TodoService to update the business logic. After modifying the logic, it asks TodoView to update the UI.
export class AppController {
  static formTitle = document.querySelector("#title");
  static formDescription = document.querySelector("#description");
  static formDueTo = document.querySelector("#dueDate");
  static formPriority = document.querySelector("#priority");

  static listenForDelete() {
    TodoView.todoContainer.addEventListener("click", (item) => {
      let IdOfBtn = item.target.id;
      TodoItem.removeTodo(IdOfBtn);

      TodoView.renderTodos();
    });
  }

  static listenForAddNewTodo() {
    TodoView.formInputBtn.addEventListener("click", (item) => {
      item.preventDefault();
      // take user data from form
      let userTitle = this.formTitle.value;
      let userDescription = this.formDescription.value;
      let userDueTo = this.formDueTo.value;
      let userPriority = this.formPriority.value;

      console.log(userTitle, userDescription, userDueTo, userPriority);
    });
  }
}
