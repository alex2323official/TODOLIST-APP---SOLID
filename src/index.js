import "./styles.css";
import { TodoItem } from "./App/Data/Logic/TodoProject/TodoItem/TodoItem.js";
import { TodoView } from "./App/Data/TodoView.js";
import { AppController } from "./App/AppController.js";
import { TodoRepository } from "./App/Data/Storage/TodoRepository.js";

// App Here
// TodoItem.createNewTodo(
//   "Some thing to do",
//   "lorem sdfsdf asfdsfds sdfdsf sdfsd sdfsd sdfsdfsdfs sdfsdf",
//   "10-12-2024",
//   "High"
// );

// TodoItem.createNewTodo(
//   "Some thing to do",
//   "lorem sdfsdf asfdsfds sdfdsf sdfsd sdfsd sdfsdfsdfs sdfsdf",
//   "10-12-2024",
//   "High"
// );

// TodoItem.removeTodo(0);

TodoView.renderTodos();

AppController.listenForDelete();
AppController.listenForAddNewTodo();

// TODO: Connect localStorage save/delete/read with APP
const arraytest = [
  "Some thing to do",
  "lorem sdfsdf asfdsfds sdfdsf sdfsd sdfsd sdfsdfsdfs sdfsdf",
  "10-12-2024",
  "High",
];

TodoRepository.localStorageSave(0, arraytest);
TodoRepository.localStorageSave(1, arraytest);
TodoRepository.localStorageSave(2, arraytest);

// console.log(TodoRepository.getLocalStorageData(0));
TodoRepository.getAllLocalStorageData();
