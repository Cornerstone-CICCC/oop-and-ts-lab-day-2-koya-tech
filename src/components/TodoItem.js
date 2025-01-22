import { Component } from "../common/Component.js";
import { TodoContext } from "../contexts/TodoContext.js";

export class TodoItem extends Component {
  render() {
    const { todo, index, todoContext } = this.props;
    // console.log('TodoItem.render', todo, index);
    const todoElement = document.createElement('li')
    todoElement.className = `todo-item ${this.props.todo.completed ? 'completed' : ''}`
    todoElement.innerHTML = `
    <span>${todo.text}</span>
    <button class="toggle-todo">${todo.completed ? 'Mark Completed' : 'Mark Incompleted'}</button>
    <button class="delete-todo">Delete</button>
    `
    todoElement.querySelector('.toggle-todo').addEventListener('click', () => {
      todoContext.toggleTodo(index);
    });

    todoElement.querySelector('.delete-todo').addEventListener('click', () => {
      todoContext.removeTodo(index);
    });

    return todoElement;
  }
}