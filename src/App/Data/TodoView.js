// TodoView (UI Layer / DOM Manipulation)

// Responsible for all DOM manipulation and event handling. The view listens for user actions like clicking "Add Todo" or "Remove Todo" and passes these events to the controller. The view does not contain any business logic—it purely handles displaying information and collecting user inputs.

import { TodoItem } from "./Logic/TodoProject/TodoItem/TodoItem.js";
import { TodoRepository } from "./Storage/TodoRepository.js";
export class TodoView {
  static projectsList = document.querySelector("#projects-list");
  static todoContainer = document.querySelector("#todo-container");
  static formInputBtn = document.querySelector("#formBtn");
  static projectsListContainer = document.querySelector(
    "#projects-list__container"
  );

  static renderTodos(currentProjectActive) {
    // clean working (MAIN) todo array
    TodoItem.todoItemsArray = [];
    // get array of todolist items from localStorage
    let storageArray = TodoRepository.getAllLocalStorageData();
    storageArray = storageArray.map((item) => JSON.parse(item));
    // push this array to working (MAIN) array
    storageArray.forEach((singleArray) => {
      TodoItem.createNewTodo(
        singleArray[0],
        singleArray[1],
        singleArray[2],
        singleArray[3],
        singleArray[4]
      );
    });

    // clean old dom render
    this.todoContainer.innerHTML = "";
    this.projectsListContainer.innerHTML = "";

    let todosArray = TodoItem.getAllTodos();

    // CHECK HERE FOR PROPER ARRAY ONLY WITH CURRENT PROJECT (using currentProjectActive)
    let filteredTodosArray = [];

    if (currentProjectActive != undefined) {
      todosArray.forEach((element) => {
        if (element.projectName == currentProjectActive) {
          filteredTodosArray.push(element);
        }
      });
    }
    // console.log(filteredTodosArray);

    // CHECK HERE FOR PROPER ARRAY ONLY WITH CURRENT PROJECT (using currentProjectActive)

    let nameChecker = [];

    // loop trough array of Todos
    filteredTodosArray.forEach((todo, index) => {
      // create todo dom html element from array
      let todoItemContainer = document.createElement("div");
      todoItemContainer.classList.add("todo-item__container");
      todoItemContainer.id = `todoindex${index}`;
      let todoItemTitle = document.createElement("div");
      todoItemTitle.classList.add("todo-item__title");
      todoItemTitle.innerText = `${todo.title}`;
      todoItemContainer.appendChild(todoItemTitle);
      let todoItemDescription = document.createElement("div");
      todoItemDescription.classList.add("todo-item__description");
      todoItemDescription.innerText = `${todo.description}`;
      todoItemContainer.appendChild(todoItemDescription);
      let todoItemDueDate = document.createElement("div");
      todoItemDueDate.classList.add("todo-item__duedate");
      todoItemDueDate.innerText = `${todo.dueDate}`;
      todoItemContainer.appendChild(todoItemDueDate);
      let todoItemPriority = document.createElement("div");
      todoItemPriority.classList.add("todo-item__priority");
      todoItemPriority.innerText = `${todo.priority}`;
      todoItemContainer.appendChild(todoItemPriority);
      let todoItemStatus = document.createElement("div");
      todoItemStatus.classList.add("todo-item__status");
      todoItemStatus.innerText = `${todo.status}`;
      todoItemContainer.appendChild(todoItemStatus);
      // Btn for deleting
      let todoItemBtnDelete = document.createElement("button");
      todoItemBtnDelete.classList.add("todo-item__btndelete");
      todoItemBtnDelete.innerText = "X";
      todoItemBtnDelete.id = `${index}`;
      todoItemContainer.appendChild(todoItemBtnDelete);

      this.todoContainer.appendChild(todoItemContainer);

      // Check if project name with same name exist
      // check if itteration = 1 if not abort printing project name
      if (nameChecker.includes(todo.projectName)) {
      } else {
        // Take project name and add it to sidebar of projects
        let sidebarProjectDiv = document.createElement("div");
        sidebarProjectDiv.classList.add("projects-list-form__single-project");
        sidebarProjectDiv.innerText = `${todo.projectName}`;
        this.projectsListContainer.appendChild(sidebarProjectDiv);
        nameChecker.push(todo.projectName);
      }
    });

    // PRINT REST OF PROJECT SIDEBAR DIVs
    todosArray.forEach((todo, index) => {
      if (nameChecker.includes(todo.projectName)) {
      } else {
        // Take project name and add it to sidebar of projects
        let sidebarProjectDiv = document.createElement("div");
        sidebarProjectDiv.classList.add("projects-list-form__single-project");
        sidebarProjectDiv.innerText = `${todo.projectName}`;
        this.projectsListContainer.appendChild(sidebarProjectDiv);
        nameChecker.push(todo.projectName);
      }
    });
  }

  static bindRemoveTodoItemWithStorage(idOfBtn) {
    TodoRepository.localStorageDelete(idOfBtn);
    TodoItem.removeTodo(idOfBtn);
    // remove element from DOM
    if (document.querySelector(`#todoindex${idOfBtn}`)) {
      let todoListToRemove = document.querySelector(`#todoindex${idOfBtn}`);
      todoListToRemove.remove();
    }
  }

  static bindAddTodoItemToStorage(userInputArray, projectName) {
    // current empty space in array
    let currentArrayLength = TodoItem.todoItemsArray.length;

    TodoRepository.localStorageSave(currentArrayLength, userInputArray);
    this.renderTodos(projectName);
  }

  static bindAddNewProjectToStorage(userInputArray, projectName) {
    // current empty space in array
    let currentArrayLength = TodoItem.todoItemsArray.length;

    // Change projectName in array before save
    TodoRepository.localStorageSave(currentArrayLength, userInputArray);
    this.renderTodos(projectName);
  }
}
