export class TodoContext {
    constructor() {
        //insert items here
        this.todos = [];
        //insert listeners here
        this.listeners = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
        this.notify();
    }

    removeTodo(index) {
        this.todos.splice(index, 1);
        this.notify();
    }

    toggleTodo(index) {
        this.todos[index].completed = !this.todos[index].completed;
        this.notify();
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    notify() {
        this.listeners.forEach(listener => listener());
    }
}