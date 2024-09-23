import "./styles.css";
import { TodoItem } from "./App/Data/Logic/TodoProject/TodoItem/TodoItem.js";
import { TodoView } from "./App/Data/TodoView.js";

// App Here
TodoItem.createNewTodo(
  "Some thing to do",
  "lorem sdfsdf asfdsfds sdfdsf sdfsd sdfsd sdfsdfsdfs sdfsdf",
  "10-12-2024",
  "High"
);

let showshit = TodoView.renderTodos();
console.log(showshit);
