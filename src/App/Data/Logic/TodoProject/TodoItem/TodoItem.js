// TodoList (Model)

//     This class is responsible for maintaining the actual data structure of the todos. It contains methods for adding and removing todos, as well as getting all todos. It’s used internally by TodoService to store and retrieve the todos.

export class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = "not done";
  }
  static todoItemsArray = [];

  static createNewTodo(title, description, dueDate, priority) {
    let tempTodoItem = new TodoItem(title, description, dueDate, priority);
    this.todoItemsArray.push(tempTodoItem);
  }

  static getAllTodos() {
    return this.todoItemsArray;
  }

  static removeTodo(arrayID) {
    this.todoItemsArray.splice(arrayID, 1);
  }
}
