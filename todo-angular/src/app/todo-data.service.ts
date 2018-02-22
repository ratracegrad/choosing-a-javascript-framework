import {Injectable} from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 3;

  // Placeholder for todo's
  todos: Todo[] = [];

  constructor() {
    this.addTodo({
      id: 0,
      title: 'learn Angular',
      complete: false
    });
    this.addTodo({
      id: 1,
      title: 'Go shopping',
      complete: true
    });
    this.addTodo({
      id: 2,
      title: 'buy flowers',
      complete: true
    });
  }

  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
