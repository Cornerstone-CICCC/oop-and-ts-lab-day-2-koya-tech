import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.todoContext = props.todoContext;
  }

  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `

    addElement.querySelector('#todo-add-btn').addEventListener('click', () => {
      const input = addElement.querySelector('#todo-input');
      const todo = {
        id: Date.now(),
        text: input.value,
        completed: false
      }
      // console.log(todo);

      this.todoContext.addTodo(todo);
      input.value = '';
    });

    return addElement;
  }
}