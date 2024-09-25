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
  static addProjectUserInput = document.querySelector("#projectName");
  static addProjectUserBtn = document.querySelector("#projectAddBtn");

  static listenForDelete() {
    TodoView.todoContainer.addEventListener("click", (item) => {
      let IdOfBtn = item.target.id;
      TodoView.bindRemoveTodoItemWithStorage(IdOfBtn);

      // TodoView.renderTodos();
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

      // console.log(userTitle, userDescription, userDueTo, userPriority);
      let newUserTodoArray = [
        userTitle,
        userDescription,
        userDueTo,
        userPriority,
        "My Project",
      ];

      // console.log(newUserTodoArray);
      // TODO: import from TodoView controller for saving new todoitem
      TodoView.bindAddTodoItemToStorage(newUserTodoArray);
    });
  }

  static listenForAddProject() {
    this.addProjectUserBtn.addEventListener("click", (item) => {
      let userNewProjectName = this.addProjectUserInput.value;

      let newUserTodoArray = ["", "", "", "", userNewProjectName];

      // add userNewProjectName to storage
      TodoView.bindAddNewProjectToStorage(newUserTodoArray);
    });
  }

  static checkWhichProjectIsActive() {
    // project div with class 'active' need to show only that todolist
    // add 'active' class on click
    TodoView.projectsListContainer.addEventListener("click", (item) => {
      // if this div has class of projects-list-form__single-project add new class .active to it

      let acitveID = document.querySelector("#active");

      let currentClasses = item.target;
      if (
        currentClasses.classList.contains(
          "projects-list-form__single-project"
        ) &&
        currentClasses.id == ""
      ) {
        // reset other projects divs from #active
        if (acitveID) {
          acitveID.removeAttribute("id");
        }

        // set on this div #active
        currentClasses.id = "active";

        //  TODO HEARE
        // Switch on click active tab and only show todolist task for this current active Project
      }
    });
  }
}
