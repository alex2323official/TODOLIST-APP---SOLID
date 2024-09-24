import "./styles.css";
import { TodoItem } from "./App/Data/Logic/TodoProject/TodoItem/TodoItem.js";
import { TodoView } from "./App/Data/TodoView.js";
import { AppController } from "./App/AppController.js";
import { TodoRepository } from "./App/Data/Storage/TodoRepository.js";

// App Here
TodoItem.createNewTodo(
  "Some thing to do",
  "lorem sdfsdf asfdsfds sdfdsf sdfsd sdfsd sdfsdfsdfs sdfsdf",
  "10-12-2024",
  "High"
);

TodoItem.createNewTodo(
  "Some thing to do",
  "lorem sdfsdf asfdsfds sdfdsf sdfsd sdfsd sdfsdfsdfs sdfsdf",
  "10-12-2024",
  "High"
);

TodoItem.removeTodo(0);

TodoView.renderTodos();

AppController.listenForDelete();

// TODO: ADD BTN FOR ADDING IN FORM USER DATA FOR NEW TODOLIS
// TODO: Add functionality for user to add todo items
const arry = {
  name: "tomek",
  secondName: "domek",
};

TodoRepository.localStorageSave(0, arry);
TodoRepository.localStorageDelete(0);

const tet = TodoRepository.getLocalStorageData(0);
console.log(tet);
