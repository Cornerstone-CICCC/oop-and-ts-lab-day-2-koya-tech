import { Component } from "../common/Component.js";
import { AddTodo } from "./AddTodo.js";
import { TodoList } from "./TodoList.js";
import { TodoContext } from "../contexts/TodoContext.js";

export class App extends Component {
  constructor() {
    super();
    this.todoContext = new TodoContext();
  }

  render() {
    const container = document.createElement('div')
    container.className = 'container'
    container.innerHTML = `
      <h1>My To Dos</h1>
      <div id="wrapper-add"></div>
      <div id="wrapper-todos"></div>
    `

    const add = new AddTodo({ todoContext: this.todoContext }).render()
    const todosWrapper = container.querySelector('#wrapper-todos')

    const renderTodos = () => {
      const todos = new TodoList({ todoContext: this.todoContext }).render()
      todosWrapper.innerHTML = ''
      todosWrapper.appendChild(todos)
    }

    this.todoContext.subscribe(renderTodos)
    renderTodos()

    container.querySelector('#wrapper-add').appendChild(add)

    return container;
  }
}