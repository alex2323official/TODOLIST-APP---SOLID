import "./styles.css";
import { TodoItem } from "./App/Data/Logic/TodoProject/TodoItem/TodoItem.js";
import { TodoView } from "./App/Data/TodoView.js";
import { AppController } from "./App/AppController.js";
import { TodoRepository } from "./App/Data/Storage/TodoRepository.js";

// App Here
AppController.listenForDelete();
AppController.listenForAddNewTodo();
AppController.listenForAddProject();
AppController.checkWhichProjectIsActive();

TodoView.renderTodos("My Project");
