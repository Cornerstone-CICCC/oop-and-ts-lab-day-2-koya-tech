import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.todoContext = props.todoContext;
    this.todoContext.subscribe(this.render.bind(this));
  }

  render(todos = this.todoContext.todos) {
    // console.log('TodoList.render', todos);
    const todoListElement = document.createElement('div')
    todoListElement.className = "todo-list"
    const ul = document.createElement('ul');

    todos.forEach((todo, index) => {
      const todoItem = new TodoItem({
        todo,
        index,
        todoContext: this.todoContext
      });
      ul.appendChild(todoItem.render());
    });


    todoListElement.appendChild(ul);
    // console.log('TodoList', todoListElement);
    return todoListElement;
  }
}